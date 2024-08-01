<PageHeader title="For designere" imagePath="../../../assets/images/design-services.png"></PageHeader>
TODO: Legge til tab komponent

## Bidrag

Designsystemet er et levende produkt som stadig forbedres. Vi ønsker at alle skal bidra til å gjøre det levende, og at nye behov og ønsker løses i designsystemet. Du bidrar inn i designsystemet ved å legge til nye features, forbedre eksisterende komponenter eller rapportere bugs og feil.

## Typer bidrag

Det er tre ulike måter du kan bidra til designsystemet på. Du kan legge til nye features, forbedre eksisterende komponenter eller rapportere bugs og feil.

<style>
  .left-image-container {
    display: flex;
    align-items: flex-start;
    margin-top: 3rem;
  }
  .left-image-container img {
    margin-right: 1rem; 
  }

  .h2-style {
    border-top: none !important; 
    margin:0 !important;  
    padding:0 !important;
  }
</style>

<div class="left-image-container">
  <img src="../../../assets/images/contribution-1.png" width="auto">
  <div>
    <h2 class="h2-style">Legg til</h2>
    <p>Har du skisset opp nye komponenter du ser blir mye brukt i NVE eller Varsoms tjenester og kan nytte andre prosjekter? Da ønsker vi veldig gjerne at du lager en sak i Jira hvor du legger ved skissen din. Velges den for utvikling, lager du komponentet gjennom en branch i Figma og kode. Er du fornøyd, markerer du den som ferdig i Jira. Da går saken over til designsystem-kvalitetsikrer, som har ansvar for kvalitetsjekk og publisering.</p>
  </div>
</div>

<div class="left-image-container">
  <img src="../../../assets/images/contribution-2.png" width="auto">
  <div>
    <h2 class="h2-style">Forbedring</h2>
    <p>Dekker ikke et eksisterende komponent hele ditt behov eller har du en ny og bedre idé på hvordan komponenten bør fungere? Legg inn saken i Jira. Velges den for utvikling, lager du en branch i Figma og forbedrer komponenten. Er du fornøyd, markerer du den som ferdig i Jira. Da går saken over til designsystem-ansvarlig, som har ansvar for kvalitetsjekk og publisering.</p>
  </div>
</div>

<div class="left-image-container">
  <img src="../../../assets/images/contribution-3.png" width="auto">
  <div>
    <h2 class="h2-style">Bugs og feil</h2>
    <p>Opplever du bugs eller noe feil fra komponenter i designsystemet? Det kommer til å skje i blant. Meld fra via Jira, så vil designsystem-kvalitetsikrer ta over saken og undersøke feilen.</p>
  </div>
</div>

## Bidragsprosess

Designsystemet er en felles dugnad fra og for alle prosjekter i NVE og Varsom. Derfor er vi avhengig av bidrag for å bygge og iterer på designsystemet. Her forklarer vi hvordan du kan bidra.

1. **Før du starter**  
   Sjekk alltid om det er en komponent eller et mønster som dekker dine behov. Figma er et flott sted å starte. Her finner du en oversikt over alle komponenter og profilelementer, og du finner beskrivende eksempler. Ta gjerne kontakt via Teams hvis du er usikker.

2. **Rapporter i Jira**  
   Opplever du at det er noe som mangler, er utydelig eller feil? Vil vi gjerne du legger inn henvendelsen inn i Jira eller tagger DS-132 Designsystemet gjennom ditt Jira prosjekt. Der vil designsystem-ansvarlig vurdere, fordele og gi ut oppgaver.

3. **Få tildelt oppgaven**  
   Designsystemansvarlig vil vurdere og deretter delegere oppgaven. Du får som regel samme oppgave du har lagt inn, med mindre designsystemansvarlig avgjør at det ikke er behov for det, eller at det er en bug. Om det er en bug løses oppgaven av designsystemansvarlig. Om du ikke ønsker å jobbe med oppgaven eller ikke har tid, må du melde ifra til designsystemansvarlig.

4. **Løs oppgaven i Figma eller i kode**  
   Løs oppgaven du har fått tildelt i Figma eller i kode avhengig av oppgave. Sørg for at du forholder deg til retningslinjene satt i profilmanualen og i designsystemet, og sørg for at løsningen din oppfyller kravene til universell utforming.

<Card title="Krav">
<ul>
<li class="list-item">Gi komponenten et navn som er fornuftig. Det skal være lett å finne for folk som ikke vet om det. Navnet skal være beskrivende for hva det er eller hva det gjør.
</li>
        <li class="list-item">Gjør komponenten enkel å bruke for andre ved å sørge for at den fungerer bra i andre sammenhenger enn den du designet den for: Ulike størrelser, med ulik mengde innhold osv.</li>
        <li class="list-item"> Legg til alle varianter/rekvisitter, og navngi dem fornuftig.</li>
        <li class="list-item">Dokumenter arbeidet ditt.</li>
    </ul>
    </Card>

## Bruk Branching

<img src="../../../assets/images/contribution-4.png" width="auto">
Skal oppgaven løses i Figma er det viktig at du bruker featuren kalt branching. Ved å lage en branch av hovedfilen sørger du for at designjusteringene du gjør ikke publiseres i hovedfilen før endringene er kvalitetssikret. Lær mer om branching i Figma i lenken under.
