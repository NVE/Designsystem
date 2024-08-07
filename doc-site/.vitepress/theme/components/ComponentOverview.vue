<template>
  <p>TODO Implement a solution that fetch the latest version of the Components</p>
  <LinkButton
    URL="https://www.figma.com/design/0eXhyUrUF7fWi1VaphfpEu/04---%E2%9D%96-Komponenter?node-id=111-25&m=dev"
    text="Åpne Figma komponentoversikt"
    :openInNewTab="true"
  />

  <div>
    <table>
      <thead>
        <tr>
          <th>Publisert versjon</th>
          <th>Type komponent</th>
          <th>Status design</th>
          <th>Status kode</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in sortedComponentsVersions" :key="index">
          <td>{{ row.publishedVersion }}</td>
          <td>
            <a :href="row.typeComponentLink">{{ row.typeComponent }}</a>
            <div>{{ row.description }}</div>
          </td>
          <td>
            <span class="status-design-container">
              <nve-badge :variant="getBadgeVariant(row.statusDesign)" style="padding: 1rem 0">
                {{ row.statusDesign }}
              </nve-badge>
              <nve-tooltip content="Åpne i Figma">
                <nve-icon
                  class="figma-icon"
                  @click.prevent="openINewTab(row.statusDesignLink)"
                  name="design_services"
                ></nve-icon>
              </nve-tooltip>
            </span>
          </td>
          <td>
            <nve-badge :variant="getBadgeVariant(row.statusCode)" style="padding: 1rem">
              {{ row.statusCode }}
            </nve-badge>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import LinkButton from './LinkButton.vue';
import { componentsVersions } from '../../../assets/componentVersionsData';

const openINewTab = (url: string) => {
  window.open(url, '_blank');
};
const getBadgeVariant = (status: string) => {
  switch (status) {
    case 'Ferdig':
      return 'success';
    case 'Ikke påbegynt':
      return 'primary';
    case 'Revideres':
      return 'neutral';
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
  text-align: center;
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
  padding-right: 8px;
}
</style>
