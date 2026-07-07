/* Pathway to B1 — course "da", Spanish (es) support overlay.
   Plain JS, no JSX: a one-line window.PTB_COURSES wrapper around a pure
   JSON literal, loaded via <script src> AFTER courses/da.core.js.

   Translations are keyed by topic id + ITEM id from the core — never by
   array index.
   ID STABILITY RULE: every content item carries a short stable id
   (theory t*, examples e*, flashcards f*, quiz q*, placement p*).
   Support overlays key translations by topic id + ITEM id — never by
   array index. Future insertions MUST mint NEW ids (t4, e9, f11, ...);
   NEVER renumber or reuse existing ids, even when inserting mid-array
   or deleting items.

   PART 1 (A1): overlays for the 7 A1 topics. A2/B1 overlays are appended
   at the //__APPEND_HERE__ sentinel inside topics: replace
   "//__APPEND_HERE__\n}};" with "<next topics>,\n//__APPEND_HERE__\n}};" */
window.PTB_COURSES.da.support = window.PTB_COURSES.da.support || {};
window.PTB_COURSES.da.support.es = {
  "name": "Español",
  "topics": {
    "a1-hils": {
      "title": "Saludos y presentaciones",
      "theory": {
        "t1": {
          "heading": "Saludos",
          "body": "<strong>Hej</strong> es el saludo más común en Dinamarca — se le puede decir a cualquier persona, a cualquier hora. De manera informal también se dice <strong>hejsa</strong> o <strong>halløj</strong>. En la mañana: <strong>godmorgen</strong>; más tarde: <strong>goddag</strong> (formal); en la noche: <strong>godaften</strong>. Al irte, di <strong>farvel</strong>, <strong>hej hej</strong> o <strong>vi ses</strong> (= nos vemos)."
        },
        "t2": {
          "heading": "Presentarte",
          "body": "Para decir tu nombre usa <strong>jeg hedder…</strong> (por ejemplo <em>Jeg hedder Mette</em> = me llamo Mette). La pregunta es: <strong>Hvad hedder du?</strong> (¿cómo te llamas?). Sobre el país o la ciudad: <strong>Jeg kommer fra…</strong> (vengo de…) y <strong>Hvor kommer du fra?</strong> (¿de dónde eres?). Sobre la edad: <strong>Hvor gammel er du? — Jeg er femogtyve år.</strong> (¿Cuántos años tienes? — Tengo veinticinco). Al conocer a alguien: <strong>Hyggeligt at møde dig!</strong> (¡un gusto conocerte!)."
        },
        "t3": {
          "heading": "Du para casi todos",
          "body": "En Dinamarca se le dice <strong>du</strong> (tú) a casi todo el mundo — al vecino, al profesor y también al jefe. Es completamente normal y educado. La forma formal <strong>De</strong> (usted) se usa muy rara vez: con personas muy mayores o con la familia real. Los nombres de pila se usan en todas partes, incluso en el trabajo."
        }
      },
      "examples": {
        "e1": "¡Hola! Me llamo Mette. ¿Cómo te llamas?",
        "e2": "¡Buenos días! ¿Cómo te va? — Me va bien, gracias.",
        "e3": "Vengo de Chile. ¿De dónde eres tú?",
        "e4": "¡Un gusto conocerte!",
        "e5": "¿Cuántos años tienes? — Tengo veinticinco años.",
        "e6": "Este es mi amigo Lars. — ¡Hola, Lars!",
        "e7": "¡Nos vemos mañana! ¡Chao!",
        "e8": "¿Hablas inglés? — Sí, un poco."
      },
      "flashcards": {
        "f1": "Hola",
        "f2": "Buenos días",
        "f3": "Adiós",
        "f4": "Me llamo…",
        "f5": "¿Cómo te llamas?",
        "f6": "¿De dónde eres?",
        "f7": "Un gusto conocerte",
        "f8": "¿Cómo te va?",
        "f9": "Gracias",
        "f10": "Nos vemos"
      },
      "quiz": {
        "q1": "'Godmorgen' se usa en la mañana. 'Godnat' se dice al irse a dormir, 'hej hej' es una despedida y 'godaften' se usa en la noche.",
        "q2": "'Hvad hedder du?' es la pregunta correcta — literalmente '¿qué te llamas?'. Las otras formas no son danés gramatical.",
        "q3": "Para el origen se usa 'fra': Jeg kommer fra Chile = vengo de Chile.",
        "q4": "En Dinamarca casi todos se tratan de 'du' (tú) — incluso al jefe. 'De' (usted) solo se usa en situaciones muy formales o con personas muy mayores.",
        "q5": "'I lige måde' significa 'igualmente' — devuelves el mismo deseo."
      }
    },
    "a1-enet": {
      "title": "En y et — género y forma definida",
      "theory": {
        "t1": {
          "heading": "Dos géneros: palabras en y palabras et",
          "body": "Los sustantivos daneses tienen dos géneros: <strong>género común</strong> (palabras con <em>en</em>) y <strong>género neutro</strong> (palabras con <em>et</em>). Alrededor del 75 % son palabras en: <em>en bil</em> (un auto), <em>en kat</em> (un gato), <em>en stol</em> (una silla). El resto son palabras et: <em>et hus</em> (una casa), <em>et bord</em> (una mesa), <em>et æble</em> (una manzana). No siempre se puede adivinar el género — aprende siempre <strong>en</strong> o <strong>et</strong> junto con la palabra."
        },
        "t2": {
          "heading": "El artículo definido es un sufijo",
          "body": "En danés el artículo definido va <strong>al final de la palabra</strong>, como sufijo: <em>en bil → <strong>bilen</strong></em> (el auto), <em>et hus → <strong>huset</strong></em> (la casa). No hay una palabra separada como 'el' o 'la'. Así, <em>bilen</em> = el auto del que hablamos."
        },
        "t3": {
          "heading": "El plural",
          "body": "El plural tiene tres terminaciones comunes: <strong>-er</strong> (<em>bil → biler</em>), <strong>-e</strong> (<em>hus → huse, dag → dage</em>) y <strong>sin terminación</strong> (<em>år → år, fisk → fisk</em>). El plural definido termina en <strong>-ne</strong>: <em>bilerne</em> (los autos), <em>husene</em> (las casas)."
        }
      },
      "examples": {
        "e1": "Tengo un auto. El auto es rojo.",
        "e2": "Vivimos en una casa. La casa es vieja.",
        "e3": "En la cocina hay una mesa y una silla.",
        "e4": "El gato duerme en el sofá.",
        "e5": "Él tiene tres hijos y un perro.",
        "e6": "La manzana está sobre la mesa.",
        "e7": "Tenemos dos gatos y un conejo.",
        "e8": "Los autos están estacionados en la calle."
      },
      "flashcards": {
        "f1": "un auto",
        "f2": "una casa",
        "f3": "el auto (forma definida de 'en bil')",
        "f4": "la casa (forma definida de 'et hus')",
        "f5": "una manzana",
        "f6": "una silla",
        "f7": "una mesa",
        "f8": "un gato",
        "f9": "autos (plural de 'bil')",
        "f10": "los autos (plural definido)"
      },
      "quiz": {
        "q1": "La forma definida de las palabras en se hace con el sufijo -en: en bil → bilen (el auto).",
        "q2": "La forma definida de las palabras et se hace con el sufijo -et: et hus → huset (la casa).",
        "q3": "'Æble' es una palabra et: et æble → æblet. 'Bil', 'kat' y 'stol' son palabras en.",
        "q4": "El plural de 'bil' es 'biler' (con -er). 'Bilene' no es una forma danesa — el plural definido es 'bilerne'.",
        "q5": "El plural definido se forma con -ne después del plural: biler + -ne = bilerne (los autos)."
      }
    },
    "a1-tal": {
      "title": "Números, la hora y precios",
      "theory": {
        "t1": {
          "heading": "Números del 0 al 40",
          "body": "<em>nul, en/et, to, tre, fire, fem, seks, syv, otte, ni, ti, elleve, tolv, tretten, fjorten, femten, seksten, sytten, atten, nitten, tyve</em>. Las decenas: <strong>tyve</strong> (20), <strong>tredive</strong> (30), <strong>fyrre</strong> (40). Desde el 21 las unidades van primero: <strong>enogtyve</strong> (21), <strong>femogtredive</strong> (35) — literalmente 'uno-y-veinte'."
        },
        "t2": {
          "heading": "Los números raros: 50, 70, 90",
          "body": "Las decenas grandes vienen de un antiguo sistema de contar en veintenas: <strong>halvtreds</strong> (50), <strong>tres</strong> (60), <strong>halvfjerds</strong> (70), <strong>firs</strong> (80), <strong>halvfems</strong> (90). No necesitas entender el sistema antiguo — apréndelos de memoria. <em>Femoghalvfjerds</em> = 75. ¡Ojo: 'tres' en danés es 60, no 3!"
        },
        "t3": {
          "heading": "La hora, las coronas y MobilePay",
          "body": "<strong>Hvad er klokken? — Klokken er ti.</strong> (¿Qué hora es? — Son las diez.) Cuidado: <strong>halv ti</strong> significa las 9.30 — ¡media hora <em>antes</em> de las diez! <em>Kvart over otte</em> = 8.15, <em>kvart i otte</em> = 7.45. El dinero: <strong>kroner</strong> (coronas, kr.) y <strong>øre</strong>. <em>Det koster halvtreds kroner</em> = cuesta cincuenta coronas. En Dinamarca casi todos pagan con tarjeta o con <strong>MobilePay</strong> en el celular — el efectivo es poco común."
        }
      },
      "examples": {
        "e1": "¿Qué hora es? — Son las nueve y media. ('halv ti' = 9.30)",
        "e2": "Cuesta cincuenta coronas.",
        "e3": "Tengo veinticinco años.",
        "e4": "El bus llega a las ocho y cuarto.",
        "e5": "¿Puedo pagar con MobilePay? — Sí, por supuesto.",
        "e6": "Mi abuela paterna tiene setenta años.",
        "e7": "Nos vemos mañana a las siete.",
        "e8": "Un café cuesta treinta y cinco coronas."
      },
      "flashcards": {
        "f1": "veinte (20)",
        "f2": "cincuenta (50)",
        "f3": "setenta (70)",
        "f4": "noventa (90)",
        "f5": "veintiuno (21)",
        "f6": "¿Qué hora es?",
        "f7": "las nueve y media (9.30) — ¡no las diez y media!",
        "f8": "las ocho y cuarto (8.15)",
        "f9": "una corona (la moneda danesa)",
        "f10": "¿Cuánto cuesta?"
      },
      "quiz": {
        "q1": "'Halvtreds' = 50. Viene del antiguo sistema de veintenas.",
        "q2": "'Halv ti' = las 9.30 — media hora antes de las diez, ¡no las diez y media!",
        "q3": "En danés las unidades van primero: enogtyve = 'uno y veinte' = 21.",
        "q4": "'Halvfems' = 90.",
        "q5": "Casi todos los daneses pagan con MobilePay en el celular o con tarjeta; el efectivo es poco común."
      }
    },
    "a1-fam": {
      "title": "Familia y pronombres",
      "theory": {
        "t1": {
          "heading": "Pronombres personales",
          "body": "<strong>jeg</strong> (yo), <strong>du</strong> (tú), <strong>han</strong> (él), <strong>hun</strong> (ella), <strong>den/det</strong> (ello), <strong>vi</strong> (nosotros), <strong>I</strong> (ustedes), <strong>de</strong> (ellos). Ojo: <em>I</em> (= ustedes) se escribe siempre con mayúscula. Después de un verbo se usan las formas de objeto: <strong>mig, dig, ham, hende, os, jer, dem</strong> — <em>Kan du hjælpe mig?</em> (¿me puedes ayudar?)."
        },
        "t2": {
          "heading": "Min, mit y mine",
          "body": "Los posesivos concuerdan con la palabra que sigue: <strong>min</strong> ante palabras en (<em>min bror</em> = mi hermano), <strong>mit</strong> ante palabras et (<em>mit hus</em> = mi casa), <strong>mine</strong> en plural (<em>mine børn</em> = mis hijos). Lo mismo pasa con <em>din/dit/dine</em> (tu/tus). <strong>Hans</strong> (de él) y <strong>hendes</strong> (de ella) no cambian."
        },
        "t3": {
          "heading": "La familia y los apellidos daneses",
          "body": "El danés es muy preciso con la familia: <strong>mormor</strong> = la madre de tu mamá, <strong>morfar</strong> = el padre de tu mamá, <strong>farmor</strong> = la madre de tu papá, <strong>farfar</strong> = el padre de tu papá. Muchos apellidos terminan en <strong>-sen</strong> (= 'hijo de'): <em>Jensen, Nielsen, Hansen</em> — los tres apellidos más comunes de Dinamarca."
        }
      },
      "examples": {
        "e1": "Mi hermano se llama Søren y mi hermana se llama Anna.",
        "e2": "Mi hijo va al jardín infantil.",
        "e3": "Mis padres viven en Aarhus.",
        "e4": "Mi 'mormor' es la madre de mi mamá, y mi 'farmor' es la madre de mi papá.",
        "e5": "Él tiene dos hermanos.",
        "e6": "El esposo de ella trabaja en Copenhague.",
        "e7": "Visitamos a nuestros abuelos el fin de semana.",
        "e8": "¿Los conoces? — Sí, son mis vecinos."
      },
      "flashcards": {
        "f1": "un hermano",
        "f2": "una hermana",
        "f3": "hermanos y hermanas",
        "f4": "los padres (mamá y papá)",
        "f5": "la abuela materna (madre de tu mamá)",
        "f6": "la abuela paterna (madre de tu papá)",
        "f7": "mi (ante palabras en: min bror)",
        "f8": "mi (ante palabras et: mit hus)",
        "f9": "mis (plural: mine børn)",
        "f10": "niños / hijos (plural de 'et barn')"
      },
      "quiz": {
        "q1": "'Hus' es una palabra et, así que se dice 'mit hus' (mi casa).",
        "q2": "'Farmor' es literalmente 'madre del padre': tu abuela paterna. La madre de tu mamá es 'mormor'.",
        "q3": "Después de un verbo se usa la forma de objeto 'mig': Kan du hjælpe mig? = ¿me puedes ayudar?",
        "q4": "'Jensen' significa originalmente 'hijo de Jens'. Por eso tantos apellidos daneses terminan en -sen.",
        "q5": "'Forældre' (padres) es plural, así que se usa 'mine': mine forældre."
      }
    },
    "a1-mad": {
      "title": "Comida y cultura de café",
      "theory": {
        "t1": {
          "heading": "Rugbrød, smørrebrød y wienerbrød",
          "body": "El <strong>rugbrød</strong> es el pan de centeno oscuro que los daneses comen todos los días al almuerzo. El <strong>smørrebrød</strong> es una rebanada abierta de rugbrød con algo encima — por ejemplo salmón o huevo. El fin de semana se compran <strong>rundstykker</strong> (pancitos frescos) para el desayuno. Y el <strong>wienerbrød</strong> es el pastel de hojaldre que el resto del mundo llama 'a Danish'."
        },
        "t2": {
          "heading": "Cortesía sin 'please'",
          "body": "¡El danés <strong>no</strong> tiene una palabra para 'please' (por favor)! La cortesía está en frases completas: <strong>Jeg vil gerne have en kaffe</strong> (quisiera un café) o <strong>Må jeg bede om regningen?</strong> (¿me trae la cuenta?) — y en decir <strong>tak</strong> (gracias) muchas veces. Después de comer, el invitado dice <strong>tak for mad</strong> (gracias por la comida) y el anfitrión responde <strong>velbekomme</strong> (buen provecho)."
        },
        "t3": {
          "heading": "Café y hygge",
          "body": "Los daneses toman mucho café — muchas veces con queque o pastel. La palabra más importante es <strong>hygge</strong>: estar cómodo y a gusto con otros, idealmente con velas, café y tiempo de sobra. Se dice por ejemplo <em>Skal vi hygge os i aften?</em> (¿pasamos un rato agradable esta noche?). La hygge es una parte central de la cultura danesa."
        }
      },
      "examples": {
        "e1": "Quisiera un café y un pancito.",
        "e2": "¿Me trae la cuenta?",
        "e3": "Comemos pan de centeno al almuerzo.",
        "e4": "Un smørrebrød de salmón, gracias.",
        "e5": "¿Compramos pasteles daneses para el café?",
        "e6": "¡Gracias por la comida! — ¡Buen provecho!",
        "e7": "¿Me podría dar un vaso de jugo?",
        "e8": "Pasamos un rato acogedor con café y velas."
      },
      "flashcards": {
        "f1": "pan de centeno (el pan oscuro danés)",
        "f2": "sándwich abierto sobre pan de centeno",
        "f3": "pancito para el desayuno",
        "f4": "pastel danés de hojaldre",
        "f5": "quisiera… (para pedir con cortesía)",
        "f6": "¿me puede dar…? (muy cortés)",
        "f7": "'gracias por la comida' (después de comer)",
        "f8": "'buen provecho' (respuesta a 'tak for mad')",
        "f9": "la hygge: estar cómodo y a gusto",
        "f10": "la cuenta"
      },
      "quiz": {
        "q1": "El danés no tiene palabra para 'please' — la cortesía está en la frase completa 'jeg vil gerne have' (quisiera) y en decir 'tak' (gracias).",
        "q2": "El smørrebrød es una rebanada abierta de pan de centeno con algo encima — salmón, huevo, etc.",
        "q3": "El invitado dice 'tak for mad' (gracias por la comida) y el anfitrión responde 'velbekomme' (buen provecho).",
        "q4": "El wienerbrød ('pan de Viena') es lo que el resto del mundo llama 'a Danish'.",
        "q5": "'Hygge' es estar cómodo y a gusto con otros, sin apuro — con velas, café y buena compañía."
      }
    },
    "a1-hverdag": {
      "title": "La vida diaria y el orden V2",
      "theory": {
        "t1": {
          "heading": "Presente: siempre -r",
          "body": "El presente es fácil en danés: el verbo termina en <strong>-r</strong> y la forma es <strong>igual para todas las personas</strong>: <em>jeg arbejder, du arbejder, han arbejder, vi arbejder</em> (yo trabajo, tú trabajas, él trabaja, nosotros trabajamos). ¡No hay conjugación por persona! <em>at bo → bor</em> (vivir), <em>at cykle → cykler</em> (andar en bicicleta), <em>at spise → spiser</em> (comer)."
        },
        "t2": {
          "heading": "La regla V2",
          "body": "El verbo va siempre en <strong>segunda posición</strong> en una oración normal. <em>Jeg cykler til arbejde i dag.</em> (Hoy voy en bicicleta al trabajo.) Si la oración empieza con otra cosa, se invierte el orden: <em>I dag <strong>cykler jeg</strong> til arbejde.</em> El verbo se queda en la posición dos y 'jeg' pasa detrás."
        },
        "t3": {
          "heading": "Cultura de la bicicleta",
          "body": "En Copenhague hay más bicicletas que autos. Los daneses pedalean todo el año — también con lluvia y nieve — al trabajo, a la escuela y con los niños en bicicleta de carga. Hay <strong>ciclovías</strong> anchas junto a casi todas las calles. Andar en bicicleta es vida diaria, no deporte."
        }
      },
      "examples": {
        "e1": "Me levanto a las siete todos los días.",
        "e2": "Ella trabaja en una oficina en Copenhague.",
        "e3": "Hoy voy en bicicleta al trabajo.",
        "e4": "En la mañana tomamos café.",
        "e5": "Cenamos a las seis.",
        "e6": "Cada fin de semana visitan a sus amigos.",
        "e7": "Voy en bicicleta al trabajo — incluso cuando llueve.",
        "e8": "En la noche vemos televisión y pasamos un rato agradable."
      },
      "flashcards": {
        "f1": "trabajar",
        "f2": "vivir (en un lugar)",
        "f3": "andar en bicicleta",
        "f4": "levantarse",
        "f5": "todos los días",
        "f6": "en la mañana",
        "f7": "en la noche",
        "f8": "una ciclovía",
        "f9": "ver televisión",
        "f10": "la cena"
      },
      "quiz": {
        "q1": "El presente siempre termina en -r y es igual para todas las personas: han cykler.",
        "q2": "Regla V2: el verbo va en segunda posición. Si la frase empieza con 'i dag' (hoy), el sujeto pasa detrás del verbo: I dag cykler jeg.",
        "q3": "'At bo' (vivir) en presente es 'bor': Vi bor i et hus (vivimos en una casa).",
        "q4": "Con 'om morgenen' (en la mañana) al inicio, el verbo debe ir segundo: Om morgenen drikker vi kaffe.",
        "q5": "El verbo danés no se conjuga por persona: siempre -r en presente para jeg, du, han, vi, I y de."
      }
    },
    "a1-by": {
      "title": "Por la ciudad",
      "theory": {
        "t1": {
          "heading": "S-tog, metro y rejsekort",
          "body": "En Copenhague el <strong>S-tog</strong> (tren urbano) va a los suburbios, y el <strong>metro</strong> pasa bajo la ciudad — no tiene conductor y funciona las 24 horas. Se paga con el <strong>rejsekort</strong> (tarjeta de transporte) o una app: acuérdate de <strong>marcar al subir</strong> (tjekke ind) cuando empieza el viaje y de <strong>marcar al bajar</strong> (tjekke ud) cuando termina."
        },
        "t2": {
          "heading": "Preguntar por el camino",
          "body": "Empieza con <strong>undskyld</strong> (disculpe): <em>Undskyld, hvor er metroen?</em> (Disculpe, ¿dónde está el metro?) o <em>Hvordan kommer jeg til banegården?</em> (¿Cómo llego a la estación central?). Respuestas: <strong>til venstre</strong> (a la izquierda), <strong>til højre</strong> (a la derecha), <strong>ligeud</strong> (derecho) — <em>Gå ligeud og drej til venstre.</em> (Camina derecho y dobla a la izquierda.)"
        },
        "t3": {
          "heading": "A pie por Copenhague",
          "body": "Mucho se puede ver a pie: la calle peatonal <strong>Strøget</strong>, el puerto antiguo <strong>Nyhavn</strong> con sus casas de colores y la <strong>Rådhuspladsen</strong> (Plaza del Ayuntamiento). Los daneses 'salen a caminar' con cualquier clima. Y si el camino es muy largo — se toma la bicicleta."
        }
      },
      "examples": {
        "e1": "Disculpe, ¿dónde está el metro?",
        "e2": "Camina derecho y después a la izquierda.",
        "e3": "¿Cómo llego a la Plaza del Ayuntamiento (Rådhuspladsen)?",
        "e4": "Tienes que tomar el S-tog dirección Farum.",
        "e5": "Acuérdate de marcar tu rejsekort al subir.",
        "e6": "La estación central queda a la derecha.",
        "e7": "Damos un paseo por Nyhavn.",
        "e8": "La estación queda a cinco minutos de aquí."
      },
      "flashcards": {
        "f1": "el S-tog: tren urbano de Copenhague",
        "f2": "el metro (sin conductor, funciona 24 horas)",
        "f3": "la tarjeta de transporte (rejsekort)",
        "f4": "a la izquierda",
        "f5": "a la derecha",
        "f6": "derecho (sin doblar)",
        "f7": "Disculpe, ¿dónde está…?",
        "f8": "una estación central de trenes",
        "f9": "marcar la tarjeta al empezar el viaje",
        "f10": "un paseo / una vuelta"
      },
      "quiz": {
        "q1": "Con el rejsekort marcas al subir (tjekke ind) cuando empieza el viaje y al bajar (tjekke ud) cuando termina.",
        "q2": "'Ligeud' = derecho, sin doblar.",
        "q3": "El metro de Copenhague no tiene conductor y funciona las 24 horas.",
        "q4": "Empieza con 'undskyld' (disculpe): Undskyld, hvor er banegården?",
        "q5": "El S-tog es el tren urbano que conecta Copenhague con sus suburbios."
      }
    },
    "a2-datid": {
      "title": "El pasado — ayer y en verano",
      "theory": {
        "t1": {
          "heading": "Pasado regular: -ede y -te",
          "body": "La mayoría de los verbos daneses forman el pasado con una terminación. El grupo 1 toma <strong>-ede</strong>: <em>at lave → lavede</em> (hacer → hizo), <em>at bo → boede</em> (vivir → vivió), <em>at arbejde → arbejdede</em> (trabajar → trabajó), <em>at spille → spillede</em> (jugar → jugó). El grupo 2 toma <strong>-te</strong>: <em>at spise → spiste</em> (comer → comió), <em>at købe → købte</em> (comprar → compró), <em>at læse → læste</em> (leer → leyó), <em>at høre → hørte</em> (oír → oyó). La forma es igual para todas las personas: <em>jeg lavede, vi lavede, de lavede</em>."
        },
        "t2": {
          "heading": "Verbos irregulares",
          "body": "Muchos verbos importantes son irregulares — hay que aprenderlos de memoria: <strong>at være → var</strong> (ser/estar → era/estaba), <strong>at have → havde</strong> (tener → tenía), <strong>at gå → gik</strong> (ir/caminar → fue), <strong>at se → så</strong> (ver → vio), <strong>at tage → tog</strong> (tomar → tomó), <strong>at få → fik</strong> (recibir → recibió), <strong>at drikke → drak</strong> (beber → bebió), <strong>at komme → kom</strong> (venir → vino). Por ejemplo: <em>I går gik vi en tur, og vi drak kaffe bagefter</em> = ayer salimos a caminar y después tomamos café."
        },
        "t3": {
          "heading": "Orden de palabras y el fin de semana",
          "body": "El verbo siempre va en <strong>segunda posición</strong> — también cuando la frase empieza con una expresión de tiempo: <em><strong>I går tog</strong> vi til stranden</em> (ayer fuimos a la playa) — no 'i går vi tog'. Expresiones útiles para el pasado: <strong>i går</strong> (ayer), <strong>i sidste uge</strong> (la semana pasada), <strong>i sommer</strong> (este verano pasado), <strong>i weekenden</strong> (el fin de semana). El lunes en la mañana muchos daneses cuentan qué hicieron el fin de semana — muchas veces en el <strong>sommerhus</strong>, una casita en la costa donde la familia descansa."
        }
      },
      "examples": {
        "e1": "Ayer trabajé desde la casa.",
        "e2": "Comimos pan de centeno al almuerzo.",
        "e3": "En verano estuvimos en la casa de veraneo junto al Mar del Norte.",
        "e4": "Ella salió a caminar un buen rato por el bosque.",
        "e5": "Vi una buena película el viernes pasado.",
        "e6": "Ellos vivieron dos años en Aarhus.",
        "e7": "¿Qué hiciste el fin de semana? — Descansé.",
        "e8": "Tomamos café y lo pasamos rico toda la tarde."
      },
      "flashcards": {
        "f1": "hizo / hacía (pasado de 'at lave')",
        "f2": "comió (pasado de 'at spise')",
        "f3": "fue / caminó (pasado de 'at gå')",
        "f4": "vio (pasado de 'at se')",
        "f5": "era / estaba (pasado de 'at være')",
        "f6": "tenía (pasado de 'at have')",
        "f7": "ayer",
        "f8": "la semana pasada",
        "f9": "una casa de veraneo (típica danesa, en la costa)",
        "f10": "el fin de semana"
      },
      "quiz": {
        "q1": "'I går' (ayer) exige el pasado: kørte. 'Kører' es presente y 'kørt' es la forma que se usa con 'har'.",
        "q2": "'At gå' es irregular: gå → gik. 'Gåede' no existe.",
        "q3": "'I aftes' (anoche) exige el pasado, y 'at se' es irregular: se → så.",
        "q4": "El verbo debe ir en segunda posición: I sommer VAR vi i sommerhus.",
        "q5": "At lave → lavede. Los otros tres toman -te: spiste, købte, læste."
      }
    },
    "a2-kob": {
      "title": "Compras y dinero",
      "theory": {
        "t1": {
          "heading": "Coronas, tarjeta y MobilePay",
          "body": "Dinamarca usa <strong>coronas danesas</strong> (kr.), no euros. Casi siempre se paga con <strong>tarjeta</strong> o con <strong>MobilePay</strong> — una app para pagar con el teléfono. El efectivo es raro; hasta en un mercado de pulgas muchas veces se puede pagar con MobilePay. Tres verbos clave: <strong>at købe</strong> (comprar), <strong>at betale</strong> (pagar) y <strong>at koste</strong> (costar): <em>Hvad koster det? — Det koster 25 kroner</em> (¿cuánto cuesta? — cuesta 25 coronas)."
        },
        "t2": {
          "heading": "Pant — ¡las botellas valen plata!",
          "body": "Las botellas y latas tienen <strong>pant</strong> (depósito): un pequeño cobro extra (marcado A, B o C — de 1 a 3 coronas) que te devuelven. Las botellas vacías se entregan en una <strong>pantautomat</strong> (máquina de depósito) en el supermercado y recibes un vale con plata. Por eso los daneses nunca botan las botellas — ¡el pant es dinero!"
        },
        "t3": {
          "heading": "Ofertas y mercado de pulgas",
          "body": "Un <strong>tilbud</strong> es una oferta — un producto a un precio más bajo de lo normal; los supermercados publican ofertas nuevas cada semana en su <em>tilbudsavis</em> (catálogo de ofertas). Un <strong>loppemarked</strong> es un mercado de pulgas, donde se compran y venden cosas usadas; son muy populares en verano. Palabras útiles: <strong>dyr</strong> (caro), <strong>billig</strong> (barato), <strong>en kvittering</strong> (la boleta que te dan al pagar)."
        }
      },
      "examples": {
        "e1": "¿Cuánto cuestan estas manzanas? — Cuestan doce coronas.",
        "e2": "¿Puedo pagar con MobilePay? — Sí, por supuesto.",
        "e3": "El pan de centeno está en oferta esta semana.",
        "e4": "Entrego las botellas en la máquina de depósito.",
        "e5": "Ella compró una lámpara antigua en el mercado de pulgas.",
        "e6": "Es demasiado caro — ¿tienen algo más barato?",
        "e7": "¿Quiere una boleta? — No, gracias.",
        "e8": "Casi nunca pagamos con efectivo — solo con tarjeta."
      },
      "flashcards": {
        "f1": "comprar",
        "f2": "pagar",
        "f3": "costar: ¿cuánto cuesta?",
        "f4": "una corona (la moneda danesa)",
        "f5": "el depósito por botellas y latas — te lo devuelven en la máquina",
        "f6": "una oferta",
        "f7": "un mercado de pulgas",
        "f8": "caro",
        "f9": "barato",
        "f10": "una boleta / un recibo"
      },
      "quiz": {
        "q1": "Las botellas y latas tienen depósito (pant). Se entregan en la máquina del supermercado y te devuelven la plata.",
        "q2": "'På tilbud' significa que el producto está en oferta — más barato de lo normal.",
        "q3": "Por el precio se pregunta con 'at koste' (costar): Hvad koster skoene?",
        "q4": "La tarjeta y MobilePay son las formas de pago más comunes. El efectivo es raro y Dinamarca usa coronas, no euros.",
        "q5": "Uno compra ('købe') el libro y paga en la caja. 'At koste' se refiere al precio, y uno no vende su propio libro en la tienda."
      }
    },
    "a2-rejse": {
      "title": "Viajes y transporte",
      "theory": {
        "t1": {
          "heading": "El tren y la rejsekort",
          "body": "Los trenes en Dinamarca los opera <strong>DSB</strong>. Muchos viajan con la <strong>rejsekort</strong>: una tarjeta azul que se acerca a un poste azul. Hay que <strong>hacer check-in</strong> al empezar el viaje y <strong>check-out</strong> al terminarlo — ¡si olvidas el check-out, pagas de más! Se dice <strong>at tage toget/bussen</strong> (tomar el tren/la micro): <em>Jeg tager toget til Odense</em> = tomo el tren a Odense."
        },
        "t2": {
          "heading": "La bicicleta — todo el año",
          "body": "Dinamarca tiene <strong>ciclovías</strong> casi en todas partes, y muchos daneses pedalean todo el año — con lluvia o nieve. En Copenhague hay más bicicletas que autos en hora punta. Se anda por la ciclovía, no por la vereda, y hay que llevar luces en la bici cuando está oscuro."
        },
        "t3": {
          "heading": "Jutlandia, Fionia y Selandia",
          "body": "Dinamarca se compone de la península de <strong>Jylland</strong> (Jutlandia) al oeste, la isla de <strong>Fyn</strong> (Fionia) al centro (con Odense, la ciudad de H.C. Andersen) y la isla de <strong>Sjælland</strong> (Selandia) al este, donde está Copenhague. El puente <strong>Storebæltsbroen</strong> conecta Fionia con Selandia, y el <strong>Øresundsbroen</strong> va a Suecia. A las islas chicas, como Ærø, se va en <strong>ferry</strong>."
        }
      },
      "examples": {
        "e1": "Tomo el tren de Copenhague a Aarhus.",
        "e2": "Acuérdate de hacer check-in antes de subirte al tren.",
        "e3": "Ella olvidó hacer check-out y pagó de más.",
        "e4": "Vamos en bici al trabajo todo el año — también en invierno.",
        "e5": "¿A qué hora sale el próximo bus a Odense?",
        "e6": "El puente del Gran Belt conecta Fionia y Selandia.",
        "e7": "Mañana tomamos el ferry a Ærø.",
        "e8": "El tren viene atrasado diez minutos."
      },
      "flashcards": {
        "f1": "un tren — en Dinamarca los opera DSB",
        "f2": "la tarjeta de transporte (azul, con check-in y check-out)",
        "f3": "marcar la tarjeta al empezar el viaje (check-in)",
        "f4": "marcar la tarjeta al terminar el viaje (check-out)",
        "f5": "una ciclovía",
        "f6": "un ferry / transbordador",
        "f7": "Jutlandia — la gran península al oeste de Dinamarca",
        "f8": "Selandia — la isla al este, donde está Copenhague",
        "f9": "atrasado (el tren o el bus)",
        "f10": "tomar el tren"
      },
      "quiz": {
        "q1": "Se hace check-in al empezar y check-out al terminar. Si olvidas el check-out, pagas de más.",
        "q2": "Copenhague está en Selandia (Sjælland). Odense está en Fionia (Fyn), y Jutlandia es la península al oeste.",
        "q3": "Se dice 'at tage bussen/toget' (tomar el bus/el tren): Jeg tager bussen til arbejde.",
        "q4": "El Storebæltsbroen conecta Fionia y Selandia. El puente a Suecia se llama Øresundsbroen.",
        "q5": "Las bicicletas andan por la ciclovía. La vereda es solo para peatones."
      }
    },
    "a2-krop": {
      "title": "Cuerpo y salud",
      "theory": {
        "t1": {
          "heading": "El cuerpo",
          "body": "Las palabras más importantes del cuerpo: <strong>et hoved</strong> (una cabeza), <strong>en mave</strong> (un estómago), <strong>en ryg</strong> (una espalda), <strong>en hals</strong> (una garganta/un cuello), <strong>en arm</strong> (un brazo), <strong>et ben</strong> (una pierna), <strong>en hånd</strong> (una mano), <strong>en fod</strong> (un pie), <strong>et øje</strong> (un ojo; plural: <em>øjne</em>) y <strong>et øre</strong> (una oreja). Fíjate en el género: es <em>et</em> hoved, pero <em>en</em> mave."
        },
        "t2": {
          "heading": "At have ondt i… (me duele…)",
          "body": "Cuando algo duele, se dice <strong>jeg har ondt i + forma definida</strong>: <em>Jeg har ondt i <strong>hovedet</strong></em> (me duele la cabeza), <em>Jeg har ondt i <strong>ryggen</strong></em> (me duele la espalda), <em>Jeg har ondt i <strong>halsen</strong></em> (me duele la garganta). También se puede decir <strong>det gør ondt i…</strong>: <em>Det gør ondt i ryggen, når jeg løfter</em> = me duele la espalda cuando levanto cosas. Ojo con la forma definida — no se dice 'ondt i hoved'."
        },
        "t3": {
          "heading": "El médico y la tarjeta amarilla",
          "body": "En Dinamarca el médico es <strong>gratis</strong>. Todos tienen una <strong>tarjeta de salud</strong> amarilla (sundhedskort) con su nombre y su médico de cabecera — se muestra al llegar. Primero se llama para <strong>pedir hora</strong> (at bestille tid). Los remedios se compran después en la <strong>farmacia</strong> (apotek). Si estás enfermo, te quedas en casa — es totalmente normal decir: <em>Jeg har feber og bliver hjemme i dag</em> (tengo fiebre y hoy me quedo en casa)."
        }
      },
      "examples": {
        "e1": "Hoy me duele la cabeza.",
        "e2": "Me duele la espalda cuando levanto cosas.",
        "e3": "Quisiera pedir una hora con el médico.",
        "e4": "Acuérdate de tu tarjeta amarilla de salud cuando vayas al médico.",
        "e5": "Ella tiene fiebre y se queda en casa sin ir al trabajo.",
        "e6": "Puedes comprar el remedio en la farmacia.",
        "e7": "El médico dice que tengo que descansar.",
        "e8": "Me duele la garganta y tengo tos."
      },
      "flashcards": {
        "f1": "una cabeza",
        "f2": "un estómago / una barriga",
        "f3": "una espalda",
        "f4": "una garganta / un cuello",
        "f5": "tener dolor de…: Jeg har ondt i hovedet = me duele la cabeza",
        "f6": "la tarjeta de salud (la tarjeta amarilla)",
        "f7": "un médico — gratis en Dinamarca",
        "f8": "una farmacia",
        "f9": "fiebre",
        "f10": "pedir hora (con el médico)"
      },
      "quiz": {
        "q1": "Se dice 'at have ondt i': ondt i hovedet (me duele la cabeza), ondt i ryggen, ondt i halsen.",
        "q2": "El sundhedskort es la tarjeta amarilla con tu nombre y tu médico de cabecera — se muestra en la consulta.",
        "q3": "Los remedios se compran en la farmacia (apoteket).",
        "q4": "El médico es gratis en Dinamarca — el sistema de salud se financia con los impuestos.",
        "q5": "'En ryg' es la espalda — parte del cuerpo. Las otras palabras son cosas y lugares."
      }
    },
    "a2-arbejde": {
      "title": "Trabajo y fyraften",
      "theory": {
        "t1": {
          "heading": "Profesiones",
          "body": "Se dice <strong>at arbejde som</strong> + profesión — sin artículo: <em>Hun arbejder som <strong>lærer</strong></em> (ella trabaja de profesora) — no 'som en lærer'. Profesiones comunes: <strong>en lærer</strong> (profesor), <strong>en sygeplejerske</strong> (enfermera/o), <strong>en tømrer</strong> (carpintero), <strong>en pædagog</strong> (educador de párvulos), <strong>en ingeniør</strong> (ingeniero). La pregunta es: <strong>Hvad laver du?</strong> (¿a qué te dedicas?) — <em>Jeg er tømrer</em> (soy carpintero)."
        },
        "t2": {
          "heading": "La pausa de almuerzo a las 12",
          "body": "A las 12 en punto casi todos en un trabajo danés almuerzan — muchas veces pan de centeno en el <strong>casino</strong> del trabajo (kantinen) junto a los colegas. La pausa es corta, muchas veces solo 30 minutos, pero es casi sagrada: nadie espera hasta las 14. ¡Si llegas a las 12.30, el comedor suele estar ya vacío!"
        },
        "t3": {
          "heading": "Fyraften y equilibrio",
          "body": "El danés tiene una palabra propia para el momento en que termina el trabajo: <strong>fyraften</strong>. Muchos se van a casa a las 16 para buscar a los niños y hacer la cena — y está totalmente bien visto. Muchos trabajos tienen <strong>flekstid</strong> (horario flexible): tú eliges si llegas a las 7 o a las 9. El equilibrio entre trabajo y familia es muy importante en Dinamarca."
        }
      },
      "examples": {
        "e1": "Ella trabaja de enfermera en el Rigshospitalet.",
        "e2": "¿A qué te dedicas? — Soy carpintero.",
        "e3": "A las doce hacemos la pausa de almuerzo en el casino.",
        "e4": "Hoy salgo del trabajo a las cuatro.",
        "e5": "Tenemos horario flexible, así que entro a las siete.",
        "e6": "La reunión empieza a las nueve y termina a las diez.",
        "e7": "Ella busca a los niños después del trabajo.",
        "e8": "¡Buen fin de semana! Nos vemos el lunes."
      },
      "flashcards": {
        "f1": "un trabajo",
        "f2": "la hora de salida del trabajo — ¡en danés existe una palabra para eso!",
        "f3": "la pausa de almuerzo (a las 12)",
        "f4": "un colega / compañero de trabajo",
        "f5": "un profesor / una profesora",
        "f6": "un enfermero / una enfermera",
        "f7": "el casino del trabajo (comedor)",
        "f8": "horario flexible",
        "f9": "ganar plata / dinero",
        "f10": "una reunión"
      },
      "quiz": {
        "q1": "Fyraften es el momento en que termina la jornada y uno se va a casa — el danés tiene una palabra propia para eso.",
        "q2": "Se dice 'at arbejde som' + profesión sin artículo: Hun arbejder som lærer = trabaja de profesora.",
        "q3": "La pausa de almuerzo es a las 12 — casi todos comen a la misma hora.",
        "q4": "La enfermera (sygeplejerske) trabaja en el hospital. El tømrer construye, el pædagog cuida niños y el frisør corta el pelo.",
        "q5": "Flekstid significa horario flexible: tú eliges cuándo llegas y cuándo te vas — por ejemplo a las 7 o a las 9."
      }
    },
    "a2-planer": {
      "title": "Futuro y planes",
      "theory": {
        "t1": {
          "heading": "¿Skal o vil?",
          "body": "Para el futuro se usan sobre todo <strong>skal</strong> y <strong>vil</strong>. <strong>Skal</strong> se usa para planes y citas: <em>Jeg <strong>skal</strong> til fødselsdag på lørdag</em> (voy a un cumpleaños el sábado). <strong>Vil</strong> se usa para deseos: <em>Jeg <strong>vil</strong> lære dansk</em> (quiero aprender danés) — más cortés con 'gerne': <em>Jeg vil <strong>gerne</strong> rejse til Bornholm</em> (me gustaría viajar a Bornholm). También se puede usar el presente + una expresión de tiempo: <em>Vi rejser i morgen</em> (viajamos mañana)."
        },
        "t2": {
          "heading": "At glæde sig til",
          "body": "<strong>At glæde sig til</strong> significa alegrarse por algo que viene — ¡una palabra que muchos idiomas no tienen! Es como 'esperar algo con ansias'. El verbo es reflexivo: <em>jeg glæder <strong>mig</strong>, du glæder <strong>dig</strong>, hun glæder <strong>sig</strong></em>. Los daneses lo dicen todo el tiempo: <em>Jeg glæder mig til ferien!</em> (¡no veo la hora de que lleguen las vacaciones!), <em>Vi glæder os til at se dig</em> (tenemos muchas ganas de verte)."
        },
        "t3": {
          "heading": "¿På lørdag u om lørdagen?",
          "body": "<strong>På lørdag</strong> = el sábado que viene, una sola vez: <em>På lørdag skal vi i sommerhus</em> (este sábado vamos a la casa de veraneo). <strong>Om lørdagen</strong> = todos los sábados, una costumbre: <em>Om lørdagen spiller han fodbold</em> (los sábados juega fútbol). ¿Y las vacaciones? La mayoría de los daneses toma <strong>tres semanas de vacaciones de verano</strong>, muchas veces en julio — y se desean <em>god ferie!</em> (¡buenas vacaciones!)."
        }
      },
      "examples": {
        "e1": "Este sábado voy a un cumpleaños.",
        "e2": "Nos gustaría viajar a Bornholm en verano.",
        "e3": "¡No veo la hora de que lleguen las vacaciones!",
        "e4": "Los sábados él juega fútbol.",
        "e5": "Este sábado vamos a la casa de veraneo.",
        "e6": "¿Qué haces el fin de semana? — Voy a descansar.",
        "e7": "Ella toma tres semanas de vacaciones en julio.",
        "e8": "Viajamos mañana temprano."
      },
      "flashcards": {
        "f1": "voy a… / tengo que… (plan o cita): Jeg skal til fest på lørdag",
        "f2": "quisiera… / me gustaría…",
        "f3": "esperar algo con ansias: Jeg glæder mig til ferien",
        "f4": "este sábado (el que viene, una sola vez)",
        "f5": "los sábados (todos los sábados, costumbre)",
        "f6": "unas vacaciones — en Dinamarca suelen ser tres semanas en verano",
        "f7": "mañana",
        "f8": "la próxima semana",
        "f9": "un plan",
        "f10": "este verano (el que viene)"
      },
      "quiz": {
        "q1": "Para planes y citas se usa 'skal': Jeg skal til tandlægen på tirsdag = tengo hora con el dentista el martes.",
        "q2": "'At glæde sig til' significa alegrarse por algo que viene — esperarlo con ansias.",
        "q3": "'Om lørdagen' es una costumbre — todos los sábados. El sábado que viene se dice 'på lørdag'.",
        "q4": "Los deseos se expresan con 'vil gerne': Vi vil gerne se filmen = nos gustaría ver la película.",
        "q5": "La mayoría de los daneses toma tres semanas de vacaciones de verano, muchas veces en julio."
      }
    },
    "a2-bedre": {
      "title": "Comparaciones — más grande y el mejor",
      "theory": {
        "t1": {
          "heading": "-ere y -est",
          "body": "Los adjetivos cortos toman <strong>-ere</strong> en el comparativo y <strong>-est</strong> en el superlativo: <em>hurtig → <strong>hurtigere</strong> → <strong>hurtigst</strong></em> (rápido → más rápido → el más rápido), <em>billig → billigere → billigst</em> (barato). Los adjetivos largos y los terminados en -et/-sk usan <strong>mere</strong> y <strong>mest</strong>: <em><strong>mere</strong> spændende</em> (más emocionante), <em><strong>mest</strong> praktisk</em> (el más práctico). Después del comparativo se usa <strong>end</strong> (que): <em>hurtigere <strong>end</strong> din</em> = más rápida que la tuya."
        },
        "t2": {
          "heading": "Formas irregulares",
          "body": "Los irregulares más importantes: <strong>god → bedre → bedst</strong> (bueno → mejor → el mejor), <strong>gammel → ældre → ældst</strong> (viejo → mayor → el mayor), <strong>ung → yngre → yngst</strong> (joven → menor), <strong>stor → større → størst</strong> (grande → más grande), <strong>lille → mindre → mindst</strong> (chico → más chico), <strong>mange → flere → flest</strong> (muchos → más). En forma definida el superlativo toma -e: <em>den bedst<strong>e</strong> kage</em> (la mejor torta), <em>Danmarks størst<strong>e</strong> by</em> (la ciudad más grande de Dinamarca)."
        },
        "t3": {
          "heading": "Lige så … som — y la ley de Jante",
          "body": "Cuando dos cosas son iguales, se dice <strong>lige så … som</strong> (tan … como): <em>Han er <strong>lige så</strong> høj <strong>som</strong> sin far</em> = es tan alto como su papá. Y una nota cultural: la <strong>Janteloven</strong> (ley de Jante) es una regla no escrita danesa — no hay que creerse mejor que los demás. Por eso los daneses casi no se lucen: prefieren decir <em>det går meget godt</em> (me va bastante bien) antes que <em>jeg er den bedste</em> (soy el mejor)."
        }
      },
      "examples": {
        "e1": "Mi bicicleta es más rápida que la tuya.",
        "e2": "El pan de centeno es más sano que el pan blanco.",
        "e3": "Aarhus es grande, pero Copenhague es más grande.",
        "e4": "Esta es la mejor torta que he probado.",
        "e5": "Mi hermano es mayor que yo.",
        "e6": "La película fue más emocionante que el libro.",
        "e7": "Él es tan alto como su papá.",
        "e8": "En Dinamarca rara vez se dice que uno es el mejor — es la ley de Jante."
      },
      "flashcards": {
        "f1": "más rápido (comparativo de 'hurtig')",
        "f2": "mejor (comparativo irregular de 'god')",
        "f3": "el mejor (superlativo de 'god')",
        "f4": "mayor / más viejo (comparativo de 'gammel')",
        "f5": "más grande (comparativo de 'stor')",
        "f6": "más chico / menor (comparativo de 'lille')",
        "f7": "más, en cantidad (comparativo de 'mange')",
        "f8": "más emocionante — los adjetivos largos usan 'mere' y 'mest'",
        "f9": "tan … como: lige så høj som = tan alto como",
        "f10": "la ley de Jante: no creerse mejor que los demás"
      },
      "quiz": {
        "q1": "'God' es irregular: god → bedre → bedst (bueno → mejor → el mejor).",
        "q2": "Antes de 'end' (que) va el comparativo: ældre (mayor). 'Ældst' es superlativo y 'gammel' es la forma base.",
        "q3": "Después de un genitivo como 'Danmarks' el superlativo va en forma definida con -e: største.",
        "q4": "'Lige så … som' van juntos: lige så høj som (tan alto como). 'End' se usa solo tras el comparativo.",
        "q5": "Los adjetivos largos como 'spændende' usan mere/mest: mere spændende, mest spændende."
      }
    },
    "a2-modal": {
      "title": "Verbos modales — kan, skal, vil, må, bør",
      "theory": {
        "t1": {
          "heading": "Modal + infinitivo sin 'at'",
          "body": "Hay cinco verbos modales importantes: <strong>kan</strong> (poder: habilidad/posibilidad), <strong>skal</strong> (deber: obligación/plan), <strong>vil</strong> (querer: deseo), <strong>må</strong> (permiso/necesidad) y <strong>bør</strong> (recomendación). Después de un verbo modal, el infinitivo va <strong>sin 'at'</strong>: <em>Jeg kan <strong>svømme</strong></em> (sé nadar) — nunca 'jeg kan at svømme'."
        },
        "t2": {
          "heading": "La trampa de 'må'",
          "body": "¡<strong>Må</strong> significa dos cosas totalmente distintas! <strong>Må gerne</strong> = permiso: <em>Du må gerne låne min cykel</em> (puedes usar mi bici, te doy permiso). <strong>Må ikke</strong> = prohibición: <em>Man må ikke cykle på fortovet</em> (está prohibido andar en bici por la vereda). Pero <strong>må</strong> solo también puede significar 'tener que': <em>Jeg må løbe nu — toget kører om fem minutter</em> (tengo que irme ya — el tren sale en cinco minutos). El contexto indica cuál es."
        },
        "t3": {
          "heading": "Bør y expresiones fijas",
          "body": "<strong>Bør</strong> se usa para una recomendación — una buena idea, no una obligación: <em>Du bør tage en jakke med</em> (deberías llevar una chaqueta). Dos expresiones fijas con modales: <strong>at kunne lide</strong> = gustar (<em>Jeg kan godt lide kaffe</em> = me gusta el café), y la fórmula cortés <strong>Må jeg bede om…?</strong> en la mesa (<em>Må jeg bede om saltet?</em> = ¿me pasas la sal, por favor?)."
        }
      },
      "examples": {
        "e1": "Ella sabe hablar tres idiomas.",
        "e2": "Puedes usar mi bicicleta, no hay problema.",
        "e3": "Está prohibido andar en bici por la vereda.",
        "e4": "Tengo que irme ya — el tren sale en cinco minutos.",
        "e5": "Deberías llevar una chaqueta — va a hacer frío.",
        "e6": "¿Me pasas la sal, por favor? — Sí, aquí tienes.",
        "e7": "Los niños tienen que acostarse a las ocho.",
        "e8": "Me gusta la música danesa."
      },
      "flashcards": {
        "f1": "poder / saber (habilidad): Hun kan svømme = ella sabe nadar",
        "f2": "deber / tener que (obligación o plan): Jeg skal på arbejde",
        "f3": "querer (deseo): Jeg vil lære dansk",
        "f4": "poder (tener permiso): Du må gerne låne min cykel",
        "f5": "no poder (estar prohibido): Man må ikke ryge her",
        "f6": "debería (recomendación): Man bør cykle med hjelm",
        "f7": "gustar: Jeg kan godt lide kaffe = me gusta el café",
        "f8": "¿me pasas…? / ¿me das…? (fórmula cortés en la mesa)",
        "f9": "nadar",
        "f10": "pedir prestado / usar algo ajeno por un rato"
      },
      "quiz": {
        "q1": "Después de un verbo modal el infinitivo va sin 'at': Jeg kan svømme (sé nadar).",
        "q2": "'Må gerne' es un permiso — tienes derecho a hacerlo. La prohibición es 'må ikke'.",
        "q3": "Una prohibición se expresa con 'må ikke': Man må ikke cykle over for rødt lys (está prohibido cruzar en bici con luz roja).",
        "q4": "Una recomendación se expresa con 'bør' (deberías). 'Må' habla de permiso o necesidad.",
        "q5": "Aquí 'må' significa necesidad: tengo que irme. Es la trampa de 'må' — también puede significar permiso."
      }
    },
//__APPEND_HERE__
}};
