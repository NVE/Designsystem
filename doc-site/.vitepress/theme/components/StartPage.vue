<template>
    <div class="nve-home">
      <section>
        <h1 class="nve-hero-title">NVE & Varsom sitt Designsystem</h1>
        <p class="nve-hero-text">
          Velkommen til NVEs designsystem – innhold og retningslinjer for deg som jobber med design og utvikling av produkter hos NVE og Varsom. Designsystemet er et verktøy som skal gjøre det enklere for designere og utvikle å lage gode og konsekvente digitale tjenester.
        </p>
        <div class="links-container">
          <LinkButton URL="/introduction/home" text="Introduksjon"/>
          <LinkButton URL="https://nve.frontify.com/" text="Profil og primitiver" :openInNewTab="true"/>
          <LinkButton URL="/components/Komponentoversikt" text="Komponenter"/>
        </div>

      </section>
    </div>
  </template>
  
  <script setup>
import LinkButton from './LinkButton.vue';

  </script>
  
  <style scoped>

  .nve-home {
    padding-top: var(--sizing-x-large, 4rem);
  }
  .nve-hero-title {
    font-family: Source Sans Pro;
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    text-align: left;
  }
  
  .nve-hero-text {
    padding-top: 1rem;
    font-family: Source Sans Pro;
    font-size: 24px !important;
    font-weight: 400 !important;
    line-height: 31.2px !important;
    text-align: left;
  }
  
  .links-container {
    display: flex;
    gap: 1rem;
  }

  
@media (max-width: 748px) {
    .links-container {
    flex-direction: column;
    flex-direction: column;
    align-items: center;
  }
}
  </style>
  