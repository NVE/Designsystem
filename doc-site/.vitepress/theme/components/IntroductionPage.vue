<template>
    <div>
        <PageHeader title="Introduksjon" imagePath="../../../assets/images/introduction-icon.png"></PageHeader>
        TODO: Legg til tab komponent 

        <div class="text-section">
            
            <h2 class="sub-title">Om designsystemet</h2>
            <p class="text">Designsystemet samler og tilgjengeliggjør verktøy, filer, komponenter og designretningslinjer som brukes av designere og utviklere for å lage gode og konsekvente brukeropplevelser i NVE og Varsoms digitale tjenester. Designsystemet skal sette NVE og Varsoms profiler i kontekst. Med andre ord vise deg hvorfor, hvor, når og hvordan du bruker og videreutvikler innhold i designsystemet for å skape gevinster og tettere samarbeid på tvers av roller og produkter.</p>
        </div>
        <Card title="Designsystemets formål">          
            <ul>
                <li class="list-item">Sikre visuell og funksjonell konsistens i forskjellige produkter og kanaler</li>
                <li class="list-item">Sentral kvalitetssikring og tilpassing til krav som universell utforming</li>
                <li class="list-item">Gjøre det enklere å komme i gang med design og utvikling i NVE og Varsom</li>
                <li class="list-item">Styrke kommunikasjon og samarbeid mellom design og utvikling</li>

            </ul></Card>

        <div class="principles-container">
            <h3 class="h3-title">Våre prinsipper</h3>
            <div class="two-card-container">
                <Card variant="nve-card" title="Enkelhet">Det skal være enkelt å bruke designsystemet. Enkelt å ta det i bruk, forstå og bidra.</Card>
                <Card variant="nve-card" title="Åpent">Designsystemet skal være åpent og transparent. Designsystemet er laget for alle brukere.</Card>
                <Card variant="nve-card" title="Fleksibilitet" >Designsystemet skal være fleksibelt og enkelt å bruke. Det inneholder byggeklosser som kan passe på de fleste produkter.</Card>
                <Card variant="nve-card" title="Bidrag">Vi jobber sammen med å skape og videreutvikle designsystemet. Vi er avhengig at flere bidrar inn til systemet. Les mer om bidrag på siden.</Card>
                <Card variant="nve-card" title="Standarder">Designsystemet skal være en standard for alle som jobber med grensesnittet mot sluttbruker. Dette skal være en "source of truth". Designsystemet jobber mot konsistens og kvalitet i kode og design.</Card>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
    import Card from './Card.vue';
    import PageHeader from './PageHeader.vue';
  </script>
  
  <style scoped>

    .sub-title {
        font-family: Source Sans Pro;
        font-size: 32px;
        font-weight: 600;
        line-height: 40px;
        text-align: left;
        color: #000000;
        border-top: none;
        margin:0;
        padding-top: 0;
    }
    .text-section {
        padding-bottom: var(--spacing-medium, 2rem);
    }

    .text {
        font-family: Source Sans Pro;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        text-align: left;
        color: #000000;
    }
    .card {
        display: flex;
        padding: var(--spacing-large, 24px);
        flex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-small, 12px);
        align-self: stretch;
        border-radius: var(--borderRadius-small, 4px);
        background: var(--Feedback-Background-Subtle-Info, #e6f4ff);
        min-height: 142px;
    }

    .card-title-container {
        display: flex;
        align-items: center;
    }
    .card-title {
        margin:0;
        padding-left: 8px;
        font-family: Source Sans Pro;
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        text-align: left;
        color:#0D0D0E
    }

    .list-item {
        font-family: Source Sans Pro;
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        text-align: left;
        color:#0D0D0E
    }

    .h3-title {
        font-family: Source Sans Pro;
        font-size: 24px;
        font-weight: 600;
        line-height: 31.2px;
        text-align: left;   
        color: #000000;
        margin-bottom: 1rem;
    }

    .two-card-container {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-medium, 24px);
    }

    .two-card-container > * {
        flex: 1 1 calc(50% - var(--spacing-medium, 24px));
        box-sizing: border-box;
    }
  </style>
  