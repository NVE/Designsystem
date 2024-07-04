<!-- Viser tolket markdown fil til en dok siden på en komponent -->
<template>
  <!--markdown part-->
  <div
    class="md-content"
    v-html="mardkownContent"
  />
</template>

<script setup lang="ts">
import { nextTick, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Script, codePreview } from '../utils/codePreview';
import markdown from '../markdownItSetup';

const mardkownContent = ref('');
const scripts = reactive<Script[]>([]);
const route = useRoute();
async function loadMarkdownAndComponent() {
  const componentName = route.params.component;
  try {
    let mdModule;
    // import liker ikke / i variable, derfor litt hardkoding av url her
    if (componentName) {
      mdModule = await import(`../../../src/components/${componentName}/${componentName}.md?raw`);
    } else {
      const pageName = route.params.page;
      mdModule = await import(`../../../doc/pages/${pageName}.md?raw`);
    }
    /* denne kommentert delen brukes til å importere nve komponenter dynamisk. Foreløpig har vi ikke støtte for avhengiheter i
    custom-elements-manifest derfor appen vet ikke om den trenger å importere flere enn den hoved komponenten
    (f.eks nve-dropdown krever nve-button og nve-menu). Når det er på plass da kan vi importere komponenter dynamisk som
    er en bedre tilnærming enn å importere alle komponentene med en gang.  */
    //await import(`../../../src/components/${fileName}/${fileName}.component.ts`);
    const replacedText = codePreview(mdModule.default);
    mardkownContent.value = markdown.render(replacedText.text);
    scripts.push(...replacedText.scripts);
  } catch (error) {
    const filename = `${route.params.component || route.params.page}.md`;
    const message = `Fant ikke ${filename}`;
    console.warn(message, error);
    mardkownContent.value = `<nve-alert variant="warning" open><nve-icon slot="icon" name="warning"></nve-icon>${message}</nve-alert>`;
  }
}

/** Lager en anonym IIFE som legges til til en script innenfor den spesifiserte div-en med gitt id.
Den kjører ikke globalt */
function attachScriptToDiv(scriptContent: string, id: string) {
  const div = document.querySelector(`.code-preview-${id}`);
  if (div) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = `
      (function() {
        ${scriptContent}
      })();
    `;
    div.appendChild(script);
  }
}

watch(
  () => route.params.page,
  async (newComponent, oldComponent) => {
    if (newComponent !== oldComponent) {
      await loadMarkdownAndComponent();
      nextTick().then(() => {
        scripts.forEach((script) => attachScriptToDiv(script.script, script.id));
      });
    }
  },
  { immediate: true }
);

watch(
  () => route.params.component,
  async (newComponent, oldComponent) => {
    if (newComponent !== oldComponent) {
      await loadMarkdownAndComponent();
      nextTick().then(() => {
        scripts.forEach((script) => attachScriptToDiv(script.script, script.id));
      });
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.md-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
