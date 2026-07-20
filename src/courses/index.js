import enMeta from './en.meta.js';
import daMeta from './da.meta.js';
import esMeta from './es.meta.js';

/* Eager, tiny course MANIFEST: each course's meta (for names / branding /
   coherence filtering) + overlay availability, plus dynamic loaders for the
   heavy core + overlay payloads. ensureCourseLoaded() in main.jsx calls the
   loaders; only ENROLLED courses' payloads are ever fetched — Vite code-splits
   each core/overlay into its own hashed chunk. supportLangs[lang].name must
   match the overlay module's own `name` field (validate.js checks this). */
export const COURSE_MANIFEST = {
  en: {
    meta: enMeta,
    supportLangs: { es: { name: 'Español' } },
    loadCore: () => import('./en.core.js'),
    loadSupport: { es: () => import('./en.support.es.js') },
  },
  da: {
    meta: daMeta,
    supportLangs: { es: { name: 'Español' } },
    loadCore: () => import('./da.core.js'),
    loadSupport: { es: () => import('./da.support.es.js') },
  },
  es: {
    meta: esMeta,
    supportLangs: { en: { name: 'English' } },
    loadCore: () => import('./es.core.js'),
    loadSupport: { en: () => import('./es.support.en.js') },
  },
};
