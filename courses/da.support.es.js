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
//__APPEND_HERE__
}};
