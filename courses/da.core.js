/* Pathway to B1 — course "da" core: target-language (Danish) content only.
   Plain JS, no JSX: a one-line window.PTB_COURSES wrapper around a pure
   JSON literal, loaded via <script src> before the Babel block.

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
window.PTB_COURSES.da = {
  "meta": {
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
  },
  "core": {
    "placement": [
      { "id": "p1", "q": "Jeg ___ Maria.", "opts": ["hedder", "hedde", "heddes", "at hedde"], "ans": 0, "level": "A1" },
      { "id": "p2", "q": "Vi bor i ___ hus.", "opts": ["en", "et", "den", "dem"], "ans": 1, "level": "A1" },
      { "id": "p3", "q": "Hvad er den bestemte form af 'en bil'?", "opts": ["bilen", "bilet", "den bil", "biler"], "ans": 0, "level": "A1" },
      { "id": "p4", "q": "Klokken er 'halv ni'. Hvad er klokken?", "opts": ["9.30", "8.30", "9.15", "8.45"], "ans": 1, "level": "A1" },
      { "id": "p5", "q": "Hvad betyder 'halvfjerds'?", "opts": ["50", "60", "70", "90"], "ans": 2, "level": "A1" },
      { "id": "p6", "q": "___ søster bor i Odense.", "opts": ["Min", "Mit", "Mine", "Mig"], "ans": 0, "level": "A1" },
      { "id": "p7", "q": "I dag ___ jeg til arbejde.", "opts": ["cykler", "cykle", "at cykle", "cykles"], "ans": 0, "level": "A1" },
      { "id": "p8", "q": "I går ___ vi til Aarhus.", "opts": ["kører", "kørte", "kørt", "køre"], "ans": 1, "level": "A2" },
      { "id": "p9", "q": "Jeg har ___ rugbrød i dag.", "opts": ["spiser", "spiste", "spist", "spise"], "ans": 2, "level": "A2" },
      { "id": "p10", "q": "Han ___ godt lide kaffe.", "opts": ["kan", "skal", "må", "bør"], "ans": 0, "level": "A2" },
      { "id": "p11", "q": "Vi bor i et ___ hus.", "opts": ["stor", "stort", "store", "størst"], "ans": 1, "level": "A2" },
      { "id": "p12", "q": "Min cykel er ___ end din.", "opts": ["hurtig", "hurtigere", "hurtigst", "mest hurtig"], "ans": 1, "level": "A2" },
      { "id": "p13", "q": "Der ___ mange cykler i København.", "opts": ["er", "har", "gør", "får"], "ans": 0, "level": "A2" },
      { "id": "p14", "q": "Hun ___ i København, siden hun var barn.", "opts": ["har boet", "boede", "bor", "at bo"], "ans": 0, "level": "A2" },
      { "id": "p15", "q": "Han siger, at han ___ tid i dag.", "opts": ["ikke har", "har ikke", "ikke have", "ikke haft"], "ans": 0, "level": "B1" },
      { "id": "p16", "q": "Det er den mand, ___ bor ved siden af os.", "opts": ["der", "hvem", "hvad", "hvordan"], "ans": 0, "level": "B1" },
      { "id": "p17", "q": "Hvis jeg havde tid, ___ jeg lære mere dansk.", "opts": ["vil", "ville", "skal", "kan"], "ans": 1, "level": "B1" },
      { "id": "p18", "q": "Rugbrødet ___ hver morgen i bageriet.", "opts": ["bager", "bages", "bagt", "at bage"], "ans": 1, "level": "B1" },
      { "id": "p19", "q": "Hun spurgte, ___ jeg kunne komme til festen.", "opts": ["om", "at", "hvis", "når"], "ans": 0, "level": "B1" },
      { "id": "p20", "q": "___ det regnede, tog vi alligevel til stranden.", "opts": ["Selvom", "Fordi", "At", "Om"], "ans": 0, "level": "B1" }
    ],
    "pronunciation": {
      "A1": [
        "Hej, jeg hedder Søren, og jeg kommer fra Ærø.",
        "Jeg vil gerne have rugbrød og en kop kaffe.",
        "Min farmor bor på Østerbro i København.",
        "Hvad koster et rundstykke og et glas mælk?",
        "Klokken er halv ni, og jeg skal på arbejde.",
        "Vi går en tur langs åen i Århus.",
        "Døren er grøn, og huset er rødt.",
        "Tak for mad — det smagte dejligt."
      ],
      "A2": [
        "I går kørte vi over broen til Fyn.",
        "Han har købt en brugt cykel til sin søn.",
        "Om sommeren bader børnene ved stranden.",
        "Kan du sige mig, hvornår næste tog kører?",
        "Vejret var gråt, men vi gik en lang tur alligevel.",
        "Hun arbejdede som lærer på en skole i Køge.",
        "Vi skal fejre min mors fødselsdag på lørdag.",
        "Jeg har ondt i hovedet og bør blive hjemme."
      ],
      "B1": [
        "Efter min mening er det sundt at cykle hele året.",
        "Hvis jeg havde flere penge, ville jeg rejse til Grønland.",
        "Hun fortalte, at mødet var blevet aflyst.",
        "Selvom det regnede, hyggede vi os i sommerhuset.",
        "Der bliver bygget mange nye lejligheder på Nørrebro.",
        "Jeg har boet i Danmark, siden jeg var femogtyve.",
        "Man bør tjekke ind, før man stiger på toget.",
        "Jo mere jeg øver mig, desto bedre bliver min udtale."
      ]
    },
    "topics": {
      "a1-hils": {
        "id": "a1-hils",
        "icon": "👋",
        "level": "A1",
        "title": "Hilsner og præsentationer",
        "theory": [
          {
            "id": "t1",
            "heading": "Hilsner",
            "body": "<strong>Hej</strong> er den mest almindelige hilsen i Danmark — man kan sige den til alle, hele dagen. Uformelt siger man også <strong>hejsa</strong> eller <strong>halløj</strong>. Om morgenen: <strong>godmorgen</strong>; senere på dagen: <strong>goddag</strong> (formelt); om aftenen: <strong>godaften</strong>. Når man går, siger man <strong>farvel</strong>, <strong>hej hej</strong> eller <strong>vi ses</strong> (= vi mødes igen)."
          },
          {
            "id": "t2",
            "heading": "At præsentere sig",
            "body": "Man siger sit navn med <strong>jeg hedder…</strong> (fx <em>Jeg hedder Mette</em>). Spørgsmålet er: <strong>Hvad hedder du?</strong> Om land eller by: <strong>Jeg kommer fra…</strong> og <strong>Hvor kommer du fra?</strong> Om alder: <strong>Hvor gammel er du? — Jeg er femogtyve år.</strong> Når man møder en ny person, siger man: <strong>Hyggeligt at møde dig!</strong>"
          },
          {
            "id": "t3",
            "heading": "Du til næsten alle",
            "body": "I Danmark siger man <strong>du</strong> til næsten alle — til naboen, til læreren og også til chefen. Det er helt normalt og høfligt. Den formelle form <strong>De</strong> bruges kun meget sjældent: til meget gamle mennesker eller til kongefamilien. Fornavne bruges overalt — også på arbejdet."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Hej! Jeg hedder Mette. Hvad hedder du?" },
          { "id": "e2", "text": "Godmorgen! Hvordan går det? — Det går godt, tak." },
          { "id": "e3", "text": "Jeg kommer fra Chile. Hvor kommer du fra?" },
          { "id": "e4", "text": "Hyggeligt at møde dig!" },
          { "id": "e5", "text": "Hvor gammel er du? — Jeg er femogtyve år." },
          { "id": "e6", "text": "Det her er min ven Lars. — Hej Lars!" },
          { "id": "e7", "text": "Vi ses i morgen! Hej hej!" },
          { "id": "e8", "text": "Taler du engelsk? — Ja, lidt." }
        ],
        "flashcards": [
          { "id": "f1", "front": "Hej", "def": "Den mest almindelige hilsen på dansk." },
          { "id": "f2", "front": "Godmorgen", "def": "En hilsen tidligt på dagen." },
          { "id": "f3", "front": "Farvel", "def": "Det, man siger, når man går." },
          { "id": "f4", "front": "Jeg hedder…", "def": "Sådan siger man sit navn." },
          { "id": "f5", "front": "Hvad hedder du?", "def": "Spørgsmålet om en persons navn." },
          { "id": "f6", "front": "Hvor kommer du fra?", "def": "Spørgsmålet om en persons land eller by." },
          { "id": "f7", "front": "Hyggeligt at møde dig", "def": "En høflig frase, når man møder en ny person." },
          { "id": "f8", "front": "Hvordan går det?", "def": "Spørgsmålet om, hvordan en person har det." },
          { "id": "f9", "front": "Tak", "def": "Ordet, der viser taknemmelighed." },
          { "id": "f10", "front": "Vi ses", "def": "En uformel afsked — man mødes igen." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hvad siger man, når man møder sin chef klokken otte om morgenen?",
            "options": ["Godnat!", "Godmorgen!", "Hej hej!", "Godaften!"],
            "correct": 1,
            "explain": "'Godmorgen' er hilsenen om morgenen. 'Godnat' siger man, når man går i seng, 'hej hej' er en afsked, og 'godaften' bruges om aftenen."
          },
          {
            "id": "q2",
            "q": "Hvordan spørger man om en persons navn?",
            "options": ["Hvad hedder du?", "Hvor hedder du?", "Hvem hedder du?", "Hvordan hedder du dig?"],
            "correct": 0,
            "explain": "'Hvad hedder du?' er det rigtige spørgsmål. De andre former er ikke korrekt dansk."
          },
          {
            "id": "q3",
            "q": "Jeg kommer ___ Chile.",
            "options": ["fra", "af", "til", "på"],
            "correct": 0,
            "explain": "Man bruger 'fra' om oprindelse: Jeg kommer fra Chile."
          },
          {
            "id": "q4",
            "q": "Hvornår bruger danskere 'De' i stedet for 'du'?",
            "options": ["Altid til fremmede", "Kun meget formelt eller til meget gamle mennesker", "Altid til chefen", "Til børn"],
            "correct": 1,
            "explain": "I Danmark siger næsten alle 'du' til hinanden — også til chefen. 'De' bruges kun meget formelt eller til meget gamle mennesker."
          },
          {
            "id": "q5",
            "q": "Hvad svarer man på 'Hyggeligt at møde dig'?",
            "options": ["I lige måde!", "Værsgo!", "Undskyld!", "Godnat!"],
            "correct": 0,
            "explain": "'I lige måde' betyder, at man ønsker det samme tilbage."
          }
        ]
      },
      "a1-enet": {
        "id": "a1-enet",
        "icon": "🏠",
        "level": "A1",
        "title": "En og et — køn og bestemt form",
        "theory": [
          {
            "id": "t1",
            "heading": "To køn: en-ord og et-ord",
            "body": "Danske navneord har to køn: <strong>fælleskøn</strong> (en-ord) og <strong>intetkøn</strong> (et-ord). Cirka 75 % er en-ord: <em>en bil, en kat, en stol</em>. Resten er et-ord: <em>et hus, et bord, et æble</em>. Man kan ikke altid gætte kønnet — lær altid <strong>en</strong> eller <strong>et</strong> sammen med ordet."
          },
          {
            "id": "t2",
            "heading": "Bestemt form er en endelse",
            "body": "På dansk sætter man den bestemte artikel <strong>bag på ordet</strong> som en endelse: <em>en bil → <strong>bilen</strong></em>, <em>et hus → <strong>huset</strong></em>. Der er ikke et ekstra lille ord foran som på engelsk eller spansk. Altså: <em>bilen</em> = den bil, vi taler om."
          },
          {
            "id": "t3",
            "heading": "Flertal",
            "body": "Flertal har tre almindelige endelser: <strong>-er</strong> (<em>bil → biler</em>), <strong>-e</strong> (<em>hus → huse, dag → dage</em>) og <strong>ingen endelse</strong> (<em>år → år, fisk → fisk</em>). Bestemt form i flertal ender på <strong>-ne</strong>: <em>bilerne, husene</em>."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Jeg har en bil. Bilen er rød." },
          { "id": "e2", "text": "Vi bor i et hus. Huset er gammelt." },
          { "id": "e3", "text": "Der står et bord og en stol i køkkenet." },
          { "id": "e4", "text": "Katten sover på sofaen." },
          { "id": "e5", "text": "Han har tre børn og en hund." },
          { "id": "e6", "text": "Æblet ligger på bordet." },
          { "id": "e7", "text": "Vi har to katte og en kanin." },
          { "id": "e8", "text": "Bilerne holder på gaden." }
        ],
        "flashcards": [
          { "id": "f1", "front": "en bil", "def": "Et køretøj med fire hjul — et en-ord." },
          { "id": "f2", "front": "et hus", "def": "En bygning, man bor i — et et-ord." },
          { "id": "f3", "front": "bilen", "def": "Bestemt form af 'en bil': bil + -en." },
          { "id": "f4", "front": "huset", "def": "Bestemt form af 'et hus': hus + -et." },
          { "id": "f5", "front": "et æble", "def": "En rund frugt — et et-ord." },
          { "id": "f6", "front": "en stol", "def": "Et møbel, man sidder på — et en-ord." },
          { "id": "f7", "front": "et bord", "def": "Et møbel, man sidder ved — et et-ord." },
          { "id": "f8", "front": "en kat", "def": "Et kæledyr, der siger 'mjav' — et en-ord." },
          { "id": "f9", "front": "biler", "def": "Flertal af 'bil' — endelsen -er." },
          { "id": "f10", "front": "bilerne", "def": "Bestemt form flertal: biler + -ne." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hvad er den bestemte form af 'en bil'?",
            "options": ["bilen", "bilet", "en bilen", "den bil"],
            "correct": 0,
            "explain": "En-ord får endelsen -en i bestemt form: en bil → bilen."
          },
          {
            "id": "q2",
            "q": "Hvad er den bestemte form af 'et hus'?",
            "options": ["husen", "huset", "et huset", "hus"],
            "correct": 1,
            "explain": "Et-ord får endelsen -et i bestemt form: et hus → huset."
          },
          {
            "id": "q3",
            "q": "Hvilket ord er et et-ord (intetkøn)?",
            "options": ["bil", "kat", "æble", "stol"],
            "correct": 2,
            "explain": "'Æble' er et et-ord: et æble → æblet. 'Bil', 'kat' og 'stol' er en-ord."
          },
          {
            "id": "q4",
            "q": "Hvad er flertal af 'en bil'?",
            "options": ["bilar", "biler", "bils", "bilene"],
            "correct": 1,
            "explain": "Flertal af 'bil' er 'biler' med -er. 'Bilene' er ikke en dansk form — bestemt flertal hedder 'bilerne'."
          },
          {
            "id": "q5",
            "q": "Hvad er den bestemte form i flertal af 'bil'?",
            "options": ["biler", "bilerne", "bilen", "bilernes"],
            "correct": 1,
            "explain": "Bestemt form flertal får -ne efter flertalsformen: biler + -ne = bilerne."
          }
        ]
      },
      "a1-tal": {
        "id": "a1-tal",
        "icon": "🔢",
        "level": "A1",
        "title": "Tal, klokken og priser",
        "theory": [
          {
            "id": "t1",
            "heading": "Tal fra 0 til 40",
            "body": "<em>nul, en/et, to, tre, fire, fem, seks, syv, otte, ni, ti, elleve, tolv, tretten, fjorten, femten, seksten, sytten, atten, nitten, tyve</em>. Tierne: <strong>tyve</strong> (20), <strong>tredive</strong> (30), <strong>fyrre</strong> (40). Fra 21 siger man enerne først: <strong>enogtyve</strong> (21), <strong>femogtredive</strong> (35) — altså 'en-og-tyve'."
          },
          {
            "id": "t2",
            "heading": "De mærkelige tal: 50, 70, 90",
            "body": "De store tiere kommer fra gammel tælling i tyvere: <strong>halvtreds</strong> (50), <strong>tres</strong> (60), <strong>halvfjerds</strong> (70), <strong>firs</strong> (80), <strong>halvfems</strong> (90). Man behøver ikke forstå det gamle system — lær dem udenad. <em>Femoghalvfjerds</em> = 75."
          },
          {
            "id": "t3",
            "heading": "Klokken, kroner og MobilePay",
            "body": "<strong>Hvad er klokken? — Klokken er ti.</strong> Pas på: <strong>halv ti</strong> betyder 9.30 — en halv time <em>før</em> ti! <em>Kvart over otte</em> = 8.15, <em>kvart i otte</em> = 7.45. Penge: <strong>kroner</strong> (kr.) og <strong>øre</strong>. <em>Det koster halvtreds kroner.</em> I Danmark betaler næsten alle med kort eller <strong>MobilePay</strong> på telefonen — kontanter er sjældne."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Hvad er klokken? — Klokken er halv ti." },
          { "id": "e2", "text": "Det koster halvtreds kroner." },
          { "id": "e3", "text": "Jeg er femogtyve år gammel." },
          { "id": "e4", "text": "Bussen kommer klokken kvart over otte." },
          { "id": "e5", "text": "Kan jeg betale med MobilePay? — Ja, selvfølgelig." },
          { "id": "e6", "text": "Min farmor er halvfjerds år." },
          { "id": "e7", "text": "Vi mødes klokken syv i morgen." },
          { "id": "e8", "text": "En kaffe koster femogtredive kroner." }
        ],
        "flashcards": [
          { "id": "f1", "front": "tyve", "def": "Tallet 20." },
          { "id": "f2", "front": "halvtreds", "def": "Tallet 50." },
          { "id": "f3", "front": "halvfjerds", "def": "Tallet 70." },
          { "id": "f4", "front": "halvfems", "def": "Tallet 90." },
          { "id": "f5", "front": "enogtyve", "def": "Tallet 21 — enerne siges først." },
          { "id": "f6", "front": "Hvad er klokken?", "def": "Spørgsmålet om, hvad tiden er." },
          { "id": "f7", "front": "halv ti", "def": "Klokken 9.30 — en halv time før ti." },
          { "id": "f8", "front": "kvart over otte", "def": "Klokken 8.15." },
          { "id": "f9", "front": "en krone", "def": "Den danske møntenhed (kr.)." },
          { "id": "f10", "front": "Hvad koster det?", "def": "Spørgsmålet om prisen." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hvad betyder 'halvtreds'?",
            "options": ["30", "40", "50", "70"],
            "correct": 2,
            "explain": "'Halvtreds' betyder 50 — det kommer fra gammel tælling i tyvere."
          },
          {
            "id": "q2",
            "q": "Klokken er 'halv ti'. Hvad er klokken?",
            "options": ["10.30", "9.30", "10.15", "9.45"],
            "correct": 1,
            "explain": "'Halv ti' betyder 9.30 — en halv time før ti, ikke efter."
          },
          {
            "id": "q3",
            "q": "Hvordan siger man 21 på dansk?",
            "options": ["tyveogen", "enogtyve", "toogti", "tientyve"],
            "correct": 1,
            "explain": "På dansk siger man enerne først: enogtyve = 'en og tyve' = 21."
          },
          {
            "id": "q4",
            "q": "Hvad betyder 'halvfems'?",
            "options": ["50", "70", "90", "95"],
            "correct": 2,
            "explain": "'Halvfems' betyder 90."
          },
          {
            "id": "q5",
            "q": "Hvordan betaler de fleste danskere i butikker og caféer?",
            "options": ["Kun med kontanter", "Med check", "Med MobilePay eller kort", "Med euro"],
            "correct": 2,
            "explain": "Næsten alle danskere betaler med MobilePay eller kort — kontanter er sjældne."
          }
        ]
      },
      "a1-fam": {
        "id": "a1-fam",
        "icon": "👨‍👩‍👧‍👦",
        "level": "A1",
        "title": "Familie og stedord",
        "theory": [
          {
            "id": "t1",
            "heading": "Personlige stedord",
            "body": "<strong>jeg, du, han, hun, den/det, vi, I, de</strong>. Bemærk: <em>I</em> (= du i flertal) skrives altid med stort. Efter et udsagnsord bruger man objektformerne: <strong>mig, dig, ham, hende, os, jer, dem</strong> — <em>Kan du hjælpe mig?</em>"
          },
          {
            "id": "t2",
            "heading": "Min, mit og mine",
            "body": "Ejestedord bøjes efter det ord, de står foran: <strong>min</strong> foran en-ord (<em>min bror</em>), <strong>mit</strong> foran et-ord (<em>mit hus</em>), <strong>mine</strong> i flertal (<em>mine børn</em>). Det samme gælder <em>din/dit/dine</em>. <strong>Hans</strong> og <strong>hendes</strong> bøjes ikke."
          },
          {
            "id": "t3",
            "heading": "Familie og danske navne",
            "body": "Dansk er meget præcist om familien: <strong>mormor</strong> = mors mor, <strong>morfar</strong> = mors far, <strong>farmor</strong> = fars mor, <strong>farfar</strong> = fars far. Mange efternavne ender på <strong>-sen</strong> (= 'søn af'): <em>Jensen, Nielsen, Hansen</em> — de tre mest almindelige efternavne i Danmark."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Min bror hedder Søren, og min søster hedder Anna." },
          { "id": "e2", "text": "Mit barn går i børnehave." },
          { "id": "e3", "text": "Mine forældre bor i Aarhus." },
          { "id": "e4", "text": "Min mormor er min mors mor, og min farmor er min fars mor." },
          { "id": "e5", "text": "Han har to søskende." },
          { "id": "e6", "text": "Hendes mand arbejder i København." },
          { "id": "e7", "text": "Vi besøger vores bedsteforældre i weekenden." },
          { "id": "e8", "text": "Kender du dem? — Ja, det er mine naboer." }
        ],
        "flashcards": [
          { "id": "f1", "front": "en bror", "def": "En dreng eller mand med samme forældre som dig." },
          { "id": "f2", "front": "en søster", "def": "En pige eller kvinde med samme forældre som dig." },
          { "id": "f3", "front": "søskende", "def": "Brødre og søstre." },
          { "id": "f4", "front": "forældre", "def": "Ens mor og far." },
          { "id": "f5", "front": "en mormor", "def": "Ens mors mor." },
          { "id": "f6", "front": "en farmor", "def": "Ens fars mor." },
          { "id": "f7", "front": "min", "def": "Ejestedord foran en-ord: min bror." },
          { "id": "f8", "front": "mit", "def": "Ejestedord foran et-ord: mit hus." },
          { "id": "f9", "front": "mine", "def": "Ejestedord foran flertal: mine børn." },
          { "id": "f10", "front": "børn", "def": "Flertal af 'et barn'." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "___ hus er stort.",
            "options": ["Min", "Mit", "Mine", "Mig"],
            "correct": 1,
            "explain": "'Hus' er et et-ord, så man siger 'mit hus'."
          },
          {
            "id": "q2",
            "q": "Hvem er din 'farmor'?",
            "options": ["Din mors mor", "Din fars mor", "Din fars søster", "Din mor"],
            "correct": 1,
            "explain": "'Farmor' er ens fars mor. Ens mors mor hedder 'mormor'."
          },
          {
            "id": "q3",
            "q": "Kan du hjælpe ___?",
            "options": ["jeg", "mig", "min", "mit"],
            "correct": 1,
            "explain": "Efter et udsagnsord bruger man objektformen: mig."
          },
          {
            "id": "q4",
            "q": "Hvad betyder efternavnet 'Jensen' oprindeligt?",
            "options": ["Jens' søn", "Jens' far", "Fra byen Jensen", "Jens' hus"],
            "correct": 0,
            "explain": "'Jensen' betyder oprindeligt 'Jens' søn' — derfor ender så mange danske efternavne på -sen."
          },
          {
            "id": "q5",
            "q": "___ forældre bor i Odense.",
            "options": ["Min", "Mit", "Mine", "Mig"],
            "correct": 2,
            "explain": "'Forældre' er flertal, så man bruger 'mine'."
          }
        ]
      },
      "a1-mad": {
        "id": "a1-mad",
        "icon": "🥪",
        "level": "A1",
        "title": "Mad og cafékultur",
        "theory": [
          {
            "id": "t1",
            "heading": "Rugbrød, smørrebrød og wienerbrød",
            "body": "<strong>Rugbrød</strong> er det mørke, grove brød, danskerne spiser hver dag til frokost. <strong>Smørrebrød</strong> er et åbent stykke rugbrød med pålæg — fx laks eller æg. I weekenden køber man friske <strong>rundstykker</strong> til morgenmad. Og <strong>wienerbrød</strong> er det søde bagværk, som resten af verden kalder 'a Danish'."
          },
          {
            "id": "t2",
            "heading": "Høflighed uden 'please'",
            "body": "Dansk har <strong>ikke</strong> et ord for 'please'! Man er høflig med hele sætninger: <strong>Jeg vil gerne have en kaffe</strong> eller <strong>Må jeg bede om regningen?</strong> — og med <strong>tak</strong> mange gange. Efter måltidet siger gæsten <strong>tak for mad</strong>, og værten svarer <strong>velbekomme</strong>."
          },
          {
            "id": "t3",
            "heading": "Kaffe og hygge",
            "body": "Danskerne drikker meget kaffe — ofte med kage til. Det vigtigste ord er <strong>hygge</strong>: at have det rart og roligt sammen, gerne med stearinlys, kaffe og god tid. Man siger fx <em>Skal vi hygge os i aften?</em> Hygge er en stor del af dansk kultur."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Jeg vil gerne have en kaffe og et rundstykke." },
          { "id": "e2", "text": "Må jeg bede om regningen?" },
          { "id": "e3", "text": "Vi spiser rugbrød til frokost." },
          { "id": "e4", "text": "Et smørrebrød med laks, tak." },
          { "id": "e5", "text": "Skal vi købe wienerbrød til kaffen?" },
          { "id": "e6", "text": "Tak for mad! — Velbekomme!" },
          { "id": "e7", "text": "Kunne jeg få et glas juice?" },
          { "id": "e8", "text": "Vi hygger os med kaffe og stearinlys." }
        ],
        "flashcards": [
          { "id": "f1", "front": "rugbrød", "def": "Det mørke, grove brød, danskerne spiser til frokost." },
          { "id": "f2", "front": "smørrebrød", "def": "Et åbent stykke rugbrød med pålæg." },
          { "id": "f3", "front": "et rundstykke", "def": "Et lille, lyst brød til morgenmad." },
          { "id": "f4", "front": "wienerbrød", "def": "Sødt bagværk — det, udlandet kalder 'a Danish'." },
          { "id": "f5", "front": "Jeg vil gerne have…", "def": "En høflig måde at bestille på." },
          { "id": "f6", "front": "Må jeg bede om…?", "def": "En meget høflig måde at bede om noget." },
          { "id": "f7", "front": "Tak for mad", "def": "Det, gæsten siger efter måltidet." },
          { "id": "f8", "front": "Velbekomme", "def": "Værtens svar på 'tak for mad'." },
          { "id": "f9", "front": "hygge", "def": "At have det rart og roligt sammen." },
          { "id": "f10", "front": "regningen", "def": "Det, man skal betale på en café." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hvordan bestiller man høfligt en kaffe på dansk?",
            "options": ["Giv mig en kaffe", "Jeg vil gerne have en kaffe", "En kaffe, please", "Kaffe nu"],
            "correct": 1,
            "explain": "Dansk har ikke et ord for 'please' — høfligheden ligger i 'jeg vil gerne have' og 'tak'."
          },
          {
            "id": "q2",
            "q": "Hvad er smørrebrød?",
            "options": ["Et åbent stykke rugbrød med pålæg", "En sød kage", "En slags suppe", "Et varmt måltid med kartofler"],
            "correct": 0,
            "explain": "Smørrebrød er et åbent stykke rugbrød med pålæg — fx laks eller æg."
          },
          {
            "id": "q3",
            "q": "Hvad siger gæsten efter måltidet i Danmark?",
            "options": ["Velbekomme", "Tak for mad", "Skål", "Hej hej"],
            "correct": 1,
            "explain": "Gæsten siger 'tak for mad', og værten svarer 'velbekomme'."
          },
          {
            "id": "q4",
            "q": "Hvad kalder danskerne det bagværk, som udlandet kalder 'a Danish'?",
            "options": ["rugbrød", "rundstykke", "wienerbrød", "smørrebrød"],
            "correct": 2,
            "explain": "Wienerbrød er det bagværk, udlandet kalder 'a Danish'."
          },
          {
            "id": "q5",
            "q": "Hvad betyder 'hygge'?",
            "options": ["At have det rart og roligt sammen", "At arbejde hurtigt", "At være sur", "At løbe en tur"],
            "correct": 0,
            "explain": "Hygge er at have det rart og roligt sammen — gerne med stearinlys og kaffe."
          }
        ]
      },
      "a1-hverdag": {
        "id": "a1-hverdag",
        "icon": "🚲",
        "level": "A1",
        "title": "Hverdag og ordstilling",
        "theory": [
          {
            "id": "t1",
            "heading": "Nutid: altid -r",
            "body": "Nutid er let på dansk: udsagnsordet ender på <strong>-r</strong>, og formen er <strong>ens for alle personer</strong>: <em>jeg arbejder, du arbejder, han arbejder, vi arbejder</em>. Ingen bøjning efter person! <em>at bo → bor</em>, <em>at cykle → cykler</em>, <em>at spise → spiser</em>."
          },
          {
            "id": "t2",
            "heading": "V2-reglen",
            "body": "Udsagnsordet står altid på <strong>anden plads</strong> i en almindelig sætning. <em>Jeg cykler til arbejde i dag.</em> Hvis sætningen begynder med noget andet, bytter man om: <em>I dag <strong>cykler jeg</strong> til arbejde.</em> Udsagnsordet bliver på plads nummer to, og 'jeg' kommer bagefter."
          },
          {
            "id": "t3",
            "heading": "Cykelkultur",
            "body": "I København er der flere cykler end biler. Danskerne cykler hele året — også i regn og sne — til arbejde, til skole og med børnene i ladcykel. Der er brede <strong>cykelstier</strong> langs næsten alle veje. At cykle er hverdag, ikke sport."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Jeg står op klokken syv hver dag." },
          { "id": "e2", "text": "Hun arbejder på et kontor i København." },
          { "id": "e3", "text": "I dag cykler jeg til arbejde." },
          { "id": "e4", "text": "Om morgenen drikker vi kaffe." },
          { "id": "e5", "text": "Vi spiser aftensmad klokken seks." },
          { "id": "e6", "text": "Hver weekend besøger de deres venner." },
          { "id": "e7", "text": "Jeg cykler til arbejde — også når det regner." },
          { "id": "e8", "text": "Om aftenen ser vi fjernsyn og hygger os." }
        ],
        "flashcards": [
          { "id": "f1", "front": "at arbejde", "def": "At have et job og udføre det." },
          { "id": "f2", "front": "at bo", "def": "At have sit hjem et sted." },
          { "id": "f3", "front": "at cykle", "def": "At køre på cykel." },
          { "id": "f4", "front": "at stå op", "def": "At komme ud af sengen om morgenen." },
          { "id": "f5", "front": "hver dag", "def": "Alle ugens dage, igen og igen." },
          { "id": "f6", "front": "om morgenen", "def": "Tidligt på dagen." },
          { "id": "f7", "front": "om aftenen", "def": "Sidst på dagen, før natten." },
          { "id": "f8", "front": "en cykelsti", "def": "En vej, der kun er til cykler." },
          { "id": "f9", "front": "at se fjernsyn", "def": "At kigge på tv." },
          { "id": "f10", "front": "aftensmad", "def": "Dagens sidste store måltid." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hvad er nutid af 'at cykle' med 'han'?",
            "options": ["han cykle", "han cykler", "han cyklerer", "han cykles"],
            "correct": 1,
            "explain": "Nutid ender altid på -r og er ens for alle personer: han cykler."
          },
          {
            "id": "q2",
            "q": "Hvilken sætning er korrekt?",
            "options": ["I dag jeg cykler til arbejde", "I dag cykler jeg til arbejde", "I dag jeg til arbejde cykler", "Cykler i dag jeg til arbejde"],
            "correct": 1,
            "explain": "V2-reglen: udsagnsordet står på anden plads — I dag cykler jeg til arbejde."
          },
          {
            "id": "q3",
            "q": "Vi ___ i et hus i Odense.",
            "options": ["bor", "boer", "bos", "bore"],
            "correct": 0,
            "explain": "'At bo' hedder 'bor' i nutid: Vi bor i et hus."
          },
          {
            "id": "q4",
            "q": "Om morgenen ___ kaffe.",
            "options": ["vi drikker", "drikker vi", "vi drikke", "drikke vi"],
            "correct": 1,
            "explain": "Når sætningen begynder med 'om morgenen', skal udsagnsordet stå på anden plads: Om morgenen drikker vi kaffe."
          },
          {
            "id": "q5",
            "q": "Hvordan bøjes udsagnsord i nutid efter person (jeg/du/han/vi)?",
            "options": ["De får forskellige endelser", "De ender altid på -r og er ens for alle", "De ender på -s med han og hun", "De bøjes kun i flertal"],
            "correct": 1,
            "explain": "Danske udsagnsord bøjes ikke efter person — altid -r i nutid."
          }
        ]
      },
      "a1-by": {
        "id": "a1-by",
        "icon": "🚇",
        "level": "A1",
        "title": "Rundt i byen",
        "theory": [
          {
            "id": "t1",
            "heading": "S-tog, metro og rejsekort",
            "body": "I København kører <strong>S-toget</strong> til forstæderne, og <strong>metroen</strong> kører under byen — den er førerløs og kører hele døgnet. Man betaler med <strong>rejsekort</strong> eller en app: husk at <strong>tjekke ind</strong>, når rejsen begynder, og <strong>tjekke ud</strong>, når den slutter."
          },
          {
            "id": "t2",
            "heading": "At spørge om vej",
            "body": "Start med <strong>undskyld</strong>: <em>Undskyld, hvor er metroen?</em> eller <em>Hvordan kommer jeg til banegården?</em> Svar: <strong>til venstre</strong>, <strong>til højre</strong>, <strong>ligeud</strong> — <em>Gå ligeud og drej til venstre.</em>"
          },
          {
            "id": "t3",
            "heading": "Til fods i København",
            "body": "Meget kan ses til fods: gågaden <strong>Strøget</strong>, den gamle havn <strong>Nyhavn</strong> med de farvede huse og <strong>Rådhuspladsen</strong>. Danskerne 'går en tur' i al slags vejr. Og er turen for lang — så tager man cyklen."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Undskyld, hvor er metroen?" },
          { "id": "e2", "text": "Gå ligeud og så til venstre." },
          { "id": "e3", "text": "Hvordan kommer jeg til Rådhuspladsen?" },
          { "id": "e4", "text": "Du skal tage S-toget mod Farum." },
          { "id": "e5", "text": "Husk at tjekke ind med dit rejsekort." },
          { "id": "e6", "text": "Banegården ligger til højre." },
          { "id": "e7", "text": "Vi går en tur langs Nyhavn." },
          { "id": "e8", "text": "Stationen ligger fem minutter herfra." }
        ],
        "flashcards": [
          { "id": "f1", "front": "et S-tog", "def": "Et tog, der kører i og omkring København." },
          { "id": "f2", "front": "metroen", "def": "Det førerløse tog under København — kører hele døgnet." },
          { "id": "f3", "front": "et rejsekort", "def": "Et kort til bus, tog og metro; man tjekker ind og ud." },
          { "id": "f4", "front": "til venstre", "def": "Den modsatte retning af højre." },
          { "id": "f5", "front": "til højre", "def": "Den modsatte retning af venstre." },
          { "id": "f6", "front": "ligeud", "def": "Fremad uden at dreje." },
          { "id": "f7", "front": "Undskyld, hvor er…?", "def": "En høflig måde at spørge om vej." },
          { "id": "f8", "front": "en banegård", "def": "En stor station, hvor togene kører fra." },
          { "id": "f9", "front": "at tjekke ind", "def": "Det, man gør med rejsekortet, når rejsen begynder." },
          { "id": "f10", "front": "en tur", "def": "En lille gåtur eller rejse." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hvad gør man med et rejsekort?",
            "options": ["Betaler for kaffe", "Tjekker ind og ud, når man rejser", "Låser sin cykel", "Åbner døren til metroen"],
            "correct": 1,
            "explain": "Med rejsekortet tjekker man ind, når rejsen begynder, og ud, når den slutter."
          },
          {
            "id": "q2",
            "q": "Gå ___ og drej så til venstre.",
            "options": ["ligeud", "oppe", "nede", "bagved"],
            "correct": 0,
            "explain": "'Ligeud' betyder fremad uden at dreje."
          },
          {
            "id": "q3",
            "q": "Hvad er særligt ved metroen i København?",
            "options": ["Den kører kun om dagen", "Den er førerløs og kører hele døgnet", "Den er gratis", "Den kører kun om sommeren"],
            "correct": 1,
            "explain": "Metroen i København er førerløs og kører hele døgnet."
          },
          {
            "id": "q4",
            "q": "Hvordan spørger man høfligt om vej?",
            "options": ["Hvor banegården?", "Undskyld, hvor er banegården?", "Banegård nu!", "Du siger mig vejen"],
            "correct": 1,
            "explain": "Man starter med 'undskyld': Undskyld, hvor er banegården?"
          },
          {
            "id": "q5",
            "q": "Hvad er et S-tog?",
            "options": ["Et tog i og omkring København", "En bus i Aarhus", "En færge", "En cykeltype"],
            "correct": 0,
            "explain": "S-toget er toget, der kører i og omkring København."
          }
        ]
      },
//__APPEND_HERE__
}}};
