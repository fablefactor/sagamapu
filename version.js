/* ══ App version + changelog ══════════════════════════════════════
   SINGLE SOURCE OF TRUTH for the app version. Loaded via <script src>
   (running version) AND re-fetched fresh at startup (cache: no-store)
   by the update check in index.html, which extracts the JSON literal
   after the window.PTB_VERSION assignment — so this file MUST stay a
   pure JSON literal in a one-line wrapper (no functions, no
   expressions), like the course files. Do not use brace characters
   in this comment.

   RULES (see CLAUDE.md):
   - Bump "version" (+1) on EVERY user-facing change that goes to master.
   - Prepend ONE changelog entry per change: v, date, en, es —
     one short line per language, newest first.
   ══════════════════════════════════════════════════════════════════ */
window.PTB_VERSION = {
  "version": 10,
  "changelog": [
    {"v": 10, "date": "2026-07-18", "en": "New Spanish course (A1–B1, Spain) with English support", "es": "Nuevo curso de español (A1–B1, de España) con apoyo en inglés"},
    {"v": 9, "date": "2026-07-17", "en": "Update prompt on start, app version and this change list", "es": "Aviso de actualización al iniciar, versión de la app y esta lista de cambios"},
    {"v": 8, "date": "2026-07-17", "en": "Fixed quiz questions where more than one answer could be correct", "es": "Corregidas preguntas con más de una respuesta posible"},
    {"v": 7, "date": "2026-07-16", "en": "One language setting now drives the whole app, including lessons", "es": "Un solo idioma controla toda la app, incluidas las lecciones"},
    {"v": 6, "date": "2026-07-15", "en": "Friendly offline handling when the cloud is unavailable", "es": "Manejo amigable sin conexión cuando la nube no está disponible"},
    {"v": 5, "date": "2026-07-14", "en": "All menus and lessons now follow your language everywhere", "es": "Menús y lecciones siguen tu idioma en todas partes"},
    {"v": 4, "date": "2026-07-13", "en": "New Danish course (A1–B1) with Spanish support", "es": "Nuevo curso de danés (A1–B1) con apoyo en español"},
    {"v": 3, "date": "2026-07-12", "en": "Multi-course support: switch courses, progress kept per course", "es": "Soporte multi-curso: cambia de curso, progreso guardado por curso"},
    {"v": 2, "date": "2026-07-06", "en": "Cloud sync with email sign-in", "es": "Sincronización en la nube con inicio de sesión por correo"},
    {"v": 1, "date": "2026-07-05", "en": "First release: English course with placement test, flashcards and pronunciation", "es": "Primera versión: curso de inglés con prueba de nivel, tarjetas y pronunciación"}
  ]
};
