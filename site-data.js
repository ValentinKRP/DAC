window.DAC_SITE_DATA = (() => {
  const site = {
    name: "DAC",
    headline: "Camioane electrice construite pentru profit",
    summary:
      "Vehicule comerciale electrice proiectate pentru operațiuni reale, exploatare intensivă și costuri operaționale optimizate.",
    signature: "Camioane electrice proiectate pentru muncă eficientă și profitabilă.",
    email: "contact@dac.ro",
    phones: ["+4 0730 072 620", "0784 822 157"],
    address: "Str. Poienelor 5, Brașov, România",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Str.+Poienelor+5,+Bra%C8%99ov,+Rom%C3%A2nia",
    serviceNote:
      "Lista exactă a locațiilor de service este în curs de confirmare și va fi publicată într-o actualizare ulterioară."
  };

  const team = [
    { name: "Sergiu Bolocan", role: "CEO & Dezvoltare" },
    { name: "Alexandra Siminiuc", role: "Operations & Communications Director" },
    { name: "Ion Amaftioae", role: "CFO" }
  ];

  const products = {
    "dac-tarbus": {
      kind: "product",
      slug: "dac-tarbus",
      category: "camioane",
      title: "DAC Tarbus",
      menuTitle: "DAC Tarbus",
      tagline: "Logistică urbană construită pentru profit",
      summary:
        "Platforma electrică DAC pentru distribuție urbană și logistică last-mile, gândită pentru trasee zilnice repetitive și costuri de exploatare reduse.",
      metrics: [
        { value: "250 km", label: "autonomie WLTP urbană" },
        { value: "100,46 kWh", label: "baterie LFP" },
        { value: "120 kW", label: "încărcare rapidă DC" },
        { value: "7.480 kg", label: "masă maximă autorizată" }
      ],
      details: [
        {
          title: "Poziționare produs",
          text:
            "Tarbus este vehiculul DAC pentru segmentul de transport urban ușor și mediu. Platforma este potrivită pentru operatorii care au nevoie de un camion electric compact, robust și eficient, capabil să funcționeze în cicluri zilnice de distribuție, servicii și aprovizionare."
        },
        {
          title: "Aplicația principală",
          text: "Distribuție urbană și logistică last-mile."
        },
        {
          title: "Mesaj comercial",
          text:
            "Un camion electric proiectat pentru logistică urbană eficientă, cu costuri operaționale reduse și integrare rapidă în flotele existente."
        },
        {
          title: "Avantaj operațional",
          text:
            "Tarbus răspunde foarte bine aplicațiilor urbane datorită dimensiunilor compacte, accesului facil în zone aglomerate, funcționării silențioase și costurilor energetice reduse. Pentru operatorii care au trasee repetitive și previzibile, platforma oferă o exploatare simplă și eficientă."
        },
        {
          title: "Avantaj economic",
          text:
            "Electrificarea distribuției urbane permite reducerea costurilor cu energia și simplificarea mentenanței. În aplicațiile corecte, vehiculul poate genera un cost total de operare mai mic decât un model diesel similar, mai ales acolo unde traseele zilnice sunt repetitive și predictibile."
        }
      ],
      applications: [
        "distribuție retail",
        "logistică urbană",
        "transport frigorific",
        "servicii tehnice urbane",
        "utilități",
        "transport regional ușor"
      ],
      technicalDescription:
        "DAC Tarbus 75.160ST este un șasiu electric pentru aplicații urbane, cu masa maximă autorizată de 7.480 kg, greutate șasiu de 2.680 kg, baterie de tracțiune LFP de 100,46 kWh și autonomie WLTP urbană de 250 km la sarcină maximă. Vehiculul dezvoltă 150 kW și 420 Nm, are viteză maximă de 90 km/h și permite încărcare rapidă DC de 120 kW, cu timp de încărcare de aproximativ o oră.",
      specifications: [
        "greutate șasiu: 2.680 kg",
        "sistem de răcire / încălzire lichid",
        "putere maximă: 150 kW",
        "cuplu maxim: 420 Nm",
        "viteză maximă: 90 km/h",
        "port încărcare CCS2",
        "tracțiune spate, eAxle, punte dublă",
        "dimensiuni principale: 5.990 x 1.950 x 2.100 mm",
        "ampatament: 3.360 mm",
        "dimensiune maximă carosare: 4.400 x 2.240 x 2.300 mm",
        "anvelope 215 / 75 R17.5",
        "sarcină maximă pe puntea față / spate: 2,85 t / 6,0 t",
        "suspensie față: 3 foi arc",
        "suspensie spate: 5+2 foi arc",
        "frâne pneumatice, disc / tambur",
        "ABS, ESP, EBD, EPB, ASR și HSA",
        "cabină modernă cu uși cu deschidere 90°",
        "senzori de parcare standard și cameră marșarier opțională",
        "faruri full LED și șasiu ultrarezistent"
      ],
      operatorBenefits: [
        "cost energetic redus în operarea urbană",
        "mentenanță simplificată",
        "platformă compactă și ușor de integrat în flote existente",
        "potrivit pentru aplicații logistice și servicii urbane",
        "exploatare silențioasă",
        "structură robustă pentru aplicații profesionale"
      ],
      secondaryTitle: "Utilizatori tipici",
      secondaryItems: [
        "companii de distribuție urbană",
        "operatori last-mile",
        "companii de transport frigorific",
        "firme de utilități și servicii tehnice",
        "operatori logistici regionali"
      ]
    },
    "dac-derzis": {
      kind: "product",
      slug: "dac-derzis",
      category: "camioane",
      title: "DAC Derzis",
      menuTitle: "DAC Derzis",
      tagline: "Servicii municipale construite pentru profit",
      summary:
        "Șasiul electric universal DAC pentru suprastructuri municipale și aplicații urbane specializate, optimizat pentru operare zilnică intensivă.",
      metrics: [
        { value: "18.000 kg", label: "masă maximă autorizată" },
        { value: "280 kWh", label: "baterie LFP" },
        { value: "250 km", label: "autonomie urbană" },
        { value: "280 kW", label: "încărcare rapidă DC" }
      ],
      details: [
        {
          title: "Poziționare produs",
          text:
            "Derzis este platforma DAC pentru segmentul de 18 tone, dedicată serviciilor municipale și aplicațiilor urbane specializate. Este produsul potrivit pentru operatorii care au nevoie de un șasiu electric robust, capabil să susțină suprastructuri grele și să opereze în cicluri previzibile, zi de zi."
        },
        {
          title: "Aplicația principală",
          text: "Servicii municipale și aplicații urbane specializate."
        },
        {
          title: "Mesaj comercial",
          text: "Un șasiu electric robust și eficient pentru servicii municipale moderne."
        },
        {
          title: "Avantaj operațional",
          text:
            "Derzis este optimizat pentru aplicații în care vehiculul trebuie să transporte suprastructuri specializate, să lucreze în mediu urban și să mențină un nivel ridicat de disponibilitate. Operarea electrică aduce liniște, răspuns rapid și costuri reduse în exploatare."
        },
        {
          title: "Avantaj economic",
          text:
            "Vehiculele municipale funcționează, în general, în cicluri previzibile și zilnice. Acest tip de operare favorizează electrificarea și permite reducerea costurilor energetice și a costurilor de mentenanță, cu o bază clară pentru optimizarea TCO față de vehiculele diesel similare."
        }
      ],
      applications: [
        "colectare deșeuri",
        "maturătoare stradale",
        "portcontainer",
        "cisterne municipale",
        "autospeciale de utilitate publică",
        "transport materiale de construcții în regim urban și regional"
      ],
      technicalDescription:
        "DAC Derzis 18.360ST este un șasiu electric universal pentru aplicații urbane, cu masa maximă autorizată de 18.000 kg și greutate șasiu de 7.000 kg. Modelul este echipat cu baterii LFP de 280 kWh, putere maximă de 360 kW, autonomie urbană de 250 km și încărcare rapidă DC la 280 kW, cu timp de încărcare de aproximativ o oră.",
      specifications: [
        "cuplu maxim: 50.000 Nm",
        "viteză maximă: 89 km/h",
        "tracțiune spate, eAxle, punte dublă",
        "frâne disc față / spate",
        "ABS, EBD, IRBS, ESP, AEBS, ASR, LDWS, TPMS, ISA",
        "dimensiuni maxime: 9.520 x 2.550 x 3.300 mm",
        "ampatament disponibil: 4.500 și 5.500 mm",
        "cabină modernă",
        "PTO mecanic cuplat direct la motorul vehiculului",
        "senzori de parcare standard"
      ],
      operatorBenefits: [
        "platformă versatilă pentru mai multe suprastructuri municipale",
        "cost energetic redus",
        "mentenanță simplificată",
        "încărcare rapidă",
        "fiabilitate pentru operare zilnică intensivă",
        "adaptare bună la cerințele serviciilor publice moderne"
      ],
      secondaryTitle: "Utilizatori tipici",
      secondaryItems: [
        "operatori de salubritate",
        "companii municipale",
        "firme de servicii publice",
        "operatori de infrastructură urbană",
        "companii care operează suprastructuri specializate"
      ]
    },
    "dac-tyros": {
      kind: "product",
      slug: "dac-tyros",
      category: "camioane",
      title: "DAC Tyros",
      menuTitle: "DAC Tyros",
      tagline: "Aplicații grele construite pentru profit",
      summary:
        "Platforma electrică DAC pentru construcții și industrie, destinată sarcinilor mari și operării intensive în medii solicitante.",
      metrics: [
        { value: "40 t", label: "GVW" },
        { value: "342 / 513 kWh", label: "configurații baterie" },
        { value: "2 x 360 kW", label: "putere maximă" },
        { value: "120 km/h", label: "viteză maximă" }
      ],
      details: [
        {
          title: "Poziționare produs",
          text:
            "Tyros este platforma DAC pentru segmentul greu, destinată vehiculelor de până la 40 de tone. Aceasta permite configurarea unor vehicule specializate pentru aplicații industriale și de construcții, unde sarcina, rezistența și costul de operare sunt criterii decisive."
        },
        {
          title: "Aplicația principală",
          text: "Aplicații grele în construcții și industrie."
        },
        {
          title: "Mesaj comercial",
          text: "Platforma electrică DAC pentru aplicații industriale și construcții."
        },
        {
          title: "Avantaj operațional",
          text:
            "Tyros este gândit pentru aplicații în care vehiculul lucrează sub sarcină, în regim intensiv și în medii solicitante. Platforma urmărește să ofere performanță constantă, costuri energetice mai reduse și o exploatare mai predictibilă decât configurațiile convenționale."
        },
        {
          title: "Avantaj economic",
          text:
            "În aplicațiile grele, costul energetic reprezintă una dintre cele mai importante componente ale costului total de operare. Tyros este poziționat ca o platformă concepută pentru a transforma electrificarea într-un avantaj economic operațional."
        }
      ],
      applications: [
        "autobasculante",
        "autobetonieră",
        "transport materiale de construcții",
        "transport agregate",
        "aplicații industriale specializate",
        "transport regional greu"
      ],
      technicalDescription:
        "DAC Tyros este o platformă electrică 8x4 pentru vehicule grele de 40.000 kg GVW, disponibilă în două versiuni principale de baterie: 342 kWh și 513 kWh. Pentru varianta de 342 kWh sunt indicate dimensiuni de 8.700 x 2.550 x 3.350 mm și greutate proprie de 10.800 kg, iar pentru varianta de 513 kWh dimensiuni de 9.700 x 2.550 x 3.350 mm și greutate proprie de 12.800 kg.",
      specifications: [
        "ampatament: 1.800 + 3.200 + 1.350 mm sau 1.800 + 4.200 + 1.350 mm",
        "baterii CATL LFP montate în șasiu",
        "putere continuă: 2 x 160 kW",
        "cuplu maxim: 2 x 50.000 Nm",
        "punte față cu frână disc de 5,5 t",
        "punte spate CDTL 13T drive axle EA5000N",
        "anvelope 12.00R20",
        "suspensie pe foi de arc 3 / 3 / 4",
        "PTO disponibil conform specificațiilor dedicate",
        "ABS și AEBS cu EBS + ESC",
        "direcție stânga"
      ],
      operatorBenefits: [
        "platformă potrivită pentru configurații grele și suprastructuri industriale",
        "posibilitatea alegerii între două configurații de baterie",
        "poziționare clară pentru sarcini mari și operare intensivă",
        "integrarea electrificării în segmente cu miză economică ridicată",
        "bază tehnică relevantă pentru construcții și industrie"
      ],
      secondaryTitle: "Utilizatori tipici",
      secondaryItems: [
        "companii de construcții",
        "operatori industriali",
        "transportatori de materiale",
        "companii care folosesc vehicule specializate grele"
      ]
    },
    "dac-istros": {
      kind: "product",
      slug: "dac-istros",
      category: "camioane",
      title: "DAC Istros",
      menuTitle: "DAC Istros",
      tagline: "Tractare electrică construită pentru profit",
      summary:
        "Capul tractor electric DAC pentru transport greu și tractare profesionistă, construit pentru integrare credibilă în flote logistice și industriale.",
      metrics: [
        { value: "600 kWh", label: "baterie CATL LFP" },
        { value: "360 kW", label: "putere maximă" },
        { value: "50.000 Nm", label: "cuplu maxim" },
        { value: "120 km/h", label: "viteză maximă" }
      ],
      details: [
        {
          title: "Poziționare produs",
          text:
            "Istros este modelul DAC dedicat operatorilor care au nevoie de un cap tractor electric pentru aplicații de transport greu, tractare și integrare în operațiuni logistice profesioniste."
        },
        {
          title: "Aplicația principală",
          text: "Tractare rutieră și transport greu."
        },
        {
          title: "Mesaj comercial",
          text:
            "Cap tractor electric DAC pentru transport greu eficient și exploatare predictibilă."
        },
        {
          title: "Avantaj operațional",
          text:
            "Istros este configurat pentru exploatare profesionistă în segmentul de tractare, acolo unde fiabilitatea, integrarea în flotă și performanța constantă trebuie să susțină operarea zilnică. Platforma 4x2, puterea mare și arhitectura electrică îl poziționează ca o soluție credibilă pentru aplicații logistice și industriale."
        },
        {
          title: "Avantaj economic",
          text:
            "În transportul greu, controlul costurilor operaționale rămâne decisiv. Istros este construit pentru a transforma electrificarea într-o logică economică aplicată, prin cost energetic mai controlabil și o bază clară pentru optimizarea TCO în aplicațiile potrivite."
        }
      ],
      applications: [
        "transport regional greu",
        "tractare semiremorci",
        "logistică industrială",
        "aplicații dedicate de transport profesionist",
        "flote comerciale orientate spre electrificare"
      ],
      technicalDescription:
        "DAC Istros este un cap tractor electric 4x2, cu dimensiuni de 6.800 x 2.550 x 3.550 mm, ampatament de 4.200 mm și greutate proprie de 10.500 kg. Vehiculul este echipat cu motor PMSM, putere maximă de 360 kW și cuplu maxim de 50.000 Nm.",
      specifications: [
        "baterie CATL LFP: 600 kWh, montată în șasiu",
        "punte față de 7 t",
        "punte spate de 13 t cu dual motor eAxle",
        "anvelope 295 / 80R22.5",
        "suspensie leaf spring 2 / 3",
        "AEBS cu EBS, ESC, ABS și ASR",
        "direcție pe stânga",
        "cabină cu aer condiționat",
        "scaune Grammer și airbag principal",
        "bară față joasă nemetalică și șa de 90#"
      ],
      operatorBenefits: [
        "extinde gama DAC în segmentul de transport greu cu o bază tehnică validă",
        "oferă o direcție clară de electrificare pentru aplicații de tractare profesionistă",
        "susține o poziționare premium și completă a gamei"
      ],
      secondaryTitle: "Utilizatori tipici",
      secondaryItems: [
        "operatori de transport greu",
        "flote logistice",
        "companii industriale",
        "transportatori regionali și naționali"
      ]
    },
    "dac-90tef-oh": {
      kind: "product",
      slug: "dac-90tef-oh",
      category: "vehicule-speciale",
      title: "DAC 90TEF.OH",
      menuTitle: "DAC 90TEF.OH",
      tagline: "Performanță în cariere construită pentru profit",
      summary:
        "Autobasculanta electrică off-highway DAC pentru cariere și exploatări de agregate, gândită pentru cicluri repetitive și cost per ciclu controlabil.",
      metrics: [
        { value: "90 t", label: "greutate totală" },
        { value: "56 t", label: "sarcină utilă" },
        { value: "350,1 kWh", label: "baterie LFP" },
        { value: "30%", label: "pantă maximă" }
      ],
      details: [
        {
          title: "Poziționare produs",
          text:
            "DAC 90TEF.OH este vehiculul special electric DAC pentru segmentul industrial off-highway. Modelul este dedicat operatorilor din cariere, balastiere și exploatări de agregate, acolo unde vehiculul lucrează repetitiv, pe distanțe controlate și în condiții de sarcină ridicată."
        },
        {
          title: "Aplicația principală",
          text: "Transport material în cariere și exploatări industriale."
        },
        {
          title: "Mesaj comercial",
          text: "Autobasculantă electrică proiectată pentru productivitate industrială."
        },
        {
          title: "Cicluri de lucru și logică operațională",
          text:
            "Avantajul economic al modelului nu vine doar din faptul că este electric, ci din faptul că este utilizat în aplicații repetitive, cu trasee previzibile și cerințe constante de sarcină. Acest mediu permite folosirea eficientă a energiei, predictibilitate în încărcare și costuri clare per ciclu de lucru."
        },
        {
          title: "Avantajele electrificării în cariere",
          text:
            "În exploatările industriale, costul energetic influențează direct profitabilitatea flotei. În aplicațiile potrivite, electrificarea poate reduce semnificativ costul energetic și poate susține economii consistente la nivel de flotă, fără schimbări majore în modul de operare."
        },
        {
          title: "Avantaj operațional",
          text:
            "90TEF.OH combină sarcina utilă mare cu propulsia electrică și cu performanța necesară pentru teren dificil și lucru repetitiv. Modelul este o soluție pentru productivitate industrială, nu doar o alternativă tehnologică."
        },
        {
          title: "Avantaj economic",
          text:
            "În aplicațiile din cariere, electrificarea poate reduce radical costul energetic. Acest lucru face din 90TEF.OH un vehicul cu relevanță economică directă pentru operatorii care urmăresc cost per tonă transportată, cost per ciclu și rentabilitate a flotei."
        }
      ],
      applications: [
        "cariere agregate",
        "exploatări piatră",
        "balastiere",
        "transport material vrac",
        "aplicații industriale off-highway"
      ],
      technicalDescription:
        "DAC 90TEF.OH este o basculantă electrică off-highway cu tracțiune 6x4, greutate totală de 90 t, sarcină utilă de 56 t și greutate proprie de 34 t. Vehiculul este echipat cu baterie LFP de 350,1 kWh, tensiune nominală de 579,6 V și două motoare sincron cu magneți permanenți, fiecare cu 225 kW putere nominală și 300 kW putere de vârf.",
      specifications: [
        "cuplu: 2 x 460 Nm nominal și 2 x 700 Nm vârf",
        "viteză maximă: 40 km/h",
        "cutie AMT",
        "protecție IP68",
        "gardă la sol minimă: 315 mm",
        "rază minimă de bracaj: 11,5 m",
        "dimensiuni exterioare: 9.460 x 3.600 x 4.100 mm",
        "ampatament: 3.850 + 1.500 mm"
      ],
      operatorBenefits: [
        "reducere majoră a costurilor energetice în aplicații repetitive",
        "capacitate utilă ridicată",
        "cuplu instant pentru sarcini grele",
        "operare eficientă în cariere",
        "poziționare clară pe productivitate și cost operațional"
      ],
      secondaryTitle: "Utilizatori tipici",
      secondaryItems: [
        "operatori de cariere",
        "exploatări de agregate",
        "balastiere",
        "operatori industriali off-highway"
      ]
    },
    "dac-xport-40": {
      kind: "product",
      slug: "dac-xport-40",
      category: "vehicule-speciale",
      title: "DAC XPort 40",
      menuTitle: "DAC XPort 40",
      tagline: "Tracțiune electrică pentru terminale construită pentru profit",
      summary:
        "Tractorul portuar electric DAC pentru terminale, hub-uri logistice și platforme industriale cu trasee scurte și manevre frecvente.",
      metrics: [
        { value: "75 t", label: "GVW maxim" },
        { value: "281,92 kWh", label: "baterie CATL LFP" },
        { value: "80 – 130 km", label: "autonomie" },
        { value: "1 oră", label: "încărcare rapidă" }
      ],
      details: [
        {
          title: "Poziționare produs",
          text:
            "XPort 40 este vehiculul special DAC destinat manipulării și tractării în terminale portuare, hub-uri logistice și platforme industriale. Este un produs de nișă, cu utilitate clară în operațiuni unde disponibilitatea, timpul de încărcare și manevrabilitatea sunt esențiale."
        },
        {
          title: "Aplicația principală",
          text: "Operare terminale și tractare logistică dedicată."
        },
        {
          title: "Mesaj comercial",
          text:
            "Tractor portuar electric DAC pentru operare intensivă, manevre rapide și costuri controlabile."
        },
        {
          title: "Avantaj operațional",
          text:
            "XPort 40 este optimizat pentru aplicații cu trasee scurte, manevre repetate și sarcini ridicate. În astfel de medii, electrificarea aduce răspuns imediat, operare silențioasă, disponibilitate bună și costuri energetice mai ușor de controlat."
        },
        {
          title: "Avantaj economic",
          text:
            "În terminale și platforme logistice, vehiculul operează în cicluri clare și previzibile. Acest tip de utilizare favorizează electrificarea și permite valorificarea unui cost energetic redus, a încărcării rapide și a unei exploatări mai predictibile."
        }
      ],
      applications: [
        "terminale portuare",
        "platforme logistice",
        "hub-uri industriale",
        "centre intermodale",
        "operațiuni de tractare internă"
      ],
      technicalDescription:
        "Fișa XPort 40 indică un tractor terminal electric cu tracțiune 4x2, wheelbase de 3.800 mm și dimensiuni de 6.170 x 2.550 x 3.450 mm. Vehiculul are greutate proprie de 9.500 kg, GVW maxim de 75 t și mențiunea 42.000 kg standard.",
      specifications: [
        "motor PMSM",
        "putere nominală / maximă: 220 / 360 kW",
        "cuplu nominal / maxim: 1.500 / 2.100 Nm",
        "cutie AMT cu 4 trepte",
        "raport transmisie: 11.98",
        "accelerație 0 – 50 km/h: 20 s",
        "viteză maximă: 40 km/h",
        "pantă maximă: 20%",
        "rază de virare față / spate: 1.800 / 1.600 mm"
      ],
      operatorBenefits: [
        "cost energetic redus în operarea repetitivă",
        "încărcare rapidă",
        "manevrabilitate bună în terminale",
        "produs dedicat pentru aplicații logistice specifice",
        "exploatare predictibilă în medii controlate"
      ],
      secondaryTitle: "Utilizatori tipici",
      secondaryItems: [
        "operatori portuari",
        "terminale logistice",
        "hub-uri intermodale",
        "operatori industriali cu flux intern de tractare"
      ]
    },
    "dac-citystream-412ue": {
      kind: "product",
      slug: "dac-citystream-412ue",
      category: "autobuze-electrice",
      title: "DAC CitySTREAM 412UE",
      menuTitle: "DAC CitySTREAM 412UE",
      tagline: "Autobuz electric urban de 12 metri",
      summary:
        "Autobuzul electric DAC de capacitate mare pentru trasee urbane și metropolitane, dezvoltat pentru eficiență operațională și confort zilnic.",
      metrics: [
        { value: "până la 423,9 kWh", label: "capacitate baterii" },
        { value: "397 – 451 km", label: "autonomie eSORT" },
        { value: "97", label: "pasageri maximi" },
        { value: "370 kW", label: "motor DANA TM4" }
      ],
      details: [
        {
          title: "Poziționare produs",
          text:
            "CitySTREAM 412UE este modelul DAC pentru rute urbane de capacitate mare, destinat operatorilor care au nevoie de autonomie ridicată, confort pentru pasageri și costuri de exploatare optimizate."
        },
        {
          title: "Aplicația principală",
          text: "Transport public urban și metropolitan."
        },
        {
          title: "Mesaj comercial",
          text:
            "Autobuz electric urban de 12 metri, proiectat pentru eficiență operațională, autonomie relevantă și confort în exploatare zilnică."
        },
        {
          title: "Eficiență economică",
          text:
            "Autobuzele electrice sunt avantajoase economic prin costuri operaționale mai mici, eficiență energetică superioară și timp redus de întreținere. Autonomia indicată permite acoperirea majorității traseelor urbane cu încărcare peste noapte."
        }
      ],
      applications: [
        "linii urbane principale",
        "transport metropolitan",
        "rețele municipale cu trafic intens",
        "trasee urbane cu flux ridicat de pasageri"
      ],
      technicalDescription:
        "Broșura CitySTREAM 412UE prezintă un autobuz electric de 12 metri, cu trei uși și podea joasă. Modelul are dimensiuni de 12.200 x 2.550 x 3.300 mm, ampatament de 5.840 mm, masă maximă autorizată de 19.500 kg și masă la gol de 13.750 kg.",
      specifications: [
        "capacități baterii: 256,1 / 282,6 / 384,2 / 423,9 kWh",
        "viteză maximă: 80 km/h",
        "32 scaune fixe, 2 scaune pliabile, scaun șofer",
        "suspensie pneumatică",
        "frânare regenerativă",
        "sisteme KNORR, ZF, BOSCH",
        "sistem de climatizare și încălzire cu management termic",
        "display marșarier 7 inch, 8 camere, monitorizare de la distanță",
        "AutoHold și Hill Assist",
        "rampă pentru persoane cu dizabilități și funcție kneeling",
        "iluminare full LED"
      ],
      operatorBenefits: [
        "autonomie mare pentru trasee urbane zilnice",
        "reducerea timpilor de întreținere",
        "costuri de operare mai mici",
        "configurație potrivită pentru exploatare intensă",
        "componente de la furnizori consacrați"
      ],
      secondaryTitle: "Beneficii pentru orașe",
      secondaryItems: [
        "reducerea poluării locale",
        "reducerea zgomotului",
        "capacitate mare de transport",
        "imagine modernă pentru transportul public"
      ],
      tertiaryTitle: "Confort pasageri",
      tertiaryItems: [
        "podea joasă",
        "acces facil pentru persoane cu mobilitate redusă",
        "salon spațios",
        "climatizare",
        "afișaj LED de informare",
        "spațiu pentru cărucioare și scaun rulant"
      ]
    },
    "dac-e6": {
      kind: "product",
      slug: "dac-e6",
      category: "autobuze-electrice",
      title: "DAC E6",
      menuTitle: "DAC E6",
      tagline: "Autobuz electric urban compact",
      summary:
        "Modelul DAC pentru rute urbane compacte, zone cu infrastructură restrânsă și fluxuri moderate de pasageri.",
      metrics: [
        { value: "115 kWh", label: "baterie LFP" },
        { value: "298,80 km", label: "autonomie eSORT2" },
        { value: "22", label: "pasageri" },
        { value: "100 kW", label: "putere motor" }
      ],
      details: [
        {
          title: "Poziționare produs",
          text:
            "E6 este modelul DAC pentru mobilitate urbană compactă, potrivit pentru orașe mici, cartiere, trasee complementare sau zone unde dimensiunile reduse ale vehiculului reprezintă un avantaj operațional."
        },
        {
          title: "Aplicația principală",
          text: "Transport public urban compact și trasee cu infrastructură limitată."
        },
        {
          title: "Mesaj comercial",
          text:
            "Autobuz electric compact, manevrabil și eficient pentru mobilitate urbană modernă."
        },
        {
          title: "Eficiență economică",
          text:
            "E6 este poziționat ca un model compact care oferă costuri reduse de exploatare și utilizare eficientă a energiei în segmentul rutelor urbane cu capacitate moderată."
        }
      ],
      applications: [
        "rute urbane de cartier",
        "trasee secundare",
        "orașe mici",
        "transfer local",
        "zone cu spațiu de manevră restrâns"
      ],
      technicalDescription:
        "DAC E6 este un autobuz electric din categoria M3 Clasa I, cu lungime de 5.990 mm, lățime de 2.100 mm, înălțime de 2.890 mm și ampatament de 4.220 mm. Modelul are baterii LFP de 115 kWh, autonomie eSORT2 de 298,80 km și consum eSORT2 de 36,86 kWh / 100 km.",
      specifications: [
        "cuplu maxim: 500 Nm",
        "viteză maximă: 69 km/h",
        "masă maximă autorizată: 7.000 kg",
        "9 locuri pe scaune, 2 pliabile, 11 în picioare, 1 loc persoane cu dizabilități",
        "sistem de încărcare de 100 kW DC / AC",
        "suspensie pneumatică",
        "construcție monococă",
        "rampă pentru cărucior și acces dizabilități",
        "aer condiționat 27 kW și încălzire 12 kW",
        "faruri full LED",
        "ABS, ESP, ASR, EBS"
      ],
      operatorBenefits: [
        "manevrabilitate foarte bună în zone dense",
        "autonomie adecvată pentru operare zilnică urbană",
        "platformă compactă și eficientă",
        "costuri de exploatare reduse",
        "acces facil pentru pasageri"
      ],
      secondaryTitle: "Beneficii pentru orașe",
      secondaryItems: [
        "soluție bună pentru rute locale și zone aglomerate",
        "emisii locale zero",
        "zgomot redus",
        "adaptare bună la transportul public de proximitate"
      ],
      tertiaryTitle: "Confort pasageri",
      tertiaryItems: [
        "salon spațios pentru dimensiunea vehiculului",
        "suspensie pneumatică",
        "acces facil cu funcție de îngenunchere",
        "rampă pentru persoane cu dizabilități",
        "loc dedicat pentru cărucioare și persoane cu mobilitate redusă"
      ]
    },
    "cityline-408-60": {
      kind: "product",
      slug: "cityline-408-60",
      category: "autobuze-electrice",
      title: "CITYLINE 408.60",
      menuTitle: "CITYLINE 408.60",
      tagline: "Autobuz electric urban de capacitate medie",
      summary:
        "Soluția DAC pentru segmentul intermediar de transport public, unde eficiența pe rută și manevrabilitatea trebuie să meargă împreună.",
      metrics: [
        { value: "193 kWh", label: "baterie LFP" },
        { value: "330 km", label: "autonomie eSORT2" },
        { value: "până la 60", label: "pasageri" },
        { value: "140 kW", label: "putere motor" }
      ],
      details: [
        {
          title: "Poziționare produs",
          text:
            "CITYLINE 408.60 este soluția DAC pentru segmentul intermediar, potrivit pentru orașe și trasee care nu necesită un autobuz de 12 metri, dar au nevoie de o capacitate mai mare decât un model ultra-compact."
        },
        {
          title: "Aplicația principală",
          text: "Transport public urban de capacitate medie."
        },
        {
          title: "Mesaj comercial",
          text:
            "Autobuz electric urban de capacitate medie, proiectat pentru eficiență operațională și confort în exploatarea zilnică."
        },
        {
          title: "Eficiență economică",
          text:
            "CITYLINE 408.60 oferă operatorilor o combinație bună între autonomie, capacitate și cost operațional, fiind potrivit pentru rețele urbane unde eficiența per rută este esențială."
        }
      ],
      applications: [
        "rute urbane secundare și principale cu flux mediu",
        "transport local în municipii și orașe",
        "trasee urbane cu cerință de eficiență și manevrabilitate",
        "rețele urbane complementare"
      ],
      technicalDescription:
        "CITYLINE 408.60 are lungime de 8.545 mm, lățime de 2.440 mm, înălțime de 3.150 mm și ampatament de 4.465 mm. Modelul este echipat cu baterii LFP de 193 kWh, autonomie eSORT2 de 330 km, putere motor de 140 kW și cuplu maxim de 1.000 Nm.",
      specifications: [
        "viteză maximă: 80 km/h",
        "masă maximă autorizată: 14.500 kg",
        "18 scaune fixe, 2 pliabile, 40 în picioare, 1 loc persoane cu dizabilități",
        "sistem de încărcare: 120 kW DC și 22 kW AC",
        "motor Dana TM4",
        "suspensie pneumatică",
        "construcție monococă",
        "cameră marșarier și senzori parcare standard",
        "rampă pentru persoane cu dizabilități și funcție îngenunchere",
        "aer condiționat și încălzire Songz",
        "ABS, ASR, EBS"
      ],
      operatorBenefits: [
        "bun echilibru între dimensiune și capacitate de transport",
        "autonomie relevantă pentru operare zilnică",
        "platformă eficientă pentru rețele urbane mixte",
        "costuri de exploatare reduse",
        "vehicul versatil și manevrabil"
      ],
      secondaryTitle: "Beneficii pentru orașe",
      secondaryItems: [
        "potrivit pentru rute cu flux mediu",
        "emisii locale zero",
        "reducerea zgomotului în mediul urban",
        "accesibilitate și confort pentru pasageri"
      ],
      tertiaryTitle: "Confort pasageri",
      tertiaryItems: [
        "salon spațios",
        "suspensie pneumatică",
        "acces pentru persoane cu mobilitate redusă",
        "rampă și funcție kneeling",
        "cabină șofer ergonomică"
      ]
    }
  };

  const categories = {
    camioane: {
      kind: "category",
      slug: "camioane",
      title: "Camioane electrice DAC",
      menuTitle: "Camioane",
      tagline:
        "Platforme electrice pentru logistică, servicii municipale, transport greu și aplicații industriale.",
      summary:
        "Gama de camioane DAC acoperă patru platforme distincte: distribuție urbană, servicii municipale, aplicații grele și tractare rutieră.",
      intro: [
        "Camioanele electrice DAC sunt dezvoltate pentru aplicații comerciale și industriale în care eficiența energetică și costurile de exploatare influențează direct performanța flotei.",
        "Tarbus este orientat spre logistică urbană și distribuție. Derzis este șasiul electric pentru servicii municipale și suprastructuri specializate. Tyros este platforma pentru aplicații grele, construcții și industrie. Istros este capul tractor electric DAC pentru tractare rutieră și transport greu."
      ],
      valueCards: [
        {
          title: "Vehicule construite pentru muncă reală",
          text:
            "Accentul rămâne pe productivitate, robustețe și integrare în operațiuni zilnice cu ritm intens."
        },
        {
          title: "Eficiență energetică cu logică economică",
          text:
            "Electrificarea este tratată ca instrument de optimizare a TCO, nu doar ca argument de imagine."
        },
        {
          title: "Platforme pentru segmente distincte",
          text:
            "Fiecare model este poziționat clar în jurul unui tip de operare și al unui profil de client."
        }
      ],
      productSlugs: ["dac-tarbus", "dac-derzis", "dac-tyros", "dac-istros"]
    },
    "vehicule-speciale": {
      kind: "category",
      slug: "vehicule-speciale",
      title: "Vehicule speciale DAC",
      menuTitle: "Vehicule speciale",
      tagline:
        "Soluții electrice pentru aplicații industriale intensive și operare logistică dedicată.",
      summary:
        "Vehicule electrice speciale dezvoltate pentru medii unde sarcina utilă, ciclurile repetitive și costul energetic influențează direct profitabilitatea.",
      intro: [
        "Vehiculele speciale DAC sunt dezvoltate pentru aplicații în care exploatarea este intensă, sarcinile sunt mari, iar ciclurile de lucru sunt repetitive. În astfel de medii, electrificarea poate aduce un avantaj economic semnificativ prin reducerea costurilor energetice și simplificarea exploatării.",
        "Categoria este distinctă față de gama de camioane, deoarece răspunde altor condiții de operare și altor tipuri de operatori. Aici accentul cade mai puternic pe productivitate industrială, cost per ciclu de lucru, fiabilitate în teren dificil și profit operațional."
      ],
      valueCards: [
        {
          title: "Profit operațional în medii controlate",
          text:
            "Aplicațiile repetitive permit valorificarea maximă a eficienței energetice și a încărcării planificate."
        },
        {
          title: "Rezistență pentru terenuri și fluxuri grele",
          text:
            "Produsele sunt poziționate pentru cariere, terminale și infrastructuri logistice specializate."
        },
        {
          title: "Soluții orientate spre cost per ciclu",
          text:
            "Evaluarea se face prin rezultat economic, capacitate utilă și predictibilitate în exploatare."
        }
      ],
      productSlugs: ["dac-90tef-oh", "dac-xport-40"]
    },
    "autobuze-electrice": {
      kind: "category",
      slug: "autobuze-electrice",
      title: "Autobuze electrice DAC",
      menuTitle: "Autobuze electrice",
      tagline:
        "Soluții electrice pentru transport public urban eficient, confortabil și fiabil.",
      summary:
        "Gama DAC răspunde nevoilor de mobilitate urbană de la fluxuri ridicate de pasageri până la trasee compacte și rețele mixte.",
      intro: [
        "DAC dezvoltă o gamă de autobuze electrice destinată transportului public urban, construită pentru eficiență energetică, costuri reduse de operare și confort pentru pasageri.",
        "Avantajele nu sunt doar de mediu, ci și de operare: disponibilitate ridicată, întreținere simplificată, funcționare silențioasă și costuri energetice reduse."
      ],
      valueCards: [
        {
          title: "Mobilitate urbană matură",
          text:
            "Modele dezvoltate pentru operare zilnică, nu pentru demonstrații izolate."
        },
        {
          title: "Confort pentru pasageri și operatori",
          text:
            "Accesibilitate, climatizare și monitorizare modernă pentru exploatare publică eficientă."
        },
        {
          title: "Gama acoperă mai multe scenarii",
          text:
            "12 metri, compact și capacitate medie pentru rețele urbane cu profiluri diferite."
        }
      ],
      productSlugs: ["dac-citystream-412ue", "dac-e6", "cityline-408-60"]
    }
  };

  const pages = {
    home: {
      kind: "home",
      slug: "home",
      title: "DAC",
      tagline: site.headline,
      summary: site.summary,
      heroItems: [
        "Vehicule comerciale electrice pentru logistică, servicii municipale, industrie și transport public.",
        "Platforme dezvoltate pentru exploatare intensivă, performanță fiabilă și cost total de operare optimizat.",
        "Relansarea mărcii DAC continuă tradiția industriei auto românești într-o direcție adaptată cerințelor actuale ale transportului comercial."
      ],
      heroMetrics: [
        { value: "3", label: "categorii principale" },
        { value: "9", label: "modele în structură" },
        { value: "Brașov", label: "asamblare planificată în România" }
      ],
      intro: [
        "Autovehicule DAC S.A. dezvoltă o nouă generație de vehicule comerciale electrice dedicate aplicațiilor profesionale. Relansarea mărcii DAC continuă tradiția industriei auto românești într-o direcție adaptată cerințelor actuale ale transportului comercial: electrificare, eficiență operațională și optimizarea costului total de operare.",
        "Vehiculele DAC sunt concepute pentru logistică urbană, servicii municipale, construcții, exploatări industriale și transport public, acolo unde performanța tehnică și rezultatul economic trebuie să funcționeze împreună."
      ],
      categorySlugs: ["camioane", "vehicule-speciale", "autobuze-electrice"],
      electrificationBenefits: [
        "costuri energetice mai mici",
        "mentenanță simplificată",
        "disponibilitate operațională ridicată",
        "performanță constantă în exploatare",
        "cost total de operare mai predictibil"
      ],
      about: [
        "Timp de decenii, marca DAC a reprezentat un reper în industria vehiculelor grele din România. Noua generație Autovehicule DAC S.A. pornește de la acest patrimoniu tehnologic și îl continuă într-o direcție adaptată realităților actuale ale pieței: electrificare, eficiență operațională și cost total de operare optimizat.",
        "Viziunea companiei este construită în jurul dezvoltării unei platforme modulare de vehicule comerciale electrice capabile să acopere o gamă largă de aplicații profesionale. Proiectele sunt dezvoltate împreună cu parteneri tehnologici internaționali, iar asamblarea vehiculelor este planificată în România, la Brașov."
      ],
      featuredProducts: ["dac-tarbus", "dac-90tef-oh", "dac-citystream-412ue"]
    },
    "gama-de-vehicule": {
      kind: "overview",
      slug: "gama-de-vehicule",
      title: "Gama DAC",
      tagline:
        "Vehicule comerciale electrice pentru aplicații profesionale și exploatare intensivă.",
      summary:
        "Portofoliul DAC este construit pentru transport, logistică, servicii municipale, construcții, aplicații portuare și transport public urban.",
      intro: [
        "Gama de vehicule DAC este construită pentru a răspunde cerințelor reale ale operatorilor din transport, logistică, servicii municipale, construcții, cariere, aplicații portuare și transport public. Fiecare categorie de produs are un rol clar în portofoliul companiei și este comunicată prin aceeași logică de brand: eficiență operațională, fiabilitate și profitabilitate.",
        "Electrificarea nu schimbă scopul vehiculului. Vehiculul continuă să lucreze în aceleași aplicații, în aceleași condiții și în aceleași cicluri de operare. Diferența apare în economie, în predictibilitatea costurilor și în eficiența exploatării."
      ],
      pillars: [
        {
          title: "Vehicule construite pentru operațiuni reale",
          text:
            "DAC dezvoltă platforme electrice pentru aplicații profesionale în care vehiculul trebuie să livreze rezultate în fiecare zi. Accentul este pus pe fiabilitate, robustețe, eficiență energetică și integrare eficientă în flote existente."
        },
        {
          title: "Electrificare cu logică economică",
          text:
            "În aplicațiile comerciale și industriale, costul energetic și mentenanța influențează direct profitabilitatea. Vehiculele electrice DAC sunt dezvoltate pentru a reduce aceste costuri și pentru a crește eficiența operațională a flotelor."
        },
        {
          title: "Tehnologie matură pentru aplicații profesionale",
          text:
            "Portofoliul este prezentat ca gamă de vehicule de lucru, dezvoltate cu soluții tehnice credibile și cu componente de la producători consacrați, nu ca o colecție de concepte abstracte."
        }
      ],
      categorySlugs: ["camioane", "vehicule-speciale", "autobuze-electrice"]
    },
    "despre-dac": {
      kind: "content",
      slug: "despre-dac",
      title: "Despre DAC",
      tagline:
        "Tradiție industrială românească relansată pentru electrificarea transportului comercial.",
      summary:
        "Autovehicule DAC S.A. dezvoltă o nouă generație de vehicule comerciale electrice pentru aplicații profesionale, cu accent pe profitabilitate, fiabilitate și exploatare intensivă.",
      lead: [
        "Noua DAC pornește de la moștenirea unui nume puternic din industria vehiculelor grele și îl repoziționează într-o direcție compatibilă cu cerințele actuale ale pieței: electrificare, eficiență operațională și cost total de operare optimizat.",
        "Compania își construiește identitatea în jurul unei platforme modulare de vehicule comerciale electrice capabile să deservească logistică urbană, servicii municipale, construcții, exploatări industriale și transport public."
      ],
      sections: [
        {
          title: "Ce face DAC astăzi",
          paragraphs: [
            "DAC dezvoltă vehicule comerciale electrice concepute pentru exploatare intensivă, performanță fiabilă și costuri de operare optimizate. Electrificarea este tratată ca decizie economică și operațională, cu impact direct asupra eficienței și profitabilității flotelor.",
            "Produsele sunt dezvoltate împreună cu parteneri tehnologici internaționali, iar asamblarea vehiculelor este planificată în România, la Brașov."
          ]
        },
        {
          title: "Cum gândim produsele",
          paragraphs: [
            "Filosofia DAC este centrată pe operațiuni reale. Fiecare platformă este proiectată pentru aplicații clare, cicluri zilnice concrete și cerințe reale de sarcină, autonomie și disponibilitate.",
            "Brandul vorbește despre profitabilitate, mentenanță simplificată, predictibilitate a costurilor și integrare rapidă în flote existente."
          ]
        },
        {
          title: "Echipa DAC",
          paragraphs: [
            "Pagina de prezentare include rolurile executive vizibile public și poate fi extinsă ulterior cu echipa completă, departamente comerciale și coordonatorii de service."
          ],
          people: team
        }
      ]
    },
    "istoria-brandului-dac": {
      kind: "history",
      slug: "istoria-brandului-dac",
      title: "Istoria Brandului DAC",
      tagline:
        "Un reper al industriei vehiculelor grele din România, reinterpretat pentru mobilitatea electrică.",
      summary:
        "Moștenirea DAC este folosită ca fundație pentru o nouă generație de vehicule comerciale electrice construite pentru muncă eficientă și profitabilă.",
      lead: [
        "Marca DAC a reprezentat timp de decenii un reper în industria vehiculelor grele din România. Astăzi, această moștenire este reinterpretată într-o formă adaptată pieței actuale și noilor cerințe de eficiență.",
        "Relansarea brandului se bazează pe același nucleu de robustețe și logică industrială, dar îl mută într-o zonă în care electrificarea, costul de operare și performanța în exploatare devin decisive."
      ],
      timeline: [
        {
          marker: "Peste 50 de ani",
          title: "Moștenirea industrială DAC",
          text:
            "DAC intră în memoria pieței ca un nume asociat vehiculelor grele, construcțiilor robuste și aplicațiilor dificile."
        },
        {
          marker: "Relaunch",
          title: "Tradiție reinventată",
          text:
            "Autovehicule DAC S.A. readuce brandul în piață printr-o logică nouă: vehicule comerciale electrice dezvoltate pentru aplicații profesionale."
        },
        {
          marker: "Electrificare",
          title: "Profitabilitate operațională",
          text:
            "Noua poziționare mută accentul de la simpla motorizare la economie de exploatare, predictibilitate și integrare în flote reale."
        },
        {
          marker: "Brașov",
          title: "Noua etapă de dezvoltare",
          text:
            "Platformele actuale sunt dezvoltate împreună cu parteneri tehnologici internaționali, cu asamblare planificată în România."
        }
      ]
    },
    service: {
      kind: "service",
      slug: "service",
      title: "Service DAC",
      tagline:
        "Suport tehnic pentru continuitate operațională, punere în funcțiune și exploatare profesională.",
      summary:
        "Pagina este pregătită pentru viitoarea listă de locații service, iar până la publicarea acesteia oferă un punct clar de contact pentru intervenții și coordonare tehnică.",
      lead: [
        "Documentul de structură indică faptul că lista exactă a locațiilor service, cu nume, adresă și persoană de contact, urmează să fie confirmată. Site-ul este pregătit pentru această extindere și poate integra rapid rețeaua completă imediat ce informațiile sunt validate.",
        "Până atunci, DAC poate centraliza solicitările de service, piese și suport tehnic prin canalele de contact directe ale companiei."
      ],
      cards: [
        {
          title: "Coordonare intervenții",
          text:
            "Programare și triere pentru solicitări tehnice, diagnoză și planificarea intervențiilor."
        },
        {
          title: "Suport pentru punere în funcțiune",
          text:
            "Asistență pentru integrarea vehiculelor în flotă, proceduri de exploatare și bune practici operaționale."
        },
        {
          title: "Piese și consumabile",
          text:
            "Canal dedicat pentru informații comerciale și logistice privind piese, componente și suport post-livrare."
        }
      ]
    },
    contact: {
      kind: "contact",
      slug: "contact",
      title: "Contact",
      tagline: "Autovehicule DAC S.A.",
      summary:
        "Pentru informații comerciale, parteneriate, service sau proiecte de electrificare, echipa DAC poate fi contactată direct prin email, telefon sau prin întâlnire la sediu.",
      lead: [
        "DAC comunică într-o logică orientată spre aplicații reale, de aceea pagina de contact este construită să funcționeze atât pentru lead-uri comerciale, cât și pentru suport tehnic, parteneriate și prezentări de produs.",
        "Dacă lucrezi la un proiect de electrificare pentru logistică, industrie, servicii municipale sau transport public, poți porni discuția direct de aici."
      ],
      cards: [
        {
          title: "Email",
          text: site.email,
          href: `mailto:${site.email}`,
          actionLabel: "Trimite email"
        },
        {
          title: "Telefon",
          text: site.phones.join(" / "),
          href: "tel:+40730072620",
          actionLabel: "Sună acum"
        },
        {
          title: "Adresă",
          text: site.address,
          href: site.mapUrl,
          actionLabel: "Deschide în Maps"
        }
      ]
    }
  };

  const nav = [
    { label: "Home", href: "index.html", slug: "home" },
    { label: "Gama de vehicule", href: "gama-de-vehicule.html", slug: "gama-de-vehicule" },
    {
      label: "Camioane",
      href: "camioane.html",
      slug: "camioane",
      children: [
        { label: "DAC Tarbus", href: "dac-tarbus.html", slug: "dac-tarbus" },
        { label: "DAC Derzis", href: "dac-derzis.html", slug: "dac-derzis" },
        { label: "DAC Tyros", href: "dac-tyros.html", slug: "dac-tyros" },
        { label: "DAC Istros", href: "dac-istros.html", slug: "dac-istros" }
      ]
    },
    {
      label: "Vehicule speciale",
      href: "vehicule-speciale.html",
      slug: "vehicule-speciale",
      children: [
        { label: "DAC 90TEF.OH", href: "dac-90tef-oh.html", slug: "dac-90tef-oh" },
        { label: "DAC XPort 40", href: "dac-xport-40.html", slug: "dac-xport-40" }
      ]
    },
    {
      label: "Autobuze electrice",
      href: "autobuze-electrice.html",
      slug: "autobuze-electrice",
      children: [
        {
          label: "DAC CitySTREAM 412UE",
          href: "dac-citystream-412ue.html",
          slug: "dac-citystream-412ue"
        },
        { label: "DAC E6", href: "dac-e6.html", slug: "dac-e6" },
        { label: "CITYLINE 408.60", href: "cityline-408-60.html", slug: "cityline-408-60" }
      ]
    },
    { label: "Despre DAC", href: "despre-dac.html", slug: "despre-dac" },
    {
      label: "Istoria Brandului DAC",
      href: "istoria-brandului-dac.html",
      slug: "istoria-brandului-dac"
    },
    { label: "Service", href: "service.html", slug: "service" },
    { label: "Contact", href: "contact.html", slug: "contact" }
  ];

  return { site, team, nav, pages, categories, products };
})();
