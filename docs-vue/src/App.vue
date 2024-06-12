<template>
  <p>this is nve-alert</p>
  <!--markdown part-->
  <nve-alert variant="primary" open title="me"></nve-alert>
  <div v-html="mardkownConten"></div>
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

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
