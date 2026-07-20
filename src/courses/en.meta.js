/* Course meta for "en" — kept in its own tiny module so the course
   MANIFEST (src/courses/index.js) can load it eagerly without pulling in
   the large core payload. src/courses/en.core.js re-exports it in its default. */
export default {
    "id": "en",
    "name": "English",
    "levels": [
      "A1",
      "A2",
      "B1"
    ],
    "speechLocale": "en-GB",
    "nameByLang": {
      "en": "English",
      "es": "Inglés"
    },
    "icon": "🇬🇧",
    "title": "Pathway to B1",
    "tagline": {
      "en": "Your English journey, one level at a time",
      "es": "Tu camino al inglés, un nivel a la vez"
    },
    "frontLabel": "English"
  };
