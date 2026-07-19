/* Pathway to B1 — course "da" core: target-language (Danish) content only.
   Plain JS, no JSX: a one-line window.PTB_COURSES wrapper around a pure
   JSON literal, loaded via <script src> before the Babel block.

   ID STABILITY RULE: every content item carries a short stable id
   (theory t*, examples e*, flashcards f*, quiz q*, placement p*).
   Support overlays key translations by topic id + ITEM id — never by
   array index. Future insertions MUST mint NEW ids (t4, e9, f11, ...);
   NEVER renumber or reuse existing ids, even when inserting mid-array
   or deleting items.

   COMPLETE: meta, full placement (20), pronunciation, and all 23 topics
   (A1 x7, A2 x8, B1 x8), authored in three parts. The append sentinel
   used during authoring has been removed. */
import meta from './da.meta.js';

export default {
  meta,
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
      { "id": "p18", "q": "Rugbrødet ___ af bageren hver morgen.", "opts": ["bager", "bages", "bagt", "at bage"], "ans": 1, "level": "B1" },
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
        "Vi går en tur langs åen i Aarhus.",
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
            "q": "Hvad siger færdselsloven? Man ___ ikke cykle over for rødt lys.",
            "options": ["må", "vil", "kan", "tør"],
            "correct": 0,
            "explain": "Et forbud udtrykkes med 'må ikke': Man må ikke cykle over for rødt lys."
          },
          {
            "id": "q4",
            "q": "Du ___ tage en varm jakke med — det er en god idé, men du bestemmer selv.",
            "options": ["bør", "må", "vil", "tør"],
            "correct": 0,
            "explain": "En anbefaling udtrykkes med 'bør'. 'Må' handler om tilladelse eller nødvendighed."
          },
          {
            "id": "q5",
            "q": "'Jeg må løbe nu — toget kører om fem minutter' betyder…",
            "options": ["Jeg har lov til at løbe", "Jeg er nødt til at gå nu", "Jeg kan lide at løbe", "Jeg løb i går"],
            "correct": 1,
            "explain": "Her betyder 'må' nødvendighed: jeg er nødt til at gå. Det er må-fælden — 'må' kan også betyde tilladelse."
          }
        ]
      },
      "b1-perf": {
        "id": "b1-perf",
        "icon": "⏳",
        "level": "B1",
        "title": "Førnutid — har eller er?",
        "theory": [
          {
            "id": "t1",
            "heading": "Førnutid med 'har'",
            "body": "Førnutid dannes med <strong>har</strong> + kort tillægsform: <em>Jeg <strong>har spist</strong> morgenmad</em>. Den bruges, når en handling i fortiden stadig betyder noget nu, eller når tidspunktet er ligegyldigt: <em>Har du nogensinde prøvet at vinterbade?</em> De fleste verber danner førnutid med 'har'."
          },
          {
            "id": "t2",
            "heading": "'Er' ved bevægelse og overgang",
            "body": "Verber, der beskriver <strong>bevægelse fra ét sted til et andet</strong> eller en <strong>overgang</strong>, danner førnutid med <strong>er</strong>: <em>er gået, er kommet, er rejst, er flyttet, er begyndt</em> — og <em>er blevet</em>! Sammenlign: <em>Hun <strong>er gået</strong></em> (= hun er her ikke mere) og <em>Hun <strong>har gået</strong> en lang tur</em> (= aktiviteten). Fokus på resultatet → 'er'; fokus på aktiviteten → 'har'."
          },
          {
            "id": "t3",
            "heading": "Siden, i — og hvornår man bruger datid",
            "body": "Med førnutid bruger man <strong>siden</strong> + et tidspunkt og <strong>i</strong> + en varighed: <em>Jeg har boet her <strong>siden 2020</strong> / <strong>i fem år</strong></em> — og jeg bor her stadig. Men med et afsluttet tidspunkt som <em>i går</em>, <em>sidste sommer</em> eller <em>i 2010</em> skal man bruge <strong>datid</strong>: <em>I går <strong>spiste</strong> jeg stegt flæsk</em> — aldrig 'i går har jeg spist'."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Jeg har boet i København i tre år." },
          { "id": "e2", "text": "Hun er lige gået — måske kan du stadig nå hende." },
          { "id": "e3", "text": "Vi har kendt hinanden siden gymnasiet." },
          { "id": "e4", "text": "Toget er allerede kørt, så vi må vente på det næste." },
          { "id": "e5", "text": "Han er blevet far — de fik en datter i onsdags." },
          { "id": "e6", "text": "Har du nogensinde prøvet at vinterbade?" },
          { "id": "e7", "text": "I går spiste vi stegt flæsk hos min mormor." },
          { "id": "e8", "text": "Foråret er kommet — bøgen er sprunget ud." }
        ],
        "flashcards": [
          { "id": "f1", "front": "førnutid", "def": "Verbetiden med 'har/er' + kort tillægsform: Jeg har spist." },
          { "id": "f2", "front": "er gået", "def": "Førnutid af 'at gå' med 'er': Hun er gået = hun er her ikke mere." },
          { "id": "f3", "front": "er kommet", "def": "Førnutid af 'at komme' med 'er': Gæsterne er kommet." },
          { "id": "f4", "front": "er blevet", "def": "Førnutid af 'at blive' med 'er': Han er blevet far." },
          { "id": "f5", "front": "siden", "def": "Fra et tidspunkt og indtil nu: Jeg har boet her siden 2020." },
          { "id": "f6", "front": "i tre år", "def": "'I' + varighed sammen med førnutid: Jeg har boet her i tre år — og bor her stadig." },
          { "id": "f7", "front": "nogensinde", "def": "På noget tidspunkt i sit liv: Har du nogensinde været i Skagen?" },
          { "id": "f8", "front": "endnu ikke", "def": "Om noget, der ikke er sket indtil nu: Jeg har endnu ikke set filmen." },
          { "id": "f9", "front": "kort tillægsform", "def": "Verbets form efter 'har/er': spist, gået, kommet." },
          { "id": "f10", "front": "allerede", "def": "Tidligere end ventet: Toget er allerede kørt." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hun ___ gået hjem — hun er her ikke mere.",
            "options": ["har", "er", "vil", "skal"],
            "correct": 1,
            "explain": "Bevægelsesverber som 'gå' danner førnutid med 'er': Hun er gået."
          },
          {
            "id": "q2",
            "q": "Jeg har boet i Aarhus ___ 2019, og jeg bor her stadig.",
            "options": ["siden", "i", "for", "om"],
            "correct": 0,
            "explain": "'Siden' + tidspunkt (siden 2019); 'i' + varighed (i fem år)."
          },
          {
            "id": "q3",
            "q": "Hvilken sætning er korrekt?",
            "options": ["I går har jeg spist rugbrød.", "I går spiste jeg rugbrød.", "I går er jeg spist rugbrød.", "I går jeg spiste rugbrød."],
            "correct": 1,
            "explain": "Med et afsluttet tidspunkt som 'i går' bruger man datid, ikke førnutid: I går spiste jeg rugbrød."
          },
          {
            "id": "q4",
            "q": "Vi ___ kendt hinanden siden gymnasiet.",
            "options": ["har", "er", "blev", "vil"],
            "correct": 0,
            "explain": "'Kende' er ikke et bevægelses- eller overgangsverbum → førnutid med 'har': Vi har kendt hinanden."
          },
          {
            "id": "q5",
            "q": "Hvad er forskellen på 'hun har gået' og 'hun er gået'?",
            "options": ["Der er ingen forskel", "'Har gået' beskriver aktiviteten, 'er gået' betyder, at hun er væk", "'Er gået' er forkert dansk", "'Har gået' bruges kun om fremtiden"],
            "correct": 1,
            "explain": "'Har gået' beskriver aktiviteten (hun har gået en lang tur); 'er gået' fokuserer på resultatet — hun er her ikke mere."
          }
        ]
      },
      "b1-fortael": {
        "id": "b1-fortael",
        "icon": "📖",
        "level": "B1",
        "title": "At fortælle — dengang, da og plejede at",
        "theory": [
          {
            "id": "t1",
            "heading": "Før datid: pluskvamperfektum",
            "body": "Når noget skete <strong>før</strong> noget andet i fortiden, bruger man pluskvamperfektum: <strong>havde/var</strong> + kort tillægsform: <em>Da vi nåede stationen, <strong>var</strong> toget allerede <strong>kørt</strong></em>. Valget mellem 'havde' og 'var' følger samme regel som i førnutid: bevægelse og overgang → var (<em>var gået, var blevet</em>); resten → havde (<em>havde spist, havde set</em>)."
          },
          {
            "id": "t2",
            "heading": "Da, når og dengang — fælden",
            "body": "<strong>Da</strong> bruges om ÉN bestemt gang eller periode i fortiden: <em><strong>Da</strong> jeg var ti, flyttede vi til Odense</em>. <strong>Når</strong> bruges om <strong>gentagne</strong> handlinger — også i fortiden! — og om fremtid: <em><strong>Når</strong> vi besøgte farmor, fik vi altid boller</em>. <strong>Dengang</strong> er et adverbium, der betyder 'på det tidspunkt': <em><strong>Dengang</strong> var der ingen mobiltelefoner</em>."
          },
          {
            "id": "t3",
            "heading": "Plejede at — og gode fortælleord",
            "body": "Vaner i fortiden udtrykkes med <strong>plejede at</strong> + infinitiv: <em>Jeg <strong>plejede at</strong> cykle til skole</em>. Byg din fortælling op med <strong>først</strong>, <strong>så</strong>, <strong>derefter</strong>, <strong>bagefter</strong>, <strong>pludselig</strong> og <strong>til sidst</strong>. To klassiske rammer om en dansk barndom: <strong>kolonihaven</strong> (familiens lille have med hus uden for byen) og <strong>efterskolen</strong> (kostskolen, hvor mange unge tager 9. eller 10. klasse)."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Da jeg var barn, tilbragte vi hver sommer i kolonihaven." },
          { "id": "e2", "text": "Når vi besøgte min farmor, fik vi altid boller og kakao." },
          { "id": "e3", "text": "Jeg plejede at cykle til skole, selv når det sneede." },
          { "id": "e4", "text": "Da vi nåede stationen, var toget allerede kørt." },
          { "id": "e5", "text": "Hun havde aldrig set havet, før hun flyttede til Danmark." },
          { "id": "e6", "text": "Dengang var der ingen mobiltelefoner — vi legede bare på gaden." },
          { "id": "e7", "text": "Efter niende klasse tog min bror på efterskole i Jylland." },
          { "id": "e8", "text": "Først cyklede vi til stranden, så badede vi, og til sidst spiste vi is." }
        ],
        "flashcards": [
          { "id": "f1", "front": "pluskvamperfektum", "def": "'Havde/var' + kort tillægsform om noget, der skete før noget andet i fortiden: Toget var kørt." },
          { "id": "f2", "front": "plejede at", "def": "Om en vane i fortiden: Jeg plejede at cykle til skole." },
          { "id": "f3", "front": "dengang", "def": "Adverbium: på det tidspunkt i fortiden: Dengang var der ingen mobiltelefoner." },
          { "id": "f4", "front": "da", "def": "Konjunktion om ÉN bestemt gang i fortiden: Da jeg var barn, boede vi i Odense." },
          { "id": "f5", "front": "når", "def": "Konjunktion om gentagne handlinger og fremtid: Når vi besøgte farmor, fik vi altid kage." },
          { "id": "f6", "front": "en kolonihave", "def": "En lille have med et lille hus uden for byen, som mange danske familier lejer." },
          { "id": "f7", "front": "en efterskole", "def": "En kostskole, hvor mange unge tager 9. eller 10. klasse." },
          { "id": "f8", "front": "pludselig", "def": "Uden varsel, fra det ene øjeblik til det andet: Pludselig begyndte det at regne." },
          { "id": "f9", "front": "til sidst", "def": "Som det sidste i en række hændelser: Til sidst spiste vi is." },
          { "id": "f10", "front": "en barndom", "def": "Den tid i livet, hvor man er barn." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "___ jeg var ti år, flyttede vi til Odense.",
            "options": ["Da", "Når", "Om", "At"],
            "correct": 0,
            "explain": "Én bestemt gang eller periode i fortiden → 'da'. 'Når' bruges om gentagelser og fremtid."
          },
          {
            "id": "q2",
            "q": "___ vi besøgte mormor, fik vi altid æblekage.",
            "options": ["Når", "Da", "Hvis", "At"],
            "correct": 0,
            "explain": "Gentagne handlinger i fortiden ('altid') → 'når'. 'Da' bruges kun om én enkelt gang."
          },
          {
            "id": "q3",
            "q": "Da vi kom til perronen, ___ toget allerede kørt.",
            "options": ["var", "har", "er", "blev"],
            "correct": 0,
            "explain": "Noget, der skete FØR noget andet i fortiden → pluskvamperfektum. 'Køre' tager 'er/var': toget var kørt."
          },
          {
            "id": "q4",
            "q": "'Jeg plejede at spille fodbold' betyder…",
            "options": ["Jeg spiller stadig fodbold hver dag", "Det var en vane i fortiden", "Jeg vil gerne spille fodbold i morgen", "Jeg spillede fodbold én enkelt gang"],
            "correct": 1,
            "explain": "'Plejede at' udtrykker en vane i fortiden: dengang spillede jeg tit fodbold."
          },
          {
            "id": "q5",
            "q": "Hvad er en efterskole?",
            "options": ["En aftenskole for voksne", "En kostskole, hvor unge tager 9. eller 10. klasse", "En børnehave", "Et universitet"],
            "correct": 1,
            "explain": "Efterskolen er en kostskole for unge i 9. eller 10. klasse. Aftenskolen for voksne hedder 'aftenskole'."
          }
        ]
      },
      "b1-hvis": {
        "id": "b1-hvis",
        "icon": "🌦️",
        "level": "B1",
        "title": "Hvis — betingelser og vejrsnak",
        "theory": [
          {
            "id": "t1",
            "heading": "Hvis-sætningen er en ledsætning",
            "body": "<strong>Hvis</strong> indleder en betingelse: <em>Hvis det regner, bliver vi hjemme</em>. Hvis-sætningen er en <strong>ledsætning</strong>, så adverbier som 'ikke' står <strong>før</strong> verbet: <em>hvis det <strong>ikke</strong> regner</em>. Og når hvis-sætningen står først, begynder hovedsætningen med verbet: <em>Hvis solen skinner, <strong>cykler vi</strong> til stranden</em> — ikke 'vi cykler'."
          },
          {
            "id": "t2",
            "heading": "Tænkte situationer med ville og kunne",
            "body": "Om noget, der ikke er virkeligt — kun tænkt — bruger man <strong>datid</strong> i hvis-sætningen og <strong>ville/kunne + infinitiv</strong> i hovedsætningen: <em>Hvis jeg <strong>havde</strong> mere tid, <strong>ville</strong> jeg lære at sejle</em>. Råd giver man med det faste udtryk: <em><strong>Hvis jeg var dig</strong>, ville jeg tage toget</em>."
          },
          {
            "id": "t3",
            "heading": "Vejret — det evige samtaleemne",
            "body": "Vejret er danskernes yndlingsemne, og det passer perfekt til hvis-sætninger: <em>Hvis vejret bliver godt på lørdag, griller vi i haven</em>. Nyttige ord: <strong>det blæser</strong>, <strong>en byge</strong>, <strong>gråvejr</strong>, <strong>vejrudsigten</strong>. Og husk det danske motto: <em>Der findes ikke dårligt vejr — kun forkert tøj</em>."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Hvis det regner i morgen, bliver vi hjemme og hygger os." },
          { "id": "e2", "text": "Vi cykler til stranden, hvis solen skinner." },
          { "id": "e3", "text": "Hvis jeg var dig, ville jeg tage regnjakken med." },
          { "id": "e4", "text": "Hvis jeg havde mere tid, ville jeg lære at sejle." },
          { "id": "e5", "text": "Hvis toget ikke kommer, kan vi tage bussen." },
          { "id": "e6", "text": "Hvis vejret bliver godt på lørdag, griller vi i haven." },
          { "id": "e7", "text": "Hun ville flytte til Bornholm, hvis hun kunne arbejde hjemmefra." },
          { "id": "e8", "text": "Der findes ikke dårligt vejr — kun forkert tøj." }
        ],
        "flashcards": [
          { "id": "f1", "front": "hvis", "def": "Konjunktion om en betingelse: Hvis det regner, bliver vi hjemme." },
          { "id": "f2", "front": "en betingelse", "def": "Noget, der skal ske, før noget andet kan ske." },
          { "id": "f3", "front": "Hvis jeg var dig…", "def": "Fast udtryk, når man giver et råd." },
          { "id": "f4", "front": "ville", "def": "Datid af 'vil' — bruges om tænkte situationer: Hvis jeg kunne, ville jeg rejse." },
          { "id": "f5", "front": "en regnjakke", "def": "En jakke, der holder regnen ude." },
          { "id": "f6", "front": "en vejrudsigt", "def": "En prognose for, hvordan vejret bliver." },
          { "id": "f7", "front": "det blæser", "def": "Vinden er stærk — meget almindeligt vejr i Danmark." },
          { "id": "f8", "front": "en byge", "def": "Kort og pludselig regn: Der kommer byger i eftermiddag." },
          { "id": "f9", "front": "at grille", "def": "At lave mad over åben ild udenfor, fx i haven." },
          { "id": "f10", "front": "alligevel", "def": "Selvom noget taler imod: Det regnede, men vi gik en tur alligevel." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hvis det ___ i morgen, tager vi til stranden.",
            "options": ["ikke regner", "regner ikke", "ikke at regne", "ikke regnet"],
            "correct": 0,
            "explain": "Hvis-sætningen er en ledsætning, så 'ikke' står før verbet: hvis det ikke regner."
          },
          {
            "id": "q2",
            "q": "Hvilken sætning er korrekt?",
            "options": ["Hvis det regner, vi bliver hjemme.", "Hvis det regner, bliver vi hjemme.", "Hvis det regner, vi hjemme bliver.", "Hvis regner det, bliver vi hjemme."],
            "correct": 1,
            "explain": "Når hvis-sætningen står først, kommer verbet lige efter kommaet: …, bliver vi hjemme."
          },
          {
            "id": "q3",
            "q": "Hvis jeg ___ dig, ville jeg tage toget.",
            "options": ["var", "er", "bliver", "vil være"],
            "correct": 0,
            "explain": "Fast udtryk med datid om en tænkt situation: Hvis jeg var dig…"
          },
          {
            "id": "q4",
            "q": "Hvis jeg havde flere penge, ___ jeg købe et sommerhus.",
            "options": ["ville", "vil", "skal", "må"],
            "correct": 0,
            "explain": "Tænkt situation → datid i hvis-sætningen og 'ville' + infinitiv i hovedsætningen."
          },
          {
            "id": "q5",
            "q": "'Der findes ikke dårligt vejr, kun…' — hvordan slutter det danske mundheld?",
            "options": ["forkert tøj", "dårlig kaffe", "for få paraplyer", "kolde vintre"],
            "correct": 0,
            "explain": "Mundheldet lyder: Der findes ikke dårligt vejr — kun forkert tøj."
          }
        ]
      },
      "b1-mening": {
        "id": "b1-mening",
        "icon": "💬",
        "level": "B1",
        "title": "Meninger — synes, tror og mener",
        "theory": [
          {
            "id": "t1",
            "heading": "Synes, tror eller mener?",
            "body": "Tre verber, som B1-elever ofte blander sammen: <strong>synes</strong> = en personlig smag eller vurdering ud fra egen oplevelse (<em>Jeg synes, kaffen smager godt</em>). <strong>Tror</strong> = noget, man regner for sandsynligt, men ikke ved sikkert (<em>Jeg tror, det regner i morgen</em>). <strong>Mener</strong> = et gennemtænkt standpunkt (<em>Jeg mener, at kommunen bør bygge flere cykelstier</em>). Test: Har du oplevet det selv? → synes. Er du usikker på fakta? → tror."
          },
          {
            "id": "t2",
            "heading": "Enig og uenig",
            "body": "Man er <strong>enig med</strong> en person <strong>i</strong> noget: <em>Jeg er enig med dig i, at prisen er for høj</em>. Gradbøj din enighed: <strong>helt enig</strong>, <strong>delvist enig</strong>, <strong>helt uenig</strong>. Gode diskussionsudtryk: <em>på den ene side… på den anden side…</em>, <em>det kommer an på…</em>, <em>det er et godt argument, men…</em>"
          },
          {
            "id": "t3",
            "heading": "Foreningsliv og konsensus",
            "body": "Danmark er foreningernes land: de fleste danskere er medlem af mindst én <strong>forening</strong> — en idrætsklub, et kor eller en kolonihaveforening. Den danske diskussionskultur søger <strong>konsensus</strong>: man diskuterer, lytter og finder <strong>et kompromis</strong>, som alle kan leve med. Derfor er høflige udtryk vigtige: <em>Hvad synes du? Skal vi ikke finde en fælles løsning?</em>"
          }
        ],
        "examples": [
          { "id": "e1", "text": "Jeg synes, den nye cykelsti er en rigtig god idé." },
          { "id": "e2", "text": "Jeg tror, det bliver regnvejr i morgen." },
          { "id": "e3", "text": "Jeg mener, at kommunen bør bygge flere billige boliger." },
          { "id": "e4", "text": "Jeg er helt enig med dig i, at prisen er for høj." },
          { "id": "e5", "text": "Jeg er uenig — men på den anden side forstår jeg godt dit argument." },
          { "id": "e6", "text": "Det kommer an på, hvad det koster." },
          { "id": "e7", "text": "De fleste danskere er medlem af mindst én forening." },
          { "id": "e8", "text": "Lad os finde et kompromis, som alle kan leve med." }
        ],
        "flashcards": [
          { "id": "f1", "front": "at synes", "def": "At have en mening ud fra egen smag eller oplevelse: Jeg synes, filmen er god." },
          { "id": "f2", "front": "at tro", "def": "At regne noget for sandsynligt uden at vide det sikkert: Jeg tror, det regner i morgen." },
          { "id": "f3", "front": "at mene", "def": "At have et gennemtænkt standpunkt: Jeg mener, at skatten er for høj." },
          { "id": "f4", "front": "enig", "def": "Når man har samme mening som en anden: Jeg er enig med dig." },
          { "id": "f5", "front": "uenig", "def": "Når man IKKE har samme mening: Vi er uenige om politik." },
          { "id": "f6", "front": "et kompromis", "def": "En løsning, hvor begge parter giver sig lidt." },
          { "id": "f7", "front": "en forening", "def": "En gruppe mennesker organiseret om en fælles interesse, fx en idrætsforening." },
          { "id": "f8", "front": "på den anden side", "def": "Udtryk, der indleder et modsat argument." },
          { "id": "f9", "front": "det kommer an på", "def": "Det afhænger af noget: Det kommer an på prisen." },
          { "id": "f10", "front": "et argument", "def": "En grund, man giver for sin mening." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Jeg ___, at filmen var kedelig — jeg faldt næsten i søvn.",
            "options": ["synes", "tror", "håber", "ved"],
            "correct": 0,
            "explain": "Egen oplevelse eller smag → 'synes'. 'Tror' bruges, når man er usikker på fakta."
          },
          {
            "id": "q2",
            "q": "Jeg ___, at toget kommer klokken ti, men jeg er ikke sikker.",
            "options": ["tror", "synes", "ved", "smager"],
            "correct": 0,
            "explain": "Noget sandsynligt, som man ikke ved sikkert → 'tror'."
          },
          {
            "id": "q3",
            "q": "Politikeren ___, at kommunen bør bygge flere cykelstier.",
            "options": ["mener", "tror", "smager", "plejer"],
            "correct": 0,
            "explain": "Et gennemtænkt standpunkt → 'mener'."
          },
          {
            "id": "q4",
            "q": "'Det er jeg helt enig i' betyder…",
            "options": ["Jeg har en anden mening", "Jeg har præcis samme mening", "Jeg forstår ikke spørgsmålet", "Jeg er ligeglad"],
            "correct": 1,
            "explain": "'Helt enig' = jeg har præcis samme mening."
          },
          {
            "id": "q5",
            "q": "Hvad er en forening?",
            "options": ["En slags skat", "En gruppe mennesker organiseret om en fælles interesse", "Et supermarked", "En bank"],
            "correct": 1,
            "explain": "En forening er en gruppe organiseret om en fælles interesse — sport, musik, kolonihaver. De fleste danskere er medlem af mindst én."
          }
        ]
      },
      "b1-nyheder": {
        "id": "b1-nyheder",
        "icon": "📰",
        "level": "B1",
        "title": "Nyheder og indirekte tale",
        "theory": [
          {
            "id": "t1",
            "heading": "At-sætninger og indirekte tale",
            "body": "Når man gengiver, hvad andre siger, bruger man en <strong>at-sætning</strong>: <em>Han siger, <strong>at</strong> han kommer</em>. Der står altid komma før 'at'. I nyhederne møder man formen hele tiden: <em>DR skriver, at regeringen fremlægger en ny klimaplan</em>. <strong>DR</strong> (Danmarks Radio) er Danmarks public service-medie med tv, radio og nyheder."
          },
          {
            "id": "t2",
            "heading": "Ikke FØR verbet i ledsætninger",
            "body": "Den vigtigste B1-regel om ordstilling: i en <strong>ledsætning</strong> står 'ikke' (og andre adverbier som 'aldrig', 'altid', 'ofte') <strong>før</strong> det bøjede verbum. Hovedsætning: <em>Han kommer <strong>ikke</strong></em>. Ledsætning: <em>Hun siger, at han <strong>ikke kommer</strong></em> — aldrig 'at han kommer ikke'. Huskeregel: konjunktion + subjekt + adverbium + verbum."
          },
          {
            "id": "t3",
            "heading": "Indirekte spørgsmål",
            "body": "Ja/nej-spørgsmål gengives med <strong>om</strong>: <em>Hun spurgte, <strong>om</strong> jeg kunne komme</em>. Hv-spørgsmål beholder hv-ordet, men får <strong>almindelig ledsætningsordstilling</strong> (subjekt før verbum): <em>Han spurgte, hvor <strong>jeg boede</strong></em> — ikke 'hvor boede jeg'. Når hv-ordet selv er subjekt, tilføjer man <strong>der</strong>: <em>Han spurgte, hvem <strong>der</strong> havde vundet</em>."
          }
        ],
        "examples": [
          { "id": "e1", "text": "DR skriver, at regeringen fremlægger en ny klimaplan i dag." },
          { "id": "e2", "text": "Hun siger, at hun ikke har tid i weekenden." },
          { "id": "e3", "text": "Han fortalte, at han aldrig havde set så meget sne." },
          { "id": "e4", "text": "Journalisten spurgte ministeren, om planen bliver dyr." },
          { "id": "e5", "text": "Min nabo spurgte, hvor jeg havde købt min cykel." },
          { "id": "e6", "text": "Jeg hørte i radioen, at broen er lukket på grund af blæst." },
          { "id": "e7", "text": "Hun ville vide, hvornår toget kørte." },
          { "id": "e8", "text": "Han spurgte, hvem der havde vundet valget." }
        ],
        "flashcards": [
          { "id": "f1", "front": "en nyhed", "def": "En ny information, ofte fra medierne: Har du hørt nyheden?" },
          { "id": "f2", "front": "DR", "def": "Danmarks Radio — Danmarks public service-medie med tv, radio og nyheder." },
          { "id": "f3", "front": "en avis", "def": "Trykte eller digitale nyheder, fx Politiken." },
          { "id": "f4", "front": "en journalist", "def": "En person, der arbejder med nyheder." },
          { "id": "f5", "front": "at spørge", "def": "At stille et spørgsmål: Hun spurgte, om jeg kom." },
          { "id": "f6", "front": "at svare", "def": "At give et svar på et spørgsmål." },
          { "id": "f7", "front": "regeringen", "def": "De ministre, der leder landet." },
          { "id": "f8", "front": "et valg", "def": "Når borgerne stemmer, fx et folketingsvalg." },
          { "id": "f9", "front": "ifølge", "def": "Efter hvad nogen siger eller skriver: Ifølge DR bliver vinteren mild." },
          { "id": "f10", "front": "at fortælle", "def": "At give nogen en historie eller en information: Han fortalte, at…" }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hun siger, at hun ___ i dag.",
            "options": ["ikke kommer", "kommer ikke", "ikke kommet", "ikke at komme"],
            "correct": 0,
            "explain": "I ledsætninger står 'ikke' FØR verbet: …, at hun ikke kommer."
          },
          {
            "id": "q2",
            "q": "Han spurgte, ___ jeg ville med i biografen.",
            "options": ["om", "at", "hvis", "for"],
            "correct": 0,
            "explain": "Indirekte ja/nej-spørgsmål indledes med 'om'. Pas på: betingelsen hedder 'hvis', men det indirekte spørgsmål hedder 'om'."
          },
          {
            "id": "q3",
            "q": "Hvilken sætning er korrekt?",
            "options": ["Hun spurgte, hvor boede jeg.", "Hun spurgte, hvor jeg boede.", "Hun spurgte, hvor der jeg boede.", "Hun spurgte, jeg boede hvor."],
            "correct": 1,
            "explain": "Efter hv-ordet følger almindelig ledsætningsordstilling — subjekt før verbum: hvor jeg boede."
          },
          {
            "id": "q4",
            "q": "Han fortalte, at han ___ havde set så meget sne før.",
            "options": ["aldrig", "ingen", "intet", "ingenting"],
            "correct": 0,
            "explain": "Adverbier som 'aldrig' står før verbet i ledsætningen: …, at han aldrig havde set så meget sne."
          },
          {
            "id": "q5",
            "q": "Hvad er DR?",
            "options": ["Et dansk flyselskab", "Danmarks public service-medie", "En dansk bank", "Et politisk parti"],
            "correct": 1,
            "explain": "DR (Danmarks Radio) er Danmarks public service-medie med tv, radio og nyheder."
          }
        ]
      },
      "b1-skriv": {
        "id": "b1-skriv",
        "icon": "✉️",
        "level": "B1",
        "title": "Formelle mails og breve",
        "theory": [
          {
            "id": "t1",
            "heading": "Du — også når det er formelt",
            "body": "På dansk skriver man <strong>du</strong> — også i formelle mails til kommunen, banken og virksomheder. <strong>De</strong> bruges i dag næsten aldrig på skrift (kongehuset og enkelte meget formelle breve). Det formelle på dansk ligger i <strong>tonen og strukturen</strong>, ikke i 'De'. Indledning: <strong>Kære</strong> + navn (bruges både formelt og privat), <strong>Hej</strong> + navn (uformelt) eller <strong>Til rette vedkommende</strong>, når man ikke kender modtageren."
          },
          {
            "id": "t2",
            "heading": "Hilsner og opbygning",
            "body": "En formel mail slutter med <strong>Med venlig hilsen</strong> (eller bare <strong>Venlig hilsen</strong>, forkortet <em>Mvh</em>). Til venner og familie skriver man <strong>Kærlig hilsen</strong> (<em>KH</em>). Skriv et klart <strong>emnefelt</strong>, og kom hurtigt til sagen: <em>Jeg skriver til jer, fordi…</em> Afslut gerne med: <em>På forhånd tak</em>."
          },
          {
            "id": "t3",
            "heading": "Det digitale Danmark og jobansøgningen",
            "body": "Det offentlige Danmark er digitalt: breve fra kommunen og Skat kommer i <strong>Digital Post (e-Boks)</strong>, man logger ind med <strong>MitID</strong>, og på <strong>borger.dk</strong> ordner man fx flytning og sundhedskort. En <strong>jobansøgning</strong> består af en kort ansøgning og et <strong>CV</strong>. Den klassiske åbning: <em>Jeg søger hermed stillingen som…</em>"
          }
        ],
        "examples": [
          { "id": "e1", "text": "Kære Hanne. Tak for din mail — jeg vender tilbage i morgen." },
          { "id": "e2", "text": "Jeg skriver til jer, fordi jeg har et spørgsmål om min regning." },
          { "id": "e3", "text": "Jeg søger hermed stillingen som køkkenmedarbejder." },
          { "id": "e4", "text": "Vedhæftet finder du mit CV og min ansøgning." },
          { "id": "e5", "text": "Du har fået ny post i e-Boks fra kommunen." },
          { "id": "e6", "text": "Med venlig hilsen, Mette Jensen." },
          { "id": "e7", "text": "På borger.dk kan man melde flytning og bestille nyt sundhedskort." },
          { "id": "e8", "text": "Husk at logge ind med MitID, når du skal læse din digitale post." }
        ],
        "flashcards": [
          { "id": "f1", "front": "Kære…", "def": "Standardindledningen i breve og mails — bruges både formelt og til venner: Kære Anne." },
          { "id": "f2", "front": "Med venlig hilsen", "def": "Den almindelige formelle afslutning i mails og breve (forkortes Mvh)." },
          { "id": "f3", "front": "Kærlig hilsen", "def": "Afslutningen til familie og nære venner (forkortes KH)." },
          { "id": "f4", "front": "en ansøgning", "def": "Et formelt brev, hvor man søger fx et job: en jobansøgning." },
          { "id": "f5", "front": "et CV", "def": "En liste over ens uddannelse og erfaring, som sendes med en ansøgning." },
          { "id": "f6", "front": "vedhæftet", "def": "Sendt med som fil i en mail: Vedhæftet finder du mit CV." },
          { "id": "f7", "front": "e-Boks", "def": "Den digitale postkasse, hvor det offentlige sender sine breve (Digital Post)." },
          { "id": "f8", "front": "borger.dk", "def": "Det offentliges hjemmeside, hvor man ordner fx flytning og sundhedskort." },
          { "id": "f9", "front": "MitID", "def": "Danmarks digitale login til banken og det offentlige." },
          { "id": "f10", "front": "en stilling", "def": "Et job: Jeg søger stillingen som kok." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Hvordan afslutter man normalt en formel mail på dansk?",
            "options": ["Med venlig hilsen", "Kærlig hilsen", "Vi ses, makker", "Hej hej"],
            "correct": 0,
            "explain": "'Med venlig hilsen' er den formelle standardafslutning. 'Kærlig hilsen' er til familie og venner."
          },
          {
            "id": "q2",
            "q": "Du skriver en mail til en virksomhed, men kender ikke modtagerens navn. Hvad skriver du?",
            "options": ["Til rette vedkommende", "Hej med jer!", "Halløj!", "Kære du"],
            "correct": 0,
            "explain": "Når man ikke kender modtageren, skriver man 'Til rette vedkommende' eller 'Kære' + afdelingen."
          },
          {
            "id": "q3",
            "q": "Hvad er e-Boks?",
            "options": ["En digital postkasse til post fra det offentlige", "Et socialt medie", "En slags madkasse", "En musiktjeneste"],
            "correct": 0,
            "explain": "e-Boks (Digital Post) er den digitale postkasse, hvor kommunen, Skat og andre myndigheder sender deres breve."
          },
          {
            "id": "q4",
            "q": "'Jeg søger hermed stillingen som…' bruges i…",
            "options": ["en jobansøgning", "en fødselsdagsinvitation", "en sms til en ven", "en indkøbsseddel"],
            "correct": 0,
            "explain": "Det er den klassiske åbning i en jobansøgning."
          },
          {
            "id": "q5",
            "q": "Hvem skriver man 'De' til i en moderne dansk mail?",
            "options": ["Alle chefer", "Næsten ingen — man skriver 'du', også formelt", "Alle over 40 år", "Alle offentlige kontorer"],
            "correct": 1,
            "explain": "'De' bruges i dag næsten aldrig — selv formelle mails bruger 'du'. Det formelle ligger i tonen og strukturen."
          }
        ]
      },
      "b1-hygge": {
        "id": "b1-hygge",
        "icon": "🕯️",
        "level": "B1",
        "title": "Følelser og hygge",
        "theory": [
          {
            "id": "t1",
            "heading": "At have det godt — og skidt",
            "body": "Spørgsmålet <em>Hvordan har du det?</em> besvares med <strong>at have det</strong> + adverbium: <em>Jeg har det godt/fint/skidt</em>. Vigtige følelsesord: <strong>glad</strong>, <strong>ked af det</strong> (= trist), <strong>sur</strong>, <strong>træt</strong>, <strong>stolt</strong>, <strong>bekymret</strong>, <strong>ensom</strong>: <em>Hun er ked af det, fordi hendes kat er syg</em>."
          },
          {
            "id": "t2",
            "heading": "Refleksivt 'sig' — og glæde sig til/over",
            "body": "Mange følelsesverber er <strong>refleksive</strong>: <em>jeg glæder <strong>mig</strong>, du glæder <strong>dig</strong>, han/hun/de glæder <strong>sig</strong></em>. Også: <strong>at føle sig</strong> (<em>Han føler sig ensom</em>) og <strong>at hygge sig</strong>. Den store forskel: <strong>glæde sig TIL</strong> = at se frem til noget i fremtiden (<em>Jeg glæder mig til sommerferien</em>); <strong>glæde sig OVER</strong> = at være glad for noget, der sker nu eller er sket (<em>Hun glæder sig over den gode nyhed</em>)."
          },
          {
            "id": "t3",
            "heading": "Hygge, uhyggelig — og janteloven",
            "body": "<strong>Hygge</strong> er den varme, afslappede stemning med stearinlys, tæpper og god tid — <em>en hyggelig aften</em>. Men pas på: <strong>uhyggelig</strong> betyder IKKE 'ikke-hyggelig' — det betyder <strong>skræmmende</strong>: <em>en uhyggelig film</em>. To ord til samtaler om det danske samfund: <strong>tillid</strong> (danskerne stoler på hinanden — barnevogne står udenfor caféen) og <strong>janteloven</strong> (den uskrevne regel: tro ikke, du er bedre end andre)."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Hvordan har du det i dag? — Jeg har det rigtig godt, tak." },
          { "id": "e2", "text": "Jeg glæder mig til julefrokosten på fredag." },
          { "id": "e3", "text": "Hun glæder sig over, at hendes søn har fået arbejde." },
          { "id": "e4", "text": "Vi hyggede os med stearinlys, tæpper og varm kakao." },
          { "id": "e5", "text": "Han følte sig ensom, da han lige var flyttet til Danmark." },
          { "id": "e6", "text": "Filmen var så uhyggelig, at jeg ikke kunne sove." },
          { "id": "e7", "text": "Danskerne har stor tillid til hinanden — barnevogne står ofte udenfor caféen." },
          { "id": "e8", "text": "Janteloven siger, at man ikke skal tro, man er bedre end andre." }
        ],
        "flashcards": [
          { "id": "f1", "front": "at have det godt", "def": "At føle sig godt tilpas: Jeg har det godt i dag." },
          { "id": "f2", "front": "ked af det", "def": "Trist: Hun er ked af det, fordi hendes kat er syg." },
          { "id": "f3", "front": "at glæde sig til", "def": "At se frem til noget i fremtiden: Jeg glæder mig til sommerferien." },
          { "id": "f4", "front": "at glæde sig over", "def": "At være glad for noget, der sker nu eller allerede er sket." },
          { "id": "f5", "front": "at føle sig", "def": "Refleksivt verbum om ens tilstand: Han føler sig træt." },
          { "id": "f6", "front": "at hygge sig", "def": "At have det rart og afslappet, ofte med stearinlys og god mad." },
          { "id": "f7", "front": "hyggelig", "def": "Rar og varm stemning: en hyggelig aften." },
          { "id": "f8", "front": "uhyggelig", "def": "Skræmmende — det MODSATTE af rar: en uhyggelig film." },
          { "id": "f9", "front": "tillid", "def": "Troen på, at man kan stole på andre: Danskerne har stor tillid til hinanden." },
          { "id": "f10", "front": "janteloven", "def": "Den uskrevne regel om, at man ikke skal tro, man er bedre end andre." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Jeg glæder mig ___ min fødselsdag på lørdag.",
            "options": ["til", "over", "på", "af"],
            "correct": 0,
            "explain": "Noget i fremtiden → 'glæde sig til'. Noget, der allerede er sket → 'glæde sig over'."
          },
          {
            "id": "q2",
            "q": "Hun glæder sig ___, at hun bestod eksamen.",
            "options": ["over", "til", "på", "for"],
            "correct": 0,
            "explain": "Noget, der allerede er sket (hun bestod) → 'glæde sig over'."
          },
          {
            "id": "q3",
            "q": "'En uhyggelig film' er…",
            "options": ["en rar og hyggelig film", "en skræmmende film", "en kedelig film", "en morsom film"],
            "correct": 1,
            "explain": "'Uhyggelig' betyder skræmmende — ikke 'ikke-hyggelig'. Det er en klassisk fælde."
          },
          {
            "id": "q4",
            "q": "Han føler ___ ensom her i den mørke vinter.",
            "options": ["sig", "ham", "han", "mig"],
            "correct": 0,
            "explain": "Det refleksive pronomen for han/hun/de er 'sig': Han føler sig ensom."
          },
          {
            "id": "q5",
            "q": "Hvad handler janteloven om?",
            "options": ["At man skal betale sin skat", "At man ikke skal tro, man er bedre end andre", "At man skal cykle til arbejde", "At man altid skal komme til tiden"],
            "correct": 1,
            "explain": "Janteloven er den uskrevne regel: tro ikke, at du er bedre end andre."
          }
        ]
      },
      "b1-struktur": {
        "id": "b1-struktur",
        "icon": "🧩",
        "level": "B1",
        "title": "Som, der og passiv",
        "theory": [
          {
            "id": "t1",
            "heading": "Som og der",
            "body": "Henførende sætninger dannes med <strong>som</strong> eller <strong>der</strong>. Reglen: <strong>der kan KUN være subjekt</strong> i ledsætningen; <strong>som</strong> kan være både subjekt og objekt. Subjekt: <em>Kvinden, <strong>som/der</strong> bor på anden sal, er læge</em>. Objekt: <em>Bogen, <strong>som</strong> jeg læser, er spændende</em> — her er 'der' umuligt."
          },
          {
            "id": "t2",
            "heading": "To slags passiv",
            "body": "Dansk har to passivformer. <strong>S-passiv</strong> bruges om noget generelt, gentaget eller om regler: <em>Rugbrødet <strong>bages</strong> hver morgen. Der <strong>tales</strong> dansk i Danmark</em>. <strong>Blive-passiv</strong> bruges om en konkret hændelse: <em>Broen <strong>blev bygget</strong> i 1998</em>. Nogle s-former er gensidige, ikke passive: <em>vi <strong>ses</strong>, vi <strong>mødes</strong></em> (= vi ser/møder hinanden)."
          },
          {
            "id": "t3",
            "heading": "Der er, det er — og infinitiv med eller uden 'at'",
            "body": "<strong>Der er</strong> bruges om, at noget findes: <em>Der er flere cykler end biler i København</em>. <strong>Det er</strong> udpeger eller identificerer: <em>Det er min cykel</em>. Infinitiv har normalt <strong>at</strong>: <em>Det er svært <strong>at</strong> udtale 'rødgrød med fløde'</em> — men efter modalverber står infinitiven <strong>uden</strong> 'at': <em>Jeg kan <strong>svømme</strong></em>."
          }
        ],
        "examples": [
          { "id": "e1", "text": "Kvinden, der bor på anden sal, er læge." },
          { "id": "e2", "text": "Filmen, som vi så i går, var rigtig uhyggelig." },
          { "id": "e3", "text": "Rugbrødet bages hver morgen i det lille bageri." },
          { "id": "e4", "text": "Der tales dansk i Danmark og på Færøerne." },
          { "id": "e5", "text": "Broen blev bygget i 1998." },
          { "id": "e6", "text": "Der er flere cykler end biler i København." },
          { "id": "e7", "text": "Det er svært at udtale 'rødgrød med fløde'." },
          { "id": "e8", "text": "Vi ses på fredag til fødselsdagen!" }
        ],
        "flashcards": [
          { "id": "f1", "front": "som", "def": "Henførende ord, der kan være både subjekt og objekt: Bogen, som jeg læser." },
          { "id": "f2", "front": "der", "def": "Henførende ord, der KUN kan være subjekt: Manden, der bor ved siden af." },
          { "id": "f3", "front": "s-passiv", "def": "Passivformen med -s om noget generelt: Rugbrødet bages hver morgen." },
          { "id": "f4", "front": "blive-passiv", "def": "Passiv med 'blive' om en konkret hændelse: Broen blev bygget i 1998." },
          { "id": "f5", "front": "der er", "def": "Bruges om, at noget findes: Der er mange cykler i København." },
          { "id": "f6", "front": "det er", "def": "Bruges til at udpege eller identificere: Det er min cykel." },
          { "id": "f7", "front": "at mødes", "def": "S-form med gensidig betydning: Vi mødes klokken ti." },
          { "id": "f8", "front": "vi ses", "def": "Fast afskedshilsen — 'vi ser hinanden igen'." },
          { "id": "f9", "front": "at udtale", "def": "At sige et ord med de rigtige lyde: 'Rødgrød' er svært at udtale." },
          { "id": "f10", "front": "at bygge", "def": "At opføre fx et hus eller en bro: Broen blev bygget i 1998." }
        ],
        "quiz": [
          {
            "id": "q1",
            "q": "Kvinden, ___ bor på anden sal, er læge.",
            "options": ["der", "hvem", "hvad", "hvilken"],
            "correct": 0,
            "explain": "Som subjekt i den henførende sætning bruger man 'der' (eller 'som'). 'Hvem' bruges ikke som henførende ord her."
          },
          {
            "id": "q2",
            "q": "Bogen, ___ jeg læser lige nu, er spændende.",
            "options": ["som", "der", "hvem", "hvis"],
            "correct": 0,
            "explain": "Som objekt kan man KUN bruge 'som' — 'der' kan kun være subjekt."
          },
          {
            "id": "q3",
            "q": "Kagerne ___ af kokken hver fredag i kantinen.",
            "options": ["bages", "bager", "er bage", "at bages"],
            "correct": 0,
            "explain": "Noget generelt og gentaget → s-passiv: Kagerne bages hver fredag."
          },
          {
            "id": "q4",
            "q": "Storebæltsbroen ___ i 1998.",
            "options": ["blev bygget", "bygges", "bygger", "er bygge"],
            "correct": 0,
            "explain": "En konkret, afsluttet hændelse → blive-passiv i datid: blev bygget."
          },
          {
            "id": "q5",
            "q": "___ flere cykler end biler i København.",
            "options": ["Der er", "Det er", "Den er", "Han er"],
            "correct": 0,
            "explain": "Eksistens ('der findes') → 'der er': Der er flere cykler end biler."
          }
        ]
      }
}}};
