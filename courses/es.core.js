/* Pathway to B1 — course "es" core: target-language (Spanish) content only.
   Plain JS, no JSX: a one-line window.PTB_COURSES wrapper around a pure
   JSON literal, loaded via <script src> before the Babel block.

   DIALECT: this course deliberately teaches PENINSULAR (Spain) Spanish —
   vosotros alongside ustedes, coger el autobús, el zumo, el ordenador,
   el móvil, vale, la caña. The app's "Latin American Spanish" rule applies
   to tutoring-language text (UI strings, es overlays of OTHER courses),
   NOT to this course's target-language content.

   ID STABILITY RULE: every content item carries a short stable id
   (theory t*, examples e*, flashcards f*, quiz q*, placement p*).
   Support overlays key translations by topic id + ITEM id — never by
   array index. Future insertions MUST mint NEW ids (t4, e9, f11, ...);
   NEVER renumber or reuse existing ids, even when inserting mid-array
   or deleting items.

   PART 1 (A1): meta, 7 A1 topics, full placement (20), pronunciation.
   A2/B1 topics are appended at the //__APPEND_HERE__ sentinel inside
   core.topics (which is deliberately the LAST key of core): replace
   "//__APPEND_HERE__\n}}};" with "<next topics>,\n//__APPEND_HERE__\n}}};" */
