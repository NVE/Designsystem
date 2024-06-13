<template>
  <!--markdown part-->
  <div class="md-content" v-html="mardkownContent"></div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import markdownit from 'markdown-it';
import mardkownItContainer from 'markdown-it-container';
import { Script, codePreview } from '../utils/codePreview';

const markdown = markdownit({
  html: true,
});
const mardkownContent = ref('');
const scripts = reactive<Script[]>([]);
const route = useRoute();
async function loadMarkdownAndComponent() {
  const fileName = route.params.component; // This can be dynamically set
  ['tip', 'warning', 'danger'].forEach((type) => {
    markdown.use(mardkownItContainer, type, {
      render: function (tokens, idx) {
        if (tokens[idx].nesting === 1) {
          return `<div role="alert" class="callout callout--${type}">`;
        }
        return '</div>\n';
      },
    });
  });
  try {
    const mdModule = await import(`../../../doc/pages/components/${fileName}.md?raw`);
    // bruke src for lokal utvikling og bruk selve bibliotet import når appen er deployet
    await import(`../../../src/components/${fileName}/${fileName}.component.ts`);
    const replacedText = codePreview(mdModule.default);
    mardkownContent.value = markdown.render(replacedText.text);
    scripts.push(...replacedText.scripts);
  } catch (error) {
    console.error('Failed to load markdown file', error);
    mardkownContent.value = 'Failed to load content.';
  }
}

/** Lager en anonym IIFE som kjører bare innenfor den spesifiserte div-en  */
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
  () => route.params.component,
  async (newComponent, oldComponent) => {
    if (newComponent !== oldComponent) {
      await loadMarkdownAndComponent();
      // Assuming `uniqueId` is known or retrieved dynamically
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
