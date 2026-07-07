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
      "a2-datid": {
        "id": "a2-datid",
        "icon": "🕰️",
        "level": "A2",
        "title": "Datid — i går og i sommer",
        "theory": [
          {
            "id": "t1",
            "heading": "Regelmæssig datid: -ede og -te",
            "body": "De fleste danske verber danner datid med en endelse. Gruppe 1 får <strong>-ede</strong>: <em>at lave → lavede</em>, <em>at bo → boede</em>, <em>at arbejde → arbejdede</em>, <em>at spille → spillede</em>. Gruppe 2 får <strong>-te</strong>: <em>at spise → spiste</em>, <em>at købe → købte</em>, <em>at læse → læste</em>, <em>at høre → hørte</em>. Formen er den samme for alle personer: <em>jeg lavede, vi lavede, de lavede</em>."
          },
          {
            "id": "t2",
            "heading": "Uregelmæssige verber",
            "body": "Mange vigtige verber er uregelmæssige — dem skal man lære udenad: <strong>at være → var</strong>, <strong>at have → havde</strong>, <strong>at gå → gik</strong>, <strong>at se → så</strong>, <strong>at tage → tog</strong>, <strong>at få → fik</strong>, <strong>at drikke → drak</strong>, <strong>at komme → kom</strong>. Fx: <em>I går gik vi en tur, og vi drak kaffe bagefter.</em>"
          },
          {
            "id": "t3",
            "heading": "Ordstilling og weekenden",
            "body": "Verbet står altid på <strong>anden plads</strong> — også når sætningen begynder med et tidsudtryk: <em><strong>I går tog</strong> vi til stranden</em> (ikke 'i går vi tog'). Gode tidsudtryk til datid: <strong>i går</strong>, <strong>i sidste uge</strong>, <strong>i sommer</strong>, <strong>i weekenden</strong>. Mange danskere fortæller mandag morgen, hvad de lavede i weekenden — ofte i <strong>sommerhuset</strong>, et lille hus ved kysten, hvor familien slapper af."
          }
        ],
        "examples": [
          { "id": "e1", "text": "I går arbejdede jeg hjemmefra." },
          { "id": "e2", "text": "Vi spiste rugbrød til frokost." },
          { "id": "e3", "text": "I sommer var vi i sommerhus ved Vesterhavet." },
          { "id": "e4", "text": "Hun gik en lang tur i skoven." },
          { "id": "e5", "text": "Jeg så en god film i fredags." },
          { "id": "e6", "text": "De boede i Aarhus i to år." },
          { "id": "e7", "text": "Hvad lavede du i weekenden? — Jeg slappede af." },
          { "id": "e8", "text": "Vi drak kaffe og hyggede os hele aftenen." }
        ],
        "flashcards": [
          { "id": "f1", "front": "lavede", "def": "Datid af 'at lave' — endelsen -ede." },
          { "id": "f2", "front": "spiste", "def": "Datid af 'at spise' — endelsen -te." },
          { "id": "f3", "front": "gik", "def": "Datid af 'at gå' — uregelmæssigt." },
          { "id": "f4", "front": "så (datid)", "def": "Datid af 'at se' — uregelmæssigt." },
          { "id": "f5", "front": "var", "def": "Datid af 'at være' — uregelmæssigt." },
          { "id": "f6", "front": "havde", "def": "Datid af 'at have' — uregelmæssigt." },
          { "id": "f7", "front": "i går", "def": "Dagen før i dag." },
          { "id": "f8", "front": "i sidste uge", "def": "Ugen før denne uge." },
          { "id": "f9", "front": "et sommerhus", "def": "Et lille hus ved kysten, hvor mange danskere holder ferie." },
          { "id": "f10", "front": "i weekenden", "def": "Lørdag og søndag." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "I går ___ vi til Aarhus.",
            "options": ["kører", "kørte", "kørt", "at køre"],
            "correct": 1,
            "explain": "'I går' kræver datid: kørte. 'Kører' er nutid, og 'kørt' er en form, der bruges med 'har'."
          },
          {
            "id": "q2",
            "q": "Hvad er datid af 'at gå'?",
            "options": ["gåede", "gik", "går", "gås"],
            "correct": 1,
            "explain": "'At gå' er uregelmæssigt: gå → gik. 'Gåede' findes ikke."
          },
          {
            "id": "q3",
            "q": "Hun ___ en film i aftes.",
            "options": ["ser", "så", "set", "se"],
            "correct": 1,
            "explain": "'I aftes' kræver datid, og 'at se' er uregelmæssigt: se → så."
          },
          {
            "id": "q4",
            "q": "Vælg sætningen med rigtig ordstilling:",
            "options": ["I sommer vi var i sommerhus.", "I sommer var vi i sommerhus.", "I sommer vi i sommerhus var.", "Var i sommer vi i sommerhus."],
            "correct": 1,
            "explain": "Verbet skal stå på anden plads: I sommer VAR vi i sommerhus."
          },
          {
            "id": "q5",
            "q": "Hvilket verbum får endelsen -ede i datid?",
            "options": ["at lave", "at spise", "at købe", "at læse"],
            "correct": 0,
            "explain": "At lave → lavede. De tre andre får -te: spiste, købte, læste."
          }
        ]
      },
      "a2-kob": {
        "id": "a2-kob",
        "icon": "🛒",
        "level": "A2",
        "title": "Indkøb og penge",
        "theory": [
          {
            "id": "t1",
            "heading": "Kroner, kort og MobilePay",
            "body": "Danmark bruger <strong>danske kroner</strong> (kr.), ikke euro. Man betaler næsten altid med <strong>kort</strong> eller med <strong>MobilePay</strong> — en app, hvor man betaler med telefonen. Kontanter er sjældne; selv på et loppemarked kan man ofte betale med MobilePay. Tre vigtige verber: <strong>at købe</strong>, <strong>at betale</strong> og <strong>at koste</strong>: <em>Hvad koster det? — Det koster 25 kroner.</em>"
          },
          {
            "id": "t2",
            "heading": "Pant — flasker er penge værd",
            "body": "Flasker og dåser har <strong>pant</strong>: en lille ekstra pris (mærket A, B eller C — fra 1 til 3 kroner), som man får tilbage. Man afleverer de tomme flasker i en <strong>pantautomat</strong> i supermarkedet og får en bon med penge. Derfor smider danskere aldrig flasker ud — pant er penge!"
          },
          {
            "id": "t3",
            "heading": "Tilbud og loppemarked",
            "body": "Et <strong>tilbud</strong> er en vare til en lavere pris end normalt — supermarkederne har nye tilbud hver uge i deres <em>tilbudsavis</em>. Et <strong>loppemarked</strong> er et marked, hvor man køber og sælger brugte ting; de er meget populære om sommeren. Nyttige ord: <strong>dyr</strong> (koster meget), <strong>billig</strong> (koster lidt), <strong>en kvittering</strong> (papiret, man får, når man har betalt)."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Hvad koster de her æbler? — De koster tolv kroner." },
          { "id": "e2", "text": "Kan jeg betale med MobilePay? — Ja, selvfølgelig." },
          { "id": "e3", "text": "Rugbrødet er på tilbud i denne uge." },
          { "id": "e4", "text": "Jeg afleverer flaskerne i pantautomaten." },
          { "id": "e5", "text": "Hun købte en gammel lampe på loppemarkedet." },
          { "id": "e6", "text": "Det er for dyrt — har I noget billigere?" },
          { "id": "e7", "text": "Vil du have en kvittering? — Nej tak." },
          { "id": "e8", "text": "Vi betaler næsten aldrig med kontanter — kun med kort." }
        ],
        "flashcards": [
          { "id": "f1", "front": "at købe", "def": "At give penge for en ting." },
          { "id": "f2", "front": "at betale", "def": "At give penge for noget, man har købt." },
          { "id": "f3", "front": "at koste", "def": "At have en pris: Hvad koster det?" },
          { "id": "f4", "front": "en krone", "def": "Danmarks valuta — Danmark bruger ikke euro." },
          { "id": "f5", "front": "pant", "def": "Ekstra penge for flasker og dåser — man får dem tilbage i pantautomaten." },
          { "id": "f6", "front": "et tilbud", "def": "En vare til en lavere pris end normalt." },
          { "id": "f7", "front": "et loppemarked", "def": "Et marked, hvor man køber og sælger brugte ting." },
          { "id": "f8", "front": "dyr", "def": "Det modsatte af billig — koster mange penge." },
          { "id": "f9", "front": "billig", "def": "Det modsatte af dyr — koster få penge." },
          { "id": "f10", "front": "en kvittering", "def": "Papiret, man får, når man har betalt." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hvad gør man med tomme flasker og dåser i Danmark?",
            "options": ["Smider dem i skraldespanden", "Afleverer dem i pantautomaten og får penge tilbage", "Sender dem med posten", "Gemmer dem i kælderen"],
            "correct": 1,
            "explain": "Flasker og dåser har pant. Man afleverer dem i pantautomaten i supermarkedet og får pengene tilbage."
          },
          {
            "id": "q2",
            "q": "Hvad betyder 'på tilbud'?",
            "options": ["Varen er udsolgt", "Varen er billigere end normalt", "Varen er ny", "Varen er dyrere end normalt"],
            "correct": 1,
            "explain": "'På tilbud' betyder, at varen har en lavere pris end normalt."
          },
          {
            "id": "q3",
            "q": "Hvad ___ de her sko? — 400 kroner.",
            "options": ["koster", "betaler", "køber", "sælger"],
            "correct": 0,
            "explain": "Om prisen spørger man med 'at koste': Hvad koster skoene?"
          },
          {
            "id": "q4",
            "q": "Hvordan betaler de fleste danskere i dag?",
            "options": ["Med kontanter", "Med check", "Med kort eller MobilePay", "Med euro"],
            "correct": 2,
            "explain": "Kort og MobilePay er de mest almindelige betalingsformer. Kontanter er sjældne, og Danmark bruger kroner, ikke euro."
          },
          {
            "id": "q5",
            "q": "Jeg vil gerne ___ den her bog. Hvor er kassen?",
            "options": ["koste", "købe", "sælge", "spise"],
            "correct": 1,
            "explain": "Man køber en bog og betaler ved kassen. 'At koste' handler om prisen, og man sælger ikke sin egen bog i butikken."
          }
        ]
      },
      "a2-rejse": {
        "id": "a2-rejse",
        "icon": "🚆",
        "level": "A2",
        "title": "Rejser og transport",
        "theory": [
          {
            "id": "t1",
            "heading": "Toget og rejsekortet",
            "body": "Togene i Danmark køres af <strong>DSB</strong>. Mange rejser med <strong>rejsekort</strong>: et blåt kort, som man holder mod en blå stander. Man skal <strong>checke ind</strong>, når rejsen begynder, og <strong>checke ud</strong>, når den slutter — glemmer man at checke ud, betaler man for meget! Man siger <strong>at tage toget/bussen</strong>: <em>Jeg tager toget til Odense.</em>"
          },
          {
            "id": "t2",
            "heading": "Cyklen — hele året",
            "body": "Danmark har <strong>cykelstier</strong> næsten overalt, og mange danskere cykler hele året — også i regn og sne. I København er der flere cykler end biler i myldretiden. Man cykler på cykelstien, ikke på fortovet, og man har lys på cyklen, når det er mørkt."
          },
          {
            "id": "t3",
            "heading": "Jylland, Fyn og Sjælland",
            "body": "Danmark består af halvøen <strong>Jylland</strong> mod vest, øen <strong>Fyn</strong> i midten (med Odense, H.C. Andersens by) og øen <strong>Sjælland</strong> mod øst, hvor København ligger. <strong>Storebæltsbroen</strong> forbinder Fyn og Sjælland, og <strong>Øresundsbroen</strong> går til Sverige. Til de mindre øer, fx Ærø, tager man en <strong>færge</strong>."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Jeg tager toget fra København til Aarhus." },
          { "id": "e2", "text": "Husk at checke ind, før du stiger på toget." },
          { "id": "e3", "text": "Hun glemte at checke ud og betalte for meget." },
          { "id": "e4", "text": "Vi cykler til arbejde hele året — også om vinteren." },
          { "id": "e5", "text": "Hvornår kører den næste bus til Odense?" },
          { "id": "e6", "text": "Storebæltsbroen forbinder Fyn og Sjælland." },
          { "id": "e7", "text": "Vi tager færgen til Ærø i morgen." },
          { "id": "e8", "text": "Toget er forsinket ti minutter." }
        ],
        "flashcards": [
          { "id": "f1", "front": "et tog", "def": "Et transportmiddel, der kører på skinner — DSB kører dem i Danmark." },
          { "id": "f2", "front": "et rejsekort", "def": "Det blå kort, man checker ind og ud med på rejsen." },
          { "id": "f3", "front": "at checke ind", "def": "Det, man gør med rejsekortet, når rejsen begynder." },
          { "id": "f4", "front": "at checke ud", "def": "Det, man gør med rejsekortet, når rejsen slutter." },
          { "id": "f5", "front": "en cykelsti", "def": "En vej kun til cykler — de findes næsten overalt i Danmark." },
          { "id": "f6", "front": "en færge", "def": "Et skib, der sejler mennesker og biler til øerne." },
          { "id": "f7", "front": "Jylland", "def": "Den store halvø i den vestlige del af Danmark." },
          { "id": "f8", "front": "Sjælland", "def": "Øen mod øst, hvor København ligger." },
          { "id": "f9", "front": "forsinket", "def": "Når toget eller bussen kommer senere end planlagt." },
          { "id": "f10", "front": "at tage toget", "def": "At rejse med tog: Jeg tager toget til Odense." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hvad skal man gøre med rejsekortet, når rejsen slutter?",
            "options": ["Checke ind", "Checke ud", "Købe et nyt", "Smide det væk"],
            "correct": 1,
            "explain": "Man checker ind ved starten og ud ved slutningen. Glemmer man at checke ud, betaler man for meget."
          },
          {
            "id": "q2",
            "q": "Hvilken ø ligger København på?",
            "options": ["Fyn", "Jylland", "Sjælland", "Bornholm"],
            "correct": 2,
            "explain": "København ligger på Sjælland. Odense ligger på Fyn, og Jylland er halvøen mod vest."
          },
          {
            "id": "q3",
            "q": "Jeg ___ bussen til arbejde hver dag.",
            "options": ["tager", "går", "løber", "flyver"],
            "correct": 0,
            "explain": "Man siger 'at tage bussen/toget': Jeg tager bussen til arbejde."
          },
          {
            "id": "q4",
            "q": "Hvad forbinder Storebæltsbroen?",
            "options": ["Danmark og Sverige", "Fyn og Sjælland", "Jylland og Tyskland", "København og Bornholm"],
            "correct": 1,
            "explain": "Storebæltsbroen forbinder Fyn og Sjælland. Broen til Sverige hedder Øresundsbroen."
          },
          {
            "id": "q5",
            "q": "Hvor skal cyklerne køre i Danmark?",
            "options": ["På fortovet", "På cykelstien", "Midt på motorvejen", "Inde i butikkerne"],
            "correct": 1,
            "explain": "Cykler kører på cykelstien. Fortovet er kun til fodgængere."
          }
        ]
      },
      "a2-krop": {
        "id": "a2-krop",
        "icon": "🩺",
        "level": "A2",
        "title": "Krop og sundhed",
        "theory": [
          {
            "id": "t1",
            "heading": "Kroppen",
            "body": "De vigtigste ord for kroppen: <strong>et hoved</strong>, <strong>en mave</strong>, <strong>en ryg</strong>, <strong>en hals</strong>, <strong>en arm</strong>, <strong>et ben</strong>, <strong>en hånd</strong>, <strong>en fod</strong>, <strong>et øje</strong> (flertal: <em>øjne</em>) og <strong>et øre</strong>. Læg mærke til kønnet: det er <em>et</em> hoved, men <em>en</em> mave."
          },
          {
            "id": "t2",
            "heading": "At have ondt i…",
            "body": "Når noget gør ondt, siger man <strong>jeg har ondt i + bestemt form</strong>: <em>Jeg har ondt i <strong>hovedet</strong></em>, <em>Jeg har ondt i <strong>ryggen</strong></em>, <em>Jeg har ondt i <strong>halsen</strong></em>. Man kan også sige <strong>det gør ondt i…</strong>: <em>Det gør ondt i ryggen, når jeg løfter.</em> Husk den bestemte form — ikke 'ondt i hoved'."
          },
          {
            "id": "t3",
            "heading": "Lægen og det gule kort",
            "body": "I Danmark er lægen <strong>gratis</strong>. Alle har et gult <strong>sundhedskort</strong> med navn og egen læge — det viser man, når man kommer. Man ringer først og <strong>bestiller en tid</strong>. Medicin køber man bagefter på et <strong>apotek</strong>. Er man syg, bliver man hjemme fra arbejde — det er helt normalt at sige: <em>Jeg har feber og bliver hjemme i dag.</em>"
          }
        ],
        "examples": [
          { "id": "e1", "text": "Jeg har ondt i hovedet i dag." },
          { "id": "e2", "text": "Det gør ondt i ryggen, når jeg løfter." },
          { "id": "e3", "text": "Jeg vil gerne bestille en tid hos lægen." },
          { "id": "e4", "text": "Husk dit gule sundhedskort, når du går til lægen." },
          { "id": "e5", "text": "Hun har feber og bliver hjemme fra arbejde." },
          { "id": "e6", "text": "Du kan købe medicinen på apoteket." },
          { "id": "e7", "text": "Lægen siger, at jeg skal hvile mig." },
          { "id": "e8", "text": "Jeg har ondt i halsen, og jeg hoster." }
        ],
        "flashcards": [
          { "id": "f1", "front": "et hoved", "def": "Den øverste del af kroppen — med øjne, ører og mund." },
          { "id": "f2", "front": "en mave", "def": "Den del af kroppen, hvor maden lander." },
          { "id": "f3", "front": "en ryg", "def": "Bagsiden af kroppen — fra nakken og ned." },
          { "id": "f4", "front": "en hals", "def": "Delen mellem hovedet og kroppen — den gør ondt, når man er forkølet." },
          { "id": "f5", "front": "at have ondt i", "def": "At føle smerte et sted: Jeg har ondt i hovedet." },
          { "id": "f6", "front": "et sundhedskort", "def": "Det gule kort, man viser hos lægen." },
          { "id": "f7", "front": "en læge", "def": "Den person, man går til, når man er syg — gratis i Danmark." },
          { "id": "f8", "front": "et apotek", "def": "Butikken, hvor man køber medicin." },
          { "id": "f9", "front": "feber", "def": "Når kroppen er for varm, fordi man er syg." },
          { "id": "f10", "front": "at bestille tid", "def": "At aftale et tidspunkt hos lægen." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Jeg har ondt ___ hovedet.",
            "options": ["i", "på", "til", "af"],
            "correct": 0,
            "explain": "Man siger 'at have ondt i': ondt i hovedet, ondt i ryggen, ondt i halsen."
          },
          {
            "id": "q2",
            "q": "Hvad er det gule sundhedskort?",
            "options": ["Et kreditkort", "Kortet, man viser hos lægen", "Et rejsekort", "Et bibliotekskort"],
            "correct": 1,
            "explain": "Sundhedskortet er det gule kort med navn og egen læge — man viser det hos lægen."
          },
          {
            "id": "q3",
            "q": "Hvor køber man medicin?",
            "options": ["I banken", "På apoteket", "Hos frisøren", "På posthuset"],
            "correct": 1,
            "explain": "Medicin køber man på apoteket."
          },
          {
            "id": "q4",
            "q": "Hvad koster et besøg hos din egen læge i Danmark?",
            "options": ["100 kroner", "500 kroner", "Det er gratis", "Det koster kun for voksne"],
            "correct": 2,
            "explain": "Lægen er gratis i Danmark — sundhedssystemet betales over skatten."
          },
          {
            "id": "q5",
            "q": "Hvilket ord er en del af kroppen?",
            "options": ["en ryg", "en dør", "et bord", "en gade"],
            "correct": 0,
            "explain": "'En ryg' er bagsiden af kroppen. De andre ord er ting og steder."
          }
        ]
      },
      "a2-arbejde": {
        "id": "a2-arbejde",
        "icon": "💼",
        "level": "A2",
        "title": "Arbejde og fyraften",
        "theory": [
          {
            "id": "t1",
            "heading": "Professioner",
            "body": "Man siger <strong>at arbejde som</strong> + profession — uden artikel: <em>Hun arbejder som <strong>lærer</strong></em> (ikke 'som en lærer'). Almindelige professioner: <strong>en lærer</strong>, <strong>en sygeplejerske</strong>, <strong>en tømrer</strong>, <strong>en pædagog</strong>, <strong>en ingeniør</strong>. Spørgsmålet er: <strong>Hvad laver du?</strong> — <em>Jeg er tømrer.</em>"
          },
          {
            "id": "t2",
            "heading": "Frokostpausen klokken 12",
            "body": "Klokken 12 spiser næsten alle på en dansk arbejdsplads <strong>frokost</strong> — ofte rugbrød i <strong>kantinen</strong> sammen med kollegerne. Pausen er kort, tit kun 30 minutter, men den er næsten hellig: man venter ikke til klokken 14. Kommer man klokken 12.30, er kantinen ofte allerede tom!"
          },
          {
            "id": "t3",
            "heading": "Fyraften og balance",
            "body": "Dansk har et helt ord for det tidspunkt, hvor arbejdet slutter: <strong>fyraften</strong>. Mange går hjem klokken 16 for at hente børn og lave aftensmad — og det er helt accepteret. Mange arbejdspladser har <strong>flekstid</strong>: man vælger selv, om man møder klokken 7 eller 9. Balancen mellem arbejde og familie er meget vigtig i Danmark."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Hun arbejder som sygeplejerske på Rigshospitalet." },
          { "id": "e2", "text": "Hvad laver du? — Jeg er tømrer." },
          { "id": "e3", "text": "Klokken tolv holder vi frokostpause i kantinen." },
          { "id": "e4", "text": "Jeg har fyraften klokken fire i dag." },
          { "id": "e5", "text": "Vi har flekstid, så jeg møder klokken syv." },
          { "id": "e6", "text": "Mødet begynder klokken ni og slutter klokken ti." },
          { "id": "e7", "text": "Hun henter børnene efter arbejde." },
          { "id": "e8", "text": "God weekend! Vi ses på mandag." }
        ],
        "flashcards": [
          { "id": "f1", "front": "et arbejde", "def": "Det, man laver for at tjene penge." },
          { "id": "f2", "front": "fyraften", "def": "Tidspunktet, hvor arbejdsdagen slutter, og man går hjem." },
          { "id": "f3", "front": "en frokostpause", "def": "Pausen klokken tolv, hvor man spiser frokost." },
          { "id": "f4", "front": "en kollega", "def": "En person, man arbejder sammen med." },
          { "id": "f5", "front": "en lærer", "def": "En person, der underviser i skolen." },
          { "id": "f6", "front": "en sygeplejerske", "def": "En person, der passer syge mennesker på hospitalet." },
          { "id": "f7", "front": "en kantine", "def": "Stedet på arbejdet, hvor man spiser frokost." },
          { "id": "f8", "front": "flekstid", "def": "Når man selv kan vælge, hvornår man møder og går hjem." },
          { "id": "f9", "front": "at tjene penge", "def": "At få penge for sit arbejde." },
          { "id": "f10", "front": "et møde", "def": "Når kolleger taler sammen om arbejdet på et aftalt tidspunkt." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hvad betyder 'fyraften'?",
            "options": ["En fest om aftenen", "Tidspunktet, hvor arbejdsdagen slutter", "En pause om morgenen", "Aftensmad"],
            "correct": 1,
            "explain": "Fyraften er tidspunktet, hvor arbejdet slutter, og man går hjem — dansk har et helt ord for det."
          },
          {
            "id": "q2",
            "q": "Hun arbejder ___ lærer.",
            "options": ["som", "for", "til", "med"],
            "correct": 0,
            "explain": "Man siger 'at arbejde som' + profession uden artikel: Hun arbejder som lærer."
          },
          {
            "id": "q3",
            "q": "Hvornår holder de fleste danskere frokostpause?",
            "options": ["Klokken 10", "Klokken 12", "Klokken 14", "Klokken 16"],
            "correct": 1,
            "explain": "Frokostpausen ligger klokken 12 — næsten alle spiser på samme tid."
          },
          {
            "id": "q4",
            "q": "Hvem passer syge mennesker på hospitalet?",
            "options": ["En tømrer", "En sygeplejerske", "En pædagog", "En frisør"],
            "correct": 1,
            "explain": "En sygeplejerske arbejder på hospitalet. En tømrer bygger, en pædagog passer børn, og en frisør klipper hår."
          },
          {
            "id": "q5",
            "q": "Hvad betyder 'flekstid'?",
            "options": ["Man arbejder altid om natten", "Man kan selv vælge, hvornår man møder", "Man holder aldrig pause", "Man arbejder kun om sommeren"],
            "correct": 1,
            "explain": "Flekstid betyder, at man selv vælger, hvornår man møder og går hjem — fx klokken 7 eller 9."
          }
        ]
      },
      "a2-planer": {
        "id": "a2-planer",
        "icon": "🗓️",
        "level": "A2",
        "title": "Fremtid og planer",
        "theory": [
          {
            "id": "t1",
            "heading": "Skal eller vil?",
            "body": "Om fremtiden bruger man mest <strong>skal</strong> og <strong>vil</strong>. <strong>Skal</strong> bruges om planer og aftaler: <em>Jeg <strong>skal</strong> til fødselsdag på lørdag</em>. <strong>Vil</strong> bruges om ønsker: <em>Jeg <strong>vil</strong> lære dansk</em> — høfligt med 'gerne': <em>Jeg vil <strong>gerne</strong> rejse til Bornholm</em>. Man kan også bruge nutid + et tidsudtryk: <em>Vi rejser i morgen.</em>"
          },
          {
            "id": "t2",
            "heading": "At glæde sig til",
            "body": "<strong>At glæde sig til</strong> betyder at være glad for noget, der kommer — et ord, som mange sprog ikke har! Verbet er refleksivt: <em>jeg glæder <strong>mig</strong>, du glæder <strong>dig</strong>, hun glæder <strong>sig</strong></em>. Danskere siger det hele tiden: <em>Jeg glæder mig til ferien!</em>, <em>Vi glæder os til at se dig.</em>"
          },
          {
            "id": "t3",
            "heading": "På lørdag eller om lørdagen?",
            "body": "<strong>På lørdag</strong> = den kommende lørdag, én gang: <em>På lørdag skal vi i sommerhus</em>. <strong>Om lørdagen</strong> = hver lørdag, en vane: <em>Om lørdagen spiller han fodbold</em>. Og ferien? De fleste danskere holder <strong>tre ugers sommerferie</strong>, ofte i juli — og man ønsker hinanden <em>god ferie!</em>"
          }
        ],
        "examples": [
          { "id": "e1", "text": "Jeg skal til fødselsdag på lørdag." },
          { "id": "e2", "text": "Vi vil gerne rejse til Bornholm til sommer." },
          { "id": "e3", "text": "Jeg glæder mig til ferien!" },
          { "id": "e4", "text": "Om lørdagen spiller han fodbold." },
          { "id": "e5", "text": "På lørdag skal vi i sommerhus." },
          { "id": "e6", "text": "Hvad skal du i weekenden? — Jeg skal slappe af." },
          { "id": "e7", "text": "Hun holder tre ugers ferie i juli." },
          { "id": "e8", "text": "Vi rejser i morgen tidlig." }
        ],
        "flashcards": [
          { "id": "f1", "front": "Jeg skal…", "def": "Sådan taler man om en plan eller en aftale: Jeg skal til fest på lørdag." },
          { "id": "f2", "front": "Jeg vil gerne…", "def": "Sådan siger man et ønske på en høflig måde." },
          { "id": "f3", "front": "at glæde sig til", "def": "At være glad for noget, der kommer: Jeg glæder mig til ferien." },
          { "id": "f4", "front": "på lørdag", "def": "Den kommende lørdag — én gang." },
          { "id": "f5", "front": "om lørdagen", "def": "Hver lørdag — en vane." },
          { "id": "f6", "front": "en ferie", "def": "En periode uden arbejde — mange danskere holder tre ugers sommerferie." },
          { "id": "f7", "front": "i morgen", "def": "Dagen efter i dag." },
          { "id": "f8", "front": "i næste uge", "def": "Ugen efter denne uge." },
          { "id": "f9", "front": "en plan", "def": "Noget, man har besluttet at gøre." },
          { "id": "f10", "front": "til sommer", "def": "Den kommende sommer." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Jeg ___ til tandlægen på tirsdag — jeg har en aftale.",
            "options": ["skal", "vil", "bør", "tør"],
            "correct": 0,
            "explain": "Om planer og aftaler bruger man 'skal': Jeg skal til tandlægen på tirsdag."
          },
          {
            "id": "q2",
            "q": "Hvad betyder 'Jeg glæder mig til ferien'?",
            "options": ["Jeg er træt af ferien", "Jeg er glad for den ferie, der kommer", "Jeg holder aldrig ferie", "Ferien er slut"],
            "correct": 1,
            "explain": "'At glæde sig til' betyder at være glad for noget, der kommer."
          },
          {
            "id": "q3",
            "q": "'Om lørdagen spiller jeg fodbold' betyder…",
            "options": ["kun den kommende lørdag", "hver lørdag", "aldrig om lørdagen", "sidste lørdag"],
            "correct": 1,
            "explain": "'Om lørdagen' er en vane — hver lørdag. Den kommende lørdag hedder 'på lørdag'."
          },
          {
            "id": "q4",
            "q": "Vi ___ gerne se den nye film.",
            "options": ["vil", "skal", "har", "er"],
            "correct": 0,
            "explain": "Ønsker udtrykkes med 'vil gerne': Vi vil gerne se filmen."
          },
          {
            "id": "q5",
            "q": "Hvor lang er en typisk dansk sommerferie?",
            "options": ["Tre dage", "En uge", "Tre uger", "Tre måneder"],
            "correct": 2,
            "explain": "De fleste danskere holder tre ugers sommerferie, ofte i juli."
          }
        ]
      },
      "a2-bedre": {
        "id": "a2-bedre",
        "icon": "⚖️",
        "level": "A2",
        "title": "Sammenligninger — større og bedst",
        "theory": [
          {
            "id": "t1",
            "heading": "-ere og -est",
            "body": "Korte tillægsord får <strong>-ere</strong> i komparativ og <strong>-est</strong> i superlativ: <em>hurtig → <strong>hurtigere</strong> → <strong>hurtigst</strong></em>, <em>billig → billigere → billigst</em>. Lange tillægsord og ord på -et/-sk bruger <strong>mere</strong> og <strong>mest</strong>: <em><strong>mere</strong> spændende, <strong>mest</strong> praktisk</em>. Efter komparativ bruger man <strong>end</strong>: <em>hurtigere <strong>end</strong> din</em>."
          },
          {
            "id": "t2",
            "heading": "Uregelmæssige former",
            "body": "De vigtigste uregelmæssige: <strong>god → bedre → bedst</strong>, <strong>gammel → ældre → ældst</strong>, <strong>ung → yngre → yngst</strong>, <strong>stor → større → størst</strong>, <strong>lille → mindre → mindst</strong>, <strong>mange → flere → flest</strong>. I bestemt form får superlativ -e: <em>den bedst<strong>e</strong> kage, Danmarks størst<strong>e</strong> by</em>."
          },
          {
            "id": "t3",
            "heading": "Lige så … som — og Janteloven",
            "body": "Når to ting er ens, siger man <strong>lige så … som</strong>: <em>Han er <strong>lige så</strong> høj <strong>som</strong> sin far</em>. Og en kulturel note: <strong>Janteloven</strong> er en uskreven dansk regel — man skal ikke tro, man er bedre end andre. Derfor praler danskere sjældent; de siger hellere <em>det går meget godt</em> end <em>jeg er den bedste</em>."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Min cykel er hurtigere end din." },
          { "id": "e2", "text": "Rugbrød er sundere end hvidt brød." },
          { "id": "e3", "text": "Aarhus er stor, men København er større." },
          { "id": "e4", "text": "Det her er den bedste kage, jeg har smagt." },
          { "id": "e5", "text": "Min bror er ældre end mig." },
          { "id": "e6", "text": "Filmen var mere spændende end bogen." },
          { "id": "e7", "text": "Han er lige så høj som sin far." },
          { "id": "e8", "text": "I Danmark siger man sjældent, at man er bedst — det er Janteloven." }
        ],
        "flashcards": [
          { "id": "f1", "front": "hurtigere", "def": "Komparativ af 'hurtig': hurtig → hurtigere → hurtigst." },
          { "id": "f2", "front": "bedre", "def": "Komparativ af 'god' — uregelmæssig: god → bedre → bedst." },
          { "id": "f3", "front": "bedst", "def": "Superlativ af 'god' — den allerbedste." },
          { "id": "f4", "front": "ældre", "def": "Komparativ af 'gammel': gammel → ældre → ældst." },
          { "id": "f5", "front": "større", "def": "Komparativ af 'stor': stor → større → størst." },
          { "id": "f6", "front": "mindre", "def": "Komparativ af 'lille': lille → mindre → mindst." },
          { "id": "f7", "front": "flere", "def": "Komparativ af 'mange': mange → flere → flest." },
          { "id": "f8", "front": "mere spændende", "def": "Lange tillægsord bruger 'mere' og 'mest' i stedet for -ere/-est." },
          { "id": "f9", "front": "lige så … som", "def": "Sådan siger man, at to ting er ens: lige så høj som sin far." },
          { "id": "f10", "front": "Janteloven", "def": "En uskreven dansk regel: man skal ikke tro, man er bedre end andre." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hvad er komparativ af 'god'?",
            "options": ["godere", "bedre", "mere god", "godest"],
            "correct": 1,
            "explain": "'God' er uregelmæssig: god → bedre → bedst."
          },
          {
            "id": "q2",
            "q": "Min søster er ___ end mig.",
            "options": ["ældre", "gammel", "ældst", "mest gammel"],
            "correct": 0,
            "explain": "Før 'end' bruger man komparativ: ældre. 'Ældst' er superlativ, og 'gammel' er grundformen."
          },
          {
            "id": "q3",
            "q": "København er Danmarks ___ by.",
            "options": ["større", "størst", "største", "mere stor"],
            "correct": 2,
            "explain": "Efter et ejerfald som 'Danmarks' står superlativ i bestemt form med -e: største."
          },
          {
            "id": "q4",
            "q": "Han er lige så høj ___ sin bror.",
            "options": ["som", "end", "at", "til"],
            "correct": 0,
            "explain": "'Lige så … som' hører sammen: lige så høj som. 'End' bruges kun efter komparativ."
          },
          {
            "id": "q5",
            "q": "Hvilket tillægsord bruger 'mere/mest' i stedet for -ere/-est?",
            "options": ["billig", "hurtig", "spændende", "stor"],
            "correct": 2,
            "explain": "Lange tillægsord som 'spændende' bruger mere/mest: mere spændende, mest spændende."
          }
        ]
      },
      "a2-modal": {
        "id": "a2-modal",
        "icon": "🧭",
        "level": "A2",
        "title": "Modalverber — kan, skal, vil, må, bør",
        "theory": [
          {
            "id": "t1",
            "heading": "Modalverbum + infinitiv uden 'at'",
            "body": "Der er fem vigtige modalverber: <strong>kan</strong> (evne/mulighed), <strong>skal</strong> (pligt/plan), <strong>vil</strong> (ønske), <strong>må</strong> (tilladelse/nødvendighed) og <strong>bør</strong> (anbefaling). Efter et modalverbum står infinitiven <strong>uden 'at'</strong>: <em>Jeg kan <strong>svømme</strong></em> — aldrig 'jeg kan at svømme'."
          },
          {
            "id": "t2",
            "heading": "Må-fælden",
            "body": "<strong>Må</strong> betyder to helt forskellige ting! <strong>Må gerne</strong> = tilladelse: <em>Du må gerne låne min cykel</em>. <strong>Må ikke</strong> = forbud: <em>Man må ikke cykle på fortovet</em>. Men <strong>må</strong> alene kan også betyde 'er nødt til': <em>Jeg må løbe nu — toget kører om fem minutter</em>. Konteksten viser, hvad der menes."
          },
          {
            "id": "t3",
            "heading": "Bør og faste udtryk",
            "body": "<strong>Bør</strong> bruges om en anbefaling — en god idé, ikke en pligt: <em>Du bør tage en jakke med</em>. To faste udtryk med modalverber: <strong>at kunne lide</strong> = at synes om noget (<em>Jeg kan godt lide kaffe</em>), og det høflige <strong>Må jeg bede om…?</strong> ved bordet (<em>Må jeg bede om saltet?</em>)."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Hun kan tale tre sprog." },
          { "id": "e2", "text": "Du må gerne låne min cykel." },
          { "id": "e3", "text": "Man må ikke cykle på fortovet." },
          { "id": "e4", "text": "Jeg må løbe nu — toget kører om fem minutter." },
          { "id": "e5", "text": "Du bør tage en jakke med — det bliver koldt." },
          { "id": "e6", "text": "Må jeg bede om saltet? — Ja, værsgo." },
          { "id": "e7", "text": "Børnene skal i seng klokken otte." },
          { "id": "e8", "text": "Jeg kan godt lide dansk musik." }
        ],
        "flashcards": [
          { "id": "f1", "front": "kan", "def": "Modalverbum om evne eller mulighed: Hun kan svømme." },
          { "id": "f2", "front": "skal", "def": "Modalverbum om pligt eller plan: Jeg skal på arbejde." },
          { "id": "f3", "front": "vil", "def": "Modalverbum om ønske: Jeg vil lære dansk." },
          { "id": "f4", "front": "må gerne", "def": "Tilladelse: Du må gerne låne min cykel." },
          { "id": "f5", "front": "må ikke", "def": "Forbud: Man må ikke ryge her." },
          { "id": "f6", "front": "bør", "def": "Anbefaling: Man bør cykle med hjelm." },
          { "id": "f7", "front": "at kunne lide", "def": "At synes om noget: Jeg kan godt lide kaffe." },
          { "id": "f8", "front": "Må jeg bede om…?", "def": "En høflig måde at bede om noget ved bordet." },
          { "id": "f9", "front": "at svømme", "def": "At bevæge sig gennem vandet." },
          { "id": "f10", "front": "at låne", "def": "At bruge en ting, der ikke er ens egen, i en kort tid." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hvilken sætning er korrekt?",
            "options": ["Jeg kan at svømme.", "Jeg kan svømme.", "Jeg kan svømmer.", "Jeg kan til at svømme."],
            "correct": 1,
            "explain": "Efter et modalverbum står infinitiven uden 'at': Jeg kan svømme."
          },
          {
            "id": "q2",
            "q": "'Du må gerne parkere her' betyder…",
            "options": ["Det er forbudt at parkere her", "Du har lov til at parkere her", "Du er nødt til at parkere her", "Du kan ikke parkere her"],
            "correct": 1,
            "explain": "'Må gerne' er en tilladelse — du har lov. Forbuddet hedder 'må ikke'."
          },
          {
            "id": "q3",
            "q": "Man ___ ikke cykle over for rødt lys — det er forbudt.",
            "options": ["må", "vil", "kan", "tør"],
            "correct": 0,
            "explain": "Et forbud udtrykkes med 'må ikke': Man må ikke cykle over for rødt lys."
          },
          {
            "id": "q4",
            "q": "Du ___ tage en varm jakke med — det er en god idé.",
            "options": ["bør", "må", "vil", "tør"],
            "correct": 0,
            "explain": "En anbefaling udtrykkes med 'bør'. 'Må' handler om tilladelse eller nødvendighed."
          },
          {
            "id": "q5",
            "q": "'Jeg må løbe nu' betyder…",
            "options": ["Jeg har lov til at løbe", "Jeg er nødt til at gå nu", "Jeg kan lide at løbe", "Jeg løb i går"],
            "correct": 1,
            "explain": "Her betyder 'må' nødvendighed: jeg er nødt til at gå. Det er må-fælden — 'må' kan også betyde tilladelse."
          }
        ]
      },
//__APPEND_HERE__
}}};
