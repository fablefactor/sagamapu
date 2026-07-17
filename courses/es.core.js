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
//__APPEND_HERE__
}}};
