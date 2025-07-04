---
layout: component
---

<CodeExamplePreview>

```html
<nve-combobox
  label="Velg ett eller flere dyr"
  options='[
        { "label": "Cat", "value": "cat"},
        { "label": "Dog", "value": "dog" },
        { "label": "Bird", "value": "bird" },
        { "label": "Fish", "value": "fish" },
        { "label": "Rabbit", "value": "rabbit" },
        { "label": "Horse", "value": "horse" },
        { "label": "Snake", "value": "snake" },
        { "label": "Turtle", "value": "turtle" },
        { "label": "Hamster", "value": "hamster" },
        { "label": "Frog", "value": "frog" }
    ]'
></nve-combobox>
```

</CodeExamplePreview>

## Eksempler

### Begrense antall valgbare verdier

Ønsker man at det skal være mulig å bare velge x antall verdier, kan man legge på `max="number"`. I dette tilfellet `1`.
<CodeExamplePreview>

```html
  <nve-combobox
      max="1"
      options='[{"label":"Hábmer–Hamarøy","value":"1875"},{"label":"Lillestrøm","value":"3205"},{"label":"Lindesnes","value":"4205"},{"label":"Aremark","value":"3124"},{"label":"Hole","value":"3310"},{"label":"Nome","value":"4018"},{"label":"VestreToten","value":"3443"},{"label":"Eigersund","value":"1101"},{"label":"Osterøy","value":"4630"},{"label":"Lyngdal","value":"4225"},{"label":"Stjørdal","value":"5035"},{"label":"Lærdal","value":"4642"},{"label":"Bjerkreim","value":"1114"},{"label":"Raarvikhe–Røyrvik","value":"5043"},{"label":"Marker","value":"3122"},{"label":"Gildeskål","value":"1838"},{"label":"Sunnfjord","value":"4647"},{"label":"Stryn","value":"4651"},{"label":"Storfjord-Omasvuotna-Omasvuono","value":"5538"},{"label":"Øygarden","value":"4626"},{"label":"Måsøy","value":"5618"},{"label":"Hol","value":"3330"},{"label":"Tokke","value":"4034"},{"label":"Heim","value":"5055"},{"label":"Sykkylven","value":"1528"},{"label":"Nord-Fron","value":"3436"},{"label":"Hyllestad","value":"4637"},{"label":"Våler","value":"3114"},{"label":"Luster","value":"4644"},{"label":"Nord-Odal","value":"3414"},{"label":"Dønna","value":"1827"},{"label":"Tingvoll","value":"1560"},{"label":"Sør-Aurdal","value":"3449"},{"label":"Loppa","value":"5614"},{"label":"Gjerdrum","value":"3230"},{"label":"Hadsel","value":"1866"},{"label":"MidtreGauldal","value":"5027"},{"label":"Moss","value":"3103"},{"label":"Høylandet","value":"5046"},{"label":"Engerdal","value":"3425"},{"label":"Stor-Elvdal","value":"3423"},{"label":"Askvoll","value":"4645"},{"label":"Åmot","value":"3422"},{"label":"Ringebu","value":"3439"},{"label":"Hjartdal","value":"4024"},{"label":"Vik","value":"4639"},{"label":"Kvæfjord","value":"5510"},{"label":"Fjord","value":"1578"},{"label":"Jevnaker","value":"3236"},{"label":"Rælingen","value":"3224"},{"label":"Rennebu","value":"5022"},{"label":"Færder","value":"3911"},{"label":"Larvik","value":"3909"},{"label":"Tønsberg","value":"3905"},{"label":"Vestby","value":"3216"},{"label":"Fredrikstad","value":"3107"},{"label":"Notodden","value":"4005"},{"label":"Sør-Odal","value":"3415"},{"label":"Kvinesdal","value":"4227"},{"label":"HerøyiMøreogRomsdal","value":"1515"},{"label":"Sørfold","value":"1845"},{"label":"BøiNordland","value":"1867"},{"label":"Rakkestad","value":"3120"},{"label":"Vang","value":"3454"},{"label":"Hamar","value":"3403"},{"label":"Svalbard","value":"2100"},{"label":"Snåase–Snåsa","value":"5041"},{"label":"Haugesund","value":"1106"},{"label":"Ringerike","value":"3305"},{"label":"Målselv","value":"5524"},{"label":"Vanylven","value":"1511"},{"label":"Hustadvika","value":"1579"},{"label":"Birkenes","value":"4216"},{"label":"Røst","value":"1856"},{"label":"ØystreSlidre","value":"3453"},{"label":"Hvaler","value":"3110"},{"label":"Bindal","value":"1811"},{"label":"Lillehammer","value":"3405"},{"label":"Verdal","value":"5038"},{"label":"Aurland","value":"4641"},{"label":"JanMayen","value":"2211"},{"label":"Gjesdal","value":"1122"},{"label":"Nesbyen","value":"3322"},{"label":"Vega","value":"1815"},{"label":"Porsanger-Porsáŋgu-Porsanki","value":"5622"},{"label":"Trysil","value":"3421"},{"label":"Porsgrunn","value":"4001"},{"label":"Bardu","value":"5520"},{"label":"EvjeogHornnes","value":"4219"},{"label":"Gáivuotna-Kåfjord-Kaivuono","value":"5540"},{"label":"Grimstad","value":"4202"},{"label":"Kviteseid","value":"4028"},{"label":"Folldal","value":"3429"},{"label":"Oppdal","value":"5021"},{"label":"Voss","value":"4621"},{"label":"Grong","value":"5045"},{"label":"Årdal","value":"4643"},{"label":"Suldal","value":"1134"},{"label":"Nannestad","value":"3238"},{"label":"Sunndal","value":"1563"},{"label":"Fitjar","value":"4615"},{"label":"Sogndal","value":"4640"},{"label":"Gjemnes","value":"1557"},{"label":"Etnedal","value":"3450"},{"label":"Gratangen","value":"5516"},{"label":"Kvænangen","value":"5546"},{"label":"Enebakk","value":"3220"},{"label":"Ulstein","value":"1516"},{"label":"Grue","value":"3417"},{"label":"Midt-Telemark","value":"4020"},{"label":"Siljan","value":"4010"},{"label":"Masfjorden","value":"4634"},{"label":"Samnanger","value":"4623"},{"label":"Øyer","value":"3440"},{"label":"Fauske–Fuossko","value":"1841"},{"label":"Vågå","value":"3435"},{"label":"Ås","value":"3218"},{"label":"Lierne","value":"5042"},{"label":"Øksnes","value":"1868"},{"label":"Andøy","value":"1871"},{"label":"Klepp","value":"1120"},{"label":"Surnadal","value":"1566"},{"label":"Salangen","value":"5522"},{"label":"Flakstad","value":"1859"},{"label":"Hurdal","value":"3242"},{"label":"Skjåk","value":"3433"},{"label":"Lebesby","value":"5624"},{"label":"Gol","value":"3324"},{"label":"Melhus","value":"5028"},{"label":"Fyresdal","value":"4032"},{"label":"Flekkefjord","value":"4207"},{"label":"Overhalla","value":"5047"},{"label":"Unjárga-Nesseby","value":"5636"},{"label":"Solund","value":"4636"},{"label":"Tysvær","value":"1146"},{"label":"Seljord","value":"4022"},{"label":"Time","value":"1121"},{"label":"Værøy","value":"1857"},{"label":"SøndreLand","value":"3447"},{"label":"Nærøysund","value":"5060"},{"label":"Sortland–Suortá","value":"1870"},{"label":"Eidfjord","value":"4619"},{"label":"NordreFollo","value":"3207"},{"label":"Steigen","value":"1848"},{"label":"Leirfjord","value":"1822"},{"label":"Vindafjord","value":"1160"},{"label":"Vevelstad","value":"1816"},{"label":"Fjaler","value":"4646"},{"label":"IndreFosen","value":"5054"},{"label":"Gjøvik","value":"3407"},{"label":"Hemnes","value":"1832"},{"label":"Hasvik","value":"5616"},{"label":"Kristiansund","value":"1505"},{"label":"Aukra","value":"1547"},{"label":"Frogn","value":"3214"},{"label":"Sola","value":"1124"},{"label":"Bokn","value":"1145"},{"label":"Stavanger","value":"1103"},{"label":"Hitra","value":"5056"},{"label":"Molde","value":"1506"},{"label":"Hå","value":"1119"},{"label":"Lunner","value":"3234"},{"label":"Giske","value":"1532"},{"label":"ØstreToten","value":"3442"},{"label":"Vaksdal","value":"4628"},{"label":"Sirdal","value":"4228"},{"label":"Bygland","value":"4220"},{"label":"Bykle","value":"4222"},{"label":"Alvdal","value":"3428"},{"label":"Ullensaker","value":"3209"},{"label":"Tynset","value":"3427"},{"label":"Karmøy","value":"1149"},{"label":"Saltdal","value":"1840"},{"label":"Stord","value":"4614"},{"label":"Haram","value":"1580"},{"label":"Holmestrand","value":"3903"},{"label":"Nissedal","value":"4030"},{"label":"Oslo","value":"0301"},{"label":"Rosse–Røros","value":"5025"},{"label":"Eidskog","value":"3416"},{"label":"Frosta","value":"5036"},{"label":"Vennesla","value":"4223"},{"label":"Flatanger","value":"5049"},{"label":"Modalen","value":"4629"},{"label":"Bergen","value":"4601"},{"label":"Ørland","value":"5057"},{"label":"Nes","value":"3228"},{"label":"Nittedal","value":"3232"},{"label":"Gran","value":"3446"},{"label":"Kvam","value":"4622"},{"label":"Utsira","value":"1151"},{"label":"Randaberg","value":"1127"},{"label":"Evenes–Evenášši","value":"1853"},{"label":"Åfjord","value":"5058"},{"label":"Rauma","value":"1539"},{"label":"Askøy","value":"4627"},{"label":"Ringsaker","value":"3411"},{"label":"Rindal","value":"5061"},{"label":"Osen","value":"5020"},{"label":"Nordreisa-Ráisa-Raisi","value":"5544"},{"label":"Vefsn","value":"1824"},{"label":"Rendalen","value":"3424"},{"label":"Arendal","value":"4203"},{"label":"Kongsvinger","value":"3401"},{"label":"Kvinnherad","value":"4617"},{"label":"Skaun","value":"5029"},{"label":"Grane","value":"1825"},{"label":"Austevoll","value":"4625"},{"label":"Ibestad","value":"5514"},{"label":"Meløy","value":"1837"},{"label":"Stad","value":"4649"},{"label":"Levanger","value":"5037"},{"label":"Bømlo","value":"4613"},{"label":"Nordkapp","value":"5620"},{"label":"Fedje","value":"4633"},{"label":"Hemsedal","value":"3326"},{"label":"Båtsfjord","value":"5632"},{"label":"Lurøy","value":"1834"},{"label":"Tvedestrand","value":"4213"},{"label":"Austrheim","value":"4632"},{"label":"Inderøy","value":"5053"},{"label":"Selbu","value":"5032"},{"label":"Risør","value":"4201"},{"label":"Lier","value":"3312"},{"label":"Tysnes","value":"4616"},{"label":"Hareid","value":"1517"},{"label":"Alver","value":"4631"},{"label":"Sel","value":"3437"},{"label":"Drangedal","value":"4016"},{"label":"Sarpsborg","value":"3105"},{"label":"Ålesund","value":"1508"},{"label":"Farsund","value":"4206"},{"label":"Gamvik","value":"5626"},{"label":"Tjeldsund-Dielddanuorri","value":"5512"},{"label":"Tromsø","value":"5501"},{"label":"Smøla","value":"1573"},{"label":"Lyngen","value":"5536"},{"label":"Dovre","value":"3431"},{"label":"Vestnes","value":"1535"},{"label":"Ål","value":"3328"},{"label":"Os","value":"3430"},{"label":"Sveio","value":"4612"},{"label":"Asker","value":"3203"},{"label":"Rødøy","value":"1836"},{"label":"VestreSlidre","value":"3452"},{"label":"Frøya","value":"5014"},{"label":"Høyanger","value":"4638"},{"label":"HerøyiNordland","value":"1818"},{"label":"ØvreEiker","value":"3314"},{"label":"Vinje","value":"4036"},{"label":"Sørreisa","value":"5526"},{"label":"Sømna","value":"1812"},{"label":"Nesna","value":"1828"},{"label":"Namsos–Nåavmesjenjaelmie","value":"5007"},{"label":"Tinn","value":"4026"},{"label":"Råde","value":"3112"},{"label":"Kragerø","value":"4014"},{"label":"Brønnøy","value":"1813"},{"label":"Averøy","value":"1554"},{"label":"Elverum","value":"3420"},{"label":"Gloppen","value":"4650"},{"label":"Vegårshei","value":"4212"},{"label":"Halden","value":"3101"},{"label":"Flesberg","value":"3334"},{"label":"Lund","value":"1112"},{"label":"Bodø","value":"1804"},{"label":"Nesodden","value":"3212"},{"label":"Sokndal","value":"1111"},{"label":"Rollag","value":"3336"},{"label":"Løten","value":"3412"},{"label":"Kinn","value":"4602"},{"label":"Sør-Fron","value":"3438"},{"label":"Krødsherad","value":"3318"},{"label":"Drammen","value":"3301"},{"label":"Vardø","value":"5634"},{"label":"Sør-Varanger","value":"5605"},{"label":"Loabák-Lavangen","value":"5518"},{"label":"Sauda","value":"1135"},{"label":"Bamble","value":"4012"},{"label":"Moskenes","value":"1874"},{"label":"Horten","value":"3901"},{"label":"Deatnu-Tana","value":"5628"},{"label":"Aurskog-Høland","value":"3226"},{"label":"Skien","value":"4003"},{"label":"Dyrøy","value":"5528"},{"label":"Malvik","value":"5031"},{"label":"Bjørnafjorden","value":"4624"},{"label":"Lesja","value":"3432"},{"label":"Guovdageaidnu-Kautokeino","value":"5612"},{"label":"Balsfjord","value":"5532"},{"label":"Kristiansand","value":"4204"},{"label":"Senja","value":"5530"},{"label":"Hjelmeland","value":"1133"},{"label":"Alstahaug","value":"1820"},{"label":"Aarborte–Hattfjelldal","value":"1826"},{"label":"Ullensvang","value":"4618"},{"label":"Gulen","value":"4635"},{"label":"Ulvik","value":"4620"},{"label":"SandeiMøreogRomsdal","value":"1514"},{"label":"Åmli","value":"4217"},{"label":"VåleriInnlandet","value":"3419"},{"label":"Sula","value":"1531"},{"label":"Kvitsøy","value":"1144"},{"label":"Steinkjer","value":"5006"},{"label":"Karlsøy","value":"5534"},{"label":"Lødingen","value":"1851"},{"label":"Leka","value":"5052"},{"label":"Valle","value":"4221"},{"label":"Namsskogan","value":"5044"},{"label":"Tolga","value":"3426"},{"label":"Vadsø","value":"5607"},{"label":"Sigdal","value":"3332"},{"label":"Tydal","value":"5033"},{"label":"Flå","value":"3320"},{"label":"Lørenskog","value":"3222"},{"label":"Kárášjohka-Karasjok","value":"5610"},{"label":"Meråker","value":"5034"},{"label":"Iveland","value":"4218"},{"label":"Hægebostad","value":"4226"},{"label":"Træna","value":"1835"},{"label":"Alta","value":"5601"},{"label":"Gjerstad","value":"4211"},{"label":"Berlevåg","value":"5630"},{"label":"Volda","value":"1577"},{"label":"Aure","value":"1576"},{"label":"Narvik","value":"1806"},{"label":"Sandnes","value":"1108"},{"label":"Strand","value":"1130"},{"label":"NoreogUvdal","value":"3338"},{"label":"Skiptvet","value":"3116"},{"label":"Kongsberg","value":"3303"},{"label":"Gausdal","value":"3441"},{"label":"Nord-Aurdal","value":"3451"},{"label":"Modum","value":"3316"},{"label":"Bremanger","value":"4648"},{"label":"Beiarn","value":"1839"},{"label":"Eidsvoll","value":"3240"},{"label":"NordreLand","value":"3448"},{"label":"Rana","value":"1833"},{"label":"Trondheim–Tråante","value":"5001"},{"label":"Stranda","value":"1525"},{"label":"Lom","value":"3434"},{"label":"Åseral","value":"4224"},{"label":"Vestvågøy","value":"1860"},{"label":"Froland","value":"4214"},{"label":"Sandefjord","value":"3907"},{"label":"Harstad-Hárstták","value":"5503"},{"label":"Orkland","value":"5059"},{"label":"Stange","value":"3413"},{"label":"Bærum","value":"3201"},{"label":"Ørsta","value":"1520"},{"label":"Lillesand","value":"4215"},{"label":"Holtålen","value":"5026"},{"label":"Vågan","value":"1865"},{"label":"Skjervøy","value":"5542"},{"label":"Etne","value":"4611"},{"label":"IndreØstfold","value":"3118"},{"label":"Hammerfest-Hámmerfeasta","value":"5603"},{"label":"Åsnes","value":"3418"}]''
  ></nve-combobox>

```