window.PTB_COURSES = window.PTB_COURSES || {};
window.PTB_COURSES.es = {
  "meta": {
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
  },
  "core": {
    "placement": [
      { "id": "p1", "q": "Yo ___ Marta.", "opts": ["me llamo", "se llama", "te llamas", "nos llamamos"], "ans": 0, "level": "A1" },
      { "id": "p2", "q": "___ problema es difícil.", "opts": ["La", "El", "Los", "Una"], "ans": 1, "level": "A1" },
      { "id": "p3", "q": "Nosotros ___ español e inglés.", "opts": ["habláis", "hablan", "hablamos", "hablo"], "ans": 2, "level": "A1" },
      { "id": "p4", "q": "Vosotros ___ en Madrid, ¿verdad?", "opts": ["vivís", "viven", "vivimos", "vivo"], "ans": 0, "level": "A1" },
      { "id": "p5", "q": "María ___ de Sevilla. (su origen)", "opts": ["está", "es", "estás", "son"], "ans": 1, "level": "A1" },
      { "id": "p6", "q": "El libro ___ encima de la mesa. (el lugar)", "opts": ["es", "eres", "son", "está"], "ans": 3, "level": "A1" },
      { "id": "p7", "q": "'Son las dos y media' es…", "opts": ["las 2.30", "las 2.15", "las 3.30", "las 2.45"], "ans": 0, "level": "A1" },
      { "id": "p8", "q": "Ayer por la noche ___ una paella entera y me acosté tarde.", "opts": ["como", "comeré", "comí", "comía"], "ans": 2, "level": "A2" },
      { "id": "p9", "q": "Cuando era pequeño, ___ al fútbol todos los sábados.", "opts": ["jugué", "jugaba", "juego", "jugaré"], "ans": 1, "level": "A2" },
      { "id": "p10", "q": "Todas las mañanas ___ a las siete.", "opts": ["levanto", "me levanta", "me levanto", "se levanto"], "ans": 2, "level": "A2" },
      { "id": "p11", "q": "A mí ___ gustan las tapas.", "opts": ["me", "yo", "le", "se"], "ans": 0, "level": "A2" },
      { "id": "p12", "q": "Mañana ___ a visitar el Museo del Prado.", "opts": ["fuimos", "íbamos", "hemos ido", "vamos"], "ans": 3, "level": "A2" },
      { "id": "p13", "q": "Estás en Madrid con dos amigos: \"¿___ queréis otra caña?\"", "opts": ["Ustedes", "Tú", "Vosotros", "Nosotros"], "ans": 2, "level": "A2" },
      { "id": "p14", "q": "Hablas con el director del banco, un señor mayor que no conoces. ¿Qué forma usas?", "opts": ["tú", "vosotros", "usted", "ustedes"], "ans": 2, "level": "A2" },
      { "id": "p15", "q": "Quiero que ___ a la fiesta el sábado.", "opts": ["vienes", "vengas", "venir", "vendrás"], "ans": 1, "level": "B1" },
      { "id": "p16", "q": "Este regalo es ___ ti — ¡feliz cumpleaños!", "opts": ["por", "de", "para", "con"], "ans": 2, "level": "B1" },
      { "id": "p17", "q": "¿Has visto mis llaves? — No, no ___ he visto.", "opts": ["los", "les", "las", "la"], "ans": 2, "level": "B1" },
      { "id": "p18", "q": "Si tuviera más tiempo, ___ otro idioma.", "opts": ["estudiaré", "estudio", "estudiaba", "estudiaría"], "ans": 3, "level": "B1" },
      { "id": "p19", "q": "No creo que el examen ___ fácil.", "opts": ["es", "sea", "será", "era"], "ans": 1, "level": "B1" },
      { "id": "p20", "q": "—¿Quién llama a la puerta? —No sé… ___ el cartero. (una suposición)", "opts": ["Será", "Es", "Era", "Sea"], "ans": 0, "level": "B1" }
    ],
    "pronunciation": {
      "A1": [
        "Hola, me llamo Íñigo y soy de Zaragoza.",
        "El niño pequeño juega en la calle con su perro.",
        "Quería un zumo de naranja y una caña, por favor.",
        "Son las cinco y cuarto de la tarde.",
        "La señora González vive cerca de la plaza.",
        "Me gusta el jamón y el queso manchego.",
        "¿Cuánto cuesta el café con leche?",
        "El tren llega a la estación a las once."
      ],
      "A2": [
        "Ayer llovió muchísimo en toda Galicia.",
        "De pequeño jugaba al ajedrez con mi abuelo.",
        "Me ducho, me visto y desayuno churros con chocolate.",
        "El zumo de melocotón está en la nevera.",
        "Cogimos el cercanías hasta el centro de Sevilla.",
        "En Navidad los niños esperan a los Reyes Magos.",
        "La terraza del bar estaba llena de gente.",
        "Mañana vamos a ver una película en versión original."
      ],
      "B1": [
        "No creo que el ayuntamiento cierre la piscina en agosto.",
        "Si pudiera, viajaría en el AVE hasta A Coruña.",
        "El ferrocarril atraviesa la sierra por un desfiladero.",
        "Cuando llegues a Logroño, llámame enseguida.",
        "La cigüeña hizo su nido en el campanario de la iglesia.",
        "Dijeron que la huelga terminaría el jueves por la tarde.",
        "Me habría gustado quedarme más rato de sobremesa.",
        "El zorro rojo corría entre los cerros riojanos."
      ]
    },
    "topics": {
      "a1-saludos": {
        "id": "a1-saludos",
        "icon": "👋",
        "level": "A1",
        "title": "Saludos y presentaciones",
        "theory": [
          {
            "id": "t1",
            "heading": "Saludos",
            "body": "<strong>Hola</strong> es el saludo más común en España — sirve para todas las personas y a todas las horas. <strong>Buenos días</strong> se usa por la mañana, hasta la hora de comer (¡en España, sobre las dos!). Después: <strong>buenas tardes</strong>, y por la noche: <strong>buenas noches</strong>. Para preguntar cómo está alguien: <strong>¿Qué tal?</strong> o <strong>¿Cómo estás?</strong> Al irte, dices <strong>adiós</strong>, <strong>hasta luego</strong> o <strong>nos vemos</strong>."
          },
          {
            "id": "t2",
            "heading": "Presentarse",
            "body": "Para decir tu nombre: <strong>me llamo…</strong> (<em>Me llamo Carmen</em>) o <strong>soy…</strong> (<em>Soy Carmen</em>). La pregunta es: <strong>¿Cómo te llamas?</strong> Para el país o la ciudad: <strong>soy de…</strong> (<em>Soy de Valencia</em>) y <strong>¿De dónde eres?</strong> Para la edad: <strong>¿Cuántos años tienes? — Tengo veinticinco años.</strong> Cuando conoces a una persona nueva: <strong>encantado</strong> (si eres hombre) o <strong>encantada</strong> (si eres mujer), y la respuesta es <strong>igualmente</strong>."
          },
          {
            "id": "t3",
            "heading": "Dos besos y el tú",
            "body": "En España, entre amigos y en las presentaciones informales, la gente se saluda con <strong>dos besos</strong>, uno en cada mejilla (normalmente entre mujeres, o entre un hombre y una mujer). Entre hombres, o en situaciones formales, se da <strong>la mano</strong>. Con personas de tu edad se usa <strong>tú</strong> por defecto — en tiendas, bares y con compañeros es lo normal y no es maleducado. <strong>Usted</strong> se reserva para personas mayores o situaciones muy formales."
          }
        ],
        "examples": [
          { "id": "e1", "text": "¡Hola! ¿Qué tal? — Muy bien, ¿y tú?" },
          { "id": "e2", "text": "Buenos días, me llamo Carmen. ¿Cómo te llamas?" },
          { "id": "e3", "text": "Soy de Valencia. ¿De dónde eres?" },
          { "id": "e4", "text": "Encantada de conocerte. — Igualmente." },
          { "id": "e5", "text": "¿Cuántos años tienes? — Tengo veinticinco años." },
          { "id": "e6", "text": "Esta es mi amiga Lucía. — ¡Hola, Lucía! Dos besos." },
          { "id": "e7", "text": "¡Hasta luego! ¡Nos vemos mañana!" },
          { "id": "e8", "text": "¿Hablas inglés? — Sí, un poco." }
        ],
        "flashcards": [
          { "id": "f1", "front": "Hola", "def": "El saludo más común en español, a cualquier hora." },
          { "id": "f2", "front": "Buenos días", "def": "El saludo de la mañana, hasta la hora de comer." },
          { "id": "f3", "front": "¿Qué tal?", "def": "La pregunta informal para saber cómo está alguien." },
          { "id": "f4", "front": "Me llamo…", "def": "Así dices tu nombre." },
          { "id": "f5", "front": "¿Cómo te llamas?", "def": "La pregunta para saber el nombre de alguien." },
          { "id": "f6", "front": "¿De dónde eres?", "def": "La pregunta sobre el país o la ciudad de una persona." },
          { "id": "f7", "front": "Encantado / Encantada", "def": "Lo que dices cuando conoces a una persona nueva." },
          { "id": "f8", "front": "Hasta luego", "def": "Una despedida muy común: nos vemos más tarde." },
          { "id": "f9", "front": "Gracias", "def": "La palabra que muestra agradecimiento." },
          { "id": "f10", "front": "Dos besos", "def": "El saludo típico entre amigos en España: un beso en cada mejilla." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Son las diez de la mañana y entras en una tienda. ¿Qué dices?",
            "options": ["¡Buenas noches!", "¡Buenos días!", "¡Hasta luego!", "¡Buenas tardes!"],
            "correct": 1,
            "explain": "'Buenos días' se usa hasta la hora de comer. 'Buenas tardes' es después de comer, 'buenas noches' es por la noche y 'hasta luego' es una despedida, no un saludo."
          },
          {
            "id": "q2",
            "q": "¿Cómo preguntas el nombre de una persona?",
            "options": ["¿Qué te llamas?", "¿Cómo llamas?", "¿Cómo te llamas?", "¿Quién te llamas?"],
            "correct": 2,
            "explain": "'¿Cómo te llamas?' es la pregunta correcta, con el pronombre 'te'. Las otras formas no son español correcto."
          },
          {
            "id": "q3",
            "q": "Soy ___ Valencia.",
            "options": ["en", "de", "a", "por"],
            "correct": 1,
            "explain": "Para el origen se usa 'de': Soy de Valencia. 'En' es para el lugar donde estás, no de dónde eres."
          },
          {
            "id": "q4",
            "q": "En España, dos amigas se saludan normalmente con…",
            "options": ["un apretón de manos", "una reverencia", "tres besos", "dos besos, uno en cada mejilla"],
            "correct": 3,
            "explain": "El saludo típico informal en España son dos besos, uno en cada mejilla. El apretón de manos es para situaciones formales."
          },
          {
            "id": "q5",
            "q": "Tu compañero de clase tiene veinte años, como tú. ¿Qué forma usas con él?",
            "options": ["usted", "vosotros", "tú", "ustedes"],
            "correct": 2,
            "explain": "Con personas de tu edad se usa 'tú' por defecto en España. 'Usted' es para situaciones muy formales, y 'vosotros'/'ustedes' son formas de plural — aquí hablas con una sola persona."
          }
        ]
      },
      "a1-genero": {
        "id": "a1-genero",
        "icon": "🔤",
        "level": "A1",
        "title": "El género y los artículos",
        "theory": [
          {
            "id": "t1",
            "heading": "Masculino y femenino",
            "body": "Todos los sustantivos en español tienen género: <strong>masculino</strong> o <strong>femenino</strong>. El artículo determinado es <strong>el</strong> (masculino) o <strong>la</strong> (femenino): <em>el libro, la mesa</em>. El artículo indeterminado es <strong>un</strong> o <strong>una</strong>: <em>un libro, una mesa</em>. Regla general: las palabras en <strong>-o</strong> son masculinas (<em>el zumo, el ordenador… bueno, ordenador termina en -r, ¡pero también es masculino!</em>) y las palabras en <strong>-a</strong> son femeninas (<em>la casa, la playa</em>)."
          },
          {
            "id": "t2",
            "heading": "Las trampas",
            "body": "Algunas palabras no siguen la regla. Son masculinas aunque terminan en -a: <strong>el día, el mapa, el problema, el idioma</strong>. Son femeninas aunque terminan en -o: <strong>la mano, la foto</strong> (de fotografía), <strong>la moto</strong> (de motocicleta). Dos finales muy útiles: las palabras en <strong>-ción</strong> y en <strong>-dad</strong> son siempre femeninas: <em>la estación, la canción, la ciudad, la universidad</em>."
          },
          {
            "id": "t3",
            "heading": "Plural y concordancia",
            "body": "En plural, los artículos son <strong>los</strong> y <strong>las</strong>: <em>los libros, las mesas</em>. El adjetivo <strong>concuerda</strong> con el sustantivo en género y número: <em>el zumo frí<strong>o</strong>, la casa blanc<strong>a</strong>, los ordenadores nuev<strong>os</strong>, las calles estrech<strong>as</strong></em>. El adjetivo normalmente va <strong>después</strong> del sustantivo: <em>un coche rojo</em>, no <em>un rojo coche</em>."
          }
        ],
        "examples": [
          { "id": "e1", "text": "El ordenador nuevo está en la mesa." },
          { "id": "e2", "text": "La casa es blanca y el coche es rojo." },
          { "id": "e3", "text": "Hoy es un día bonito." },
          { "id": "e4", "text": "La mano derecha y el pie izquierdo." },
          { "id": "e5", "text": "El problema es difícil, pero la solución es fácil." },
          { "id": "e6", "text": "Los libros están en la estantería." },
          { "id": "e7", "text": "Las chicas son simpáticas y los chicos también." },
          { "id": "e8", "text": "Tengo una foto del mapa de España." }
        ],
        "flashcards": [
          { "id": "f1", "front": "el ordenador", "def": "La máquina para trabajar y navegar por internet; palabra masculina." },
          { "id": "f2", "front": "la casa", "def": "El lugar donde vives; palabra femenina." },
          { "id": "f3", "front": "el día", "def": "Veinticuatro horas; es masculina aunque termina en -a." },
          { "id": "f4", "front": "la mano", "def": "La parte del cuerpo con cinco dedos; es femenina aunque termina en -o." },
          { "id": "f5", "front": "el mapa", "def": "El dibujo de un país o una ciudad; es masculina aunque termina en -a." },
          { "id": "f6", "front": "la foto", "def": "La imagen que haces con el móvil; es femenina porque viene de 'fotografía'." },
          { "id": "f7", "front": "el problema", "def": "Algo difícil de resolver; es masculina aunque termina en -a." },
          { "id": "f8", "front": "la ciudad", "def": "Un lugar grande donde vive mucha gente; las palabras en -dad son femeninas." },
          { "id": "f9", "front": "la estación", "def": "El lugar donde coges el tren; las palabras en -ción son femeninas." },
          { "id": "f10", "front": "un / una", "def": "Los artículos indeterminados: un libro, una mesa." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "___ problema",
            "options": ["la", "los", "el", "una"],
            "correct": 2,
            "explain": "'Problema' es masculina aunque termina en -a: el problema. 'La problema' es un error muy típico; 'los' es plural y 'una problema' mezcla géneros."
          },
          {
            "id": "q2",
            "q": "___ mano",
            "options": ["El", "Un", "Los", "La"],
            "correct": 3,
            "explain": "'Mano' es femenina aunque termina en -o: la mano. 'El mano' y 'un mano' son errores típicos."
          },
          {
            "id": "q3",
            "q": "Elige la frase correcta:",
            "options": ["El casa es blanco", "La casa es blanca", "La casa es blanco", "El casa es blanca"],
            "correct": 1,
            "explain": "'Casa' es femenina (la casa) y el adjetivo concuerda: blanca. Artículo y adjetivo tienen que ser los dos femeninos."
          },
          {
            "id": "q4",
            "q": "Las palabras que terminan en -ción, como 'estación', son…",
            "options": ["siempre masculinas", "siempre femeninas", "a veces femeninas, a veces masculinas", "siempre plurales"],
            "correct": 1,
            "explain": "Las palabras en -ción son siempre femeninas: la estación, la canción, la habitación. Es una regla sin excepciones — ¡apréndela y gana muchas palabras!"
          },
          {
            "id": "q5",
            "q": "¿Cuál es el plural de 'el ordenador nuevo'?",
            "options": ["las ordenadores nuevas", "los ordenador nuevos", "el ordenadores nuevo", "los ordenadores nuevos"],
            "correct": 3,
            "explain": "En plural, todo concuerda: los ordenadores nuevos. Artículo, sustantivo y adjetivo van los tres en masculino plural."
          }
        ]
      },
      "a1-presente": {
        "id": "a1-presente",
        "icon": "🗣️",
        "level": "A1",
        "title": "El presente: -ar, -er, -ir",
        "theory": [
          {
            "id": "t1",
            "heading": "Los verbos en -ar",
            "body": "Los verbos españoles terminan en <strong>-ar</strong>, <strong>-er</strong> o <strong>-ir</strong>. El grupo más grande es -ar. Modelo <strong>hablar</strong>: <em>yo habl<strong>o</strong>, tú habl<strong>as</strong>, él/ella/usted habl<strong>a</strong>, nosotros habl<strong>amos</strong>, vosotros habl<strong>áis</strong>, ellos/ellas/ustedes habl<strong>an</strong></em>. Fíjate en <strong>vosotros habláis</strong>: es el plural informal de 'tú' y en España se usa constantemente."
          },
          {
            "id": "t2",
            "heading": "Los verbos en -er y en -ir",
            "body": "Modelo <strong>comer</strong>: <em>como, comes, come, comemos, com<strong>éis</strong>, comen</em>. Modelo <strong>vivir</strong>: <em>vivo, vives, vive, viv<strong>imos</strong>, viv<strong>ís</strong>, viven</em>. Los dos grupos son casi iguales: solo cambian las formas de <strong>nosotros</strong> (comemos / vivimos) y de <strong>vosotros</strong> (coméis / vivís)."
          },
          {
            "id": "t3",
            "heading": "Sin pronombre sujeto",
            "body": "La terminación del verbo ya dice quién habla, así que los pronombres <em>yo, tú, nosotros…</em> normalmente <strong>se omiten</strong>: se dice <em>Hablo español</em>, no <em>Yo hablo español</em>. El pronombre se usa solo para dar <strong>énfasis</strong> o marcar un <strong>contraste</strong>: <em>Yo trabajo en Madrid, pero <strong>ella</strong> trabaja en Toledo</em>. Recuerda también: en España, <strong>vosotros</strong> es el plural informal y <strong>ustedes</strong> el plural formal."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Hablo español y un poco de inglés." },
          { "id": "e2", "text": "¿Dónde vives? — Vivo en Madrid." },
          { "id": "e3", "text": "Mis padres comen a las dos." },
          { "id": "e4", "text": "¿Vosotros habláis inglés? — Sí, un poco." },
          { "id": "e5", "text": "Trabajo en una oficina en el centro." },
          { "id": "e6", "text": "Ana estudia en la Universidad de Salamanca." },
          { "id": "e7", "text": "Vivimos cerca de la playa." },
          { "id": "e8", "text": "¿A qué hora coméis en España? — Comemos a las dos." }
        ],
        "flashcards": [
          { "id": "f1", "front": "hablar", "def": "Decir palabras; comunicarse con otra persona." },
          { "id": "f2", "front": "comer", "def": "Tomar alimentos; en España, la comida principal es a las dos." },
          { "id": "f3", "front": "vivir", "def": "Tener tu casa en un lugar." },
          { "id": "f4", "front": "trabajar", "def": "Hacer tu profesión cada día." },
          { "id": "f5", "front": "estudiar", "def": "Aprender en la escuela o en la universidad." },
          { "id": "f6", "front": "hablamos", "def": "La forma de 'hablar' para nosotros." },
          { "id": "f7", "front": "habláis", "def": "La forma de 'hablar' para vosotros." },
          { "id": "f8", "front": "coméis", "def": "La forma de 'comer' para vosotros." },
          { "id": "f9", "front": "vivís", "def": "La forma de 'vivir' para vosotros." },
          { "id": "f10", "front": "vosotros / vosotras", "def": "El plural informal de 'tú', muy usado en España." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Yo ___ español.",
            "options": ["habla", "hablas", "hablo", "hablan"],
            "correct": 2,
            "explain": "Con 'yo', la terminación es -o: hablo. 'Habla' es para él/ella y 'hablas' para tú."
          },
          {
            "id": "q2",
            "q": "Vosotros ___ en Barcelona.",
            "options": ["vivís", "viven", "vivimos", "vive"],
            "correct": 0,
            "explain": "Con 'vosotros', la forma de 'vivir' es 'vivís'. 'Viven' va con ellos/ustedes — 'vosotros viven' es un error muy común."
          },
          {
            "id": "q3",
            "q": "Tú ___ mucho.",
            "options": ["trabajo", "trabajas", "trabaja", "trabajáis"],
            "correct": 1,
            "explain": "Con 'tú', la terminación es -as: trabajas. 'Trabajo' es para yo y 'trabaja' para él/ella."
          },
          {
            "id": "q4",
            "q": "Nosotros ___ a las dos.",
            "options": ["coméis", "comen", "comemos", "come"],
            "correct": 2,
            "explain": "Con 'nosotros', la forma de 'comer' es 'comemos'. 'Coméis' es para vosotros."
          },
          {
            "id": "q5",
            "q": "¿Cuándo se usa el pronombre en 'yo hablo'?",
            "options": ["Siempre, es obligatorio", "Solo para dar énfasis o contraste", "Nunca se puede usar", "Solo con los verbos en -ar"],
            "correct": 1,
            "explain": "La terminación del verbo ya dice quién habla, así que el pronombre normalmente se omite. Se usa para dar énfasis o marcar un contraste: 'Yo trabajo aquí, pero ella no'."
          }
        ]
      },
      "a1-serestar": {
        "id": "a1-serestar",
        "icon": "⚖️",
        "level": "A1",
        "title": "Ser y estar I",
        "theory": [
          {
            "id": "t1",
            "heading": "Ser: identidad, origen, profesión",
            "body": "<strong>Ser</strong>: <em>soy, eres, es, somos, <strong>sois</strong>, son</em>. Se usa para la <strong>identidad</strong> (<em>Soy Carmen</em>), el <strong>origen</strong> (<em>Soy de Bilbao</em>), la <strong>profesión</strong> (<em>Es médica</em>), la <strong>nacionalidad</strong> (<em>Somos españoles</em>) y las <strong>características</strong> de una persona o cosa (<em>Mi hermano es alto</em>)."
          },
          {
            "id": "t2",
            "heading": "Estar: lugar y estado",
            "body": "<strong>Estar</strong>: <em>estoy, estás, está, estamos, <strong>estáis</strong>, están</em>. Se usa para el <strong>lugar</strong> (<em>El museo está cerca; Sevilla está en el sur</em>) y para los <strong>estados temporales</strong> (<em>Estoy cansado; Está enferma; Estamos contentos</em>). Pregunta clave: <strong>¿Dónde está…?</strong>"
          },
          {
            "id": "t3",
            "heading": "Pistas para elegir",
            "body": "Pregúntate: ¿hablo de <strong>quién es</strong> o <strong>de dónde es</strong>? → <strong>ser</strong>. ¿Hablo de <strong>dónde está</strong> o de <strong>cómo se siente hoy</strong>? → <strong>estar</strong>. Compara: <em><strong>Soy</strong> médico</em> (profesión) / <em><strong>Estoy</strong> cansado</em> (estado de hoy). <em>Madrid <strong>es</strong> grande</em> (característica) / <em>Madrid <strong>está</strong> en el centro de España</em> (lugar). Palabras como <em>hoy</em> y <em>ahora</em> son señales de estado temporal."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Soy profesora y soy de Bilbao." },
          { "id": "e2", "text": "¿Dónde está el baño? — Está al fondo, a la derecha." },
          { "id": "e3", "text": "Hoy estoy muy cansado." },
          { "id": "e4", "text": "Mi hermano es alto y simpático." },
          { "id": "e5", "text": "El museo está cerca de la catedral." },
          { "id": "e6", "text": "Estamos contentos porque es viernes." },
          { "id": "e7", "text": "Sevilla está en el sur de España." },
          { "id": "e8", "text": "¿Sois estudiantes? — Sí, somos estudiantes de medicina." }
        ],
        "flashcards": [
          { "id": "f1", "front": "ser", "def": "El verbo para la identidad, el origen y la profesión." },
          { "id": "f2", "front": "estar", "def": "El verbo para el lugar y los estados temporales." },
          { "id": "f3", "front": "soy de…", "def": "Así dices tu origen: tu ciudad o tu país. Con 'ser'." },
          { "id": "f4", "front": "estoy cansado / cansada", "def": "Un estado temporal: necesitas descansar. Con 'estar'." },
          { "id": "f5", "front": "es médica", "def": "Su profesión: trabaja en un hospital. La profesión va con 'ser'." },
          { "id": "f6", "front": "está en Madrid", "def": "Su lugar ahora. El lugar siempre va con 'estar'." },
          { "id": "f7", "front": "sois", "def": "La forma de 'ser' para vosotros." },
          { "id": "f8", "front": "estáis", "def": "La forma de 'estar' para vosotros." },
          { "id": "f9", "front": "estoy enfermo / enferma", "def": "Un estado temporal: no me encuentro bien. Con 'estar'." },
          { "id": "f10", "front": "somos", "def": "La forma de 'ser' para nosotros." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "María ___ de Granada. (hablamos de su origen)",
            "options": ["está", "es", "estás", "somos"],
            "correct": 1,
            "explain": "El origen va con 'ser': es de Granada. 'Estar' es para el lugar donde está algo ahora, no para el origen."
          },
          {
            "id": "q2",
            "q": "El supermercado ___ al lado de la estación. (hablamos del lugar)",
            "options": ["es", "son", "está", "somos"],
            "correct": 2,
            "explain": "El lugar va con 'estar': está al lado de la estación. 'Es' sería identidad o característica, no lugar."
          },
          {
            "id": "q3",
            "q": "Hoy ___ muy cansada porque he dormido poco.",
            "options": ["soy", "eres", "es", "estoy"],
            "correct": 3,
            "explain": "'Cansada' es un estado temporal (hoy, porque he dormido poco), así que va con 'estar': estoy cansada. 'Soy cansada' es un error clásico."
          },
          {
            "id": "q4",
            "q": "Mi madre ___ enfermera. (su profesión)",
            "options": ["está", "estás", "es", "sois"],
            "correct": 2,
            "explain": "La profesión va con 'ser': es enfermera. 'Está enfermera' es un error típico — 'estar' es para lugares y estados."
          },
          {
            "id": "q5",
            "q": "Vosotros ___ en la terraza, ¿verdad? (el lugar donde estáis ahora)",
            "options": ["estáis", "sois", "estás", "somos"],
            "correct": 0,
            "explain": "El lugar va con 'estar', y con 'vosotros' la forma es 'estáis'. 'Sois' es de 'ser' y 'estás' es para tú."
          }
        ]
      },
      "a1-numeros": {
        "id": "a1-numeros",
        "icon": "🕑",
        "level": "A1",
        "title": "Números, la hora y los euros",
        "theory": [
          {
            "id": "t1",
            "heading": "Números del 0 al 100",
            "body": "<em>cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince</em>. Después: <em>dieciséis, diecisiete…</em> Del 21 al 29 se escribe <strong>una sola palabra</strong>: <em>veintiuno, veintidós, veintitrés…</em> A partir del 31, con <strong>y</strong>: <em>treinta y uno, cuarenta y cinco, noventa y nueve</em>. Las decenas: <em>treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa</em>, y 100 es <strong>cien</strong>."
          },
          {
            "id": "t2",
            "heading": "La hora",
            "body": "La pregunta: <strong>¿Qué hora es?</strong> Con la una: <em><strong>Es la</strong> una</em>; con las demás horas: <em><strong>Son las</strong> dos, son las diez</em>. Los minutos: <strong>y cuarto</strong> (2.15), <strong>y media</strong> (2.30), <strong>menos cuarto</strong> (1.45 = <em>las dos menos cuarto</em>). Se añade <strong>de la mañana</strong>, <strong>de la tarde</strong> o <strong>de la noche</strong>: <em>las tres y media de la tarde</em> = 15.30."
          },
          {
            "id": "t3",
            "heading": "Los euros y los horarios de España",
            "body": "La moneda es <strong>el euro</strong>. Para el precio: <strong>¿Cuánto cuesta?</strong> — <em>Son dos euros <strong>con</strong> cincuenta</em> (2,50 €). Los horarios españoles sorprenden: <strong>la comida</strong> (la comida principal) es sobre <strong>las dos de la tarde</strong>, y <strong>la cena</strong> sobre <strong>las nueve y media de la noche</strong>. Muchas tiendas pequeñas cierran a mediodía y abren otra vez sobre las cinco."
          }
        ],
        "examples": [
          { "id": "e1", "text": "¿Qué hora es? — Son las dos y media." },
          { "id": "e2", "text": "La clase empieza a la una y cuarto." },
          { "id": "e3", "text": "¿Cuánto cuesta el café? — Un euro con veinte." },
          { "id": "e4", "text": "En España comemos a las dos y cenamos a las nueve y media." },
          { "id": "e5", "text": "Tengo treinta y dos años." },
          { "id": "e6", "text": "El billete cuesta veintiún euros." },
          { "id": "e7", "text": "La tienda abre a las diez menos cuarto." },
          { "id": "e8", "text": "Son las nueve de la noche y el restaurante está vacío todavía." }
        ],
        "flashcards": [
          { "id": "f1", "front": "¿Qué hora es?", "def": "La pregunta para saber la hora." },
          { "id": "f2", "front": "Son las dos y media", "def": "La hora: las dos y treinta minutos (las 2.30 o las 14.30)." },
          { "id": "f3", "front": "y cuarto", "def": "Quince minutos después de la hora." },
          { "id": "f4", "front": "menos cuarto", "def": "Quince minutos antes de la hora siguiente." },
          { "id": "f5", "front": "¿Cuánto cuesta?", "def": "La pregunta por el precio de algo." },
          { "id": "f6", "front": "el euro", "def": "La moneda de España y de gran parte de Europa." },
          { "id": "f7", "front": "la comida", "def": "La comida principal del día en España, sobre las dos de la tarde." },
          { "id": "f8", "front": "la cena", "def": "La última comida del día; en España, sobre las nueve y media." },
          { "id": "f9", "front": "cien", "def": "El número 100." },
          { "id": "f10", "front": "veintiuno", "def": "El número 21: del 21 al 29 se escribe una sola palabra." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "'Son las tres y media de la tarde.' ¿Qué hora es?",
            "options": ["Las 14.30", "Las 15.30", "Las 15.15", "Las 3.15"],
            "correct": 1,
            "explain": "Las tres de la tarde son las 15.00, y 'y media' añade treinta minutos: las 15.30."
          },
          {
            "id": "q2",
            "q": "¿Cómo se escribe el número 21?",
            "options": ["veintuno", "veinteuno", "veintiuno", "veintidós"],
            "correct": 2,
            "explain": "Del 21 al 29 se escribe una sola palabra con 'veinti-': veintiuno. 'Veintidós' es el 22."
          },
          {
            "id": "q3",
            "q": "El café cuesta 1,50 €. ¿Qué dice el camarero?",
            "options": ["Cincuenta euros con uno", "Un euro con quince", "Quince euros", "Un euro con cincuenta"],
            "correct": 3,
            "explain": "1,50 € = un euro con cincuenta (céntimos). El precio se dice con 'con': dos euros con veinte, etc."
          },
          {
            "id": "q4",
            "q": "En España, ¿a qué hora cena la gente normalmente?",
            "options": ["Sobre las seis de la tarde", "Sobre las nueve y media de la noche", "Sobre las cinco de la tarde", "Sobre las siete de la tarde"],
            "correct": 1,
            "explain": "En España se cena muy tarde: sobre las nueve y media o las diez de la noche. A las siete, los restaurantes todavía están vacíos."
          },
          {
            "id": "q5",
            "q": "'Es la una menos cuarto' = …",
            "options": ["La 1.15", "La 1.45", "Las 12.45", "Las 12.15"],
            "correct": 2,
            "explain": "'Menos cuarto' son quince minutos antes de la hora: la una menos cuarto = las 12.45. 'La 1.15' sería 'la una y cuarto'."
          }
        ]
      },
      "a1-tapas": {
        "id": "a1-tapas",
        "icon": "🥘",
        "level": "A1",
        "title": "Comida y bares: de tapas",
        "theory": [
          {
            "id": "t1",
            "heading": "Ir de tapas",
            "body": "Una <strong>tapa</strong> es una porción pequeña de comida que se toma en el bar; una <strong>ración</strong> es más grande, para compartir. <strong>Ir de tapas</strong> es ir de bar en bar con amigos, comiendo y charlando. En el bar pides en <strong>la barra</strong> o te sientas en <strong>la terraza</strong>. Una <strong>caña</strong> es un vaso pequeño de cerveza de barril, y un <strong>zumo</strong> es la bebida de fruta: <em>un zumo de naranja natural</em>."
          },
          {
            "id": "t2",
            "heading": "Pedir en el bar",
            "body": "Para pedir se usa <strong>querer</strong> en imperfecto (suena educado): <em><strong>Quería</strong> un café con leche, por favor</em>. Muy típico también: <strong>¿Me pones…?</strong> (<em>¿Me pones una caña y una tapa de tortilla?</em>). El camarero pregunta: <strong>¿Qué vas a tomar?</strong> — <em>tomar</em> es el verbo para comer o beber algo. Al final: <strong>La cuenta, por favor</strong> o <strong>¿Me cobras?</strong>"
          },
          {
            "id": "t3",
            "heading": "El menú del día y la sobremesa",
            "body": "El <strong>menú del día</strong> es un menú fijo de mediodía a buen precio: <em>primero, segundo y postre</em>, normalmente con pan y bebida. Después de comer viene <strong>la sobremesa</strong>: la gente se queda en la mesa charlando, a veces durante horas — es casi sagrada en España. Recuerda: la comida principal es <strong>la comida</strong>, a las dos de la tarde."
          }
        ],
        "examples": [
          { "id": "e1", "text": "¿Qué vas a tomar? — Una caña y una tapa de tortilla." },
          { "id": "e2", "text": "¿Me pones un zumo de naranja, por favor?" },
          { "id": "e3", "text": "Quería el menú del día: de primero, ensalada, y de segundo, pollo." },
          { "id": "e4", "text": "¿Nos sentamos en la terraza? Hace muy buen tiempo." },
          { "id": "e5", "text": "La cuenta, por favor. — Ahora mismo." },
          { "id": "e6", "text": "Esta tarde vamos de tapas por el centro." },
          { "id": "e7", "text": "De postre hay flan o fruta." },
          { "id": "e8", "text": "Después de comer nos quedamos de sobremesa hasta las cinco." }
        ],
        "flashcards": [
          { "id": "f1", "front": "la tapa", "def": "Una porción pequeña de comida que se toma en el bar." },
          { "id": "f2", "front": "ir de tapas", "def": "Ir de bar en bar con amigos comiendo tapas." },
          { "id": "f3", "front": "una caña", "def": "Un vaso pequeño de cerveza de barril." },
          { "id": "f4", "front": "el zumo", "def": "La bebida de fruta, por ejemplo de naranja." },
          { "id": "f5", "front": "el menú del día", "def": "El menú fijo del mediodía: primero, segundo y postre a buen precio." },
          { "id": "f6", "front": "la sobremesa", "def": "El tiempo de conversación en la mesa después de comer." },
          { "id": "f7", "front": "la cuenta", "def": "El papel con el precio total; la pides al final." },
          { "id": "f8", "front": "¿Me pones…?", "def": "Una manera muy común de pedir algo en un bar español." },
          { "id": "f9", "front": "la terraza", "def": "Las mesas del bar en la calle." },
          { "id": "f10", "front": "la tortilla de patatas", "def": "Un plato español muy típico, de huevo y patata." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Estás en la barra y quieres una cerveza pequeña de barril. ¿Qué pides?",
            "options": ["Un zumo", "Una botella de vino", "Una caña", "Un café solo"],
            "correct": 2,
            "explain": "Una caña es el vaso pequeño de cerveza de barril — lo más típico en un bar español. El zumo es de fruta y el café solo no lleva leche."
          },
          {
            "id": "q2",
            "q": "¿Qué es el menú del día?",
            "options": ["La carta completa del restaurante", "Un menú fijo de mediodía con primero, segundo y postre", "El desayuno del bar", "Una tapa gratis con la bebida"],
            "correct": 1,
            "explain": "El menú del día es el menú fijo de mediodía a buen precio: primero, segundo y postre, normalmente con pan y bebida."
          },
          {
            "id": "q3",
            "q": "'La sobremesa' es…",
            "options": ["el mantel de la mesa", "el postre", "la conversación en la mesa después de comer", "la propina"],
            "correct": 2,
            "explain": "La sobremesa es el tiempo que la gente se queda charlando en la mesa después de comer — una tradición muy española."
          },
          {
            "id": "q4",
            "q": "Para pedir de manera educada dices: '___ un café con leche, por favor.'",
            "options": ["Quería", "Querer", "Queréis", "Quiere"],
            "correct": 0,
            "explain": "'Quería' (imperfecto de 'querer') es la forma educada de pedir. 'Querer' es el infinitivo, 'queréis' es para vosotros y 'quiere' es para él/ella o usted."
          },
          {
            "id": "q5",
            "q": "¿Qué bebida es 'el zumo'?",
            "options": ["La cerveza pequeña de barril", "La bebida de fruta, como el de naranja", "El café con leche", "El agua con gas"],
            "correct": 1,
            "explain": "El zumo es la bebida de fruta: zumo de naranja, de manzana… En España se dice 'zumo' (en Latinoamérica, 'jugo')."
          }
        ]
      },
      "a1-ciudad": {
        "id": "a1-ciudad",
        "icon": "🚇",
        "level": "A1",
        "title": "Por la ciudad",
        "theory": [
          {
            "id": "t1",
            "heading": "El transporte",
            "body": "En la ciudad hay <strong>el metro</strong>, <strong>el autobús</strong> y <strong>el taxi</strong>. En España se dice <strong>coger</strong> el transporte: <em><strong>cojo</strong> el metro, <strong>cogemos</strong> el autobús</em> — es el verbo normal y correcto aquí. Necesitas <strong>un billete</strong> o una tarjeta de transporte, y esperas en <strong>la parada</strong> (del autobús) o en <strong>la estación</strong> (del metro o del tren). Si está cerca, vas <strong>a pie</strong> o <strong>andando</strong>."
          },
          {
            "id": "t2",
            "heading": "Renfe y el AVE",
            "body": "<strong>Renfe</strong> es la compañía española de trenes. <strong>El AVE</strong> es el tren de alta velocidad: de Madrid a Barcelona o a Sevilla en unas dos horas y media. Para el día a día están <strong>los cercanías</strong>, los trenes que conectan una ciudad con sus pueblos. Se compra <strong>un billete de ida</strong> o <strong>de ida y vuelta</strong>."
          },
          {
            "id": "t3",
            "heading": "Preguntar el camino",
            "body": "Se empieza con <strong>perdona</strong> (o <strong>perdone</strong>, formal): <em>Perdona, ¿dónde está el mercado?</em> o <em>¿Cómo llego a la plaza?</em> Las respuestas: <strong>todo recto</strong> (sin girar), <strong>a la derecha</strong>, <strong>a la izquierda</strong>, <em>la primera calle</em>, <em>al lado de</em>, <em>delante de</em>. Y para la distancia: <strong>¿Está cerca o lejos?</strong>"
          }
        ],
        "examples": [
          { "id": "e1", "text": "¿Cómo vas al trabajo? — Cojo el metro en Sol." },
          { "id": "e2", "text": "Cogemos el autobús número quince en la plaza." },
          { "id": "e3", "text": "Perdona, ¿dónde está el mercado? — Todo recto y a la derecha." },
          { "id": "e4", "text": "El AVE de Madrid a Sevilla tarda dos horas y media." },
          { "id": "e5", "text": "¿Está lejos la catedral? — No, está cerca. Puedes ir andando." },
          { "id": "e6", "text": "Un billete de ida y vuelta, por favor." },
          { "id": "e7", "text": "La parada de autobús está delante del ayuntamiento." },
          { "id": "e8", "text": "Gira a la izquierda en la segunda calle." }
        ],
        "flashcards": [
          { "id": "f1", "front": "coger el autobús", "def": "Subir al autobús para viajar; en España se dice 'coger'." },
          { "id": "f2", "front": "el metro", "def": "El tren que va por debajo de la ciudad." },
          { "id": "f3", "front": "la parada", "def": "El lugar donde para el autobús." },
          { "id": "f4", "front": "el billete", "def": "El papel o la tarjeta que compras para viajar." },
          { "id": "f5", "front": "el AVE", "def": "El tren español de alta velocidad." },
          { "id": "f6", "front": "Renfe", "def": "La compañía española de trenes." },
          { "id": "f7", "front": "todo recto", "def": "Seguir en la misma dirección, sin girar." },
          { "id": "f8", "front": "a la derecha / a la izquierda", "def": "Las dos direcciones para girar." },
          { "id": "f9", "front": "ir andando", "def": "Ir a pie, sin transporte." },
          { "id": "f10", "front": "el mercado", "def": "El lugar con puestos de fruta, carne y pescado." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "'Cojo el metro en Sol' significa que…",
            "options": ["conduzco el metro", "vendo billetes en Sol", "viajo en metro desde Sol", "el metro no funciona"],
            "correct": 2,
            "explain": "'Coger el metro' significa subir al metro para viajar. En España, 'coger' es el verbo normal para el transporte."
          },
          {
            "id": "q2",
            "q": "¿Qué es el AVE?",
            "options": ["El autobús nocturno", "El tren español de alta velocidad", "El metro de Madrid", "Un barco a las islas"],
            "correct": 1,
            "explain": "El AVE es el tren de alta velocidad de Renfe: Madrid–Barcelona en unas dos horas y media."
          },
          {
            "id": "q3",
            "q": "'Todo recto' significa…",
            "options": ["girar a la derecha", "volver atrás", "girar a la izquierda", "seguir sin girar"],
            "correct": 3,
            "explain": "'Todo recto' es seguir en la misma dirección, sin girar ni a la derecha ni a la izquierda."
          },
          {
            "id": "q4",
            "q": "Quieres preguntar el camino de manera educada. ¿Cómo empiezas?",
            "options": ["Perdona, ¿dónde está la catedral?", "¡Eh, tú! La catedral.", "Catedral, ¿dónde?", "Dime ya la catedral."],
            "correct": 0,
            "explain": "Se empieza con 'perdona' (o 'perdone', más formal): Perdona, ¿dónde está la catedral? Las otras opciones suenan maleducadas."
          },
          {
            "id": "q5",
            "q": "'Un billete de ida y vuelta' es…",
            "options": ["solo para ir", "para ir y volver", "solo para volver", "para dos personas"],
            "correct": 1,
            "explain": "'Ida y vuelta' = ir y volver. 'Solo ida' es un billete únicamente para ir."
          }
        ]
      },
      "a2-gustar": {
        "id": "a2-gustar",
        "icon": "❤️",
        "level": "A2",
        "title": "Gustar y sus amigos",
        "theory": [
          {
            "id": "t1",
            "heading": "El verbo al revés",
            "body": "<strong>Gustar</strong> funciona 'al revés': la cosa que te gusta es el <strong>sujeto</strong>. Si el sujeto es singular: <em>me gust<strong>a</strong> el café</em>; si es plural: <em>me gust<strong>an</strong> las tapas</em>. Delante va el pronombre: <strong>me, te, le, nos, os, les</strong>: <em>¿Te gusta el flamenco? Nos gusta Madrid. ¿Os gustan los churros?</em> Con un verbo también se usa el singular: <em>Me gusta <strong>bailar</strong></em>."
          },
          {
            "id": "t2",
            "heading": "A mí me gusta…",
            "body": "Para dar énfasis o marcar un contraste se añade <strong>a + persona</strong>: <em><strong>A mí</strong> me gusta el café solo, pero <strong>a mi hermana</strong> le gusta con leche</em>. Con 'le' y 'les' es casi obligatorio aclarar la persona: <em><strong>A Juan</strong> le gusta el cine. <strong>A mis padres</strong> les gusta pasear</em>. Para reaccionar: <strong>a mí también</strong> (igual que tú), <strong>a mí no</strong> (diferente), <strong>a mí tampoco</strong> (igual, en negativo)."
          },
          {
            "id": "t3",
            "heading": "Encantar, doler, apetecer",
            "body": "Varios verbos funcionan como gustar. <strong>Encantar</strong> = gustar muchísimo: <em>Me encanta el gazpacho</em>. ¡Ojo! Nunca lleva 'mucho': se dice <em>me encanta</em>, no <em>me encanta mucho</em>. <strong>Doler</strong>, para el dolor: <em>Me duele la cabeza; me duelen los pies</em>. Y un verbo muy español: <strong>apetecer</strong> = tener ganas de algo: <em>¿Te apetece una caña en la terraza?</em>"
          }
        ],
        "examples": [
          { "id": "e1", "text": "Me gusta el flamenco, pero no me gustan los toros." },
          { "id": "e2", "text": "¿Te gusta el gazpacho? — Sí, me encanta." },
          { "id": "e3", "text": "A mi madre le encantan las películas antiguas." },
          { "id": "e4", "text": "Nos gusta pasear por el Retiro los domingos." },
          { "id": "e5", "text": "¿Os gusta la tortilla con cebolla o sin cebolla?" },
          { "id": "e6", "text": "Me duelen los pies de andar todo el día por Sevilla." },
          { "id": "e7", "text": "A mí me gusta el café solo; a mi hermana le gusta con leche." },
          { "id": "e8", "text": "¿Te apetece una caña en la terraza? — ¡Vale, me apetece muchísimo!" }
        ],
        "flashcards": [
          { "id": "f1", "front": "gustar", "def": "El verbo 'al revés': la cosa es el sujeto. Me gusta el café." },
          { "id": "f2", "front": "me gustan", "def": "La forma con sujeto plural: me gustan las tapas." },
          { "id": "f3", "front": "encantar", "def": "Gustar muchísimo. Nunca lleva 'mucho': me encanta." },
          { "id": "f4", "front": "doler", "def": "El verbo del dolor: me duele la cabeza." },
          { "id": "f5", "front": "me duelen los pies", "def": "Dolor con sujeto plural: los pies." },
          { "id": "f6", "front": "a mí me gusta", "def": "Con 'a mí' das énfasis o marcas un contraste." },
          { "id": "f7", "front": "le gusta", "def": "A él, a ella o a usted le gusta." },
          { "id": "f8", "front": "os gusta", "def": "A vosotros os gusta." },
          { "id": "f9", "front": "apetecer", "def": "Tener ganas de algo ahora: ¿Te apetece un café?" },
          { "id": "f10", "front": "a mí también / a mí tampoco", "def": "Para reaccionar: igual que tú, en positivo o en negativo." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Me ___ las tapas.",
            "options": ["gusta", "gustan", "gusto", "gustas"],
            "correct": 1,
            "explain": "El sujeto es 'las tapas' (plural), así que el verbo va en plural: me gustan. 'Me gusta las tapas' es un error clásico; 'gusto' y 'gustas' concuerdan con yo/tú, no con las tapas."
          },
          {
            "id": "q2",
            "q": "A mi hermano ___ gusta el fútbol.",
            "options": ["me", "le", "se", "lo"],
            "correct": 1,
            "explain": "'A mi hermano' pide el pronombre 'le': a mi hermano le gusta. 'Me' sería para mí, no para mi hermano, y 'se' y 'lo' no funcionan con gustar."
          },
          {
            "id": "q3",
            "q": "___ duele la cabeza, ¿verdad? (a ti)",
            "options": ["Te", "Tú", "Se", "Ti"],
            "correct": 0,
            "explain": "'Doler' funciona como 'gustar': a ti te duele la cabeza. 'Tú' es pronombre sujeto y aquí el sujeto es 'la cabeza'; 'ti' necesita 'a' delante."
          },
          {
            "id": "q4",
            "q": "Me ___ los pies después de andar todo el día.",
            "options": ["duele", "dolemos", "duelen", "dueles"],
            "correct": 2,
            "explain": "El sujeto es 'los pies' (plural): me duelen. 'Me duele los pies' es el error típico; 'dolemos' y 'dueles' concuerdan con personas, no con los pies."
          },
          {
            "id": "q5",
            "q": "¿Te gusta el cine? — Sí, me ___: voy todas las semanas.",
            "options": ["encantan", "encanta mucho", "encanta", "gustan"],
            "correct": 2,
            "explain": "'Encantar' ya significa 'gustar muchísimo', así que nunca lleva 'mucho'. Y el sujeto es 'el cine' (singular): me encanta. 'Encantan' y 'gustan' son plurales."
          }
        ]
      },
      "a2-preterito": {
        "id": "a2-preterito",
        "icon": "🏖️",
        "level": "A2",
        "title": "El indefinido: contar el finde",
        "theory": [
          {
            "id": "t1",
            "heading": "Las formas regulares",
            "body": "El <strong>pretérito indefinido</strong> cuenta acciones <strong>terminadas</strong> en un momento concreto: <em>ayer, anoche, el sábado pasado, el año pasado</em>. Verbos en -ar, modelo <strong>hablar</strong>: <em>habl<strong>é</strong>, habl<strong>aste</strong>, habl<strong>ó</strong>, habl<strong>amos</strong>, habl<strong>asteis</strong>, habl<strong>aron</strong></em>. Verbos en -er/-ir, modelo <strong>comer</strong>: <em>com<strong>í</strong>, com<strong>iste</strong>, com<strong>ió</strong>, com<strong>imos</strong>, com<strong>isteis</strong>, com<strong>ieron</strong></em>. Una palabra útil: <strong>el finde</strong> = el fin de semana, coloquial."
          },
          {
            "id": "t2",
            "heading": "Los grandes irregulares",
            "body": "Cuatro verbos irregulares aparecen constantemente. <strong>Ser</strong> e <strong>ir</strong> comparten las mismas formas: <em><strong>fui, fuiste, fue</strong>, fuimos, fuisteis, fueron</em> — el contexto dice cuál es: <em>Fui camarero</em> (ser) / <em>Fui a Sevilla</em> (ir). <strong>Hacer</strong>: <em><strong>hice</strong>, hiciste, <strong>hizo</strong>…</em> <strong>Estar</strong>: <em><strong>estuve</strong>, estuviste, estuvo…</em> <strong>Tener</strong>: <em><strong>tuve</strong>, tuviste, tuvo…</em> Y un detalle: estas formas irregulares no llevan tilde."
          },
          {
            "id": "t3",
            "heading": "Contar el finde",
            "body": "El lunes, la pregunta clásica es: <strong>¿Qué tal el finde?</strong> Para contar tu historia, ordena las acciones: <strong>primero</strong>, <strong>luego</strong>, <strong>después</strong>, <strong>por la noche</strong>, <strong>al final</strong>: <em>El sábado primero fui al mercado, luego comí con mis padres y por la noche quedé con amigos</em>. Cada verbo en indefinido es un paso más de la historia — una acción terminada detrás de otra."
          }
        ],
        "examples": [
          { "id": "e1", "text": "¿Qué tal el finde? — ¡Genial! Fuimos a la playa de Valencia." },
          { "id": "e2", "text": "Ayer comí paella con mis padres y luego dormí la siesta." },
          { "id": "e3", "text": "El sábado hice una ruta de tapas por el centro de Sevilla." },
          { "id": "e4", "text": "Anoche estuvimos en un concierto hasta las dos." },
          { "id": "e5", "text": "El verano pasado tuve un trabajo en un bar de la playa." },
          { "id": "e6", "text": "Primero visitamos el museo y después paseamos por el Retiro." },
          { "id": "e7", "text": "¿Fuisteis al cine el viernes? — No, nos quedamos en casa." },
          { "id": "e8", "text": "El domingo por la noche no hice nada: descansé." }
        ],
        "flashcards": [
          { "id": "f1", "front": "ayer", "def": "El día antes de hoy; palabra señal del indefinido." },
          { "id": "f2", "front": "el finde", "def": "Forma coloquial de 'el fin de semana'." },
          { "id": "f3", "front": "fui", "def": "La forma 'yo' de ser Y de ir: fui camarero / fui a Cádiz." },
          { "id": "f4", "front": "fue", "def": "La forma 'él/ella' de ser y de ir en indefinido." },
          { "id": "f5", "front": "hice", "def": "La forma 'yo' de hacer en indefinido." },
          { "id": "f6", "front": "estuve", "def": "La forma 'yo' de estar en indefinido." },
          { "id": "f7", "front": "tuve", "def": "La forma 'yo' de tener en indefinido." },
          { "id": "f8", "front": "anoche", "def": "Ayer por la noche." },
          { "id": "f9", "front": "el año pasado", "def": "El año anterior a este." },
          { "id": "f10", "front": "¿Qué tal el finde?", "def": "La pregunta clásica del lunes." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Ayer por la tarde ___ al Prado y vi tres exposiciones.",
            "options": ["voy", "fui", "iba", "va"],
            "correct": 1,
            "explain": "Son dos acciones terminadas y ordenadas de ayer: fui y vi. 'Voy' es presente, 'iba' describiría el fondo de la historia, no una acción completa, y 'va' es otra persona."
          },
          {
            "id": "q2",
            "q": "El sábado Marta ___ una tortilla, la llevó a la fiesta y triunfó.",
            "options": ["hice", "hacía", "hizo", "hace"],
            "correct": 2,
            "explain": "Tres acciones terminadas, una detrás de otra: hizo, llevó, triunfó. 'Hice' es para yo, 'hacía' sería descripción de fondo, no un paso de la historia, y 'hace' es presente."
          },
          {
            "id": "q3",
            "q": "El verano pasado ___ (nosotros) dos semanas en Galicia.",
            "options": ["estamos", "estábamos", "estuvisteis", "estuvimos"],
            "correct": 3,
            "explain": "Un periodo cerrado y completo ('dos semanas' del verano pasado) va en indefinido: estuvimos. 'Estábamos' no funciona con una duración cerrada; 'estuvisteis' es para vosotros."
          },
          {
            "id": "q4",
            "q": "—¿Qué ___ el finde pasado? —Fui a Toledo el sábado y el domingo descansé.",
            "options": ["hacías", "hiciste", "haces", "hizo"],
            "correct": 1,
            "explain": "La respuesta cuenta acciones terminadas (fui, descansé), así que la pregunta va en indefinido: ¿qué hiciste? 'Hacías' pregunta por el fondo, no por los hechos del finde; 'hizo' es para él/ella o usted."
          },
          {
            "id": "q5",
            "q": "'Fuimos' puede ser de dos verbos diferentes. ¿Cuáles?",
            "options": ["ser y estar", "ir y venir", "ser e ir", "hacer y ser"],
            "correct": 2,
            "explain": "Ser e ir comparten todas sus formas en indefinido: fuimos camareros (ser) / fuimos a Granada (ir). El contexto dice cuál es."
          }
        ]
      },
      "a2-imperfecto": {
        "id": "a2-imperfecto",
        "icon": "🧸",
        "level": "A2",
        "title": "El imperfecto: de pequeño…",
        "theory": [
          {
            "id": "t1",
            "heading": "Las formas",
            "body": "El <strong>imperfecto</strong> es el tiempo más regular del español. Verbos en -ar: <em>jug<strong>aba</strong>, jug<strong>abas</strong>, jug<strong>aba</strong>, jug<strong>ábamos</strong>, jug<strong>abais</strong>, jug<strong>aban</strong></em>. Verbos en -er/-ir: <em>com<strong>ía</strong>, viv<strong>ía</strong>, ten<strong>ías</strong>, hac<strong>íamos</strong>…</em> Solo hay <strong>tres irregulares</strong>: <strong>ser</strong> (<em>era, eras, era…</em>), <strong>ir</strong> (<em>iba, ibas, iba…</em>) y <strong>ver</strong> (<em>veía, veías…</em>). Y muy útil: <strong>había</strong> = el imperfecto de 'hay'."
          },
          {
            "id": "t2",
            "heading": "Para qué sirve",
            "body": "El imperfecto describe <strong>cómo eran las cosas</strong>: costumbres del pasado (<em><strong>De pequeño</strong> jugaba en la calle <strong>todos los días</strong></em>), descripciones (<em>La casa <strong>era</strong> enorme y <strong>tenía</strong> un patio</em>), la edad y la hora en el pasado (<em><strong>Tenía</strong> ocho años; <strong>eran</strong> las diez</em>). Para las costumbres también existe <strong>solía + infinitivo</strong>: <em>Solíamos veranear en el pueblo</em>."
          },
          {
            "id": "t3",
            "heading": "¿Imperfecto o indefinido?",
            "body": "Piensa en una película: el <strong>imperfecto</strong> es el <strong>decorado</strong> — el fondo, la descripción, la costumbre; el <strong>indefinido</strong> es la <strong>acción</strong> — lo que pasa. <em><strong>Mientras</strong> cenábamos (fondo), <strong>de repente</strong> llamaron a la puerta (acción)</em>. Señales de imperfecto: <em>mientras, todos los días, siempre, de pequeño, antes</em>. Señales de indefinido: <em>de repente, un día, ayer, primero… luego…</em>, y los periodos cerrados: <em>Viví allí <strong>diez años</strong></em>."
          }
        ],
        "examples": [
          { "id": "e1", "text": "De pequeño vivía en Valencia y jugaba en la playa todos los días." },
          { "id": "e2", "text": "Mi abuela hacía un cocido riquísimo los domingos." },
          { "id": "e3", "text": "Cuando tenía ocho años, quería ser futbolista." },
          { "id": "e4", "text": "Antes solíamos veranear en el pueblo de mis abuelos." },
          { "id": "e5", "text": "La casa de mis tíos era enorme y tenía un patio con naranjos." },
          { "id": "e6", "text": "Mientras cenábamos, empezó a llover." },
          { "id": "e7", "text": "Íbamos al colegio andando; no había autobús." },
          { "id": "e8", "text": "De pequeña veía dibujos animados todos los sábados por la mañana." }
        ],
        "flashcards": [
          { "id": "f1", "front": "de pequeño / de pequeña", "def": "Cuando era niño o niña." },
          { "id": "f2", "front": "jugaba", "def": "Imperfecto de jugar: costumbre o descripción del pasado." },
          { "id": "f3", "front": "solía + infinitivo", "def": "Una costumbre del pasado: solía madrugar." },
          { "id": "f4", "front": "era", "def": "El imperfecto de ser; solo hay tres verbos irregulares." },
          { "id": "f5", "front": "iba", "def": "El imperfecto de ir." },
          { "id": "f6", "front": "veía", "def": "El imperfecto de ver, el tercer irregular." },
          { "id": "f7", "front": "había", "def": "El imperfecto de 'hay': no había autobús." },
          { "id": "f8", "front": "mientras", "def": "Al mismo tiempo; señal típica de imperfecto." },
          { "id": "f9", "front": "de repente", "def": "En un momento, sin aviso; señal de indefinido." },
          { "id": "f10", "front": "todos los días", "def": "Señal de costumbre: imperfecto." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "De pequeño ___ al parchís con mi abuelo todos los domingos.",
            "options": ["jugué", "jugaba", "juego", "jugábamos"],
            "correct": 1,
            "explain": "Es una costumbre del pasado ('de pequeño… todos los domingos'): jugaba. 'Jugué' sería una acción de un día concreto, y 'jugábamos' es para nosotros."
          },
          {
            "id": "q2",
            "q": "___ (yo) la siesta cuando, de repente, sonó el teléfono.",
            "options": ["Dormí", "Duermo", "Dormía", "Dormías"],
            "correct": 2,
            "explain": "'Dormía' es el fondo de la escena y 'sonó' ('de repente') es la acción que la interrumpe. 'Dormí la siesta cuando de repente sonó…' no funciona: el indefinido no describe una acción en curso."
          },
          {
            "id": "q3",
            "q": "___ en Sevilla toda mi infancia; luego nos mudamos a Madrid.",
            "options": ["Vivía", "Viví", "Vivo", "Vivís"],
            "correct": 1,
            "explain": "'Toda mi infancia' es un periodo cerrado y completo, y 'luego' ordena la historia: viví. ¡Ojo! 'De pequeño vivía en Sevilla' (descripción abierta) también existe — pero con el periodo cerrado y el 'luego', aquí solo funciona el indefinido."
          },
          {
            "id": "q4",
            "q": "Cuando ___ quince años, mi familia se mudó a Zaragoza.",
            "options": ["tuve", "tengo", "teníamos", "tenía"],
            "correct": 3,
            "explain": "La edad en el pasado va en imperfecto: cuando tenía quince años. 'Cuando tuve quince años' no se dice (sería 'cuando cumplí quince años'); 'teníamos' es para nosotros."
          },
          {
            "id": "q5",
            "q": "Antes ___ (yo) ir a la playa en tren, pero ahora voy en coche.",
            "options": ["solí", "solía", "suelo", "solían"],
            "correct": 1,
            "explain": "'Solía + infinitivo' expresa una costumbre del pasado: antes solía ir. 'Suelo' es presente y choca con 'antes… pero ahora'; 'solí' no se usa: soler no tiene indefinido en este sentido."
          }
        ]
      },
      "a2-rutina": {
        "id": "a2-rutina",
        "icon": "⏰",
        "level": "A2",
        "title": "La rutina y los reflexivos",
        "theory": [
          {
            "id": "t1",
            "heading": "Los verbos reflexivos",
            "body": "Muchos verbos de la rutina son <strong>reflexivos</strong>: la acción vuelve a ti mismo. Modelo <strong>levantarse</strong>: <em><strong>me</strong> levanto, <strong>te</strong> levantas, <strong>se</strong> levanta, <strong>nos</strong> levantamos, <strong>os</strong> levantáis, <strong>se</strong> levantan</em>. El pronombre va <strong>delante</strong> del verbo conjugado, pero con un infinitivo se pega detrás: <em>Voy a levantar<strong>me</strong></em>. ¡Ojo! Sin pronombre cambia el sentido: <em>me levanto</em> (de la cama) no es lo mismo que <em>levanto la mano</em>."
          },
          {
            "id": "t2",
            "heading": "Mi rutina, paso a paso",
            "body": "Los verbos clave del día: <strong>despertarse</strong> (e→ie: <em>me despierto</em>), <strong>levantarse</strong>, <strong>ducharse</strong>, <strong>vestirse</strong> (e→i: <em>me visto</em>), <strong>desayunar</strong>, <strong>salir de casa</strong>, <strong>volver a casa</strong>, <strong>acostarse</strong> (o→ue: <em>me acuesto</em>). Para las costumbres del presente: <strong>soler + infinitivo</strong>: <em>Suelo levantarme a las siete</em>. Y un verbo muy útil: <strong>madrugar</strong> = levantarse muy temprano."
          },
          {
            "id": "t3",
            "heading": "El horario español y la siesta",
            "body": "El horario de España sorprende: se come sobre las <strong>dos</strong>, se cena sobre las <strong>nueve y media</strong> y la tele importante empieza a las once. ¿Y la <strong>siesta</strong>? Es más <strong>mito</strong> que realidad: la mayoría de la gente que trabaja <strong>no</strong> duerme la siesta a diario; se duerme sobre todo el fin de semana, en vacaciones y en verano, cuando hace mucho calor. Eso sí: la palabra es española y el invento, buenísimo."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Me levanto a las siete y media y me ducho antes de desayunar." },
          { "id": "e2", "text": "Mi hermana se acuesta tardísimo: nunca antes de las doce." },
          { "id": "e3", "text": "¿A qué hora te despiertas los domingos? — Tarde, sobre las once." },
          { "id": "e4", "text": "Primero me visto y luego desayuno un café con tostada." },
          { "id": "e5", "text": "Suelo salir de casa a las ocho y coger el metro." },
          { "id": "e6", "text": "¿Os acostáis tarde en verano? — Sí, es que en España se cena a las diez." },
          { "id": "e7", "text": "Mañana madrugo: voy a levantarme a las seis." },
          { "id": "e8", "text": "La siesta diaria es casi un mito: se duerme sobre todo en verano y el finde." }
        ],
        "flashcards": [
          { "id": "f1", "front": "levantarse", "def": "Salir de la cama por la mañana: me levanto a las siete." },
          { "id": "f2", "front": "ducharse", "def": "Lavarse en la ducha: me ducho por la mañana." },
          { "id": "f3", "front": "acostarse", "def": "Irse a la cama (o→ue): me acuesto a las once." },
          { "id": "f4", "front": "despertarse", "def": "Abrir los ojos (e→ie): me despierto antes de levantarme." },
          { "id": "f5", "front": "vestirse", "def": "Ponerse la ropa (e→i): me visto en cinco minutos." },
          { "id": "f6", "front": "desayunar", "def": "Tomar la primera comida del día." },
          { "id": "f7", "front": "soler + infinitivo", "def": "Una costumbre del presente: suelo madrugar." },
          { "id": "f8", "front": "madrugar", "def": "Levantarse muy temprano." },
          { "id": "f9", "front": "la siesta", "def": "Dormir un rato después de comer; hoy, más del finde que diaria." },
          { "id": "f10", "front": "os levantáis", "def": "La forma de vosotros: ¿a qué hora os levantáis?" }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "(Yo) ___ a las siete todos los días.",
            "options": ["me levanto", "se levanta", "levanto", "me levantas"],
            "correct": 0,
            "explain": "Levantarse es reflexivo: yo me levanto. 'Levanto' sin pronombre es el error clásico (eso es levantar algo, como la mano); 'se levanta' es para él o ella."
          },
          {
            "id": "q2",
            "q": "Mis padres ___ temprano porque entran a trabajar a las ocho.",
            "options": ["se levanta", "se levantan", "nos levantamos", "levantan"],
            "correct": 1,
            "explain": "'Mis padres' es plural: se levantan. 'Se levanta' es singular, 'nos levantamos' es para nosotros y 'levantan' pierde el pronombre reflexivo."
          },
          {
            "id": "q3",
            "q": "¿A qué hora ___ (vosotros) los domingos?",
            "options": ["os acostáis", "se acuestan", "te acuestas", "os acostáis tarde"],
            "correct": 0,
            "explain": "Con vosotros, el pronombre es 'os': ¿a qué hora os acostáis? 'Se acuestan' es para ellos o ustedes y 'te acuestas' es para tú."
          },
          {
            "id": "q4",
            "q": "Esta noche voy a ___ pronto: mañana madrugo.",
            "options": ["acostarme", "me acostar", "acostarse", "me acuesto"],
            "correct": 0,
            "explain": "Con 'voy a' + infinitivo, el pronombre se pega detrás y concuerda con yo: voy a acostarme. 'Me acostar' tiene el orden mal, 'acostarse' es otra persona y 'me acuesto' no es infinitivo."
          },
          {
            "id": "q5",
            "q": "En la España de hoy, la siesta diaria…",
            "options": ["es obligatoria en las empresas", "es más mito que realidad: pocos la duermen a diario", "dura toda la tarde para todo el mundo", "solo se duerme en invierno"],
            "correct": 1,
            "explain": "La mayoría de la gente que trabaja no duerme la siesta a diario: se duerme sobre todo el fin de semana, en vacaciones y en verano."
          }
        ]
      },
      "a2-compras": {
        "id": "a2-compras",
        "icon": "🛍️",
        "level": "A2",
        "title": "Compras, mercados y rebajas",
        "theory": [
          {
            "id": "t1",
            "heading": "En el mercado",
            "body": "Cada ciudad española tiene su <strong>mercado</strong> de toda la vida, con <strong>puestos</strong> de fruta, pescado y carne: la Boquería en Barcelona, el Mercado Central de Valencia… Al llegar a un puesto, pregunta <strong>¿Quién es el último?</strong> — así se pide la vez en la cola. Para pedir: <em>¿Me pone un kilo de tomates?</em> Y para saber el precio: <strong>¿Cuánto cuesta?</strong> (una cosa) / <strong>¿Cuánto cuestan?</strong> (varias) / <strong>¿Cuánto es?</strong> (el total)."
          },
          {
            "id": "t2",
            "heading": "Pagar: efectivo, tarjeta y la vuelta",
            "body": "Al pagar te preguntan: <em>¿En <strong>efectivo</strong> o con <strong>tarjeta</strong>?</em> El efectivo son billetes y monedas; hoy casi todo se puede pagar con tarjeta o con el <strong>móvil</strong>. Si pagas de más, te devuelven <strong>la vuelta</strong>: <em>Aquí tiene la vuelta: tres euros</em>. Y dos veces al año llegan <strong>las rebajas</strong> — en <strong>enero</strong> y en <strong>julio</strong> — cuando las tiendas bajan los precios y media España sale de compras."
          },
          {
            "id": "t3",
            "heading": "La ropa: probarse y quedar bien",
            "body": "En una tienda de ropa: <strong>probarse</strong> algo (<em>¿Puedo probarme estos vaqueros?</em>), preguntar por <strong>la talla</strong> (<em>¿Tiene una talla más?</em>) y buscar <strong>los probadores</strong>. El verbo <strong>quedar</strong> funciona como gustar: la ropa es el sujeto: <em>Esa chaqueta te <strong>queda</strong> genial; esos vaqueros te <strong>quedan</strong> pequeños</em>. Si te convence: <em><strong>Me lo llevo</strong></em> (= lo compro)."
          }
        ],
        "examples": [
          { "id": "e1", "text": "¿Quién es el último? — Yo. Pues voy detrás de usted." },
          { "id": "e2", "text": "¿Me pone un kilo de tomates y dos aguacates, por favor?" },
          { "id": "e3", "text": "¿Cuánto es todo? — Son doce euros con cuarenta." },
          { "id": "e4", "text": "¿En efectivo o con tarjeta? — Con tarjeta. ¿Puedo pagar con el móvil?" },
          { "id": "e5", "text": "Aquí tiene la vuelta: tres euros y veinte céntimos." },
          { "id": "e6", "text": "En enero empiezan las rebajas y todo está mucho más barato." },
          { "id": "e7", "text": "¿Puedo probarme estos vaqueros? — Claro, los probadores están al fondo." },
          { "id": "e8", "text": "Esa chaqueta te queda genial. — ¿Sí? Pues me la llevo." }
        ],
        "flashcards": [
          { "id": "f1", "front": "el mercado", "def": "El edificio con puestos de fruta, pescado y carne." },
          { "id": "f2", "front": "¿Quién es el último?", "def": "Así se pide la vez en una cola española." },
          { "id": "f3", "front": "¿Cuánto cuesta?", "def": "La pregunta del precio; con plural: ¿cuánto cuestan?" },
          { "id": "f4", "front": "la vuelta", "def": "El dinero que te devuelven cuando pagas de más." },
          { "id": "f5", "front": "en efectivo", "def": "Pagar con billetes y monedas." },
          { "id": "f6", "front": "con tarjeta", "def": "Pagar sin efectivo, con el banco." },
          { "id": "f7", "front": "las rebajas", "def": "Cuando las tiendas bajan los precios: enero y julio." },
          { "id": "f8", "front": "probarse", "def": "Ponerse la ropa antes de comprarla: ¿puedo probármelo?" },
          { "id": "f9", "front": "la talla", "def": "La medida de la ropa: ¿tiene una talla más?" },
          { "id": "f10", "front": "quedar bien / mal", "def": "Funciona como gustar: esa camisa te queda bien." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "¿Cuánto ___ estas naranjas?",
            "options": ["cuesta", "cuestan", "cuestas", "costamos"],
            "correct": 1,
            "explain": "El sujeto es 'estas naranjas' (plural): cuestan. 'Cuesta' es para una sola cosa; 'cuestas' y 'costamos' concuerdan con personas."
          },
          {
            "id": "q2",
            "q": "Pago con billetes y monedas, es decir, pago…",
            "options": ["con tarjeta", "en efectivo", "con el móvil", "a plazos"],
            "correct": 1,
            "explain": "Los billetes y las monedas son el efectivo. La tarjeta y el móvil son pagos electrónicos."
          },
          {
            "id": "q3",
            "q": "Llegas a la cola del puesto del mercado. Para pedir la vez, preguntas:",
            "options": ["¿Cuánto cuesta?", "¿Dónde está la caja?", "¿Quién es el último?", "¿Tiene tarjeta?"],
            "correct": 2,
            "explain": "'¿Quién es el último?' es la fórmula clásica para saber tu posición en la cola. Las otras preguntas no piden la vez."
          },
          {
            "id": "q4",
            "q": "Esa camisa te ___ muy bien: cómprala.",
            "options": ["queda", "quedas", "quedan", "quedo"],
            "correct": 0,
            "explain": "'Quedar' funciona como gustar: el sujeto es 'esa camisa' (singular): te queda bien. 'Quedas' es el error típico por imitar el 'te'; 'quedan' sería para un sujeto plural."
          },
          {
            "id": "q5",
            "q": "Las rebajas en España son, sobre todo, en…",
            "options": ["marzo y septiembre", "solo en diciembre", "abril y octubre", "enero y julio"],
            "correct": 3,
            "explain": "Las dos grandes temporadas de rebajas son enero (después de Reyes) y julio, al empezar el verano."
          }
        ]
      },
      "a2-serestar2": {
        "id": "a2-serestar2",
        "icon": "🎭",
        "level": "A2",
        "title": "Ser y estar II: estoy comiendo",
        "theory": [
          {
            "id": "t1",
            "heading": "Repaso y un uso nuevo: los eventos",
            "body": "Repaso rápido: <strong>ser</strong> para identidad, origen, profesión y características; <strong>estar</strong> para el lugar y los estados. Pero ¡ojo con los <strong>eventos</strong>! Un concierto, una fiesta o una boda van con <strong>ser</strong>: <em>La fiesta <strong>es</strong> en casa de Marta; el concierto <strong>es</strong> en la Plaza Mayor</em> — decimos dónde <strong>ocurre</strong>, no dónde está una cosa. Compara: <em>El teatro <strong>está</strong> en el centro</em> (lugar del edificio) / <em>La obra <strong>es</strong> en el teatro</em> (evento). Y con <strong>de</strong>: <em>estar de vacaciones, estar de rebajas</em>."
          },
          {
            "id": "t2",
            "heading": "Estar + gerundio: ahora mismo",
            "body": "Para una acción que ocurre <strong>en este momento</strong>: <strong>estar + gerundio</strong>. El gerundio: -ar → <strong>-ando</strong> (<em>hablando</em>), -er/-ir → <strong>-iendo</strong> (<em>comiendo, viviendo</em>). Irregulares importantes: <em>leer → le<strong>y</strong>endo, dormir → d<strong>u</strong>rmiendo, pedir → p<strong>i</strong>diendo</em>. Compara: <em>Como a las dos</em> (costumbre) / <em><strong>Estoy comiendo</strong>, te llamo luego</em> (ahora mismo). La pregunta estrella: <strong>¿Qué estás haciendo?</strong>"
          },
          {
            "id": "t3",
            "heading": "Palabras que cambian de significado",
            "body": "Algunos adjetivos cambian de significado con ser o estar. <strong>Listo</strong>: <em>ser listo</em> = inteligente / <em>estar listo</em> = preparado. <strong>Rico</strong>: <em>ser rico</em> = tener mucho dinero / <em>estar rico</em> = tener buen sabor. <strong>Aburrido</strong>: <em>ser aburrido</em> = no ser interesante / <em>estar aburrido</em> = sentir aburrimiento ahora. <strong>Malo</strong>: <em>ser malo</em> = de mala calidad o mala persona / <em>estar malo</em> = estar enfermo (o, una comida, en mal estado)."
          }
        ],
        "examples": [
          { "id": "e1", "text": "¿Qué estás haciendo? — Estoy viendo una serie." },
          { "id": "e2", "text": "Ana no puede ponerse ahora: está hablando por teléfono." },
          { "id": "e3", "text": "La fiesta es en casa de Marta, pero Marta todavía está en el supermercado." },
          { "id": "e4", "text": "Este gazpacho está riquísimo. — Y eso que el cocinero no es rico: cocina con cuatro cosas." },
          { "id": "e5", "text": "Mi sobrina es muy lista: con cuatro años ya lee." },
          { "id": "e6", "text": "¿Estáis listos? El taxi está esperando abajo." },
          { "id": "e7", "text": "La película es aburridísima; por eso estoy aburrido." },
          { "id": "e8", "text": "Estamos de vacaciones en Menorca hasta el domingo." }
        ],
        "flashcards": [
          { "id": "f1", "front": "estar + gerundio", "def": "Una acción en este momento: estoy comiendo." },
          { "id": "f2", "front": "el gerundio", "def": "-ar → -ando; -er/-ir → -iendo: hablando, comiendo." },
          { "id": "f3", "front": "leyendo", "def": "El gerundio irregular de leer." },
          { "id": "f4", "front": "durmiendo", "def": "El gerundio irregular de dormir (o→u)." },
          { "id": "f5", "front": "ser listo", "def": "Ser inteligente." },
          { "id": "f6", "front": "estar listo", "def": "Estar preparado: ¿estás listo? Nos vamos." },
          { "id": "f7", "front": "ser rico", "def": "Tener mucho dinero." },
          { "id": "f8", "front": "estar rico", "def": "Tener buen sabor: ¡qué rica está la paella!" },
          { "id": "f9", "front": "estar aburrido", "def": "Sentir aburrimiento ahora; 'ser aburrido' = no ser interesante." },
          { "id": "f10", "front": "la fiesta es en…", "def": "Los eventos van con 'ser': el concierto es en la plaza." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "No puedo salir ahora: ___ estudiando para un examen.",
            "options": ["estoy", "soy", "está", "estás"],
            "correct": 0,
            "explain": "El gerundio va con 'estar', y 'no puedo' marca la persona yo: estoy estudiando. 'Soy estudiando' es el error clásico; 'está' y 'estás' son otras personas."
          },
          {
            "id": "q2",
            "q": "El concierto ___ en la Plaza Mayor este sábado. (un evento)",
            "options": ["está", "es", "estás", "son"],
            "correct": 1,
            "explain": "Los eventos van con 'ser': decimos dónde ocurre el concierto. 'Está' es la trampa — sería para el lugar de una cosa (el quiosco está en la plaza), no de un evento."
          },
          {
            "id": "q3",
            "q": "¡Prueba la tortilla! ___ riquísima hoy.",
            "options": ["Es", "Eres", "Está", "Estás"],
            "correct": 2,
            "explain": "Hablamos del sabor de hoy ('prueba', 'hoy'): está riquísima. 'Ser rico' significa tener dinero; 'eres' y 'estás' son para tú, no para la tortilla."
          },
          {
            "id": "q4",
            "q": "Ya podemos irnos. ¿___ listos todos?",
            "options": ["Sois", "Estáis", "Estás", "Es"],
            "correct": 1,
            "explain": "'Ya podemos irnos' pregunta si estáis preparados: estar listo. 'Sois listos' significaría que sois inteligentes; 'estás' es singular y aquí hablamos de todos."
          },
          {
            "id": "q5",
            "q": "Mario no se puede poner: está ___ la siesta.",
            "options": ["durmiendo", "dormiendo", "duerme", "dormido"],
            "correct": 0,
            "explain": "El gerundio de dormir cambia o→u: durmiendo. 'Dormiendo' es el error típico; 'duerme' no es gerundio, y 'dormido' es un estado y no puede llevar 'la siesta' detrás."
          }
        ]
      },
      "a2-planes": {
        "id": "a2-planes",
        "icon": "🗓️",
        "level": "A2",
        "title": "Planes: voy a…, quedar y el puente",
        "theory": [
          {
            "id": "t1",
            "heading": "Ir a + infinitivo",
            "body": "Para hablar de <strong>planes</strong>, el español usa <strong>ir a + infinitivo</strong>: <em><strong>Voy a</strong> viajar, <strong>vas a</strong> comer, <strong>vamos a</strong> salir, <strong>vais a</strong> venir…</em> No olvides la <strong>a</strong>: <em>voy <strong>a</strong> salir</em>, nunca 'voy salir'. Palabras señal del futuro: <em>mañana, luego, esta noche, <strong>este finde</strong>, <strong>la semana que viene</strong>, el mes que viene</em>. Con reflexivos, el pronombre se pega al infinitivo: <em>Voy a acostar<strong>me</strong> pronto</em>."
          },
          {
            "id": "t2",
            "heading": "Quedar: el deporte nacional",
            "body": "<strong>Quedar</strong> = ponerse de acuerdo para verse, y en España se queda muchísimo: en una plaza, en una terraza, en la puerta del cine. <em>¿<strong>Quedamos</strong> el jueves? ¿A qué hora <strong>quedamos</strong>? <strong>He quedado</strong> con Ana a las diez</em> — 'he quedado' significa que la cita <strong>ya está cerrada</strong>. ¡No lo confundas con <em>quedarse</em> (= no salir): <em>Hoy <strong>me quedo</strong> en casa</em>!"
          },
          {
            "id": "t3",
            "heading": "Festivos y puentes",
            "body": "Un <strong>festivo</strong> es un día oficial sin trabajo. Cuando el festivo cae en jueves o martes, mucha gente se toma libre el día de en medio y une el festivo con el fin de semana: eso es <strong>el puente</strong>, y tomárselo se dice <strong>hacer puente</strong>. Los puentes famosos (el puente de mayo, el de diciembre) llenan las carreteras y las playas de España. La pregunta típica: <em>¿Qué vas a hacer <strong>en el puente</strong>?</em>"
          }
        ],
        "examples": [
          { "id": "e1", "text": "Mañana voy a comer con mis abuelos." },
          { "id": "e2", "text": "Este finde vamos a hacer una excursión a la sierra." },
          { "id": "e3", "text": "¿Qué vas a hacer en el puente de mayo? — Voy a ir a Cádiz." },
          { "id": "e4", "text": "He quedado con Ana a las diez en la Puerta del Sol." },
          { "id": "e5", "text": "¿Quedamos el jueves? — Vale. ¿A qué hora te viene bien?" },
          { "id": "e6", "text": "El lunes es festivo, así que vamos a hacer puente." },
          { "id": "e7", "text": "Esta noche no voy a salir: voy a acostarme pronto." },
          { "id": "e8", "text": "¿Vais a venir a la cena del sábado? — Sí, y vamos a llevar el postre." }
        ],
        "flashcards": [
          { "id": "f1", "front": "ir a + infinitivo", "def": "Para los planes: voy a viajar, vamos a salir." },
          { "id": "f2", "front": "la semana que viene", "def": "La semana siguiente a esta." },
          { "id": "f3", "front": "quedar", "def": "Ponerse de acuerdo para verse: ¿quedamos el jueves?" },
          { "id": "f4", "front": "he quedado a las diez", "def": "La cita ya está cerrada: nos vemos a esa hora." },
          { "id": "f5", "front": "quedarse en casa", "def": "No salir: hoy me quedo en casa. ¡No es lo mismo que quedar!" },
          { "id": "f6", "front": "el festivo", "def": "Un día oficial sin trabajo." },
          { "id": "f7", "front": "el puente", "def": "Un festivo unido al fin de semana: varios días libres." },
          { "id": "f8", "front": "hacer puente", "def": "Tomarse libre el día entre el festivo y el finde." },
          { "id": "f9", "front": "¿a qué hora quedamos?", "def": "La pregunta para poner la hora de la cita." },
          { "id": "f10", "front": "esta noche", "def": "La noche de hoy: esta noche voy a salir." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Mañana ___ (yo) a visitar a mi abuela.",
            "options": ["voy", "fui", "iba", "vas"],
            "correct": 0,
            "explain": "Es un plan de mañana: voy a visitar. 'Fui' e 'iba' son pasados y chocan con 'mañana'; 'vas' es para tú."
          },
          {
            "id": "q2",
            "q": "¿Qué ___ a hacer vosotros en el puente?",
            "options": ["vais", "van", "vamos", "va"],
            "correct": 0,
            "explain": "Con vosotros: vais a hacer. 'Van' es para ellos o ustedes, 'vamos' para nosotros y 'va' para él o ella."
          },
          {
            "id": "q3",
            "q": "'He quedado con Marta a las ocho' significa que…",
            "options": ["vamos a vernos a las ocho", "me quedo en casa a las ocho", "Marta trabaja hasta las ocho", "he perdido la cita de las ocho"],
            "correct": 0,
            "explain": "Quedar con alguien = tener una cita cerrada para verse. 'Quedarse en casa' (no salir) es otro verbo: no los confundas."
          },
          {
            "id": "q4",
            "q": "El jueves es festivo y muchos tampoco trabajan el viernes: hacen…",
            "options": ["cola", "puente", "rebajas", "sobremesa"],
            "correct": 1,
            "explain": "Unir el festivo con el fin de semana tomándose el día de en medio es 'hacer puente'. La cola es para esperar y las rebajas son de las tiendas."
          },
          {
            "id": "q5",
            "q": "Esta noche no ___ salir: estoy cansadísimo.",
            "options": ["voy a", "voy", "va a", "fui a"],
            "correct": 0,
            "explain": "El plan se construye con ir a + infinitivo: no voy a salir. 'Voy salir', sin la 'a', es el error clásico; 'va a' es otra persona y 'fui a' es pasado."
          }
        ]
      },
      "a2-registro": {
        "id": "a2-registro",
        "icon": "🤝",
        "level": "A2",
        "title": "Tú, usted y vosotros",
        "theory": [
          {
            "id": "t1",
            "heading": "Tú por defecto",
            "body": "En España, el trato normal es <strong>tú</strong>: en tiendas, en bares, en el trabajo, entre desconocidos jóvenes… tutear no es de mala educación, es lo habitual. <strong>Usted</strong> se reserva para el <strong>respeto</strong>: personas mayores, situaciones muy formales, atención oficial. Con usted, el verbo va en <strong>tercera persona</strong>: <em>¿Cómo <strong>está</strong> (usted)? ¿<strong>Tiene</strong> hora?</em> En caso de duda con una persona mayor, empieza de usted: ya te dirán <em>'puedes tutearme'</em>."
          },
          {
            "id": "t2",
            "heading": "Vosotros y ustedes",
            "body": "El plural informal de España es <strong>vosotros / vosotras</strong>, y se usa constantemente: <em>¿<strong>Venís</strong> al cine? ¿Dónde están <strong>vuestras</strong> cosas?</em> <strong>Ustedes</strong> es el plural <strong>formal</strong> (con verbo en tercera persona: <em>¿Ustedes <strong>vienen</strong>?</em>). ¡Dato importante! En <strong>Canarias</strong> y en toda <strong>Hispanoamérica</strong> no se usa vosotros: allí 'ustedes' es el único plural, formal e informal."
          },
          {
            "id": "t3",
            "heading": "Oye, oiga y perdona",
            "body": "Para llamar la atención de alguien: <strong>oye</strong> (de tú) y <strong>oiga</strong> (de usted): <em>Oye, ¿me pasas el pan? / Oiga, perdone, ¿esta es la cola?</em> Igual con <strong>perdona / perdone</strong> para empezar una pregunta. En el bar, un <em>'¡oye, perdona!'</em> al camarero es completamente normal, no es grosero. Y el verbo del trato: <strong>tutear</strong> = hablar de tú: <em>Puedes tutearme</em>."
          }
        ],
        "examples": [
          { "id": "e1", "text": "En España, en las tiendas casi todo el mundo te habla de tú." },
          { "id": "e2", "text": "Oiga, perdone, ¿esta es la cola del autobús?" },
          { "id": "e3", "text": "Oye, ¿me pasas el pan?" },
          { "id": "e4", "text": "¿Vosotros venís al cine esta tarde?" },
          { "id": "e5", "text": "Buenos días, ¿qué le pongo? — ¿Me pone un café con leche?" },
          { "id": "e6", "text": "Chicos, ¿dónde están vuestras mochilas?" },
          { "id": "e7", "text": "El médico trata a mi abuelo de usted: ¿Cómo se encuentra hoy?" },
          { "id": "e8", "text": "En Canarias y en América se usa 'ustedes' en lugar de 'vosotros'." }
        ],
        "flashcards": [
          { "id": "f1", "front": "tú", "def": "El trato normal en España: informal, para casi todo el mundo." },
          { "id": "f2", "front": "usted", "def": "El trato de respeto; el verbo va en tercera persona." },
          { "id": "f3", "front": "vosotros / vosotras", "def": "El plural informal, muy usado en España." },
          { "id": "f4", "front": "ustedes", "def": "El plural formal en España; en América y Canarias, el único plural." },
          { "id": "f5", "front": "oye", "def": "Para llamar la atención a alguien de tú." },
          { "id": "f6", "front": "oiga", "def": "Para llamar la atención a alguien de usted." },
          { "id": "f7", "front": "perdona / perdone", "def": "Para disculparte o empezar una pregunta: de tú / de usted." },
          { "id": "f8", "front": "tutear", "def": "Hablar a alguien de tú: puedes tutearme." },
          { "id": "f9", "front": "vuestro / vuestra", "def": "De vosotros: vuestra casa, vuestros libros." },
          { "id": "f10", "front": "¿me pones…?", "def": "En el bar, de tú: ¿me pones una caña?" }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hablas de usted con una señora mayor: 'Perdone, ¿___ hora?'",
            "options": ["tienes", "tiene", "tenéis", "tengo"],
            "correct": 1,
            "explain": "Con usted, el verbo va en tercera persona: ¿tiene hora? 'Tienes' sería de tú, 'tenéis' de vosotros y 'tengo' es para yo."
          },
          {
            "id": "q2",
            "q": "En España preguntas a tus dos mejores amigos: '¿___ hambre?'",
            "options": ["Tiene", "Tienes", "Tenéis", "Tienen"],
            "correct": 2,
            "explain": "Dos amigos, trato informal, en España: vosotros → tenéis. 'Tienen' sería ustedes (el plural formal en España); 'tienes' es para uno solo."
          },
          {
            "id": "q3",
            "q": "Para llamar la atención a un desconocido mayor, de usted, dices:",
            "options": ["¡Eh, tú!", "Oye, tío…", "Hola, ¿qué pasa?", "Oiga, perdone…"],
            "correct": 3,
            "explain": "De usted se dice 'oiga, perdone'. 'Oye' y '¡eh, tú!' son de tú (y '¡eh, tú!' además suena brusco); 'hola, ¿qué pasa?' es un saludo entre amigos."
          },
          {
            "id": "q4",
            "q": "En una tienda normal de España, lo más habitual es que el dependiente te hable…",
            "options": ["de tú", "de usted", "de vosotros", "en inglés"],
            "correct": 0,
            "explain": "En España el tuteo es lo normal en tiendas y bares; el usted se reserva para el respeto y las situaciones muy formales. 'Vosotros' es plural y tú eres una sola persona."
          },
          {
            "id": "q5",
            "q": "La pregunta '¿De dónde sois?' va dirigida a…",
            "options": ["una persona, de manera formal", "varias personas, de manera informal", "una persona, de manera informal", "varias personas, de manera formal"],
            "correct": 1,
            "explain": "'Sois' es la forma de vosotros: plural e informal. A una persona sería '¿de dónde eres?' (tú) o '¿de dónde es?' (usted); al plural formal, '¿de dónde son ustedes?'."
          }
        ]
      },
//__APPEND_HERE__
}}};
