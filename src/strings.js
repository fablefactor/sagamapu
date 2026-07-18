/* ══ Pathway to B1 — UI string table ══════════════════════════════
   Plain JS (no JSX) — loaded via <script src="strings.js"> after the
   courses/*.js files, before the Babel block in index.html.

   t(lang, key)          → localized UI string for that uiLang (fallback en)
   t(lang, key, {n: 3})  → same, with {placeholder} interpolation
   tPlural(lang, n, key) → key+'.one' / key+'.other' via per-language plural rule
   pluralDays(lang, n)   → day/days/día/días

   lang here is always the UI language (uiLang). Course content is
   localized by the resolver in index.html, not by this table.
   The 'lang.name' entry doubles as the registry of available UI
   languages: its keys are the selectable uiLang ids, its values their
   native names. Add a language here + translate the table = new UI lang.
   ══════════════════════════════════════════════════════ */

export const STRINGS = {
  // ── UI languages (keys = selectable uiLang ids, values = native names) ──
  "lang.name": {en: "English", es: "Español"},
  // ── Common ──
  "common.next": {en: "Next →", es: "Siguiente →"},
  "common.backToHome": {en: "Back to home", es: "Volver al inicio"},
  "common.cancel": {en: "Cancel", es: "Cancelar"},
  "common.loading": {en: "Loading…", es: "Cargando…"},
  // ── Update prompt + About ──
  "update.title": {en: "New version available", es: "Nueva versión disponible"},
  "update.subtitle": {en: "You have v{from} — v{to} is ready. What's new:", es: "Tienes la v{from} — la v{to} está lista. Novedades:"},
  "update.now": {en: "Update now", es: "Actualizar ahora"},
  "update.later": {en: "Later", es: "Más tarde"},
  "settings.about": {en: "About", es: "Acerca de"},
  "settings.version": {en: "App version", es: "Versión de la app"},
  "settings.changelog": {en: "What's changed", es: "Cambios"},
  "cloud.offline": {en: "Cloud sync is unavailable right now. Your progress is saved on this device and will sync when the connection returns.", es: "La sincronización con la nube no está disponible ahora. Tu progreso está guardado en este dispositivo y se sincronizará cuando vuelva la conexión."},
  // ── Home ──
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
  "login.sentLinkTo": {en: "We sent a magic link to", es: "Te enviamos un enlace mágico a"},
  "login.clickToSignIn": {en: "Click it to sign in — no password needed.", es: "Haz clic para entrar — no necesitas contraseña."},
  "login.subtitle": {en: "Sign in to continue your English journey", es: "Inicia sesión para continuar tu camino al inglés"},
  "login.sending": {en: "Sending…", es: "Enviando…"},
  "login.errUnavailable": {en: "We couldn't reach the service — it may be waking up. Please try again in a moment.", es: "No pudimos conectar con el servicio — puede estar reactivándose. Inténtalo de nuevo en un momento."},
  "login.errGeneric": {en: "Something went wrong. Please check your email address and try again.", es: "Algo salió mal. Revisa tu correo e inténtalo de nuevo."},
  "login.sendMagicLink": {en: "✉️  Send magic link", es: "✉️  Enviar enlace mágico"},
  // ── Placement test ──
  "placement.title": {en: "Placement Test", es: "Prueba de nivel"},
  "placement.subtitle": {en: "Let's find your starting level — {n} quick questions", es: "Vamos a encontrar tu nivel inicial — {n} preguntas rápidas"},
  "placement.seeMyLevel": {en: "See my level →", es: "Ver mi nivel →"},
  "placement.skip": {en: "Skip — start from A1", es: "Omitir — empezar desde A1"},
  // ── Quiz (shared) ──
  "quiz.correct": {en: "✓ Correct!", es: "✓ ¡Correcto!"},
  "quiz.notQuite": {en: "✗ Not quite.", es: "✗ No exactamente."},
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
  "lessons.retry": {en: "Retry quiz", es: "Reintentar cuestionario"},
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
  "flashcards.howWell": {en: "How well did you know this?", es: "¿Qué tan bien lo sabías?"},
  "flashcards.missed": {en: "✗ Missed", es: "✗ Fallé"},
  "flashcards.almost": {en: "〜 Almost", es: "〜 Casi"},
  "flashcards.gotIt": {en: "✓ Got it!", es: "✓ ¡Lo sé!"},
  "flashcards.reveal": {en: "Reveal answer", es: "Revelar respuesta"},
  "flashcards.hearPron": {en: "Hear pronunciation", es: "Oír pronunciación"},
  "flashcards.back.definition": {en: "Definition", es: "Definición"},
  // ── Weak points ──
  "weak.none": {en: "No weak points yet!", es: "¡Aún no hay puntos débiles!"},
  "weak.noneSub": {en: "Complete some quizzes — missed questions will appear here for extra practice.", es: "Completa algunos cuestionarios — las preguntas falladas aparecerán aquí para practicar más."},
  "weak.allDone": {en: "All done!", es: "¡Todo listo!"},
  "weak.allDoneSub": {en: "Great work — all weak points reviewed this session!", es: "¡Buen trabajo — todos los puntos débiles repasados en esta sesión!"},
  "weak.missed": {en: "missed", es: "falladas"},
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
  // ── Onboarding ──
  "onboard.iSpeak": {en: "I speak…", es: "Yo hablo…"},
  "onboard.iSpeakSub": {en: "Pick the language that should explain things to you.", es: "Elige el idioma que debe explicarte las cosas."},
  "onboard.iWantToLearn": {en: "I want to learn…", es: "Quiero aprender…"},
  "onboard.iWantToLearnSub": {en: "You'll take a short placement test next.", es: "Después harás una breve prueba de nivel."},
  "onboard.fullSupport": {en: "Explanations in {lang}", es: "Explicaciones en {lang}"},
  "onboard.immersion": {en: "Immersion — explanations in {lang}", es: "Inmersión — explicaciones en {lang}"},
  "onboard.back": {en: "← Back", es: "← Atrás"},
  // ── Courses (chip + switcher) ──
  "courses.title": {en: "My courses", es: "Mis cursos"},
  "courses.subtitle": {en: "Tap a course to switch — progress is saved per course.", es: "Toca un curso para cambiar — el progreso se guarda por curso."},
  "courses.active": {en: "Active", es: "Activo"},
  "courses.progress": {en: "{done}/{total} topics · level {level}", es: "{done}/{total} temas · nivel {level}"},
  "courses.add": {en: "+ Add a course", es: "+ Añadir un curso"},
  "courses.addPick": {en: "Choose a course to add", es: "Elige un curso para añadir"},
  "courses.noneToAdd": {en: "More courses coming soon", es: "Más cursos próximamente"},
  // ── Settings ──
  "settings.title": {en: "Settings", es: "Ajustes"},
  "settings.tutorLanguage": {en: "Your language", es: "Tu idioma"},
  "settings.tutorLanguageDesc": {en: "Everything the app explains to you — menus, lesson titles and grammar — is in this language. The language you're learning stays in the examples and quizzes.", es: "Todo lo que la app te explica — menús, títulos de lecciones y gramática — está en este idioma. El idioma que estás aprendiendo se mantiene en los ejemplos y cuestionarios."},
  "settings.courseSection": {en: "Course · {name}", es: "Curso · {name}"},
  "settings.supportNone": {en: "Immersion", es: "Inmersión"},
  "settings.immersion": {en: "Immersion mode", es: "Modo inmersión"},
  "settings.immersionDesc": {en: "Advanced: hide the {lang} help and show this course only in {target}.", es: "Avanzado: oculta la ayuda en {lang} y muestra este curso solo en {target}."},
  "settings.myCourses": {en: "My courses", es: "Mis cursos"},
  "settings.placementTest": {en: "Placement test", es: "Prueba de nivel"},
  "settings.placementDesc": {en: "Retake the short test to recalculate your recommended starting level.", es: "Repite la breve prueba para recalcular tu nivel inicial recomendado."},
  "settings.rerunPlacement": {en: "Run placement test again", es: "Hacer la prueba de nivel otra vez"},
  "settings.resetProgress": {en: "Reset progress", es: "Reiniciar progreso"},
  "settings.resetLevel": {en: "Reset a single level", es: "Reiniciar un solo nivel"},
  "settings.resetLevelDesc": {en: "Clear completed lessons, flashcard memory and weak points for one level of this course only.", es: "Borra las lecciones completadas, la memoria de tarjetas y los puntos débiles de un solo nivel de este curso."},
  "settings.reset": {en: "Reset", es: "Reiniciar"},
  "settings.resetCourse": {en: "Reset course progress", es: "Reiniciar el progreso del curso"},
  "settings.resetCourseDesc": {en: "Erase this course's completed lessons, flashcard memory, weak points, level and placement result. Other courses, your XP and your streak are kept.", es: "Borra las lecciones completadas, la memoria de tarjetas, los puntos débiles, el nivel y el resultado de la prueba de este curso. Los demás cursos, tu XP y tu racha se conservan."},
  "settings.resetAllProgress": {en: "Reset all progress", es: "Reiniciar todo el progreso"},
  "settings.resetAllProgressDesc": {en: "Erase progress in every course plus your XP and streaks. Your courses, languages and account are kept.", es: "Borra el progreso de todos los cursos además de tu XP y tus rachas. Tus cursos, idiomas y cuenta se conservan."},
  "settings.account": {en: "Account", es: "Cuenta"},
  "settings.signout": {en: "Sign out", es: "Cerrar sesión"},
  "settings.dangerZone": {en: "Danger zone", es: "Zona de peligro"},
  "settings.startOver": {en: "Start over as a new user", es: "Empezar desde cero como un nuevo usuario"},
  "settings.startOverDesc": {en: "Delete absolutely everything — every course, XP, streaks and your cloud backup — and go back to the very first screen.", es: "Borra absolutamente todo — todos los cursos, XP, rachas y tu copia en la nube — y vuelve a la primera pantalla."},
  // ── Reset confirmations ──
  "confirm.resetLevel": {en: "Reset all {lv} progress?\n\nThis clears your completed {lv} lessons, flashcard memory and weak points for {lv} in this course. It cannot be undone.", es: "¿Reiniciar todo el progreso de {lv}?\n\nEsto borra tus lecciones completadas, la memoria de tarjetas y los puntos débiles de {lv} en este curso. No se puede deshacer."},
  "confirm.resetCourse": {en: "Reset all progress in {name}?\n\nThis clears completed lessons, flashcard memory, weak points, level and placement for this course. It cannot be undone.", es: "¿Reiniciar todo el progreso de {name}?\n\nEsto borra las lecciones completadas, la memoria de tarjetas, los puntos débiles, el nivel y la prueba de nivel de este curso. No se puede deshacer."},
  "confirm.resetAllProgress": {en: "Reset progress in ALL courses?\n\nThis erases every course's progress plus your XP and streaks. Your courses and languages are kept. It cannot be undone.", es: "¿Reiniciar el progreso de TODOS los cursos?\n\nEsto borra el progreso de todos los cursos además de tu XP y tus rachas. Tus cursos e idiomas se conservan. No se puede deshacer."},
  // ── Start over as a new user ──
  "startover.title": {en: "Start over as a new user?", es: "¿Empezar desde cero como un nuevo usuario?"},
  "startover.willDelete": {en: "This will permanently delete:", es: "Esto eliminará permanentemente:"},
  "startover.courseLine": {en: "{name} — {topics} topics completed, {cards} cards in review", es: "{name} — {topics} temas completados, {cards} tarjetas en repaso"},
  "startover.streakLine": {en: "Streak: {n} (best {best})", es: "Racha: {n} (mejor {best})"},
  "startover.xpLine": {en: "{xp} XP", es: "{xp} XP"},
  "startover.cloud": {en: "Your cloud backup will also be deleted.", es: "Tu copia de seguridad en la nube también se eliminará."},
  "startover.typeWord": {en: "Type {word} to confirm", es: "Escribe {word} para confirmar"},
  "startover.confirmWord": {en: "DELETE", es: "BORRAR"},
  "startover.button": {en: "Delete everything and start over", es: "Borrar todo y empezar de nuevo"},
  "startover.working": {en: "Deleting…", es: "Borrando…"},
};

export function t(lang, key, params) {
  const entry = STRINGS[key];
  if (!entry) { console.warn('[i18n] Missing string key: ' + key); return key; }
  let s = entry[lang];
  if (s == null) s = entry.en;
  if (params) {
    for (const p in params) { s = s.split('{' + p + '}').join(String(params[p])); }
  }
  return s;
}

/* Per-language plural rules: n → form suffix ('one' | 'other'). */
export const PLURAL_RULES = {
  en: n => (n === 1 ? 'one' : 'other'),
  es: n => (n === 1 ? 'one' : 'other'),
};
export function tPlural(lang, n, key) {
  const rule = PLURAL_RULES[lang] || PLURAL_RULES.en;
  return t(lang, key + '.' + rule(n));
}
export function pluralDays(lang, n) { return tPlural(lang, n, 'streak.day'); }

/* Available UI languages, derived from the 'lang.name' registry entry. */
export const UI_LANGS = Object.keys(STRINGS['lang.name']);
export function uiLangName(id) { return STRINGS['lang.name'][id] || id; }
