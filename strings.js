/* ══ Pathway to B1 — UI string table ══════════════════════════════
   Plain JS (no JSX) — loaded via <script src="strings.js"> after the
   courses/*.js files, before the Babel block in index.html.

   t(lang, key)          → localized UI string ('es' or 'en', fallback en)
   t(lang, key, {n: 3})  → same, with {placeholder} interpolation
   tPlural(lang, n, key) → key+'.one' / key+'.other' via per-language plural rule
   pluralDays(lang, n)   → day/days/día/días
   cardBackLabel(lang)   → flashcard back label (shim — Phase 2/4 replaces it
                           with the overlay's own name / target word for "Definition")
   ══════════════════════════════════════════════════════ */

const STRINGS = {
  // ── Common ──
  "common.next": {en: "Next →", es: "Siguiente →"},
  "common.backToHome": {en: "Back to home", es: "Volver al inicio"},
  // ── Home ──
  "home.tagline": {en: "Your English journey, one level at a time", es: "Tu camino al inglés, un nivel a la vez"},
  "home.yourLevel": {en: "Your Level", es: "Tu nivel"},
  "home.practiceModes": {en: "Practice modes", es: "Modos de práctica"},
  "nav.lessons": {en: "Lessons", es: "Lecciones"},
  "home.lessonsDesc": {en: "Theory → Examples → Quiz", es: "Teoría → Ejemplos → Cuestionario"},
  "nav.flashcards": {en: "Flashcards", es: "Tarjetas"},
  "home.spacedRepetition": {en: "Spaced repetition", es: "Repetición espaciada"},
  "nav.pronunciation": {en: "Pronunciation", es: "Pronunciación"},
  "home.pronDesc": {en: "Speak & see your score", es: "Habla y ve tu puntuación"},
  "nav.weakpoints": {en: "Weak Points", es: "Puntos débiles"},
  "home.weakDesc": {en: "Drill your missed questions", es: "Practica tus preguntas falladas"},
  "nav.progress": {en: "Progress", es: "Progreso"},
  "home.progressDesc": {en: "Your stats & mastery", es: "Tus estadísticas y dominio"},
  // ── Streak (plural rule lives in tPlural) ──
  "streak.day.one": {en: "day", es: "día"},
  "streak.day.other": {en: "days", es: "días"},
  // ── Login ──
  "login.checkEmail": {en: "Check your email", es: "Revisa tu correo"},
  "login.sentLinkTo": {en: "We sent a magic link to", es: "Enviamos un enlace a"},
  "login.clickToSignIn": {en: "Click it to sign in — no password needed.", es: "Haz clic para entrar — no necesitas contraseña."},
  "login.subtitle": {en: "Sign in to continue your English journey", es: "Inicia sesión para continuar tu camino al inglés"},
  "login.sending": {en: "Sending…", es: "Enviando…"},
  "login.sendMagicLink": {en: "✉️  Send magic link", es: "✉️  Enviar enlace mágico"},
  // ── Placement test ──
  "placement.title": {en: "Placement Test", es: "Prueba de nivel"},
  "placement.subtitle": {en: "Let's find your starting level — {n} quick questions", es: "Vamos a encontrar tu nivel inicial — {n} preguntas rápidas"},
  "placement.seeMyLevel": {en: "See my level →", es: "Ver mi nivel →"},
  "placement.skip": {en: "Skip — start from A1", es: "Saltar — empezar desde A1"},
  // ── Quiz (shared) ──
  "quiz.correct": {en: "✓ Correct!", es: "✓ ¡Correcto!"},
  "quiz.notQuite": {en: "✗ Not quite.", es: "✗ Casi."},
  "quiz.check": {en: "Check", es: "Comprobar"},
  "quiz.q": {en: "Q", es: "P"},
  "quiz.of": {en: "of", es: "de"},
  "quiz.seeResults": {en: "See Results →", es: "Ver resultados →"},
  // ── Lessons ──
  "lessons.chooseTopic": {en: "Choose a topic", es: "Elige un tema"},
  "lessons.done": {en: "✓ Done", es: "✓ Hecho"},
  "lessons.prev": {en: "← Prev", es: "← Anterior"},
  "lessons.seeExamples": {en: "See Examples →", es: "Ver ejemplos →"},
  "lessons.examplesIntro": {en: "Read and listen to the examples, then take the quiz.", es: "Lee y escucha los ejemplos, luego haz el cuestionario."},
  "lessons.startQuiz": {en: "Start Quiz →", es: "Empezar cuestionario →"},
  "lessons.complete": {en: "Lesson Complete", es: "Lección completada"},
  "lessons.correct": {en: "correct", es: "correctas"},
  "lessons.wellDone": {en: "Well done! Lesson complete.", es: "¡Bien hecho! Lección completada."},
  "lessons.needSixty": {en: "Keep practising — you need 60% to pass.", es: "Sigue practicando — necesitas un 60% para aprobar."},
  "lessons.finishEarn": {en: "Finish & earn {xp} XP", es: "Terminar y ganar {xp} XP"},
  "lessons.review": {en: "Review lesson", es: "Repasar lección"},
  "lessons.retry": {en: "Retry quiz", es: "Reintentar"},
  // ── Flashcards ──
  "flashcards.due": {en: "due", es: "pendientes"},
  "flashcards.mastered": {en: "mastered", es: "dominadas"},
  "flashcards.dueBanner": {en: "You have cards due for review", es: "Tienes tarjetas pendientes de repaso"},
  "flashcards.dueBannerSub": {en: "Cards with a badge are ready to practise.", es: "Las tarjetas con una insignia están listas para practicar."},
  "flashcards.allReviewed": {en: "All cards reviewed!", es: "¡Todas las tarjetas repasadas!"},
  "flashcards.allReviewedSub": {en: "Cards marked \"Got it\" are scheduled for later review based on spaced repetition.", es: "Las tarjetas marcadas como \"Lo sé\" se programan para repasar más tarde mediante repetición espaciada."},
  "flashcards.backToTopics": {en: "Back to topics", es: "Volver a los temas"},
  "flashcards.remaining": {en: "remaining", es: "restantes"},
  "flashcards.tapToReveal": {en: "Tap to reveal", es: "Toca para revelar"},
  "flashcards.howWell": {en: "How well did you know this?", es: "¿Cómo de bien lo sabías?"},
  "flashcards.missed": {en: "✗ Missed", es: "✗ Fallé"},
  "flashcards.almost": {en: "〜 Almost", es: "〜 Casi"},
  "flashcards.gotIt": {en: "✓ Got it!", es: "✓ ¡Lo sé!"},
  "flashcards.reveal": {en: "Reveal answer", es: "Revelar respuesta"},
  "flashcards.hearPron": {en: "Hear pronunciation", es: "Oír pronunciación"},
  "flashcards.back.definition": {en: "Definition", es: "Definición"},
  "flashcards.back.supportName": {en: "Español", es: "Español"},
  // ── Weak points ──
  "weak.none": {en: "No weak points yet!", es: "¡Aún no hay puntos débiles!"},
  "weak.noneSub": {en: "Complete some quizzes — missed questions will appear here for extra practice.", es: "Completa algunos cuestionarios — las preguntas falladas aparecerán aquí para practicar más."},
  "weak.allDone": {en: "All done!", es: "¡Todo listo!"},
  "weak.allDoneSub": {en: "Great work — all weak points reviewed this session!", es: "¡Buen trabajo — todos los puntos débiles repasados en esta sesión!"},
  "weak.missed": {en: "missed", es: "fallada"},
  "weak.finish": {en: "Finish →", es: "Terminar →"},
  // ── Pronunciation ──
  "pron.noMic": {en: "Microphone not available. Use Chrome, Edge, or Safari.", es: "Micrófono no disponible. Usa Chrome, Edge o Safari."},
  "pron.sayThis": {en: "Say this sentence", es: "Di esta frase"},
  "pron.hearFirst": {en: "Hear it first", es: "Escúchala primero"},
  "pron.listening": {en: "Listening… speak now", es: "Escuchando… habla ahora"},
  "pron.tapMic": {en: "Tap the microphone and speak", es: "Toca el micrófono y habla"},
  "pron.micBlocked": {en: "Microphone blocked. Allow it in browser settings.", es: "Micrófono bloqueado. Permítelo en los ajustes del navegador."},
  "pron.noSpeech": {en: "I didn't hear anything — try again, a bit louder.", es: "No oí nada — inténtalo otra vez, un poco más alto."},
  "pron.match": {en: "Match", es: "Coincidencia"},
  "pron.excellent": {en: "Excellent!", es: "¡Excelente!"},
  "pron.good": {en: "Good — keep going!", es: "¡Bien, sigue así!"},
  "pron.keepPractising": {en: "Keep practising slowly.", es: "Sigue practicando despacio."},
  "pron.iHeard": {en: "I heard", es: "Oí"},
  "pron.nextSentence": {en: "Next sentence →", es: "Siguiente frase →"},
  // ── Progress ──
  "progress.totalXP": {en: "Total XP", es: "XP total"},
  "progress.topicsDone": {en: "Topics done", es: "Temas hechos"},
  "progress.cardsMastered": {en: "Cards mastered", es: "Tarjetas dominadas"},
  "progress.cardsDueNow": {en: "Cards due now", es: "Tarjetas pendientes"},
  "progress.currentStreak": {en: "Current streak", es: "Racha actual"},
  "progress.bestStreak": {en: "Best streak", es: "Mejor racha"},
  "progress.topics": {en: "topics", es: "temas"},
  "progress.cards": {en: "cards", es: "tarjetas"},
  // ── Settings ──
  "settings.title": {en: "Settings", es: "Ajustes"},
  "settings.tutorLanguage": {en: "Tutor language", es: "Idioma del tutor"},
  "settings.tutorLanguageDesc": {en: "Choose how translations and explanations are shown. English uses full immersion (English definitions, no translations); Spanish shows everything translated into Spanish.", es: "Elige cómo se muestran las traducciones y explicaciones. English usa inmersión total (definiciones en inglés, sin traducciones); Español lo muestra todo traducido al español."},
  "settings.immersionSub": {en: "Immersion — no translations", es: "Inmersión — sin traducciones"},
  "settings.spanishSub": {en: "Spanish translations & explanations", es: "Traducciones y explicaciones en español"},
  "settings.onboarding": {en: "Onboarding", es: "Configuración inicial"},
  "settings.placementTest": {en: "Placement test", es: "Prueba de nivel"},
  "settings.placementDesc": {en: "Retake the short test to recalculate your recommended starting level.", es: "Repite la breve prueba para recalcular tu nivel inicial recomendado."},
  "settings.rerunPlacement": {en: "Run placement test again", es: "Hacer la prueba de nivel otra vez"},
  "settings.resetProgress": {en: "Reset progress", es: "Reiniciar progreso"},
  "settings.resetLevel": {en: "Reset a single level", es: "Reiniciar un solo nivel"},
  "settings.resetLevelDesc": {en: "Clear completed lessons, flashcard memory and weak points for one level only.", es: "Borra las lecciones completadas, la memoria de tarjetas y los puntos débiles de un solo nivel."},
  "settings.reset": {en: "Reset", es: "Reiniciar"},
  "settings.resetEverything": {en: "Reset everything", es: "Reiniciar todo"},
  "settings.resetEverythingDesc": {en: "Erase all XP, streaks, completed lessons, flashcard progress and weak points, and restart onboarding. This cannot be undone.", es: "Borra todo el XP, las rachas, las lecciones completadas, el progreso de tarjetas y los puntos débiles, y reinicia la configuración inicial. Esto no se puede deshacer."},
  "settings.resetAll": {en: "Reset all progress", es: "Reiniciar todo el progreso"},
  "settings.account": {en: "Account", es: "Cuenta"},
  "settings.signout": {en: "Sign out", es: "Cerrar sesión"},
};

function t(lang, key, params) {
  const entry = STRINGS[key];
  if (!entry) { console.warn('[i18n] Missing string key: ' + key); return key; }
  let s = entry[lang === 'es' ? 'es' : 'en'];
  if (s == null) s = entry.en;
  if (params) {
    for (const p in params) { s = s.split('{' + p + '}').join(String(params[p])); }
  }
  return s;
}

/* Per-language plural rules: n → form suffix ('one' | 'other'). */
const PLURAL_RULES = {
  en: n => (n === 1 ? 'one' : 'other'),
  es: n => (n === 1 ? 'one' : 'other'),
};
function tPlural(lang, n, key) {
  const rule = PLURAL_RULES[lang] || PLURAL_RULES.en;
  return t(lang, key + '.' + rule(n));
}
function pluralDays(lang, n) { return tPlural(lang, n, 'streak.day'); }

/* Card-back label shim: support-language name in Spanish mode, "Definition" in immersion. */
function cardBackLabel(lang) {
  return lang === 'es' ? t(lang, 'flashcards.back.supportName') : t(lang, 'flashcards.back.definition');
}
