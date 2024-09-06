<!-- Viser både kodeblokk og kjører en eksempel av gitt kode.   -->
<template>
  <div class="code-example-box" ref="codeExampleBox">
    <!-- Fjerner html fra ```html, hvis du vil fjerne andre sprøkene gjerne legg til replace, eller lag en utils metode -->
    <div
      v-if="!onlyCode"
      class="slot-container"
      v-html="slot?.textContent?.replace('html', '')"
      :style="containerStyle"
    />
    <div ref="slot">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue';
const slot = ref<HTMLElement | null>(null);
const codeExampleBox = ref<HTMLElement | null>(null);
const scriptElements = ref<HTMLScriptElement[]>([]);
const containerStyle = computed(() => {
  let style = '';
  if (props.containerItemsAlign) {
    style += `align-items: ${props.containerItemsAlign};`;
  }
  if (props.containerGridTemplateColumns) {
    style += `display: grid; gap: var(--spacing-small); grid-template-columns: ${props.containerGridTemplateColumns}; justify-content: center;`;
  }
  if (props.containerJustifyContent) {
    style += `justify-content: ${props.containerJustifyContent};`;
  }
  if (props.containerJustifyItems) {
    style += `justify-items: ${props.containerJustifyItems};`;
  }
  return style;
});

const props = withDefaults(
  defineProps<{
    onlyCode?: boolean;
    containerItemsAlign?: string;
    containerGridTemplateColumns?: string;
    containerJustifyContent?: string;
    containerJustifyItems?: string;
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

.slot-container {
  justify-content: center;
}
</style>
