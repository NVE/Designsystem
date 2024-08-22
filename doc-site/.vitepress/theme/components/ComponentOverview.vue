<!-- Viser liste over alle komponenter med status på design og utvikling -->
<template>
  <LinkButton
    URL="https://www.figma.com/design/0eXhyUrUF7fWi1VaphfpEu/04---%E2%9D%96-Komponenter?node-id=111-25&m=dev"
    text="Til komponentoversikt i Figma"
    :openInNewTab="true"
  />

  <div>
    <table>
      <thead>
        <tr>
          <th>Komponent</th>
          <th>Status kode</th>
          <th>Status design</th>
          <th>Feil / oppgaver</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(component, index) in componentStatuses" :key="index">
          <td>
            <a v-if="isComponent(component.name)" :href="component.name">{{ component.name }}</a>
            <span v-else>{{ component.name }}</span>
          </td>
          <td>
            <div v-if="!isComponent(component.name) && component.statusCode === 'Ferdig'">
              Status er satt til ferdig, men komponenten finnes ikke
            </div>
            <div v-else>
              <nve-badge :variant="getBadgeVariant(component.statusCode)" low>
                {{ component.statusCode }}
              </nve-badge>
            </div>
          </td>
          <td>
            <span class="status-design-container">
              <nve-badge :variant="getBadgeVariant(component.statusDesign)" low>
                {{ component.statusDesign }}
              </nve-badge>
              <a
                v-if="component.nodeId"
                title="Åpne i Figma"
                :href="linkToFigmaComponent(component.nodeId)"
                target="_blank"
                class="figma-link"
              >
                <img src="/assets/figma-logo.svg" class="figma-icon" alt="figma-logo" />
              </a>
            </span>
          </td>
          <td>
            <ul v-if="issuesForComponent(component.name)?.length > 0">
              <li v-for="issue of issuesForComponent(component.name)">
                <a :href="issue.url" target="_blank"
                  >{{ issue.title }} <span v-if="issue.isPullRequest"> (PR) </span></a
                >
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Antall planlagte komponenter: {{ componentStatuses.length }}</td>
          <td>
            <!-- Antall komponenter i biblioteket per status -->
            <nve-badge variant="success" low
              >Ferdig: {{ componentStatuses.filter((status) => status.statusCode === 'Ferdig').length }}</nve-badge
            >
            <br />
            <nve-badge variant="warning" low
              >Under arbeid:
              {{ componentStatuses.filter((status) => status.statusCode === 'Under arbeid').length }}</nve-badge
            >
            <br />
            <nve-badge variant="neutral" low
              >Skal revideres / under revidering:
              {{
                componentStatuses.filter(
                  (status) => status.statusCode === 'Skal revideres' || status.statusCode === 'Revideres'
                ).length
              }}</nve-badge
            >
            <br />
            <nve-badge variant="brand" low
              >Trenger kvalitetssjekk:
              {{
                componentStatuses.filter((status) => status.statusCode === 'Trenger kvalitetssjekk').length
              }}</nve-badge
            >
            <br />
            <nve-badge variant="brand" low
              >Ukjent: {{ componentStatuses.filter((status) => status.statusCode == null).length }}</nve-badge
            >
          </td>
          <td>
            <!-- Antall komponenter i Figma per status -->
            <nve-badge variant="success" low
              >Ferdig: {{ componentStatuses.filter((status) => status.statusDesign === 'Ferdig').length }}</nve-badge
            >
            <br />
            <nve-badge variant="warning" low
              >Under arbeid:
              {{ componentStatuses.filter((status) => status.statusDesign === 'Under arbeid').length }}</nve-badge
            >
            <br />
            <nve-badge variant="neutral" low
              >Skal revideres / under revidering:
              {{
                componentStatuses.filter(
                  (status) => status.statusDesign === 'Skal revideres' || status.statusDesign === 'Revideres'
                ).length
              }}</nve-badge
            >
            <br />
            <nve-badge variant="brand" low
              >Trenger kvalitetssjekk:
              {{
                componentStatuses.filter((status) => status.statusDesign === 'Trenger kvalitetssjekk').length
              }}</nve-badge
            >
            <br />
            <nve-badge variant="brand" low
              >Ukjent: {{ componentStatuses.filter((status) => status.statusDesign == null).length }}</nve-badge
            >
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import LinkButton from './LinkButton.vue';
import { componentNames } from '../customElementsManifest.store';
import { fetchIssues, Issue } from '../github.services';
import { ref, defineProps, onMounted } from 'vue';

interface ComponentStatus {
  /** Navn på komponenten. F.eks. nve-button */
  name: string;

  /** nodeId er ID til komponent-sida i Figma. Den ligger som en parameter i URL'en til aktuell side når du ser på komponenten i Figma. */
  nodeId: string;

  /** En kort beskrivelse av komponenten */
  description?: string;

  /** Status på design i Figma. Bruk en av disse: 'Ferdig', 'Ikke påbegynt', 'Revideres', 'Skal revideres', 'Under arbeid', 'Trenger kvalitetssjekk'. Sett undefined hvis ukjent */
  statusDesign: string;

  /** Status på komponenten. Bruk en av disse: 'Ferdig', 'Ikke påbegynt', 'Revideres', 'Skal revideres', 'Under arbeid', 'Trenger kvalitetssjekk'. Sett undefined hvis ukjent */
  statusCode: string;
}

defineProps<{
  componentStatuses: ComponentStatus[];
}>();

const linkToFigmaComponent = (figmaId: string) => {
  return `https://www.figma.com/file/0eXhyUrUF7fWi1VaphfpEu/04---%E2%9D%96-Komponenter?node-id=${figmaId}`;
};

const isComponent = (name: string): boolean => {
  return componentNames.value.some((component) => component === name);
};

const issues = ref<Map<string, Issue[]>>(new Map<string, Issue[]>());

onMounted(async () => {
  issues.value = await fetchIssues();
});

const issuesForComponent = (componentName: string): Issue[] => {
  return issues.value.get(componentName) || [];
};

const getBadgeVariant = (status: string) => {
  switch (status) {
    case 'Ferdig':
      return 'success';
    case 'Ikke påbegynt':
      return 'primary';
    case 'Revideres':
    case 'Skal revideres':
      return 'neutral';
    case 'Under arbeid':
      return 'warning';
    case 'Trenger kvalitetssjekk':
      return 'brand';
    default:
      return '';
  }
};

// TODO: Sortering på status
// const sortOrder = [
//   'Ferdig',
//   'Under arbeid',
//   'Trenger kvalitetssjekk',
//   'Revideres',
//   'Skal revideres',
//   'Ferdig - Mangler Figma lenke',
//   'Ikke påbegynt',
// ];

// const sortedComponentsVersions = computed(() => {
//   return componentsVersions.slice().sort((a, b) => {
//     return sortOrder.indexOf(a.statusCode) - sortOrder.indexOf(b.statusCode);
//   });
// });
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

.dark th,
.dark td {
  background-color: black;
  color: white;
}

.status {
  display: inline-block;
  background-color: #e0e0e0;
  padding: 2px 5px;
  border-radius: 3px;
  margin-right: 10px;
}

.status-design-container {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
}

.figma-icon {
  cursor: pointer;
  width: 0.75rem;
}

.figma-link {
  text-decoration: none;
}
</style>
