## Proces

In mijn proces ga ik de volgende punten bespreken.

-   Het concept
-   Data laden
-   Interacties en vriendelijk
-   Oplossingen en problemen
-   Leerpunten

## Het concept

Het idee achter de applicatie is het verbeteren van zorg door een berekening.
Deze berekening zorgt er voor dat de hulp verleners sneller en beter kunnen helpen, en een zware maatregel kunnen voorkomen.
De door ons meest besproken maatregel is uit huisplatsing. Dit willen de hulpverleners juist voorkomen door de psychologisch trauma die de kinderen en ouders zou overkomen.

Er is al een website gemaakt door Jeudghulp die deze berekening doet, deze is alleen niet gebruiks vriendelijk.
Aan mij de taak om deze teverbeteren.

Zelf heb ik er voor gekozen om de bestaande pagina niet totaal te redesignen omdat er vraag was naar bekendheid. De gebruikers zijn digibeet. Hierom heb ik dezelfde basis gehouden.

## Design

Het design wil ik niet veel veranderen omdat de userbase al aan dit is gewend.
Daarom heb ik niet veel veranderd aan de basis style die er nu is.
# Idee design
![Idee schetsen](https://github.com/MartijnReeuwijk/techtrack/blob/master/public/assets/images/collage.jpg)
# Onderconstructie  design
Deze pagina is een tijdelijke place holder.
![Finished design](https://github.com/MartijnReeuwijk/techtrack/blob/master/public/assets/images/Artboard-2.jpg)
# Eindelijke design
![Finished design](https://github.com/MartijnReeuwijk/techtrack/blob/master/public/assets/images/Artboard-1.jpg)


## Dataladen

We kregen de data aangeleverd in een Json file [aangeleverde data](https://github.com/MartijnReeuwijk/techtrack/blob/master/public/assets/json/data.json) deze moest worden uitgelezen en verwerkt. Dit heb ik met de onderstaande code gedaan.
Deze code wordt in de route meegegeven zo dat de pagina gelijk de gesorteede code ontvangd en dat het framework dit gelijk goed kan verwerken.

Dit stukje code sorteert en plaatst de Categorie aan de juisten Antwoorden. Waardoor je dit niet in je framework hoeft tedoen maar gewoon de data moet aanvragen.

```js
var data_prepped = [];
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
![riskbalk met low risk](https://github.com/MartijnReeuwijk/techtrack/blob/master/public/assets/images/risk-bar-rood.png)

## Oplossingen, problemen en TODO:

Tijdens het ontwikkelen ben ik een aantal kleinen problemen tegen gekomen. Hier vertel ik hoe ik deze heb opgelost.

# HTML progessbar

Voor mijn design heb ik een progress bar die de procentuele kans aangeeft om dit effect tebereiken dacht ik het element `<progress></progress>` tegebruiken. Helaas gaf dit niet het gewilde resultaat. De HTML progress bar kan je bijna / niet aanpassen met CSS. Hier door heb ik wat onderzoek gedaan en dat gaf aan dat je het met een `span` moest doen. Ik manipuleer de inline height van het element om zo het juiste resultaat tegeven.
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

# TODO lijst

Zelf maak ik altijd een snelle TODO lijst als geheugen steun over wat ik vandaag moet doen. Dit zorgt er voor dat ik doel gericht werk en niks vergeet. Hier onder staat een van mijn TODO: lijsten.

TODO:

-   Buttons - ja/nee
-   Drop down menu
-   Calc() waarden
-   Tabs
-   Assign % space
-   Global Style class
-   Global Js class
-   General style
-   Rename classes
-   Design
-   Generate vragen

TODO:

-   Change colour
-   Fix ParseFloat
-   Progress bar
-   Get data only selected elements voor berekening.

TODO refactor:

-   Class voor Border css
-   Class voor standaart button
-   Hover class
-   Animatie class
-   Refacter JS

TODO:

-   README
-   Procesverslag
-   Save state

# Conclusie / Geleerd
Tijdens dit project heb ik geleerd hoe je met een Framework moet werken.
Ook heb ik wat javascripts skills kunnen bij slijpen zeker in verhouding met het framework.
Ook heb ik wat leuke dingen kunnen doen met simpelen Css animatie.

# Wat verbeteren
-   Meer onderzoek voor ik een nieuw element gebruik.
-   Beter benaming voor elementen.
-   Beter gebruik maken van het framework
-   Documentatie perdag opschrijven.
