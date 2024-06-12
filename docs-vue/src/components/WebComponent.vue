<template>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MarkdownIt from 'markdown-it';
import '../styles/global.css';
import '../styles/varsom.css';
// bruke src for lokal utvikling og bruk selve bibliotet import når appen er deployet
import '../../src/components/nve-alert/nve-alert.component.ts';
const markdown = new MarkdownIt();
const mardkownConten = ref('');
async function loadMarkdown() {
  const fileName = 'nve-alert'; // This can be dynamically set
  try {
    const md = await import(`../../doc/${fileName}.md?raw`);
    mardkownConten.value = markdown.render(md.default);
  } catch (error) {
    console.error('Failed to load markdown file', error);
    mardkownConten.value = 'Failed to load content.';
  }
}

onMounted(loadMarkdown);
</script>

<style scoped></style>
