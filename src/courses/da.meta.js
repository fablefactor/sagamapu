/* Course meta for "da" — kept in its own tiny module so the course
   MANIFEST (src/courses/index.js) can load it eagerly without pulling in
   the large core payload. src/courses/da.core.js re-exports it in its default. */
export default {
    "id": "da",
    "name": "Dansk",
    "levels": ["A1", "A2", "B1"],
    "speechLocale": "da-DK",
    "nameByLang": {
      "en": "Danish",
      "es": "Danés",
      "da": "Dansk"
    },
    "icon": "🇩🇰",
    "title": "Vejen til B1",
    "tagline": {
      "en": "Your Danish journey to B1",
      "es": "Tu camino al danés hasta B1"
    },
    "frontLabel": "DANSK"
  };