</CodeExamplePreview>

### Disabled

Bruk attributtet `disabled` for å hindre muligheten for å endre verdier.
<CodeExamplePreview>

```html
<nve-combobox
  disabled
  label="Velg ett dyr"
  options='[
        { "label": "Cat", "value": "cat"},
        { "label": "Dog", "value": "dog" },
        { "label": "Bird", "value": "bird" },
        { "label": "Fish", "value": "fish" },
        { "label": "Rabbit", "value": "rabbit" },
        { "label": "Horse", "value": "horse" },
        { "label": "Snake", "value": "snake" },
        { "label": "Turtle", "value": "turtle" },
        { "label": "Hamster", "value": "hamster" },
        { "label": "Frog", "value": "frog" }
    ]'
></nve-combobox>
```

</CodeExamplePreview>

### Forhåndsvalgte verdier

Bruk `selected` på option-objektet for å forhåndsvelge verdier.
<CodeExamplePreview>

```html
<nve-combobox
  options='[
        { "label": "Cat", "value": "cat", "selected":true},
        { "label": "Dog", "value": "dog" },
        { "label": "Bird", "value": "bird" },
        { "label": "Fish", "value": "fish" },
        { "label": "Rabbit", "value": "rabbit","selected":true },
        { "label": "Horse", "value": "horse" },
        { "label": "Snake", "value": "snake" },
        { "label": "Turtle", "value": "turtle" },
        { "label": "Hamster", "value": "hamster" },
        { "label": "Frog", "value": "frog" }
    ]'
></nve-combobox>
```

