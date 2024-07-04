<!-- Hovedside med meny og en markdown-fil med samme navn som url'en -->
<template>
  <div style="display: flex">
    <aside>
      <MenuComponent />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import MenuComponent from './MenuComponent.vue';
</script>

<style scoped></style>
