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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(component, index) in componentStatuses" :key="index">
          <td>
            <a v-if="doWeHaveComponent(component.name)" :href="component.name">{{ component.name }}</a>
            <span v-else>{{ component.name }}</span>
          </td>
          <td>
            <nve-badge :variant="getBadgeVariant(component.statusCode)" style="padding: 1rem">
              {{ component.statusCode }}
            </nve-badge>
          </td>
          <td>
            <span class="status-design-container">
              <nve-badge :variant="getBadgeVariant(component.statusDesign)" style="padding: 1rem 0">
                {{ component.statusDesign }}
              </nve-badge>
              <a
                v-if="component.nodeId"
                title="Åpne i Figma"
                :href="linkToFigmaComponent(component.nodeId)"
                target="_blank"
                class="figma-link"
              >
                <nve-icon class="figma-icon" name="design_services"></nve-icon>
              </a>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import LinkButton from './LinkButton.vue';
import { componentNames } from '../customElementsManifest.store';

export interface ComponentStatus {
  name: string;
  nodeId: string;
  description?: string;
  statusDesign: string;
  statusCode: string;
}

const props = defineProps<{
  componentStatuses: ComponentStatus[];
}>();

const linkToFigmaComponent = (figmaId: string) => {
  return `https://www.figma.com/file/0eXhyUrUF7fWi1VaphfpEu/04---%E2%9D%96-Komponenter?node-id=${figmaId}`;
};

const doWeHaveComponent = (name: string): boolean => {
  return componentNames.value.some((component) => component === name);
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
    case 'Ferdig - Mangler Figma lenke':
      return 'danger';
    default:
      return '';
  }
};

const sortOrder = [
  'Ferdig',
  'Under arbeid',
  'Trenger kvalitetssjekk',
  'Revideres',
  'Skal revideres',
  'Ferdig - Mangler Figma lenke',
  'Ikke påbegynt',
];

const sortedComponentsVersions = computed(() => {
  return componentsVersions.slice().sort((a, b) => {
    return sortOrder.indexOf(a.statusCode) - sortOrder.indexOf(b.statusCode);
  });
});
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
  justify-content: space-around;
  align-items: center;
}

.figma-icon {
  cursor: pointer;
  font-size: 26px;
}

.figma-link {
  text-decoration: none;
}
</style>