</CodeExamplePreview>

### Validering

Bruk attributtet `required` for å gjøre komponenten påkrevd, legg inn en feilmelding i `errorMessage` om du ikke vil ha standard-feilmeldingen.
Bruk attributtet `requiredlabel` hvis du vil vise noe annet enn \*Obligatorisk.
Bruk min for å sette minimum valgbare alternativer, i dette eksempelet 2. Bruk max for å sette maks valgbare alternativer, i dette eksempelet 3
`nve-combobox` må ligge i en `<form>` for at validering skal fungere.

<CodeExamplePreview>

```html
<form onsubmit="event.preventDefault()">
  <nve-combobox
    label="Velg to eller tre dyr"
    required
    min="2"
    max="3"
    errorMessage="Du må minimum velge 2 og maksimalt 3 dyr"
    options='[
        { "label": "Cat", "value": "cat"},
        { "label": "Dog", "value": "dog" },
        { "label": "Bird", "value": "bird" },
        { "label": "Fish", "value": "fish" },
        { "label": "Rabbit", "value": "rabbit" },
        { "label": "Horse", "value": "horse" },
        { "label": "Snake", "value": "snake" },
        { "label": "Turtle", "value": "turtle" },
        { "label": "Hamster", "value": "hamster" },
        { "label": "Frog", "value": "frog" }
    ]'
  ></nve-combobox
  ><br />
  <nve-button type="submit">Lagre</nve-button>
</form>
```

