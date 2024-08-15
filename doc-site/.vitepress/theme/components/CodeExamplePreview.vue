<!-- Viser både kodeblokk og kjører en eksempel av gitt kode.   -->
<template>
  <div class="code-example-box" ref="codeExampleBox">
    <!-- Fjerner html fra ```html, hvis du vil fjerne andre sprøkene gjerne legg til replace, eller lag en utils metode -->
    <div v-if="!onlyCode" class="slot-container" v-html="slot?.textContent?.replace('html', '')" />
    <div ref="slot">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
const slot = ref<HTMLElement | null>(null);
const codeExampleBox = ref<HTMLElement | null>(null);
const scriptElements = ref<HTMLScriptElement[]>([]);

withDefaults(
  defineProps<{
    onlyCode: boolean;
  }>(),
  {
    onlyCode: false,
  }
);
/** Henter script delen fra kodeeksempel og legger den ved i code-example-box så at den kan kjøres */
const processAndExecuteScripts = () => {
  if (slot.value) {
    const content = slot.value.textContent;

    // Ta ut og kjør script tagger
    const scriptMatches = content?.match(/<script.*>([\s\S]*?)<\/script>/g);
    if (scriptMatches) {
      scriptMatches.forEach((scriptTag: string) => {
        const scriptContent = scriptTag.match(/<script.*>([\s\S]*?)<\/script>/);
        const scriptElement = document.createElement('script');
        scriptElement.textContent = `
          (function() {
            ${scriptContent ? scriptContent[1] : ''}
          })();
        `;
        scriptElements.value.push(scriptElement);
        nextTick(() => codeExampleBox.value?.appendChild(scriptElement));
      });
    }
  }
};

onMounted(() => {
  processAndExecuteScripts();
});
</script>

<style scoped>
.code-example-box {
  margin: 16px 0;
}
</style>
