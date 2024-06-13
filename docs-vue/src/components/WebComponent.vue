<template>
  <p>this is nve-alert</p>
  <!--markdown part-->
  <div v-html="mardkownContent"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import '../../../src/components/nve-alert/nve-alert.component';
import '../../../src/components/nve-icon/nve-icon.component';
import markdownit from 'markdown-it';
import codePreview from '../utils/codePreview';

const markdown = markdownit({
  html: true,
});
const mardkownContent = ref('');
const route = useRoute();
async function loadMarkdownAndComponent() {
  const fileName = route.params.component; // This can be dynamically set
  try {
    const mdModule = await import(`../../../doc/pages/components/${fileName}.md?raw`);
    // bruke src for lokal utvikling og bruk selve bibliotet import når appen er deployet
    //await import(`../../../src/components/${fileName}/${fileName}.component.ts`);
    const test = codePreview(mdModule.default);
    mardkownContent.value = markdown.render(test);
  } catch (error) {
    console.error('Failed to load markdown file', error);
    mardkownContent.value = 'Failed to load content.';
  }
}

onMounted(loadMarkdownAndComponent);
</script>

<style scoped></style>
