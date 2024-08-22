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
              <nve-tag :variant="getBadgeVariant(component.statusCode)" size="small">
                {{ component.statusCode }}
              </nve-tag>
            </div>
          </td>
          <td>
            <span class="status-design-container">
              <nve-tag :variant="getBadgeVariant(component.statusDesign)" size="small">
                {{ component.statusDesign }}
              </nve-tag>
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
          <th rowspan="7">Antall komponenter</th>
          <td>{{ codeStatusCount('Ferdig') }}</td>
          <td>{{ designStatusCount('Ferdig') }}</td>
          <td><nve-tag variant="success" size="small">Ferdig</nve-tag></td>
        </tr>
        <tr>
          <td>{{ codeStatusCount('Under arbeid') }}</td>
          <td>{{ designStatusCount('Under arbeid') }}</td>
          <td><nve-tag variant="warning" size="small">Under arbeid</nve-tag></td>
        </tr>
        <tr>
          <td>{{ codeStatusCount('Ikke påbegynt') }}</td>
          <td>{{ designStatusCount('Ikke påbegynt') }}</td>
          <td><nve-tag variant="info" size="small">Ikke påbegynt</nve-tag></td>
        </tr>
        <tr>
          <td>{{ codeStatusCount('Skal revideres') }}</td>
          <td>{{ designStatusCount('Skal revideres') }}</td>
          <td><nve-tag variant="neutral" size="small">Skal revideres</nve-tag></td>
        </tr>
        <tr>
          <td>{{ codeStatusCount('Revideres') }}</td>
          <td>{{ designStatusCount('Revideres') }}</td>
          <td><nve-tag variant="neutral" size="small">Revideres</nve-tag></td>
        </tr>
        <tr>
          <td>{{ codeStatusCount('Trenger kvalitetssjekk') }}</td>
          <td>{{ designStatusCount('Trenger kvalitetssjekk') }}</td>
          <td><nve-tag variant="error" size="small">Trenger kvalitetssjekk</nve-tag></td>
        </tr>
        <tr>
          <td>{{ componentStatuses.filter((s) => s.statusCode !== undefined).length }}</td>
          <td>{{ componentStatuses.filter((s) => s.statusDesign !== undefined).length }}</td>
          <td><nve-tag variant="neutral" size="small">Alle planlagte</nve-tag></td>
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

const props = defineProps<{
  componentStatuses: ComponentStatus[];
}>();

props.componentStatuses.sort((a, b) => a.name.localeCompare(b.name));

const linkToFigmaComponent = (figmaId: string) => {
  return `https://www.figma.com/file/0eXhyUrUF7fWi1VaphfpEu/04---%E2%9D%96-Komponenter?node-id=${figmaId}`;
};

const isComponent = (name: string): boolean => {
  return componentNames.value.some((component) => component === name);
};

const codeStatusCount = (status: string | null): number => {
  return props.componentStatuses.filter((s) => s.statusCode == status).length;
};

const designStatusCount = (status: string | null): number => {
  return props.componentStatuses.filter((s) => s.statusDesign == status).length;
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
      return 'info';
    case 'Revideres':
    case 'Skal revideres':
      return 'neutral';
    case 'Under arbeid':
      return 'warning';
    case 'Trenger kvalitetssjekk':
      return 'error';
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

tfoot > tr > td {
  text-align: right;
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
