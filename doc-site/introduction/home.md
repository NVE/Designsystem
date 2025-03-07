<PageHeader title="Introduksjon" imagePath="intro" pageLevel=1></PageHeader>

# Om designsystemet

Designsystemet samler og tilgjengeliggjør verktøy, filer, komponenter og designretningslinjer som brukes av designere og utviklere for å lage gode og konsekvente brukeropplevelser i NVEs digitale tjenester. Designsystemet skal sette NVEs profiler i kontekst. Med andre ord vise deg hvorfor, hvor, når og hvordan du bruker og videreutvikler innhold i designsystemet for å skape gevinster og tettere samarbeid på tvers av roller og produkter.

Et designsystem handler, til tross for sitt navn, om mer enn bare design. Det handler først og fremst om mennesker, og hvordan vi må jobbe for å få brukt designet godt på en praktisk måte når vi utvikler en løsning. Designsystem som konsept er ikke teknologibundet, men er heller et uttrykk som beskriver prosessene og vanene som leder til mest effektivt design, utvikling og ledelse.

<nve-message-card title="Designsystemets formål">
<span>- Sikre visuell og funksjonell konsistens i forskjellige produkter og kanaler</span>
<span>- Sentral kvalitetssikring og tilpassing til krav som universell utforming</span>
<span>- Gjøre det enklere å komme i gang med design og utvikling av brukergrensesnitt i NVE</span>
<span>- Styrke kommunikasjon og samarbeid mellom desigere og utviklere</span>
</nve-message-card>

## Våre prinsipper

<div class="two-card-container">
  <nve-message-card
    class="card"
    showIcon="false"
    variant="danger"
    title="Enkelhet">Det skal være enkelt å bruke designsystemet. Enkelt å ta det i bruk, forstå og bidra.</nve-message-card>
  <nve-message-card
    class="card"
    showIcon="false"
    variant="danger"
    title="Åpent">Designsystemet skal være åpent og transparent. Designsystemet er laget for alle brukere.</nve-message-card>
  <nve-message-card
      class="card"
    showIcon="false"
    variant="danger"
    title="Fleksibilitet">Designsystemet skal være fleksibelt og enkelt å bruke. Det inneholder byggeklosser som kan passe på de fleste produkter.</nve-message-card>
  <nve-message-card
    class="card"
    showIcon="false"
    variant="danger"
    title="Bidrag">Designsystemet skal være en standard for alle som jobber med grensesnittet mot sluttbruker. Dette skal være en "source of truth". Designsystemet jobber mot konsistens og kvalitet i kode og design.</nve-message-card>
  <nve-message-card
    class="card"
    showIcon="false"
    variant="danger"
    title="Standarder">Designsystemet skal være en standard for alle som jobber med grensesnittet mot sluttbruker. Dette skal være en "single source of truth". Designsystemet jobber mot konsistens og kvalitet i kode og design.</nve-message-card>
</div>

<style>
.two-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-medium, 24px);
}

.two-card-container > * {
    flex: 1 1 calc(50% - var(--spacing-medium, 24px));
    box-sizing: border-box;
}

.card::part(base) {
    height: 200px;
}
</style>
