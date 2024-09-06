<!-- Viser alle saker i Github knytta til denne komponenten -->
<template>
  <div v-if="showHeader">
    <h2 id="issues">
      Feil / oppgaver / PR
      <a class="header-anchor" href="#issues" aria-label='Permalink to "Issues"'>&ZeroWidthSpace;</a>
    </h2>
  </div>
  <ul v-if="issues?.length > 0">
    <li v-for="issue of issues">
      <a :href="issue.url" target="_blank">{{ issue.title }} <span v-if="issue.isPullRequest"> (PR) </span></a>
    </li>
  </ul>
  <p v-else v-if="showHeader">
    Ingen som vi vet om. Hvis du finner noe muffens, registrer en feil under
    <a href="https://github.com/NVE/Designsystem/issues" target="_blank">Issues i Github</a> og merk den med
    <span class="code">{{ componentName }}</span
    >.
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import githubStore from '../github.store';

const props = defineProps<{
  componentName: string;
  showHeader?: boolean;
}>();

const issues = computed(() => githubStore.issuesForComponent(props.componentName));
</script>

<style scoped>
ul {
  margin: 0;
}

.code {
  background-color: #f0f0f0;
  padding: 2px 4px;
  border-radius: 4px;
}
</style>
