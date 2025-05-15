<!-- Viser liste over alle komponenter med status på design og utvikling -->
<template>
  <div style="padding-top: 2rem"></div>

  <nve-message-card
    title="Merk saker og PR'er i Github med komponentnavn for å se dem her"
    size="simple"
  ></nve-message-card>

  <div class="search-container">
    <nve-input
      type="text"
      :value="searchQuery"
      @input="onInput"
      placeholder="Søk etter komponentnavn"
      class="search-input"
    />
  </div>

  <div>
    <table>
      <thead>
        <tr>
          <th>Komponent</th>
          <th colspan="2">Status design</th>
          <th>Status kode</th>
          <th>Feil / oppgaver / PR</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(component, index) in filteredComponents" :key="index">
          <td>
            <a v-if="isComponent(component.name)" :href="component.name">{{ component.name }}</a>
            <span v-else>{{ component.name }}</span>
          </td>
          <td class="status-design">
            <nve-tag :variant="getBadgeVariant(component.statusDesign)" size="small">
              {{ component.statusDesign }}
            </nve-tag>
          </td>
          <td class="figma-link-cell">
            <a
              v-if="component.nodeId"
              title="Åpne i Figma"
              :href="linkToFigmaComponent(component.nodeId)"
              target="_blank"
              class="figma-link"
            >
              <img src="/assets/figma-logo.svg" class="figma-icon" alt="figma-logo" />
            </a>
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
            <ComponentIssues :componentName="component.name" />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <!-- Separarer sammendraget fra resten av tabellen, så det ser ut som en egen tabell -->
          <td class="divider-row"></td>
        </tr>
        <tr>
          <th rowspan="7">Antall komponenter</th>
          <td>{{ codeStatusCount('Ferdig') }}</td>
          <td colspan="2">{{ designStatusCount('Ferdig') }}</td>
          <td><nve-tag variant="success" size="small">Ferdig</nve-tag></td>
        </tr>
        <tr>
          <td>{{ codeStatusCount('Under arbeid') }}</td>
          <td colspan="2">{{ designStatusCount('Under arbeid') }}</td>
          <td><nve-tag variant="warning" size="small">Under arbeid</nve-tag></td>
        </tr>
        <tr>
          <td>{{ codeStatusCount('Ikke påbegynt') }}</td>
          <td colspan="2">{{ designStatusCount('Ikke påbegynt') }}</td>
          <td><nve-tag variant="info" size="small">Ikke påbegynt</nve-tag></td>
        </tr>
        <tr>
          <td>{{ codeStatusCount('Skal revideres') }}</td>
          <td colspan="2">{{ designStatusCount('Skal revideres') }}</td>
          <td><nve-tag variant="neutral" size="small">Skal revideres</nve-tag></td>
        </tr>
        <tr>
          <td>{{ codeStatusCount('Trenger kvalitetssjekk') }}</td>
          <td colspan="2">{{ designStatusCount('Trenger kvalitetssjekk') }}</td>
          <td><nve-tag variant="error" size="small">Trenger kvalitetssjekk</nve-tag></td>
        </tr>
        <tr>
          <td>{{ componentStatuses.filter((s) => s.statusCode !== undefined).length }}</td>
          <td colspan="2">{{ componentStatuses.filter((s) => s.statusDesign !== undefined).length }}</td>
          <td><nve-tag variant="neutral" size="small">Alle planlagte</nve-tag></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { componentNames } from '../customElementsManifest.store';
import ComponentIssues from './ComponentIssues.vue';
import { ref, computed } from 'vue';

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

const searchQuery = ref('');
const sortedComponentStatuses = computed(() =>
  [...props.componentStatuses].sort((a, b) => a.name.localeCompare(b.name))
);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  searchQuery.value = target.value;
};

const filteredComponents = computed(() => {
  const searchLower = searchQuery.value.toLowerCase();
  return sortedComponentStatuses.value.filter((component) => component.name.toLowerCase().includes(searchLower));
});

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

const getBadgeVariant = (status: string) => {
  switch (status) {
    case 'Ferdig':
      return 'success';
    case 'Ikke påbegynt':
      return 'info';
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
  background-color: white;
}

.divider-row {
  border: none;
}

.status-design {
  border-right: none;
}

.figma-link-cell {
  width: 2rem;
  border-left: none;
}

.figma-icon {
  cursor: pointer;
  width: 0.75rem;
}

.figma-link {
  text-decoration: none;
}

ul {
  margin: 0;
}

.search-container {
  margin: 2rem 0 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-input {
  width: 100%;
}
</style>
