/*
 * Supabase keep-alive — prevents the free-tier project from being paused
 * for inactivity (Supabase pauses a free project after ~7 days with no
 * requests). Runs as a Netlify Scheduled Function.
 *
 * Requirement: "once a day, at night, at a random time, do some random
 * read accesses from the database."
 *
 * How the timing works: cron can't pick a random time, so this fires at
 * :07 past each hour across a night-time UTC window (see `config.schedule`)
 * and then runs the actual DB reads on exactly ONE of those hours — the
 * hour is chosen deterministically from today's date, so it lands on a
 * different (pseudo-random) hour each night but never more than once a day.
 * On every other hour in the window it no-ops immediately.
 *
 * The reads themselves are randomised (random row limit / offset / order),
 * hit the RLS-protected `user_progress` table (returns no rows to the
 * anon key, but the query still executes on Postgres = real activity),
 * and use the public publishable key — the same one already shipped in
 * index.html, protected by row-level security. Override via Netlify env
 * vars SUPABASE_URL / SUPABASE_ANON_KEY if you rotate them.
 *
 * Night window is UTC. 00:00–05:00 UTC is late night in Europe and
 * evening/late-night in the Americas. Adjust `config.schedule` if your
 * users are elsewhere.
 */

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://yqrgdkasrraeybrloktu.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'sb_publishable_l3fS-9soiT85dRu3db24Lg_t6jMuht1';

// The UTC hours this function is scheduled to fire on (must match config.schedule).
const WINDOW_HOURS = [0, 1, 2, 3, 4, 5];

// Deterministic per-day hash → picks one hour in the window for "today".
function dayHash(dateStr) {
  let h = 2166136261;
  for (let i = 0; i < dateStr.length; i++) { h ^= dateStr.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

async function readOnce(path) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
  });
  // Drain the body so the request fully completes.
  await res.text();
  return res.status;
}

export default async () => {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);           // YYYY-MM-DD (UTC)
  const chosenHour = WINDOW_HOURS[dayHash(today) % WINDOW_HOURS.length];
  const hour = now.getUTCHours();

  if (hour !== chosenHour) {
    return new Response(`skip: hour ${hour}, today's ping is at ${chosenHour}:xx UTC`, { status: 200 });
  }

  // Small extra jitter so the exact minute varies too (kept well under the timeout).
  await new Promise((r) => setTimeout(r, Math.floor(Math.random() * 4000)));

  // A few randomised read accesses — different shape each night.
  const limit = 1 + Math.floor(Math.random() * 5);        // 1..5
  const offset = Math.floor(Math.random() * 5);           // 0..4
  const dir = Math.random() < 0.5 ? 'asc' : 'desc';
  const reads = [
    `user_progress?select=user_id&limit=${limit}`,
    `user_progress?select=user_id,updated_at&order=updated_at.${dir}&limit=${limit}&offset=${offset}`,
    `user_progress?select=count`,
  ];

  const statuses = [];
  try {
    for (const path of reads) {
      statuses.push(await readOnce(path));
    }
  } catch (e) {
    return new Response(`keepalive error: ${String(e)}`, { status: 200 });
  }
  return new Response(`keepalive ok @ ${today} ${hour}:xx UTC — statuses ${statuses.join(',')}`, { status: 200 });
};

// Fire at :07 past each hour from 00:00 to 05:00 UTC. The handler runs the
// DB reads on exactly one of these per day (see file header).
export const config = { schedule: '7 0-5 * * *' };
