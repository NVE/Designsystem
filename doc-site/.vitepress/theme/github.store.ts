/**
 * Tilbyr data fra designsystem-repo'et i Github
 * For å koble en sak eller PR i Github til en komponent, merk den med komponent-navnet, f.eks. `nve-checkbox`
 */

import { fetchIssues, Issue } from './github.services';
import { reactive, ref } from 'vue';

export const issues = ref<Map<string, Issue[]>>(new Map<string, Issue[]>());

//initiell lasting av saker
fetchIssues().then((data) => {
  issues.value = data;
});

/**
 * Hent åpne saker og PR-er knytta til komponent.
 *
 * @param componentName navn på komponenten, f.eks. `nve-checkbox`
 * @returns en liste av saker eller tom liste hvis ingen saker er knytta til komponenten
 */
const issuesForComponent = (componentName: string): Issue[] => {
  return issues.value.get(componentName) || [];
};

const githubStore = reactive({
  issuesForComponent,
});
export default githubStore;
