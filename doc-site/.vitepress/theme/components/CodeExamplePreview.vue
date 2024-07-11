<!-- Viser både kodeblokk og kjører en eksempel av gitt kode.   -->
<template>
  <div class="code-example-box">
    <!-- Fjerner html fra ```html, hvis du vil fjerne andre sprøkene gjerne legg til replace, eller lag en utils metode -->
    <div class="slot-container" v-html="slot?.textContent?.replace('html', '')" />
    <div ref="slot">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const slot = ref<HTMLElement | null>(null);
</script>

<style scoped>
.code-example-box {
  margin: 16px 0;
}
</style>
