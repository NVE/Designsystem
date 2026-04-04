<template>
  <div class="nve-home">
    <section>
      <h1 class="nve-hero-title">Brukerveiledning for NVE Designsystem</h1>
      <p class="nve-hero-text">Velkommen til brukerveiledninga for NVEs designsystem. Denne innholder:</p>
      <ul>
        <li>Litt om hva designsystemet består av og enkelte retningslinjer</li>
        <li>En separat introduksjon for designere og for utviklere</li>
        <li>API-dokumentasjon for hver komponent</li>
      </ul>
      <div class="links-container">
        <nve-button variant="secondary" href="/introduction/home">Introduksjon</nve-button>
        <nve-button variant="secondary" href="https://nve.frontify.com/" target="_blank"
          >Profil og primitiver
          <nve-icon name="open_in_new" slot="end"></nve-icon>
        </nve-button>
        <nve-button variant="secondary" href="/components/Komponentoversikt">Komponenter</nve-button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.nve-home {
  padding-top: var(--sizing-x-large, 4rem);
}
.nve-hero-title {
  font-family: Source Sans 3;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  text-align: left;
}

.nve-hero-text {
  padding-top: 1rem;
  font-family: Source Sans 3;
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
