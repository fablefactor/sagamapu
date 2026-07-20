/* Course meta for "es" — kept in its own tiny module so the course
   MANIFEST (src/courses/index.js) can load it eagerly without pulling in
   the large core payload. src/courses/es.core.js re-exports it in its default. */
export default {
    "id": "es",
    "name": "Español",
    "levels": ["A1", "A2", "B1"],
    "speechLocale": "es-ES",
    "nameByLang": {
      "en": "Spanish",
      "es": "Español",
      "da": "Spansk"
    },
    "icon": "🇪🇸",
    "title": "Camino al B1",
    "tagline": {
      "en": "Your Spanish journey to B1",
      "es": "Tu camino al español hasta B1"
    },
    "frontLabel": "ESPAÑOL"
  };