</CodeExamplePreview>

### Hjelpetekst

Bruk attributtet `helpText` for å vise tekst under input feltet

<CodeExamplePreview>

```html

  <nve-combobox
    label="Velg ett dyr"
    helpText="Velg ditt favorittdyr"
    options='[
        { "label": "Cat", "value": "cat"}
    ]'
  ></nve-combobox

```

</CodeExamplePreview>

### Placeholder

<CodeExamplePreview>

```html
<nve-combobox
  size="medium"
  label="Velg ett dyr"
  placeholder="Eksempel med placeholder"
  options='[
        { "label": "Cat", "value": "cat" }
    ]'
></nve-combobox>
```

</CodeExamplePreview>

### Filled

Bruk attributtet `filled` for mørkere bakgrunn

<CodeExamplePreview>

```html
<nve-combobox
  filled
  size="medium"
  options='[
        { "label": "Cat", "value": "cat" }
    ]'
></nve-combobox>
```

</CodeExamplePreview>

### Forskjellige størrelser

Bruk attributtet `size` for å endre størrelse mellom `small | medium | large.` `medium` er standard.

<CodeExamplePreview>

```html
<nve-combobox
  size="small"
  label="small"
  options='[{ "label": "Cat", "value": "cat", "selected" : true }]'
></nve-combobox>
<nve-combobox
  label="medium"
  size="medium"
  options='[{ "label": "Cat", "value": "cat", "selected" : true }]'
></nve-combobox>
<nve-combobox
  label="large"
  size="large"
  options='[{ "label": "Cat", "value": "cat", "selected" : true }]'
></nve-combobox>
```

</CodeExamplePreview>
