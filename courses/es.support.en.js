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

   PART 1 (A1): overlays for the 7 A1 topics. A2/B1 overlays are appended
   at the //__APPEND_HERE__ sentinel inside topics: replace
   "//__APPEND_HERE__\n}};" with "<next topics>,\n//__APPEND_HERE__\n}};" */
window.PTB_COURSES.es.support = window.PTB_COURSES.es.support || {};
window.PTB_COURSES.es.support.en = {
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
        "q3": "'Cansada' (tired) is a temporary state (today, because I slept badly), so it takes 'estar': estoy cansada. 'Soy cansada' is the classic learner error.",
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
//__APPEND_HERE__
}};
