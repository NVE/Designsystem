<PageHeader title="Introduksjon" imagePath="intro" pageLevel=1></PageHeader>

# Om designsystemet

Designsystemet samler og tilgjengeliggjør verktøy, filer, komponenter og designretningslinjer som brukes av designere og utviklere for å lage gode og konsekvente brukeropplevelser i NVEs digitale tjenester. Designsystemet skal sette NVEs profiler i kontekst. Med andre ord vise deg hvorfor, hvor, når og hvordan du bruker og videreutvikler innhold i designsystemet for å skape gevinster og tettere samarbeid på tvers av roller og produkter.

Et designsystem handler, <em>til tross for sitt navn</em>, om mer enn bare design. Det handler først og fremst om mennesker og hvordan vi må jobbe for å få brukt designet godt på en praktisk måte når vi utvikler en løsning. Designsystem som konsept er ikke teknologibundet, men er heller et uttrykk som beskriver prosessene og vanene som leder til mest effektivt design, utvikling og ledelse.

<nve-message-card label="Designsystemets formål">
<ul>
  <li>Sikre visuell og funksjonell konsistens i forskjellige produkter og kanaler</li>
  <li>Sentral kvalitetssikring og tilpassing til krav som universell utforming</li>
  <li>Gjøre det enklere å komme i gang med design og utvikling av brukergrensesnitt i NVE</li>
  <li>Styrke kommunikasjon og samarbeid mellom desigere og utviklere</li>
</ul>
</nve-message-card>

## Våre prinsipper

<div class="two-card-container">
  <nve-message-card
    class="card"
    showIcon="false"
    variant="success"
    label="Enkelhet">Enkelt å ta det i bruk, forstå og bidra.</nve-message-card>
  <nve-message-card
    class="card"
    showIcon="false"
    variant="success"
    label="Åpent og transparent">Designsystemet er laget for alle brukere.</nve-message-card>
  <nve-message-card
    class="card"
    showIcon="false"
    variant="success"
    label="Fleksibilitet">Det inneholder byggeklosser som passer de fleste produkter.</nve-message-card>
  <nve-message-card
    class="card"
    showIcon="false"
    variant="success"
    label="Standardisert"
   >Dette skal være en "source of truth". Designsystemet jobber mot konsistens og kvalitet i kode og design.</nve-message-card>

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
    height: 10em;
}
</style>
