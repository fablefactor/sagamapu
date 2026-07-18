/* Pathway to B1 — course "es", English (en) support overlay.
   Plain JS, no JSX: a one-line window.PTB_COURSES wrapper around a pure
   JSON literal, loaded via <script src> AFTER courses/es.core.js.

   Translations are keyed by topic id + ITEM id from the core — never by
   array index.
   ID STABILITY RULE: every content item carries a short stable id
   (theory t*, examples e*, flashcards f*, quiz q*, placement p*).
   Support overlays key translations by topic id + ITEM id — never by
   array index. Future insertions MUST mint NEW ids (t4, e9, f11, ...);
   NEVER renumber or reuse existing ids, even when inserting mid-array
   or deleting items.

   NOTE: the course teaches Peninsular (Spain) Spanish on purpose —
   vosotros, coger, el zumo, el ordenador. This overlay is British English.

   Overlays for all 23 topics are present — authoring complete. */
export default {
  "name": "English",
  "topics": {
    "a1-saludos": {
      "title": "Greetings and introductions",
      "theory": {
        "t1": {
          "heading": "Greetings",
          "body": "<strong>Hola</strong> is the most common greeting in Spain — it works for anyone, at any time of day. <strong>Buenos días</strong> (good morning) is used until lunchtime — and in Spain that means around two o'clock! After lunch: <strong>buenas tardes</strong> (good afternoon/evening), and at night: <strong>buenas noches</strong>. To ask how someone is: <strong>¿Qué tal?</strong> or <strong>¿Cómo estás?</strong> (how are you?). When leaving, say <strong>adiós</strong> (goodbye), <strong>hasta luego</strong> (see you later) or <strong>nos vemos</strong> (see you)."
        },
        "t2": {
          "heading": "Introducing yourself",
          "body": "To say your name: <strong>me llamo…</strong> (<em>Me llamo Carmen</em> = my name is Carmen) or <strong>soy…</strong> (<em>Soy Carmen</em> = I'm Carmen). The question is: <strong>¿Cómo te llamas?</strong> (what's your name?). For your country or city: <strong>soy de…</strong> (I'm from…) and <strong>¿De dónde eres?</strong> (where are you from?). For age: <strong>¿Cuántos años tienes? — Tengo veinticinco años.</strong> (How old are you? — I'm twenty-five; literally 'I have twenty-five years'). When you meet someone new: <strong>encantado</strong> (if you're a man) or <strong>encantada</strong> (if you're a woman) — pleased to meet you — and the reply is <strong>igualmente</strong> (likewise)."
        },
        "t3": {
          "heading": "Two kisses and tú",
          "body": "In Spain, friends and people being introduced informally greet each other with <strong>dos besos</strong> — two kisses, one on each cheek (usually between women, or between a man and a woman). Between men, or in formal situations, you shake hands (<strong>dar la mano</strong>). With people your own age, <strong>tú</strong> (informal 'you') is the default — in shops, bars and with colleagues it's completely normal and not at all rude. <strong>Usted</strong> (formal 'you') is kept for elderly people or very formal situations."
        }
      },
      "examples": {
        "e1": "Hello! How are you? — Very well, and you?",
        "e2": "Good morning, my name is Carmen. What's your name?",
        "e3": "I'm from Valencia. Where are you from?",
        "e4": "Pleased to meet you. — Likewise.",
        "e5": "How old are you? — I'm twenty-five.",
        "e6": "This is my friend Lucía. — Hi, Lucía! Two kisses.",
        "e7": "See you later! See you tomorrow!",
        "e8": "Do you speak English? — Yes, a little."
      },
      "flashcards": {
        "f1": "Hello",
        "f2": "Good morning",
        "f3": "How are you? (informal)",
        "f4": "My name is…",
        "f5": "What's your name?",
        "f6": "Where are you from?",
        "f7": "Pleased to meet you",
        "f8": "See you later",
        "f9": "Thank you",
        "f10": "Two kisses (the typical greeting between friends in Spain)"
      },
      "quiz": {
        "q1": "'Buenos días' is used until lunchtime (around 2 pm in Spain). 'Buenas tardes' comes after lunch, 'buenas noches' is for night-time, and 'hasta luego' is a farewell, not a greeting.",
        "q2": "'¿Cómo te llamas?' is the correct question — literally 'how do you call yourself?', with the pronoun 'te'. The other forms aren't grammatical Spanish.",
        "q3": "Origin takes 'de': Soy de Valencia = I'm from Valencia. 'En' is for where you are, not where you're from.",
        "q4": "The typical informal greeting in Spain is two kisses, one on each cheek. A handshake is for formal situations.",
        "q5": "With people your own age, 'tú' is the default in Spain. 'Usted' is for very formal situations, and 'vosotros'/'ustedes' are plural forms — here you're talking to one person."
      }
    },
    "a1-genero": {
      "title": "Gender and articles",
      "theory": {
        "t1": {
          "heading": "Masculine and feminine",
          "body": "Every Spanish noun has a gender: <strong>masculine</strong> or <strong>feminine</strong>. The definite article ('the') is <strong>el</strong> (masculine) or <strong>la</strong> (feminine): <em>el libro</em> (the book), <em>la mesa</em> (the table). The indefinite article ('a/an') is <strong>un</strong> or <strong>una</strong>: <em>un libro, una mesa</em>. Rule of thumb: words ending in <strong>-o</strong> are masculine (<em>el zumo</em> — the juice; <em>el ordenador</em> — the computer — ends in -r, but it's masculine too!) and words ending in <strong>-a</strong> are feminine (<em>la casa</em> — the house, <em>la playa</em> — the beach)."
        },
        "t2": {
          "heading": "The traps",
          "body": "Some words break the rule. These are masculine despite ending in -a: <strong>el día</strong> (the day), <strong>el mapa</strong> (the map), <strong>el problema</strong> (the problem), <strong>el idioma</strong> (the language). And these are feminine despite ending in -o: <strong>la mano</strong> (the hand), <strong>la foto</strong> (short for fotografía), <strong>la moto</strong> (short for motocicleta). Two very handy endings: words in <strong>-ción</strong> and <strong>-dad</strong> are always feminine: <em>la estación</em> (the station), <em>la canción</em> (the song), <em>la ciudad</em> (the city), <em>la universidad</em> (the university)."
        },
        "t3": {
          "heading": "Plural and agreement",
          "body": "In the plural, the articles are <strong>los</strong> and <strong>las</strong>: <em>los libros, las mesas</em>. Adjectives <strong>agree</strong> with the noun in gender and number: <em>el zumo frí<strong>o</strong></em> (the cold juice), <em>la casa blanc<strong>a</strong></em> (the white house), <em>los ordenadores nuev<strong>os</strong></em> (the new computers), <em>las calles estrech<strong>as</strong></em> (the narrow streets). The adjective normally goes <strong>after</strong> the noun: <em>un coche rojo</em> (a red car), not <em>un rojo coche</em>."
        }
      },
      "examples": {
        "e1": "The new computer is on the table.",
        "e2": "The house is white and the car is red.",
        "e3": "Today is a lovely day.",
        "e4": "The right hand and the left foot.",
        "e5": "The problem is difficult, but the solution is easy.",
        "e6": "The books are on the bookshelf.",
        "e7": "The girls are friendly, and so are the boys.",
        "e8": "I've got a photo of the map of Spain."
      },
      "flashcards": {
        "f1": "the computer (Spain says 'ordenador', not 'computadora')",
        "f2": "the house",
        "f3": "the day (masculine despite the -a)",
        "f4": "the hand (feminine despite the -o)",
        "f5": "the map (masculine despite the -a)",
        "f6": "the photo (feminine — short for 'fotografía')",
        "f7": "the problem (masculine despite the -a)",
        "f8": "the city (words in -dad are feminine)",
        "f9": "the station (words in -ción are feminine)",
        "f10": "a / an (the indefinite articles)"
      },
      "quiz": {
        "q1": "'Problema' is masculine despite ending in -a: el problema. 'La problema' is a very common learner error; 'los' is plural, and 'una problema' mixes genders.",
        "q2": "'Mano' is feminine despite ending in -o: la mano. 'El mano' and 'un mano' are classic mistakes.",
        "q3": "'Casa' is feminine (la casa) and the adjective agrees: blanca. Both the article and the adjective have to be feminine.",
        "q4": "Words ending in -ción are always feminine: la estación, la canción, la habitación. It's a rule with no exceptions — learn it and win lots of words at once!",
        "q5": "In the plural, everything agrees: los ordenadores nuevos. Article, noun and adjective all go masculine plural."
      }
    },
    "a1-presente": {
      "title": "The present tense: -ar, -er, -ir",
      "theory": {
        "t1": {
          "heading": "-ar verbs",
          "body": "Spanish verbs end in <strong>-ar</strong>, <strong>-er</strong> or <strong>-ir</strong>. The biggest group is -ar. Model verb <strong>hablar</strong> (to speak): <em>yo habl<strong>o</strong>, tú habl<strong>as</strong>, él/ella/usted habl<strong>a</strong>, nosotros habl<strong>amos</strong>, vosotros habl<strong>áis</strong>, ellos/ellas/ustedes habl<strong>an</strong></em>. Note <strong>vosotros habláis</strong>: 'vosotros' is the informal plural of 'tú' ('you lot'), and in Spain it's used constantly — this course teaches it alongside 'ustedes'."
        },
        "t2": {
          "heading": "-er and -ir verbs",
          "body": "Model <strong>comer</strong> (to eat): <em>como, comes, come, comemos, com<strong>éis</strong>, comen</em>. Model <strong>vivir</strong> (to live): <em>vivo, vives, vive, viv<strong>imos</strong>, viv<strong>ís</strong>, viven</em>. The two groups are almost identical: only the <strong>nosotros</strong> forms (comemos / vivimos) and the <strong>vosotros</strong> forms (coméis / vivís) differ."
        },
        "t3": {
          "heading": "No subject pronoun",
          "body": "The verb ending already tells you who is speaking, so the pronouns <em>yo, tú, nosotros…</em> are normally <strong>dropped</strong>: you say <em>Hablo español</em> (I speak Spanish), not <em>Yo hablo español</em>. The pronoun is used only for <strong>emphasis</strong> or <strong>contrast</strong>: <em>Yo trabajo en Madrid, pero <strong>ella</strong> trabaja en Toledo</em> (I work in Madrid, but SHE works in Toledo). Also remember: in Spain, <strong>vosotros</strong> is the informal plural 'you' and <strong>ustedes</strong> the formal one."
        }
      },
      "examples": {
        "e1": "I speak Spanish and a little English.",
        "e2": "Where do you live? — I live in Madrid.",
        "e3": "My parents have lunch at two.",
        "e4": "Do you (all) speak English? — Yes, a little.",
        "e5": "I work in an office in the centre.",
        "e6": "Ana studies at the University of Salamanca.",
        "e7": "We live near the beach.",
        "e8": "What time do you (all) have lunch in Spain? — We eat at two."
      },
      "flashcards": {
        "f1": "to speak",
        "f2": "to eat",
        "f3": "to live",
        "f4": "to work",
        "f5": "to study",
        "f6": "we speak (the 'nosotros' form of 'hablar')",
        "f7": "you (all) speak (the 'vosotros' form of 'hablar')",
        "f8": "you (all) eat (the 'vosotros' form of 'comer')",
        "f9": "you (all) live (the 'vosotros' form of 'vivir')",
        "f10": "you (plural, informal) — used all the time in Spain"
      },
      "quiz": {
        "q1": "With 'yo', the ending is -o: hablo. 'Habla' goes with él/ella and 'hablas' with tú.",
        "q2": "With 'vosotros', the form of 'vivir' is 'vivís'. 'Viven' goes with ellos/ustedes — 'vosotros viven' is a very common mistake.",
        "q3": "With 'tú', the ending is -as: trabajas. 'Trabajo' is the 'yo' form and 'trabaja' the él/ella form.",
        "q4": "With 'nosotros', the form of 'comer' is 'comemos'. 'Coméis' is the vosotros form.",
        "q5": "The verb ending already shows who is speaking, so the pronoun is normally dropped. You use it for emphasis or contrast: 'Yo trabajo aquí, pero ella no' — I work here, but she doesn't."
      }
    },
    "a1-serestar": {
      "title": "Ser and estar I",
      "theory": {
        "t1": {
          "heading": "Ser: identity, origin, profession",
          "body": "<strong>Ser</strong> (to be): <em>soy, eres, es, somos, <strong>sois</strong>, son</em>. It's used for <strong>identity</strong> (<em>Soy Carmen</em> = I'm Carmen), <strong>origin</strong> (<em>Soy de Bilbao</em> = I'm from Bilbao), <strong>profession</strong> (<em>Es médica</em> = she's a doctor), <strong>nationality</strong> (<em>Somos españoles</em> = we're Spanish) and lasting <strong>characteristics</strong> of a person or thing (<em>Mi hermano es alto</em> = my brother is tall)."
        },
        "t2": {
          "heading": "Estar: location and state",
          "body": "<strong>Estar</strong> (also 'to be'): <em>estoy, estás, está, estamos, <strong>estáis</strong>, están</em>. It's used for <strong>location</strong> (<em>El museo está cerca</em> = the museum is nearby; <em>Sevilla está en el sur</em> = Seville is in the south) and for <strong>temporary states</strong> (<em>Estoy cansado</em> = I'm tired; <em>Está enferma</em> = she's ill; <em>Estamos contentos</em> = we're happy). Key question: <strong>¿Dónde está…?</strong> (where is…?)."
        },
        "t3": {
          "heading": "Clues for choosing",
          "body": "Ask yourself: am I saying <strong>who someone is</strong> or <strong>where they're from</strong>? → <strong>ser</strong>. Am I saying <strong>where something is</strong> or <strong>how someone feels today</strong>? → <strong>estar</strong>. Compare: <em><strong>Soy</strong> médico</em> (profession) / <em><strong>Estoy</strong> cansado</em> (today's state). <em>Madrid <strong>es</strong> grande</em> (characteristic) / <em>Madrid <strong>está</strong> en el centro de España</em> (location). Words like <em>hoy</em> (today) and <em>ahora</em> (now) signal a temporary state."
        }
      },
      "examples": {
        "e1": "I'm a teacher and I'm from Bilbao.",
        "e2": "Where's the toilet? — It's at the back, on the right.",
        "e3": "I'm very tired today.",
        "e4": "My brother is tall and friendly.",
        "e5": "The museum is near the cathedral.",
        "e6": "We're happy because it's Friday.",
        "e7": "Seville is in the south of Spain.",
        "e8": "Are you (all) students? — Yes, we're medical students."
      },
      "flashcards": {
        "f1": "to be (for identity, origin and profession)",
        "f2": "to be (for location and temporary states)",
        "f3": "I'm from… (origin — takes 'ser')",
        "f4": "I'm tired (a temporary state — takes 'estar')",
        "f5": "she's a doctor (professions take 'ser')",
        "f6": "he/she is in Madrid (location always takes 'estar')",
        "f7": "you (all) are (the 'vosotros' form of 'ser')",
        "f8": "you (all) are (the 'vosotros' form of 'estar')",
        "f9": "I'm ill (a temporary state — takes 'estar')",
        "f10": "we are (the 'nosotros' form of 'ser')"
      },
      "quiz": {
        "q1": "Origin takes 'ser': es de Granada — she's from Granada. 'Estar' is for where something is right now, not where someone is from.",
        "q2": "Location takes 'estar': está al lado de la estación — it's next to the station. 'Es' would be identity or characteristic, not location.",
        "q3": "'Cansada' (tired) is a temporary state (today, because I haven't slept much), so it takes 'estar': estoy cansada. 'Soy cansada' is the classic learner error.",
        "q4": "Professions take 'ser': es enfermera — she's a nurse. 'Está enfermera' is a typical mistake — 'estar' is for places and states.",
        "q5": "Location takes 'estar', and with 'vosotros' the form is 'estáis'. 'Sois' belongs to 'ser', and 'estás' is the tú form."
      }
    },
    "a1-numeros": {
      "title": "Numbers, the time and euros",
      "theory": {
        "t1": {
          "heading": "Numbers 0 to 100",
          "body": "<em>cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince</em>. Then: <em>dieciséis, diecisiete…</em> From 21 to 29 it's written as <strong>one word</strong>: <em>veintiuno, veintidós, veintitrés…</em> From 31 upwards, with <strong>y</strong> (and): <em>treinta y uno</em> (31), <em>cuarenta y cinco</em> (45), <em>noventa y nueve</em> (99). The tens: <em>treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa</em>, and 100 is <strong>cien</strong>."
        },
        "t2": {
          "heading": "Telling the time",
          "body": "The question: <strong>¿Qué hora es?</strong> (what time is it?). With one o'clock: <em><strong>Es la</strong> una</em>; with all other hours: <em><strong>Son las</strong> dos, son las diez</em> (it's two, it's ten). The minutes: <strong>y cuarto</strong> (quarter past — 2.15), <strong>y media</strong> (half past — 2.30), <strong>menos cuarto</strong> (quarter to — 1.45 = <em>las dos menos cuarto</em>, 'two minus a quarter'). Add <strong>de la mañana</strong> (in the morning), <strong>de la tarde</strong> (in the afternoon/evening) or <strong>de la noche</strong> (at night): <em>las tres y media de la tarde</em> = 3.30 pm."
        },
        "t3": {
          "heading": "Euros and Spanish mealtimes",
          "body": "The currency is <strong>el euro</strong>. For prices: <strong>¿Cuánto cuesta?</strong> (how much is it?) — <em>Son dos euros <strong>con</strong> cincuenta</em> (€2.50 — 'two euros with fifty'). Spanish daily rhythms surprise visitors: <strong>la comida</strong> (lunch, the main meal of the day) is around <strong>2 pm</strong>, and <strong>la cena</strong> (dinner) around <strong>9.30 pm</strong>. Many small shops close at midday and open again around five."
        }
      },
      "examples": {
        "e1": "What time is it? — It's half past two.",
        "e2": "The class starts at a quarter past one.",
        "e3": "How much is the coffee? — One euro twenty.",
        "e4": "In Spain we have lunch at two and dinner at half past nine.",
        "e5": "I'm thirty-two years old.",
        "e6": "The ticket costs twenty-one euros.",
        "e7": "The shop opens at a quarter to ten.",
        "e8": "It's nine in the evening and the restaurant is still empty."
      },
      "flashcards": {
        "f1": "What time is it?",
        "f2": "It's half past two (2.30)",
        "f3": "quarter past (the hour)",
        "f4": "quarter to (the next hour)",
        "f5": "How much does it cost?",
        "f6": "the euro",
        "f7": "lunch — the main meal in Spain, around 2 pm",
        "f8": "dinner — in Spain, around half past nine",
        "f9": "one hundred",
        "f10": "twenty-one (21–29 are written as one word)"
      },
      "quiz": {
        "q1": "Three in the afternoon is 15.00, and 'y media' (half past) adds thirty minutes: 15.30.",
        "q2": "From 21 to 29, Spanish writes one word with 'veinti-': veintiuno. 'Veintidós' is 22.",
        "q3": "€1.50 = un euro con cincuenta ('one euro with fifty' cents). Prices are said with 'con': dos euros con veinte, and so on.",
        "q4": "Spain eats dinner very late: around half past nine or ten at night. At seven, the restaurants are still empty.",
        "q5": "'Menos cuarto' means a quarter of an hour BEFORE the hour: la una menos cuarto = 12.45 (a quarter to one). '1.15' would be 'la una y cuarto'."
      }
    },
    "a1-tapas": {
      "title": "Food and bar culture: going for tapas",
      "theory": {
        "t1": {
          "heading": "Going for tapas",
          "body": "A <strong>tapa</strong> is a small portion of food you have at the bar; a <strong>ración</strong> is a bigger plate for sharing. <strong>Ir de tapas</strong> means going from bar to bar with friends, eating and chatting. In the bar you order at <strong>la barra</strong> (the counter) or sit on <strong>la terraza</strong> (the outdoor tables). A <strong>caña</strong> is a small glass of draught beer, and a <strong>zumo</strong> is a fruit juice: <em>un zumo de naranja natural</em> — a freshly squeezed orange juice. (Note: Spain says 'zumo'; Latin America says 'jugo'.)"
        },
        "t2": {
          "heading": "Ordering in the bar",
          "body": "To order politely, Spaniards use <strong>querer</strong> (to want) in the imperfect — it softens the request: <em><strong>Quería</strong> un café con leche, por favor</em> (I'd like a white coffee, please). Also very typical: <strong>¿Me pones…?</strong> (literally 'will you put me…?'): <em>¿Me pones una caña y una tapa de tortilla?</em> The waiter asks: <strong>¿Qué vas a tomar?</strong> (what will you have?) — <em>tomar</em> is the verb for having food or drink. At the end: <strong>La cuenta, por favor</strong> (the bill, please) or <strong>¿Me cobras?</strong> (can I pay?)."
        },
        "t3": {
          "heading": "The menú del día and the sobremesa",
          "body": "The <strong>menú del día</strong> is a fixed-price lunchtime menu: <em>primero, segundo y postre</em> (starter, main and dessert), normally with bread and a drink included — great value. After lunch comes <strong>la sobremesa</strong>: everyone stays at the table chatting, sometimes for hours — it's practically sacred in Spain. And remember: the main meal is <strong>la comida</strong> (lunch), at two in the afternoon."
        }
      },
      "examples": {
        "e1": "What will you have? — A caña and a tapa of Spanish omelette.",
        "e2": "Could I have an orange juice, please?",
        "e3": "I'd like the menú del día: salad for starters, and chicken for the main.",
        "e4": "Shall we sit on the terrace? The weather's lovely.",
        "e5": "The bill, please. — Right away.",
        "e6": "This evening we're going for tapas around the centre.",
        "e7": "For dessert there's crème caramel or fruit.",
        "e8": "After lunch we stay chatting at the table until five."
      },
      "flashcards": {
        "f1": "a tapa — a small portion of food you have at the bar",
        "f2": "to go for tapas (from bar to bar, with friends)",
        "f3": "a small glass of draught beer",
        "f4": "juice (in Spain — Latin America says 'jugo')",
        "f5": "the fixed-price lunch menu: starter, main and dessert",
        "f6": "the after-lunch chat at the table",
        "f7": "the bill",
        "f8": "'Could I have…?' — the everyday way to order in a Spanish bar",
        "f9": "the terrace — the bar's outdoor tables",
        "f10": "Spanish potato omelette"
      },
      "quiz": {
        "q1": "A caña is the small glass of draught beer — the classic order in a Spanish bar. A zumo is a fruit juice and a café solo is an espresso without milk.",
        "q2": "The menú del día is the fixed-price lunchtime menu: starter, main and dessert, usually with bread and a drink included.",
        "q3": "The sobremesa is the time people spend chatting at the table after lunch — a very Spanish tradition.",
        "q4": "'Quería' (the imperfect of 'querer') is the polite way to order — like English 'I wanted…/I'd like…'. 'Querer' is the infinitive, 'queréis' is the vosotros form and 'quiere' is for él/ella or usted.",
        "q5": "El zumo is fruit juice: orange juice, apple juice… Spain says 'zumo' (Latin America says 'jugo')."
      }
    },
    "a1-ciudad": {
      "title": "Around town",
      "theory": {
        "t1": {
          "heading": "Transport",
          "body": "In town there's <strong>el metro</strong> (the underground), <strong>el autobús</strong> (the bus) and <strong>el taxi</strong>. In Spain the verb for taking transport is <strong>coger</strong>: <em><strong>cojo</strong> el metro</em> (I take the metro), <em><strong>cogemos</strong> el autobús</em> (we take the bus) — in Spain this is the normal, correct verb. You need <strong>un billete</strong> (a ticket) or a travel card, and you wait at <strong>la parada</strong> (the bus stop) or <strong>la estación</strong> (the metro or train station). If it's close, you go <strong>a pie</strong> or <strong>andando</strong> (on foot/walking)."
        },
        "t2": {
          "heading": "Renfe and the AVE",
          "body": "<strong>Renfe</strong> is Spain's national railway company. <strong>El AVE</strong> is the high-speed train: Madrid to Barcelona or Seville in about two and a half hours. For everyday travel there are <strong>los cercanías</strong>, the commuter trains linking a city with its surrounding towns. You buy <strong>un billete de ida</strong> (a single) or <strong>de ida y vuelta</strong> (a return)."
        },
        "t3": {
          "heading": "Asking the way",
          "body": "Start with <strong>perdona</strong> (excuse me — or <strong>perdone</strong>, formal): <em>Perdona, ¿dónde está el mercado?</em> (excuse me, where's the market?) or <em>¿Cómo llego a la plaza?</em> (how do I get to the square?). The answers: <strong>todo recto</strong> (straight on), <strong>a la derecha</strong> (on/to the right), <strong>a la izquierda</strong> (on/to the left), <em>la primera calle</em> (the first street), <em>al lado de</em> (next to), <em>delante de</em> (in front of). And for distance: <strong>¿Está cerca o lejos?</strong> (is it near or far?)."
        }
      },
      "examples": {
        "e1": "How do you get to work? — I take the metro at Sol.",
        "e2": "We take the number fifteen bus at the square.",
        "e3": "Excuse me, where's the market? — Straight on and to the right.",
        "e4": "The AVE from Madrid to Seville takes two and a half hours.",
        "e5": "Is the cathedral far? — No, it's close. You can walk.",
        "e6": "A return ticket, please.",
        "e7": "The bus stop is in front of the town hall.",
        "e8": "Turn left at the second street."
      },
      "flashcards": {
        "f1": "to take the bus (in Spain, 'coger' is the normal verb)",
        "f2": "the metro / underground",
        "f3": "the bus stop",
        "f4": "the ticket",
        "f5": "the AVE — Spain's high-speed train",
        "f6": "Renfe — the Spanish railway company",
        "f7": "straight on",
        "f8": "on the right / on the left",
        "f9": "to walk / go on foot",
        "f10": "the market (stalls selling fruit, meat and fish)"
      },
      "quiz": {
        "q1": "'Coger el metro' means to take the metro. In Spain, 'coger' is the everyday verb for taking transport.",
        "q2": "The AVE is Renfe's high-speed train: Madrid to Barcelona in about two and a half hours.",
        "q3": "'Todo recto' means straight on — keep going without turning right or left.",
        "q4": "Start with 'perdona' (or the formal 'perdone'): Perdona, ¿dónde está la catedral? The other options sound rude.",
        "q5": "'Ida y vuelta' = there and back — a return ticket. 'Solo ida' is a single."
      }
    },
    "a2-gustar": {
      "title": "Gustar and friends",
      "theory": {
        "t1": {
          "heading": "The back-to-front verb",
          "body": "<strong>Gustar</strong> (to like) works 'back to front': the thing you like is the <strong>subject</strong>. If the subject is singular: <em>me gust<strong>a</strong> el café</em> (I like coffee); if it's plural: <em>me gust<strong>an</strong> las tapas</em> (I like tapas — literally 'tapas please me'). In front goes the pronoun: <strong>me, te, le, nos, os, les</strong>: <em>¿Te gusta el flamenco?</em> (do you like flamenco?), <em>Nos gusta Madrid</em> (we like Madrid), <em>¿Os gustan los churros?</em> With a verb, use the singular too: <em>Me gusta <strong>bailar</strong></em> (I like dancing)."
        },
        "t2": {
          "heading": "A mí me gusta…",
          "body": "To add emphasis or mark a contrast, add <strong>a + person</strong>: <em><strong>A mí</strong> me gusta el café solo, pero <strong>a mi hermana</strong> le gusta con leche</em> (I like my coffee black, but my sister likes it with milk). With 'le' and 'les' you nearly always need to say who you mean: <em><strong>A Juan</strong> le gusta el cine</em> (Juan likes the cinema), <em><strong>A mis padres</strong> les gusta pasear</em> (my parents like going for walks). To react to someone: <strong>a mí también</strong> (me too), <strong>a mí no</strong> (I don't), <strong>a mí tampoco</strong> (me neither)."
        },
        "t3": {
          "heading": "Encantar, doler, apetecer",
          "body": "Several verbs work just like gustar. <strong>Encantar</strong> = to really love something: <em>Me encanta el gazpacho</em>. Careful — it never takes 'mucho': say <em>me encanta</em>, never <em>me encanta mucho</em>. <strong>Doler</strong>, for pain: <em>Me duele la cabeza</em> (my head hurts), <em>me duelen los pies</em> (my feet hurt). And a very Spanish verb: <strong>apetecer</strong> = to fancy something: <em>¿Te apetece una caña en la terraza?</em> (do you fancy a small beer on the terrace?)."
        }
      },
      "examples": {
        "e1": "I like flamenco, but I don't like bullfighting.",
        "e2": "Do you like gazpacho? — Yes, I love it.",
        "e3": "My mother loves old films.",
        "e4": "We like strolling around the Retiro park on Sundays.",
        "e5": "Do you (all) like tortilla with onion or without?",
        "e6": "My feet hurt from walking around Seville all day.",
        "e7": "I like my coffee black; my sister likes it with milk.",
        "e8": "Do you fancy a small beer on the terrace? — Sure, I really do!"
      },
      "flashcards": {
        "f1": "to like (the 'back-to-front' verb: the thing is the subject)",
        "f2": "I like (them) — the form with a plural subject",
        "f3": "to love something (never takes 'mucho')",
        "f4": "to hurt (works like gustar: me duele la cabeza)",
        "f5": "my feet hurt (plural subject: los pies)",
        "f6": "I like… (with 'a mí' for emphasis or contrast)",
        "f7": "he/she likes (or you do, formal) — le gusta",
        "f8": "you (all) like — the vosotros form",
        "f9": "to fancy something right now (¿te apetece…?)",
        "f10": "me too / me neither (reacting to what someone said)"
      },
      "quiz": {
        "q1": "The subject is 'las tapas' (plural), so the verb is plural: me gustan. 'Me gusta las tapas' is the classic learner error; 'gusto' and 'gustas' agree with I/you, not with the tapas.",
        "q2": "'A mi hermano' calls for the pronoun 'le': a mi hermano le gusta. 'Me' would mean me, not my brother, and 'se' and 'lo' don't work with gustar.",
        "q3": "'Doler' works like 'gustar': a ti te duele la cabeza. 'Tú' is a subject pronoun and here the subject is 'la cabeza'; 'ti' needs 'a' in front of it.",
        "q4": "The subject is 'los pies' (plural): me duelen. 'Me duele los pies' is the typical mistake; 'dolemos' and 'dueles' agree with people, not with your feet.",
        "q5": "'Encantar' already means 'to like a lot', so it never takes 'mucho'. And the subject is 'el cine' (singular): me encanta. 'Encantan' and 'gustan' are plural forms."
      }
    },
    "a2-preterito": {
      "title": "The preterite: talking about your weekend",
      "theory": {
        "t1": {
          "heading": "The regular forms",
          "body": "The <strong>pretérito indefinido</strong> (simple past) tells of <strong>completed</strong> actions at a specific moment: <em>ayer</em> (yesterday), <em>anoche</em> (last night), <em>el sábado pasado</em> (last Saturday), <em>el año pasado</em> (last year). Verbs in -ar, model <strong>hablar</strong>: <em>habl<strong>é</strong>, habl<strong>aste</strong>, habl<strong>ó</strong>, habl<strong>amos</strong>, habl<strong>asteis</strong>, habl<strong>aron</strong></em>. Verbs in -er/-ir, model <strong>comer</strong>: <em>com<strong>í</strong>, com<strong>iste</strong>, com<strong>ió</strong>, com<strong>imos</strong>, com<strong>isteis</strong>, com<strong>ieron</strong></em>. A handy word: <strong>el finde</strong> = the weekend, colloquial."
        },
        "t2": {
          "heading": "The big irregulars",
          "body": "Four irregular verbs come up constantly. <strong>Ser</strong> (to be) and <strong>ir</strong> (to go) share the same forms: <em><strong>fui, fuiste, fue</strong>, fuimos, fuisteis, fueron</em> — context tells you which is which: <em>Fui camarero</em> (I was a waiter — ser) / <em>Fui a Sevilla</em> (I went to Seville — ir). <strong>Hacer</strong> (to do/make): <em><strong>hice</strong>, hiciste, <strong>hizo</strong>…</em> <strong>Estar</strong>: <em><strong>estuve</strong>, estuviste, estuvo…</em> <strong>Tener</strong> (to have): <em><strong>tuve</strong>, tuviste, tuvo…</em> One detail: these irregular forms carry no written accent."
        },
        "t3": {
          "heading": "Telling the story of your weekend",
          "body": "On Monday, the classic question is: <strong>¿Qué tal el finde?</strong> (how was your weekend?). To tell your story, put the actions in order: <strong>primero</strong> (first), <strong>luego</strong> (then), <strong>después</strong> (afterwards), <strong>por la noche</strong> (in the evening), <strong>al final</strong> (in the end): <em>El sábado primero fui al mercado, luego comí con mis padres y por la noche quedé con amigos</em>. Each preterite verb is one more step of the story — one finished action after another."
        }
      },
      "examples": {
        "e1": "How was your weekend? — Great! We went to the beach in Valencia.",
        "e2": "Yesterday I had paella with my parents and then took a siesta.",
        "e3": "On Saturday I did a tapas crawl around the centre of Seville.",
        "e4": "Last night we were at a concert until two in the morning.",
        "e5": "Last summer I had a job in a beach bar.",
        "e6": "First we visited the museum and afterwards we strolled around the Retiro.",
        "e7": "Did you (all) go to the cinema on Friday? — No, we stayed at home.",
        "e8": "On Sunday evening I didn't do anything: I rested."
      },
      "flashcards": {
        "f1": "yesterday — a signal word for the preterite",
        "f2": "the weekend (colloquial)",
        "f3": "I was / I went — the yo form of both ser AND ir",
        "f4": "he/she was / went — the él/ella form of ser and ir",
        "f5": "I did / I made — the yo form of hacer",
        "f6": "I was (somewhere) — the yo form of estar in the preterite",
        "f7": "I had — the yo form of tener in the preterite",
        "f8": "last night",
        "f9": "last year",
        "f10": "How was your weekend? — the classic Monday question"
      },
      "quiz": {
        "q1": "Two finished, ordered actions from yesterday: fui and vi (I went and I saw). 'Voy' is present, 'iba' would describe the background of a story, not a completed action, and 'va' is the wrong person.",
        "q2": "Three finished actions, one after another: hizo, llevó, triunfó (she made it, took it, it was a hit). 'Hice' is the I-form, 'hacía' would be background description, not a step in the story, and 'hace' is present.",
        "q3": "A closed, completed period ('two weeks' last summer) takes the preterite: estuvimos. 'Estábamos' doesn't work with a closed duration; 'estuvisteis' is the vosotros form.",
        "q4": "The answer lists finished actions (fui, descansé), so the question is in the preterite: ¿qué hiciste? (what did you do?). 'Hacías' asks about background, not the weekend's events; 'hizo' is for he/she or usted.",
        "q5": "Ser and ir share all their preterite forms: fuimos camareros (we were waiters — ser) / fuimos a Granada (we went to Granada — ir). Context tells you which one it is."
      }
    },
    "a2-imperfecto": {
      "title": "The imperfect: when I was little…",
      "theory": {
        "t1": {
          "heading": "The forms",
          "body": "The <strong>imperfect</strong> is the most regular tense in Spanish. Verbs in -ar: <em>jug<strong>aba</strong>, jug<strong>abas</strong>, jug<strong>aba</strong>, jug<strong>ábamos</strong>, jug<strong>abais</strong>, jug<strong>aban</strong></em>. Verbs in -er/-ir: <em>com<strong>ía</strong>, viv<strong>ía</strong>, ten<strong>ías</strong>, hac<strong>íamos</strong>…</em> There are only <strong>three irregulars</strong>: <strong>ser</strong> (<em>era, eras, era…</em>), <strong>ir</strong> (<em>iba, ibas, iba…</em>) and <strong>ver</strong> (<em>veía, veías…</em>). And very useful: <strong>había</strong> = the imperfect of 'hay' (there was / there were)."
        },
        "t2": {
          "heading": "What it's for",
          "body": "The imperfect describes <strong>how things used to be</strong>: past habits (<em><strong>De pequeño</strong> jugaba en la calle <strong>todos los días</strong></em> — when I was little I played in the street every day), descriptions (<em>La casa <strong>era</strong> enorme y <strong>tenía</strong> un patio</em> — the house was huge and had a courtyard), and age and time in the past (<em><strong>Tenía</strong> ocho años</em> — I was eight; <em><strong>eran</strong> las diez</em> — it was ten o'clock). For habits there's also <strong>solía + infinitive</strong> (used to): <em>Solíamos veranear en el pueblo</em> — we used to spend our summers in the village."
        },
        "t3": {
          "heading": "Imperfect or preterite?",
          "body": "Think of a film: the <strong>imperfect</strong> is the <strong>scenery</strong> — the background, the description, the habit; the <strong>preterite</strong> is the <strong>action</strong> — what happens. <em><strong>Mientras</strong> cenábamos (background), <strong>de repente</strong> llamaron a la puerta (action)</em> — while we were having dinner, suddenly there was a knock at the door. Imperfect signals: <em>mientras</em> (while), <em>todos los días</em> (every day), <em>siempre</em> (always), <em>de pequeño</em> (as a child), <em>antes</em> (before). Preterite signals: <em>de repente</em> (suddenly), <em>un día</em> (one day), <em>ayer</em>, <em>primero… luego…</em>, and closed periods: <em>Viví allí <strong>diez años</strong></em> (I lived there for ten years)."
        }
      },
      "examples": {
        "e1": "When I was little I lived in Valencia and played on the beach every day.",
        "e2": "My grandmother used to make a delicious cocido stew on Sundays.",
        "e3": "When I was eight, I wanted to be a footballer.",
        "e4": "We used to spend our summers in my grandparents' village.",
        "e5": "My aunt and uncle's house was huge and had a courtyard with orange trees.",
        "e6": "While we were having dinner, it started to rain.",
        "e7": "We used to walk to school; there was no bus.",
        "e8": "As a little girl I watched cartoons every Saturday morning."
      },
      "flashcards": {
        "f1": "when I was little (as a child)",
        "f2": "I used to play — imperfect of jugar: a past habit or description",
        "f3": "used to (do something) — a past habit: solía madrugar",
        "f4": "was/were — the imperfect of ser; only three verbs are irregular",
        "f5": "used to go / was going — the imperfect of ir",
        "f6": "used to see / watch — the imperfect of ver, the third irregular",
        "f7": "there was / there were — the imperfect of 'hay'",
        "f8": "while — at the same time; a typical imperfect signal",
        "f9": "suddenly — without warning; a preterite signal",
        "f10": "every day — a habit signal: imperfect"
      },
      "quiz": {
        "q1": "It's a past habit ('de pequeño… todos los domingos' — when I was little, every Sunday): jugaba. 'Jugué' would be one specific day's action, and 'jugábamos' is the we-form.",
        "q2": "'Dormía' is the background of the scene and 'sonó' ('de repente') is the action that interrupts it. 'Dormí la siesta cuando de repente sonó…' doesn't work: the preterite doesn't describe an action in progress.",
        "q3": "'Toda mi infancia' (my whole childhood) is a closed, completed period, and 'luego' orders the story: viví. Note: 'De pequeño vivía en Sevilla' (an open description) also exists — but with the closed period and the 'luego', only the preterite works here.",
        "q4": "Age in the past takes the imperfect: cuando tenía quince años (when I was fifteen). 'Cuando tuve quince años' isn't said (that would be 'cuando cumplí quince años' — when I turned fifteen); 'teníamos' is the we-form.",
        "q5": "'Solía + infinitive' expresses a past habit: antes solía ir (I used to go). 'Suelo' is present and clashes with 'antes… pero ahora'; 'solí' isn't used: soler has no preterite in this sense."
      }
    },
    "a2-rutina": {
      "title": "Daily routine and reflexive verbs",
      "theory": {
        "t1": {
          "heading": "Reflexive verbs",
          "body": "Many routine verbs are <strong>reflexive</strong>: the action comes back to yourself. Model <strong>levantarse</strong> (to get up): <em><strong>me</strong> levanto, <strong>te</strong> levantas, <strong>se</strong> levanta, <strong>nos</strong> levantamos, <strong>os</strong> levantáis, <strong>se</strong> levantan</em>. The pronoun goes <strong>before</strong> the conjugated verb, but with an infinitive it attaches to the end: <em>Voy a levantar<strong>me</strong></em> (I'm going to get up). Careful — without the pronoun the meaning changes: <em>me levanto</em> (I get up) is not the same as <em>levanto la mano</em> (I raise my hand)."
        },
        "t2": {
          "heading": "My routine, step by step",
          "body": "The key verbs of the day: <strong>despertarse</strong> (to wake up, e→ie: <em>me despierto</em>), <strong>levantarse</strong> (to get up), <strong>ducharse</strong> (to shower), <strong>vestirse</strong> (to get dressed, e→i: <em>me visto</em>), <strong>desayunar</strong> (to have breakfast), <strong>salir de casa</strong> (to leave the house), <strong>volver a casa</strong> (to come home), <strong>acostarse</strong> (to go to bed, o→ue: <em>me acuesto</em>). For present habits: <strong>soler + infinitive</strong>: <em>Suelo levantarme a las siete</em> (I usually get up at seven). And a very useful verb: <strong>madrugar</strong> = to get up very early."
        },
        "t3": {
          "heading": "The Spanish timetable and the siesta",
          "body": "Spain's timetable surprises people: lunch is around <strong>two</strong>, dinner around <strong>half past nine</strong>, and prime-time TV starts at eleven. And the <strong>siesta</strong>? It's more <strong>myth</strong> than reality: most working Spaniards do <strong>not</strong> nap daily; the siesta lives on mainly at weekends, on holiday and in summer, when the heat is fierce. That said: the word is Spanish and the invention is a fine one."
        }
      },
      "examples": {
        "e1": "I get up at half past seven and shower before breakfast.",
        "e2": "My sister goes to bed incredibly late: never before midnight.",
        "e3": "What time do you wake up on Sundays? — Late, around eleven.",
        "e4": "First I get dressed and then I have a coffee and toast for breakfast.",
        "e5": "I usually leave the house at eight and catch the metro.",
        "e6": "Do you (all) go to bed late in summer? — Yes, well, in Spain dinner is at ten.",
        "e7": "Tomorrow I'm up early: I'm going to get up at six.",
        "e8": "The daily siesta is almost a myth: people mostly nap in summer and at weekends."
      },
      "flashcards": {
        "f1": "to get up (me levanto — I get up)",
        "f2": "to have a shower",
        "f3": "to go to bed (o→ue: me acuesto)",
        "f4": "to wake up (e→ie: me despierto)",
        "f5": "to get dressed (e→i: me visto)",
        "f6": "to have breakfast",
        "f7": "to usually do something (suelo madrugar — I usually get up early)",
        "f8": "to get up very early",
        "f9": "the after-lunch nap — nowadays more a weekend thing than daily",
        "f10": "you (all) get up — the vosotros form"
      },
      "quiz": {
        "q1": "Levantarse is reflexive: yo me levanto. 'Levanto' without the pronoun is the classic error (that's lifting something, like your hand); 'se levanta' is the he/she form.",
        "q2": "'Mis padres' is plural: se levantan. 'Se levanta' is singular, 'nos levantamos' is the we-form, and 'levantan' has lost the reflexive pronoun.",
        "q3": "With vosotros the pronoun is 'os': ¿a qué hora os acostáis? 'Se acuestan' is for they/ustedes and 'te acuestas' is for tú.",
        "q4": "With 'voy a' + infinitive, the pronoun attaches to the end and agrees with yo: voy a acostarme. 'Me acostar' has the order wrong, 'acostarse' is the wrong person and 'me acuesto' isn't an infinitive.",
        "q5": "Most working Spaniards don't nap every day: the siesta is mainly for weekends, holidays and summer."
      }
    },
    "a2-compras": {
      "title": "Shopping, markets and the sales",
      "theory": {
        "t1": {
          "heading": "At the market",
          "body": "Every Spanish city has its traditional <strong>mercado</strong>, with <strong>puestos</strong> (stalls) selling fruit, fish and meat: La Boquería in Barcelona, the Mercado Central in Valencia… When you reach a stall, ask <strong>¿Quién es el último?</strong> (who's last?) — that's how you take your turn in the queue. To order: <em>¿Me pone un kilo de tomates?</em> (could I have a kilo of tomatoes?). And to ask the price: <strong>¿Cuánto cuesta?</strong> (one thing) / <strong>¿Cuánto cuestan?</strong> (several) / <strong>¿Cuánto es?</strong> (the total)."
        },
        "t2": {
          "heading": "Paying: cash, card and your change",
          "body": "When you pay, they ask: <em>¿En <strong>efectivo</strong> o con <strong>tarjeta</strong>?</em> (cash or card?). Efectivo means notes and coins; these days you can pay for almost anything by card or with your <strong>móvil</strong> (mobile). If you overpay, they give you <strong>la vuelta</strong> (your change): <em>Aquí tiene la vuelta: tres euros</em>. And twice a year come <strong>las rebajas</strong> (the sales) — in <strong>January</strong> and <strong>July</strong> — when the shops drop their prices and half of Spain goes shopping."
        },
        "t3": {
          "heading": "Clothes: trying things on, and quedar bien",
          "body": "In a clothes shop: <strong>probarse</strong> something (to try it on — <em>¿Puedo probarme estos vaqueros?</em> can I try these jeans on?), ask about <strong>la talla</strong> (the size — <em>¿Tiene una talla más?</em>) and look for <strong>los probadores</strong> (the fitting rooms). The verb <strong>quedar</strong> works like gustar — the clothes are the subject: <em>Esa chaqueta te <strong>queda</strong> genial</em> (that jacket looks great on you); <em>esos vaqueros te <strong>quedan</strong> pequeños</em> (those jeans are too small for you). If you're convinced: <em><strong>Me lo llevo</strong></em> (I'll take it)."
        }
      },
      "examples": {
        "e1": "Who's last in the queue? — Me. Right, I'm after you then.",
        "e2": "Could I have a kilo of tomatoes and two avocados, please?",
        "e3": "How much is that altogether? — That's twelve euros forty.",
        "e4": "Cash or card? — Card. Can I pay with my phone?",
        "e5": "Here's your change: three euros twenty.",
        "e6": "The sales start in January and everything is much cheaper.",
        "e7": "Can I try these jeans on? — Of course, the fitting rooms are at the back.",
        "e8": "That jacket looks great on you. — Really? I'll take it, then."
      },
      "flashcards": {
        "f1": "the (covered) market — stalls of fruit, fish and meat",
        "f2": "Who's last? — how you take your turn in a Spanish queue",
        "f3": "How much does it cost? (plural: ¿cuánto cuestan?)",
        "f4": "the change (the money you get back)",
        "f5": "in cash",
        "f6": "by card",
        "f7": "the sales — January and July",
        "f8": "to try on (clothes)",
        "f9": "the (clothes) size",
        "f10": "to suit / fit well or badly — works like gustar"
      },
      "quiz": {
        "q1": "The subject is 'estas naranjas' (plural): cuestan. 'Cuesta' is for a single thing; 'cuestas' and 'costamos' agree with people.",
        "q2": "Notes and coins are cash: en efectivo. Card and mobile are electronic payments.",
        "q3": "'¿Quién es el último?' is the classic formula for finding your place in the queue. The other questions don't take a turn.",
        "q4": "'Quedar' works like gustar: the subject is 'esa camisa' (singular): te queda bien. 'Quedas' is the typical error from copying the 'te'; 'quedan' would need a plural subject.",
        "q5": "The two big sales seasons are January (after Epiphany) and July, at the start of summer."
      }
    },
    "a2-serestar2": {
      "title": "Ser and estar II: estoy comiendo",
      "theory": {
        "t1": {
          "heading": "Recap, plus something new: events",
          "body": "Quick recap: <strong>ser</strong> for identity, origin, profession and characteristics; <strong>estar</strong> for location and states. But watch out for <strong>events</strong>! A concert, a party or a wedding takes <strong>ser</strong>: <em>La fiesta <strong>es</strong> en casa de Marta</em> (the party is at Marta's); <em>el concierto <strong>es</strong> en la Plaza Mayor</em> — you're saying where it <strong>takes place</strong>, not where a thing sits. Compare: <em>El teatro <strong>está</strong> en el centro</em> (the building's location) / <em>La obra <strong>es</strong> en el teatro</em> (the play — an event). And with <strong>de</strong>: <em>estar de vacaciones</em> (to be on holiday), <em>estar de rebajas</em> (to have a sale on)."
        },
        "t2": {
          "heading": "Estar + gerund: right now",
          "body": "For an action happening <strong>right now</strong>: <strong>estar + gerund</strong>. The gerund: -ar → <strong>-ando</strong> (<em>hablando</em>), -er/-ir → <strong>-iendo</strong> (<em>comiendo, viviendo</em>). Important irregulars: <em>leer → le<strong>y</strong>endo</em> (reading), <em>dormir → d<strong>u</strong>rmiendo</em> (sleeping), <em>pedir → p<strong>i</strong>diendo</em> (ordering). Compare: <em>Como a las dos</em> (I eat at two — a habit) / <em><strong>Estoy comiendo</strong>, te llamo luego</em> (I'm eating right now, I'll call you later). The star question: <strong>¿Qué estás haciendo?</strong> (what are you doing?)."
        },
        "t3": {
          "heading": "Words that change meaning",
          "body": "Some adjectives change meaning with ser or estar. <strong>Listo</strong>: <em>ser listo</em> = to be clever / <em>estar listo</em> = to be ready. <strong>Rico</strong>: <em>ser rico</em> = to be rich / <em>estar rico</em> = to be tasty. <strong>Aburrido</strong>: <em>ser aburrido</em> = to be boring / <em>estar aburrido</em> = to be bored. <strong>Malo</strong>: <em>ser malo</em> = to be bad (poor quality, or a bad person) / <em>estar malo</em> = to be ill (or, of food, to have gone off)."
        }
      },
      "examples": {
        "e1": "What are you doing? — I'm watching a series.",
        "e2": "Ana can't come to the phone right now: she's talking on the phone.",
        "e3": "The party is at Marta's house, but Marta is still at the supermarket.",
        "e4": "This gazpacho is delicious. — And the cook isn't rich, mind: he cooks with next to nothing.",
        "e5": "My niece is very clever: she's four and already reads.",
        "e6": "Are you (all) ready? The taxi is waiting downstairs.",
        "e7": "The film is dead boring; that's why I'm bored.",
        "e8": "We're on holiday in Menorca until Sunday."
      },
      "flashcards": {
        "f1": "an action happening right now: I'm eating",
        "f2": "the gerund: -ar → -ando; -er/-ir → -iendo",
        "f3": "reading — the irregular gerund of leer",
        "f4": "sleeping — the irregular gerund of dormir (o→u)",
        "f5": "to be clever",
        "f6": "to be ready (are you ready? we're off)",
        "f7": "to be rich (money)",
        "f8": "to be tasty (how delicious the paella is!)",
        "f9": "to be bored right now ('ser aburrido' = to be boring)",
        "f10": "the party is at… — events take 'ser'"
      },
      "quiz": {
        "q1": "The gerund goes with 'estar', and 'no puedo' marks the yo form: estoy estudiando. 'Soy estudiando' is the classic error; 'está' and 'estás' are the wrong person.",
        "q2": "Events take 'ser': you're saying where the concert takes place. 'Está' is the trap — that would be for the location of a thing (el quiosco está en la plaza), not an event.",
        "q3": "We're talking about today's taste ('prueba', 'hoy'): está riquísima. 'Ser rico' means to have money; 'eres' and 'estás' are for tú, not for the tortilla.",
        "q4": "'Ya podemos irnos' asks whether you're all ready: estar listo. 'Sois listos' would mean you're all clever; 'estás' is singular and we're talking about everyone.",
        "q5": "The gerund of dormir changes o→u: durmiendo. 'Dormiendo' is the typical error; 'duerme' isn't a gerund, and 'dormido' is a state and can't take 'la siesta' after it."
      }
    },
    "a2-planes": {
      "title": "Plans: voy a…, quedar and the long weekend",
      "theory": {
        "t1": {
          "heading": "Ir a + infinitive",
          "body": "To talk about <strong>plans</strong>, Spanish uses <strong>ir a + infinitive</strong>: <em><strong>Voy a</strong> viajar</em> (I'm going to travel), <em><strong>vas a</strong> comer, <strong>vamos a</strong> salir, <strong>vais a</strong> venir…</em> Don't drop the <strong>a</strong>: <em>voy <strong>a</strong> salir</em>, never 'voy salir'. Future signal words: <em>mañana</em> (tomorrow), <em>luego</em> (later), <em>esta noche</em> (tonight), <em><strong>este finde</strong></em> (this weekend), <em><strong>la semana que viene</strong></em> (next week). With reflexives, the pronoun attaches to the infinitive: <em>Voy a acostar<strong>me</strong> pronto</em> (I'm going to bed early)."
        },
        "t2": {
          "heading": "Quedar: the national sport",
          "body": "<strong>Quedar</strong> = to arrange to meet, and in Spain people do it constantly: in a square, on a terrace, outside the cinema. <em>¿<strong>Quedamos</strong> el jueves?</em> (shall we meet on Thursday?), <em>¿A qué hora <strong>quedamos</strong>?</em> (what time shall we meet?), <em><strong>He quedado</strong> con Ana a las diez</em> (I've arranged to meet Ana at ten) — 'he quedado' means the plan is <strong>already fixed</strong>. Don't confuse it with <em>quedarse</em> (= to stay in): <em>Hoy <strong>me quedo</strong> en casa</em> (today I'm staying home)!"
        },
        "t3": {
          "heading": "Public holidays and puentes",
          "body": "A <strong>festivo</strong> is an official day off work. When the holiday falls on a Thursday or Tuesday, many people take the day in between off and join the holiday to the weekend: that's <strong>el puente</strong> (literally 'the bridge'), and taking one is <strong>hacer puente</strong>. The famous puentes (the May bank-holiday weekend, the December one) fill Spain's roads and beaches. The typical question: <em>¿Qué vas a hacer <strong>en el puente</strong>?</em> (what are you doing over the long weekend?)."
        }
      },
      "examples": {
        "e1": "Tomorrow I'm going to have lunch with my grandparents.",
        "e2": "This weekend we're going on a trip to the mountains.",
        "e3": "What are you doing over the May long weekend? — I'm going to Cádiz.",
        "e4": "I've arranged to meet Ana at ten at the Puerta del Sol.",
        "e5": "Shall we meet on Thursday? — Sure. What time suits you?",
        "e6": "Monday is a public holiday, so we're making it a long weekend.",
        "e7": "I'm not going out tonight: I'm going to bed early.",
        "e8": "Are you (all) coming to Saturday's dinner? — Yes, and we're bringing dessert."
      },
      "flashcards": {
        "f1": "going to (do something) — for plans: voy a viajar",
        "f2": "next week",
        "f3": "to arrange to meet (shall we meet on Thursday?)",
        "f4": "I've arranged to meet at ten — the plan is fixed",
        "f5": "to stay at home (not the same as quedar!)",
        "f6": "a public holiday",
        "f7": "the long weekend — a holiday joined to the weekend",
        "f8": "to take the bridging day off and make a long weekend",
        "f9": "what time shall we meet?",
        "f10": "tonight"
      },
      "quiz": {
        "q1": "It's a plan for tomorrow: voy a visitar. 'Fui' and 'iba' are past tenses and clash with 'mañana'; 'vas' is the tú form.",
        "q2": "With vosotros: vais a hacer. 'Van' is for they/ustedes, 'vamos' for we, and 'va' for he/she.",
        "q3": "Quedar con alguien = to have a fixed arrangement to meet. 'Quedarse en casa' (to stay in) is a different verb: don't mix them up.",
        "q4": "Joining the holiday to the weekend by taking the day in between off is 'hacer puente'. A 'cola' is a queue and 'rebajas' are the sales.",
        "q5": "Plans are built with ir a + infinitive: no voy a salir. 'Voy salir', without the 'a', is the classic error; 'va a' is the wrong person and 'fui a' is past."
      }
    },
    "a2-registro": {
      "title": "Tú, usted and vosotros",
      "theory": {
        "t1": {
          "heading": "Tú by default",
          "body": "In Spain, the normal way to address people is <strong>tú</strong>: in shops, in bars, at work, between young strangers… using tú (tutear) isn't rude — it's standard. <strong>Usted</strong> is reserved for <strong>respect</strong>: elderly people, very formal situations, official business. With usted, the verb goes in the <strong>third person</strong>: <em>¿Cómo <strong>está</strong> (usted)?</em> (how are you?), <em>¿<strong>Tiene</strong> hora?</em> (have you got the time?). When in doubt with an older person, start with usted — they'll soon say <em>'puedes tutearme'</em> (you can call me tú)."
        },
        "t2": {
          "heading": "Vosotros and ustedes",
          "body": "Spain's informal plural is <strong>vosotros / vosotras</strong>, and it's used constantly: <em>¿<strong>Venís</strong> al cine?</em> (are you all coming to the cinema?), <em>¿Dónde están <strong>vuestras</strong> cosas?</em> (where are your things?). <strong>Ustedes</strong> is the <strong>formal</strong> plural (with the verb in the third person: <em>¿Ustedes <strong>vienen</strong>?</em>). Important fact: in the <strong>Canary Islands</strong> and throughout <strong>Latin America</strong>, vosotros isn't used — there, 'ustedes' is the only plural, both formal and informal."
        },
        "t3": {
          "heading": "Oye, oiga and perdona",
          "body": "To get someone's attention: <strong>oye</strong> (with tú) and <strong>oiga</strong> (with usted): <em>Oye, ¿me pasas el pan?</em> (hey, can you pass the bread?) / <em>Oiga, perdone, ¿esta es la cola?</em> (excuse me, is this the queue?). The same goes for <strong>perdona / perdone</strong> to open a question. In a bar, calling <em>'¡oye, perdona!'</em> to the waiter is completely normal — not rude at all. And the verb for it all: <strong>tutear</strong> = to address someone as tú: <em>Puedes tutearme</em>."
        }
      },
      "examples": {
        "e1": "In Spain, in shops, almost everyone addresses you as tú.",
        "e2": "Excuse me (formal), is this the queue for the bus?",
        "e3": "Hey, can you pass the bread?",
        "e4": "Are you (all) coming to the cinema this afternoon?",
        "e5": "Good morning, what can I get you (formal)? — Could I have a white coffee?",
        "e6": "Kids, where are your backpacks?",
        "e7": "The doctor addresses my grandfather as usted: how are you feeling today?",
        "e8": "In the Canaries and in Latin America, 'ustedes' is used instead of 'vosotros'."
      },
      "flashcards": {
        "f1": "you (informal singular) — the default in Spain",
        "f2": "you (formal singular) — takes a third-person verb",
        "f3": "you (informal plural) — used constantly in Spain",
        "f4": "you (formal plural in Spain; the only plural in Latin America)",
        "f5": "hey — to get the attention of someone you call tú",
        "f6": "excuse me — to get the attention of someone you call usted",
        "f7": "excuse me / sorry — the tú and usted versions",
        "f8": "to address someone as tú",
        "f9": "your (belonging to vosotros): vuestra casa",
        "f10": "could I have…? — in the bar, with tú: ¿me pones una caña?"
      },
      "quiz": {
        "q1": "With usted, the verb goes in the third person: ¿tiene hora? 'Tienes' would be tú, 'tenéis' vosotros, and 'tengo' is the I-form.",
        "q2": "Two friends, informal, in Spain: vosotros → tenéis. 'Tienen' would be ustedes (the formal plural in Spain); 'tienes' is for one person only.",
        "q3": "With usted you say 'oiga, perdone'. 'Oye' and '¡eh, tú!' are tú forms (and '¡eh, tú!' sounds brusque too); 'hola, ¿qué pasa?' is a greeting between friends.",
        "q4": "In Spain, tú is the norm in shops and bars; usted is kept for respect and very formal situations. 'Vosotros' is plural and you're one person.",
        "q5": "'Sois' is the vosotros form: plural and informal. To one person it would be '¿de dónde eres?' (tú) or '¿de dónde es?' (usted); to a formal group, '¿de dónde son ustedes?'."
      }
    },
    "b1-pasados": {
      "title": "Telling the past: preterite or imperfect?",
      "theory": {
        "t1": {"heading": "Two pasts, two jobs", "body": "The <strong>preterite</strong> moves the story forward: completed actions, one after another. <em>Llegué, cené y me acosté</em> — I arrived, had dinner and went to bed. The <strong>imperfect</strong> paints the background: descriptions, habits, actions in progress. <em>Era de noche, llovía…</em> — it was night, it was raining. In a typical Spanish story, the imperfect sets the scene and the preterite tells you what happened."},
        "t2": {"heading": "Signals in the text", "body": "Preterite markers: <em>ayer, el año pasado, de repente, una vez, en 2010</em> — a closed, finished action. Imperfect markers: <em>mientras, todos los días, siempre, de pequeño, antes</em> — habit or ongoing process. The classic combination is an imperfect interrupted by a preterite: <em>Dormía tranquilamente cuando sonó el teléfono</em> — I was sleeping peacefully when the phone rang."},
        "t3": {"heading": "Verbs that change meaning", "body": "Some verbs change meaning depending on the past tense. <em>Conocí a Marta</em> = I met her (first time); <em>conocía Madrid</em> = I already knew it. <em>No quiso venir</em> = he refused; <em>no quería venir</em> = he didn't feel like it. <em>Supe la noticia</em> = I found out; <em>sabía la verdad</em> = I already knew it."}
      },
      "examples": {
        "e1": "It was an August afternoon and it was terribly hot in Seville.",
        "e2": "Suddenly, the power went out in the whole neighbourhood.",
        "e3": "While we were waiting for the bus, it started to snow.",
        "e4": "We used to spend summers in Benidorm; that year we went to Menorca.",
        "e5": "I met my best friend at secondary school, in Year 9.",
        "e6": "He refused to try the octopus: it really disgusted him.",
        "e7": "When I lived in Granada, I used to walk up to the Alhambra almost every Sunday.",
        "e8": "We got to the station, bought the tickets and caught the last AVE."
      },
      "flashcards": {
        "f1": "the preterite — completed actions in a chain",
        "f2": "the imperfect — background scenes and habits",
        "f3": "suddenly — usually with the preterite",
        "f4": "while — usually with the imperfect",
        "f5": "I met (someone, for the first time)",
        "f6": "I already knew (a place)",
        "f7": "he/she refused",
        "f8": "he/she didn't feel like it",
        "f9": "I found out",
        "f10": "once, on one occasion — a preterite marker"
      },
      "quiz": {
        "q1": "Three completed actions in a chain (came home, had dinner, went to bed) take the preterite: volví. 'Volvía' would describe the background, not the chain of events.",
        "q2": "'Mientras' marks an ongoing background action: imperfect (paseábamos). 'Paseando' is a gerund and cannot stand as the main verb.",
        "q3": "'Conocer' in the preterite = meeting for the first time. In the imperfect (conocía) it would mean you already knew her.",
        "q4": "'Cada noche' signals a repeated habit in the past: imperfect (contaba). 'Contó' would be a single occasion.",
        "q5": "'Todavía' (still) shows an action in progress interrupted by the alarm: imperfect (dormían)."
      }
    },
    "b1-subjuntivo": {
      "title": "The present subjunctive: first steps",
      "theory": {
        "t1": {"heading": "The form: the opposite vowel", "body": "The present subjunctive uses the <strong>opposite vowel</strong>: <em>-ar</em> verbs take <strong>-e</strong> (hable, hables, hable, hablemos, habléis, hablen), <em>-er/-ir</em> verbs take <strong>-a</strong> (coma…; viva…). Irregulars come from the <em>yo</em> form: tengo → <strong>tenga</strong>, hago → <strong>haga</strong>, digo → <strong>diga</strong>. A few are fully irregular: ser → <strong>sea</strong>, ir → <strong>vaya</strong>, estar → <strong>esté</strong>, saber → <strong>sepa</strong>, haber → <strong>haya</strong>."},
        "t2": {"heading": "Wishes and influence: quiero que…", "body": "When one subject wants to influence <strong>another</strong>, the second verb goes in the subjunctive: <em>Quiero que <strong>vengas</strong></em> — I want you to come; <em>Es importante que los niños <strong>coman</strong> verdura</em>. But if the subject is the <strong>same</strong>, use the infinitive: <em>Quiero <strong>comprar</strong> un piso</em> (I want, I buy) versus <em>Quiero que mi hermano <strong>compre</strong> un piso</em>."},
        "t3": {"heading": "Emotions, judgements and ojalá", "body": "Emotions and value judgements also take the subjunctive: <em>Me alegro de que <strong>estéis</strong> aquí</em> — I'm glad you're here; <em>Es una pena que no <strong>puedas</strong> venir</em>. And <strong>ojalá</strong> (from Arabic, 'God willing') always takes the subjunctive: <em>Ojalá <strong>haga</strong> buen tiempo</em> — let's hope the weather's good."}
      },
      "examples": {
        "e1": "I want you to come to the New Year's Eve dinner.",
        "e2": "I hope you pass your driving test.",
        "e3": "It's important that you (all) drink plenty of water in this heat.",
        "e4": "My parents want me to study in Salamanca.",
        "e5": "I'm glad you're feeling better.",
        "e6": "It's a shame the museum closes on Mondays.",
        "e7": "Let's hope it's sunny this long weekend.",
        "e8": "How odd that there's no queue at the market today."
      },
      "flashcards": {
        "f1": "the subjunctive — quiero que vengas (I want you to come)",
        "f2": "hable — -ar verbs switch to e",
        "f3": "coma — -er/-ir verbs switch to a",
        "f4": "tenga — built from the yo-form 'tengo'",
        "f5": "vaya — fully irregular",
        "f6": "sea — fully irregular",
        "f7": "hopefully / let's hope — always with the subjunctive",
        "f8": "'Quiero comprar' — same subject takes the infinitive",
        "f9": "it's a shame that… — takes the subjunctive",
        "f10": "I'm glad that… — takes the subjunctive"
      },
      "quiz": {
        "q1": "'Quiero que' + a different person takes the subjunctive: vengas. 'Vienes' is indicative and 'venga' would be for usted.",
        "q2": "'Es importante que' takes the subjunctive: coman.",
        "q3": "Same subject: infinitive (quiero comprar). 'Que compre' would be for someone else doing the buying.",
        "q4": "'Ojalá' always takes the subjunctive: haga.",
        "q5": "'Me alegro de que' takes the subjunctive: estéis. 'Estáis' is indicative; 'sois' also mixes up ser and estar."
      }
    },
    "b1-porpara": {
      "title": "Por and para",
      "theory": {
        "t1": {"heading": "Para: destination and purpose", "body": "<strong>Para</strong> looks forward: <strong>purpose</strong> (<em>estudio para aprobar</em> — I study in order to pass), <strong>recipient</strong> (<em>este regalo es para ti</em>), <strong>direction</strong> (<em>salgo para Madrid</em>) and <strong>deadline</strong> (<em>es para el viernes</em> — it's due Friday). Trick: if you can say 'in order to' or 'destined for', it's almost always <em>para</em>."},
        "t2": {"heading": "Por: cause, means and route", "body": "<strong>Por</strong> looks backwards or around: <strong>cause</strong> (<em>se suspendió por la lluvia</em> — cancelled because of the rain), <strong>means</strong> (<em>por correo</em> — by post), <strong>route</strong> (<em>pasear por el casco antiguo</em> — to stroll through the old town), <strong>exchange</strong> (<em>por veinte euros</em>) and <strong>part of the day</strong> (<em>por la mañana</em>). Trick: 'because of' or 'through' → <em>por</em>."},
        "t3": {"heading": "Tricky pairs", "body": "Compare: <em>Lo hice <strong>por</strong> ti</em> (because of you, with you in mind) versus <em>Lo hice <strong>para</strong> ti</em> (the result is for you). <em>Voy <strong>por</strong> el parque</em> (through it) versus <em>voy <strong>para</strong> el parque</em> (towards it). Fixed expressions with <em>por</em>: <em>por favor, por fin, por supuesto, por cierto</em> (by the way). With <em>para</em>: <em>para siempre</em> (forever), <em>para nada</em> (not at all), <em>para variar</em> (for a change)."}
      },
      "examples": {
        "e1": "I'm studying Spanish (in order) to work in Valencia.",
        "e2": "The AVE to Seville was delayed because of a breakdown.",
        "e3": "This turrón is for my mother-in-law: I'm taking it to her at Christmas.",
        "e4": "I love strolling through the old town at sunset.",
        "e5": "Can you send it to me on WhatsApp?",
        "e6": "I swapped my bike for a guitar: good deal.",
        "e7": "The report has to be ready by Monday.",
        "e8": "In the morning I work and in the afternoon I go to the gym."
      },
      "flashcards": {
        "f1": "para — purpose: I study (in order) to pass",
        "f2": "por — cause: it was cancelled because of the rain",
        "f3": "por — means: I'll phone you",
        "f4": "para — recipient: this coffee is for you",
        "f5": "para — deadline: it's due Friday",
        "f6": "por — route: to stroll along the beach",
        "f7": "por — exchange/price: I bought it for ten euros",
        "f8": "by the way — fixed expression",
        "f9": "at last, finally — fixed expression",
        "f10": "forever — fixed expression"
      },
      "quiz": {
        "q1": "Purpose or goal: para. 'Por' would give a cause instead.",
        "q2": "Cause: por (because of the fog). 'Para' would express purpose, which makes no sense here.",
        "q3": "Means of communication: por (por correo, por teléfono, por WhatsApp).",
        "q4": "Recipient: para. 'Por mi abuela' would mean because of her.",
        "q5": "'Por ti' = because of you, motivated by you. 'Para ti' would make you the recipient of the result."
      }
    },
    "b1-pronombres": {
      "title": "Pronouns: lo, la, le, se lo…",
      "theory": {
        "t1": {"heading": "Direct: lo, la, los, las", "body": "The direct object is replaced by <strong>lo, la, los, las</strong> according to gender and number: <em>¿Has visto el partido? — Sí, <strong>lo</strong> he visto</em> (I've seen it). <em>¿Compraste las entradas? — Sí, <strong>las</strong> compré</em>. The pronoun goes <strong>before</strong> the conjugated verb: <em>Lo veo</em>, never <em>veo lo</em>."},
        "t2": {"heading": "Indirect: le, les (and the famous se)", "body": "The indirect object (to whom?) uses <strong>le, les</strong>: <em><strong>Le</strong> di el libro a Marta</em> — I gave the book to Marta. When indirect + direct appear together, <em>le/les</em> becomes <strong>se</strong>: <em>¿Le diste el libro? — Sí, <strong>se lo</strong> di</em> (never 'le lo'). The order is always: <strong>se + lo/la/los/las + verb</strong>."},
        "t3": {"heading": "Where does the pronoun go?", "body": "With a conjugated verb, <strong>before</strong>: <em>Te llamo mañana</em>. With an infinitive or gerund it can attach <strong>to the end</strong>: <em>Voy a llamar<strong>te</strong></em> or <em><strong>Te</strong> voy a llamar</em> — both correct. With affirmative commands, always attached: <em>¡Dí<strong>melo</strong>!</em> (tell me it!). Spain note: many speakers use <em>le</em> instead of <em>lo</em> for male people (<em>a Juan <strong>le</strong> vi ayer</em>) — the famous <strong>leísmo</strong>, accepted for singular male persons."}
      },
      "examples": {
        "e1": "Have you seen my umbrella? — No, I haven't seen it.",
        "e2": "Who's got the keys? — I've got them.",
        "e3": "I've bought my mother a present.",
        "e4": "Did you give Pablo the tickets? — Yes, I gave them to him yesterday.",
        "e5": "Don't lend me that book: I've already read it.",
        "e6": "I'm going to tell you something, but don't tell anyone.",
        "e7": "The bread? Buy it at the bakery on the corner.",
        "e8": "I send my cousins photos via the family group chat."
      },
      "flashcards": {
        "f1": "lo — masculine singular direct object: I read it",
        "f2": "las — feminine plural direct object: I've got them",
        "f3": "le — indirect object: I gave her the book",
        "f4": "it becomes se: se lo di (never 'le lo')",
        "f5": "lo veo — the pronoun goes before the conjugated verb",
        "f6": "attached after the infinitive (llamarte) or before the conjugated verb (te voy a llamar)",
        "f7": "always attached after affirmative commands: ¡dímelo!",
        "f8": "leísmo — using 'le' for a male person: typical of Spain",
        "f9": "fixed order: se + direct pronoun + verb (se lo di)",
        "f10": "no se lo digas — with negative commands the pronouns go before"
      },
      "quiz": {
        "q1": "'El último (libro)' is masculine singular: lo. 'La' would be feminine and 'le' is for indirect objects.",
        "q2": "Indirect + direct: 'le' turns into 'se' and comes first: se las. 'Le las' doesn't exist.",
        "q3": "'A mis padres' is a plural indirect object: les.",
        "q4": "Negative command: pronoun before the verb (no lo saques).",
        "q5": "With an infinitive the pronoun attaches to the end: comprarlo. 'El regalo' is a masculine direct object."
      }
    },
    "b1-futuro": {
      "title": "The future and the conditional",
      "theory": {
        "t1": {"heading": "The simple future: hablaré", "body": "Formed with the <strong>infinitive + -é, -ás, -á, -emos, -éis, -án</strong>: <em>hablaré, comerás, vivirá</em>. Common irregulars: <em>tener → <strong>tendré</strong>, hacer → <strong>haré</strong>, poder → <strong>podré</strong>, salir → <strong>saldré</strong>, decir → <strong>diré</strong>, haber → <strong>habrá</strong></em>. For plans already made, Spanish prefers <em>ir a + infinitive</em> or the present (<em>mañana <strong>voy</strong> al dentista</em>); the simple future sounds more like a promise or prediction: <em>Te <strong>llamaré</strong> esta noche</em> — I'll call you tonight."},
        "t2": {"heading": "The future of probability", "body": "A very Spanish use of the future: <strong>guessing</strong> about the present. <em>¿Qué hora <strong>será</strong>?</em> = what time is it, roughly? <em><strong>Serán</strong> las tres</em> = it must be about three. <em>¿Dónde está Juan? — <strong>Estará</strong> en el bar</em> = he's probably at the bar. It's not about the future at all: it marks a present-time guess."},
        "t3": {"heading": "The conditional: politeness and wishes", "body": "The conditional (<strong>infinitive + -ía</strong>: <em>hablaría, comería, viviría</em>; same irregular stems as the future: <em>tendría, haría, podría</em>) softens and hypothesises. Politeness: <em>¿<strong>Podrías</strong> ayudarme?</em> — could you help me? Wishes: <em>Me <strong>gustaría</strong> vivir junto al mar</em> — I'd like to live by the sea. Advice: <em>Yo en tu lugar <strong>hablaría</strong> con ella</em> — if I were you, I'd talk to her."}
      },
      "examples": {
        "e1": "I'll call you as soon as I leave work.",
        "e2": "Next year I'll walk the Camino de Santiago.",
        "e3": "Where can Lucía be? She's not answering her phone.",
        "e4": "It must be about two: the bakery has just closed.",
        "e5": "I'd like to work from home two days a week.",
        "e6": "Could you turn the music down a bit, please?",
        "e7": "If I were you, I'd catch the eight o'clock train.",
        "e8": "There must be about fifty people in the museum queue."
      },
      "flashcards": {
        "f1": "tendré — irregular future of tener",
        "f2": "haré — irregular future of hacer",
        "f3": "podré — irregular future of poder",
        "f4": "a guess about the present: where he probably is",
        "f5": "me gustaría — I'd like (polite wishes)",
        "f6": "could you…? — polite request with the conditional",
        "f7": "if I were you… — advice formula, takes the conditional",
        "f8": "mañana voy — the present is preferred for fixed appointments",
        "f9": "habrá — future of 'hay': there will be",
        "f10": "diría — irregular like the future (diré)"
      },
      "quiz": {
        "q1": "A promise about the future: llamaré. The past tenses don't fit and 'llame' is subjunctive.",
        "q2": "Future of probability: ¿qué hora será? = what time is it, roughly? The guess is marked with the future.",
        "q3": "The conditional softens requests: ¿podrías…? 'Podrás' asks about the future and 'pudiste' about the past.",
        "q4": "Polite wish: me gustaría + infinitive.",
        "q5": "'El año que viene' points to the future: haremos."
      }
    },
    "b1-fiestas": {
      "title": "Fiestas and plural Spain",
      "theory": {
        "t1": {"heading": "The festive calendar", "body": "Spain lives by its calendar: the <strong>Reyes Magos</strong> (Three Kings, 6 January) bring the presents and everyone eats <strong>roscón</strong>; in <strong>Semana Santa</strong> (Holy Week) processions fill the streets, especially in Andalusia and Castile; at Valencia's <strong>Fallas</strong> (March) giant cardboard monuments are burnt; at <strong>San Fermín</strong> (Pamplona, July) people run ahead of the bulls; and on <strong>Nochevieja</strong> (New Year's Eve) everyone eats the <strong>twelve grapes</strong> with the chimes from the Puerta del Sol."},
        "t2": {"heading": "One Spain, several languages", "body": "Spanish (also called <strong>castellano</strong>) lives alongside co-official languages: <strong>Catalan</strong> (Catalonia, the Balearics and, as Valencian, in the Valencia region), <strong>Galician</strong> (Galicia) and <strong>Basque</strong>/euskera (the Basque Country and part of Navarre). In those regions you'll see bilingual signs and hear people switch languages completely naturally."},
        "t3": {"heading": "Talking about traditions", "body": "Useful festive vocabulary: <em>se celebra</em> (it takes place), <em>cae en</em> (<em>this year Reyes <strong>falls on</strong> a Monday</em>), <em>el día festivo</em> (public holiday), <em>el desfile</em> (parade), <em>la verbena</em> (open-air night festival), <em>los fuegos artificiales</em> (fireworks), <em>disfrazarse</em> (to dress up, at Carnival). And the all-purpose question for fitting in: <em>¿Y aquí cómo se celebra?</em> — and how do you celebrate it here?"}
      },
      "examples": {
        "e1": "On New Year's Eve we eat the twelve grapes with the chimes.",
        "e2": "The Three Kings arrive on the night of the fifth of January.",
        "e3": "This year we're buying the roscón with cream, as always.",
        "e4": "In Valencia, the fallas are burnt on the night of San José.",
        "e5": "My cousin ran the San Fermín bull run last year.",
        "e6": "In Galicia the signs are in Galician and in Spanish.",
        "e7": "Does Reyes fall on a Monday or a Tuesday this year?",
        "e8": "The San Juan verbena is held on the beach, with bonfires."
      },
      "flashcards": {
        "f1": "the Three Kings — they bring the presents on 6 January",
        "f2": "ring-shaped sweet bread eaten on Kings' Day",
        "f3": "the twelve grapes — eaten on New Year's Eve, one per chime",
        "f4": "Valencia's March festival: cardboard monuments are burnt",
        "f5": "Pamplona's July festival, famous for the bull runs",
        "f6": "the bull run through the streets",
        "f7": "open-air night festival with music and dancing",
        "f8": "castellano — another name for the Spanish language",
        "f9": "Basque — co-official language of the Basque Country",
        "f10": "falls on (a date): this year it falls on a Monday"
      },
      "quiz": {
        "q1": "The strong Spanish tradition is the Reyes Magos (6 January), though Father Christmas has also entered many homes.",
        "q2": "One grape per chime: twelve grapes for twelve months of luck.",
        "q3": "The Fallas are Valencia's great festival, in March. Pamplona has San Fermín.",
        "q4": "Basque (euskera) is co-official in the Basque Country (and part of Navarre).",
        "q5": "To say which weekday a date lands on, Spanish uses 'caer': cae en martes."
      }
    },
    "b1-mensajes": {
      "title": "Writing: from formal emails to WhatsApp",
      "theory": {
        "t1": {"heading": "The formal email", "body": "Writing to a company, a university or officialdom: greeting <em><strong>Estimado/a</strong> Sr./Sra. García:</em> (with a colon, not a comma), body in usted form (<em>Le escribo para…</em> — I'm writing to…; <em>Quería preguntarle si…</em> — I wanted to ask you whether…), and sign-off <em><strong>Un cordial saludo</strong></em> or, even more formal, <em><strong>Atentamente</strong></em>. Useful phrases: <em>Adjunto le envío…</em> (please find attached), <em>Quedo a la espera de su respuesta</em> (I look forward to your reply)."},
        "t2": {"heading": "WhatsApp: another planet", "body": "Between friends the register changes completely: <em>¡Buenas! ¿Qué tal?</em>, famous abbreviations (<em><strong>q</strong></em> = que, <em><strong>xq</strong></em> = porque, <em><strong>tb</strong></em> = también, <em><strong>bss</strong></em> = besos), laughing with <em><strong>jajaja</strong></em> (never 'hahaha') and quick sign-offs: <em>¡Nos vemos!, ¡Hasta luego!, Un beso</em>. In Spain closing a message to a friend with <em>un beso</em> (a kiss) or <em>un abrazo</em> (a hug) is completely normal."},
        "t3": {"heading": "Choosing the register", "body": "The key is <strong>who you're writing to</strong>: to a landlord or an office, usted and full formulas; to a flatmate, tú and direct phrases. Formality signals: <em>quería + infinitive</em> (<em>quería preguntarle</em>) sounds softer than <em>quiero</em>; the conditional helps too (<em>¿sería posible…?</em> — would it be possible…?). And a cultural trick: Spanish formal emails thank in advance — <em>Muchas gracias de antemano</em>."}
      },
      "examples": {
        "e1": "Dear Ms Navarro: I am writing to ask about the flat on Calle Mayor.",
        "e2": "Please find attached my CV, as agreed on the phone.",
        "e3": "I look forward to your reply. Yours sincerely, Laura Gil.",
        "e4": "Would it be possible to move the meeting to Thursday morning?",
        "e5": "Hiya! So are we meeting this afternoon or what?",
        "e6": "Can't make it, got work. Another day works for me too. Kisses!",
        "e7": "Hahaha, brilliant. See you at the weekend then.",
        "e8": "Many thanks in advance for your help."
      },
      "flashcards": {
        "f1": "formal email greeting; ends with a colon",
        "f2": "Yours sincerely — the most formal sign-off",
        "f3": "Kind regards — standard formal sign-off",
        "f4": "please find attached…",
        "f5": "I look forward to your reply",
        "f6": "porque / por qué — texting abbreviation",
        "f7": "también (also) — texting abbreviation",
        "f8": "Spanish written laughter (with a j)",
        "f9": "I wanted to ask you… — the imperfect softens the request",
        "f10": "many thanks in advance — formal email closing courtesy"
      },
      "quiz": {
        "q1": "Writing formally to a stranger: Estimado/a + surname and a colon. The others are all informal registers.",
        "q2": "'Atentamente' is the classic formal sign-off. The others belong in WhatsApp.",
        "q3": "'xq' abbreviates porque/por qué. 'Tb' is también and 'curro' is colloquial Spanish for work.",
        "q4": "The conditional ('¿sería posible…?') is the polite formula. The others are commands or too casual.",
        "q5": "Spanish laughs with a j: jajaja. 'Hahaha' is the English pattern."
      }
    },
    "b1-opinar": {
      "title": "Opinions and debate: creo que sí, no creo que sea",
      "theory": {
        "t1": {"heading": "Affirming: creo que + indicative", "body": "For an affirmative opinion, Spanish uses the <strong>indicative</strong>: <em>Creo que <strong>tienes</strong> razón</em> — I think you're right; <em>Me parece que el AVE <strong>es</strong> caro</em>. Other formulas: <em>en mi opinión, para mí, desde mi punto de vista, la verdad es que…</em> (truth is…)."},
        "t2": {"heading": "Negating: no creo que + subjunctive", "body": "As soon as the opinion is negated, the <strong>subjunctive</strong> appears: <em>No creo que <strong>tengas</strong> razón</em> — I don't think you're right; <em>No me parece que <strong>sea</strong> caro</em>. The practical rule: <strong>creo que + indicative, no creo que + subjunctive</strong>. Same with <em>es verdad que <strong>es</strong>…</em> versus <em>no es verdad que <strong>sea</strong>…</em>"},
        "t3": {"heading": "The art of the sobremesa", "body": "Debating is Spain's after-lunch sport: people interrupt affectionately and lean on connectors. Agreeing: <em>estoy de acuerdo, tienes razón, claro, por supuesto</em>. Disagreeing politely: <em>ya, pero…</em> (yes, but…), <em>no sé yo…</em> (I'm not so sure), <em>depende</em>, <em>no estoy del todo de acuerdo</em>. Organising: <em>por un lado… por otro</em> (on one hand… on the other), <em>sin embargo</em> (however), <em>además</em> (besides), <em>total, que…</em> (long story short…)."}
      },
      "examples": {
        "e1": "I honestly think the best jamón is from Huelva.",
        "e2": "I don't think football is that important, to be honest.",
        "e3": "I think the Fallas fall on a weekend this year.",
        "e4": "I don't think the flat is that bad for the price.",
        "e5": "Yes, but Madrid empties out in August: not even the doorman stays.",
        "e6": "On one hand I fancy going out; on the other, I'm up early tomorrow.",
        "e7": "I'm not so sure… it depends on the ticket prices.",
        "e8": "Long story short, we ended up with no paella."
      },
      "flashcards": {
        "f1": "indicative: creo que tienes razón",
        "f2": "subjunctive: no creo que tengas razón",
        "f3": "in my opinion",
        "f4": "yes, but… — soft disagreement: concede, then counter",
        "f5": "I'm not so sure… — very Spanish doubt",
        "f6": "it depends",
        "f7": "on one hand… on the other…",
        "f8": "however — contrast connector",
        "f9": "long story short… — colloquial summariser",
        "f10": "I agree"
      },
      "quiz": {
        "q1": "Affirmative opinion: creo que + indicative (está).",
        "q2": "Negated opinion: no creo que + subjunctive (esté).",
        "q3": "'Ya, pero…' concedes first and disagrees second. 'Total, que' summarises and 'además' adds.",
        "q4": "'No es verdad que' takes the subjunctive: duerma.",
        "q5": "'Total, que…' is the colloquial summariser par excellence."
      }
    }
}};
