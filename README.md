# Jeugdhulp

Jeugdhulp is een applicatie gemaakt voor jeugdhulp Amsterdam.
Deze applicatie kan worden gebruikt om het kans op zware maatregelen te berekenen.
Deze berekening zorgt er voor dat de hulpverleners beter hun clienten kunnen helpen.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd jeugdhulp`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
<<<<<<< HEAD
=======


## Proces

In mijn proces ga ik de volgende punten bespreken.

* Het concept
* Data laden
* Interacties en vriendelijk
* Oplossingen en problemen
* Leerpunten

## Het concept
Het idee achter de applicatie is het verbeteren van zorg door een berekening.
Deze berekening zorgt er voor dat de hulp verleners sneller en beter kunnen helpen, en een zware maatregel kunnen voorkomen.
De door ons meest besproken maatregel is uit huisplatsing. Dit willen de hulpverleners juist voorkomen door de psychologisch trauma die de kinderen en ouders zou overkomen.

Er is al een website gemaakt door Jeudghulp die deze berekening doet, deze is alleen niet gebruiks vriendelijk.
Aan mij de taak om deze teverbeteren.

Zelf heb ik er voor gekozen om de bestaande pagina niet totaal te redesignen omdat er vraag was naar bekendheid. De gebruikers zijn digibeet. Hierom heb ik dezelfde basis gehouden.

## Dataladen
We kregen de data aangeleverd in een Json file [aangeleverde data](https://github.com/MartijnReeuwijk/techtrack/blob/master/public/assets/json/data.json) deze moest worden uitgelezen en verwerkt. Dit heb ik met de onderstaande code gedaan.
Deze code wordt in de route meegegeven zo dat de pagina gelijk de gesorteede code ontvangd en dat het framework dit gelijk goed kan verwerken.

Dit stukje code sorteert en plaatst de Categorie aan de juisten Antwoorden. Waardoor je dit niet in je framework hoeft tedoen maar gewoon de data moet aanvragen.

```var data_prepped = [];
for (var i = 0; i < data.length; i++) {

  var new_cat = true;
  for (var j = 0; j < data_prepped.length; j++) {
    if (data_prepped[j].Categorie === data[i].Categorie) {
      new_cat = false;
    }
  }

  if (new_cat) {
    data_prepped.push({
      'Categorie': data[i].Categorie,
      'Antwoorden': []
    });
  }

  for (var j = 0; j < data_prepped.length; j++) {
    if (data_prepped[j].Categorie === data[i].Categorie) {
      data_prepped[j].Antwoorden.push({
        'Coefficients': data[i].Coefficients,
        'Name': data[i].Name,
        'Gewicht': data[i].Gewicht,
      });
    }
  }
}
```

## Interacties & vriendelijk
Zelf vindt ik de huidige pagina nogal static en wil ik er zelf meer "leven" in blazen door er animaties aan toetevoegen.
Dit heb ik gedaan met de  risico-counter en de risico-balk. Ook heb ik voor lichten kleuren gekozen om vriendelijker overtekomen, zeker als ze deze misschien invullen bij een client dan wil je geen donkeren inpressie geven.
Ook heb ik een front keuze page gemaakt waar de gebruiker kan kiezen tussen verschillende versies van hulp verlening, de william schrikker groep veiligheids lijst en de Jeudghulp risico app.

![riskbalk met low risk](https://github.com/MartijnReeuwijk/techtrack/blob/master/public/assets/images/risk-balk.png)
![riskbalk met low risk](https://github.com/MartijnReeuwijk/techtrack/blob/master/public/assets/images/risk-balk-rood.png)

## Oplossingen en problemen
Tijdens het ontwikkelen ben ik een aantal kleinen problemen tegen gekomen. Hier vertel ik hoe ik deze heb opgelost.

# HTML progessbar
Voor mijn design heb ik een progress bar die de procentuele kans aangeeft om dit effect tebereiken dacht ik het element `<progress></progress>` tegebruiken. Helaas gaf dit niet het gewilde resultaat. De HTML progress bar kan je bijna / niet aanpassen met CSS. Hier door heb ik wat onderzoek gedaan en dat gaf aan dat je het met een ```span``` moest doen. Ik manipuleer de inline height van het element om zo het juiste resultaat tegeven.
Zie resultaat hier onder.
 `   <div class="barHolder">
    <div class="progressbarHolder">
      <span id="progress" style="height:0%;"  class="progressAnime">
        <span class="shadowBox">0%</span>
      </span>
    </div>
  </div>`
  
Nu zie ik in dat als ik aan het begin meer onderzoek had gedaan naar het juiste element had ik hier tijd kunnen besparen.

# Berekening
Door dat de formule niet 100% correct is kwam ik wat bereken problemen tegen met het gebruik van afrondingen.
In mijn code moest ik het eind resultaat omhoog afronden
  
>>>>>>> f3eb59e6f77394c905e89fe1b930b11a7c1d7c7c
