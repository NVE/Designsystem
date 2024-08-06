
<template>
        <p>TODO Implement a solution that fetch the latest version of the Components</p>

        <LinkButton URL="https://www.figma.com/design/0eXhyUrUF7fWi1VaphfpEu/04---%E2%9D%96-Komponenter?node-id=111-25&m=dev" text="Status for alle komponenter" :openInNewTab="true"/>

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
              <component :is="getBadge(row.statusDesign)" style="padding: 1rem 0;"></component>
              <br>
              <a @click.prevent="openINewTab(row.statusDesignLink)" href="#">Åpne i Figma</a>
            </td>
            <td>
              <component :is="getBadge(row.statusCode)" style="padding: 1rem 1rem;"></component>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
import { computed, h } from 'vue';
import LinkButton from './LinkButton.vue';
    import { componentsVersions } from '../../../assets/componentVersionsData';

    const openINewTab = (url: string) => {
      window.open(url, '_blank');
    };
    const getBadge = (status: string) => {
    switch (status) {
        case 'Ferdig':
          return h('nve-badge', { variant: 'success' }, [
            h('nve-icon', { name: 'info', slot: 'prefix', style: 'font-size: 26px; padding-right: 8px;' }),
            'Ferdig'
          ]);
        case 'Ikke påbegynt':
          return h('nve-badge', {}, 'Ikke påbegynt');
        case 'Revideres':
          return h('nve-badge', { variant: 'neutral' }, 'Revideres');
        case 'Skal revideres':
          return h('nve-badge', { variant: 'neutral' }, 'Skal revideres');
        case 'Under arbeid':
          return h('nve-badge', { variant: 'warning' }, 'Under arbeid');
        case 'Trenger kvalitetssjekk':
          return h('nve-badge', { variant: 'brand' }, 'Trenger kvalitetssjekk');
        case 'Ferdig - Mangler Figma lenke':
          return h('nve-badge', { variant: 'danger' }, 'Ferdig - Mangler Figma lenke');
        default:
          return h('span', {}, status);
      }
    };

    const sortOrder = ['Ferdig', 'Under arbeid', 'Trenger kvalitetssjekk','Revideres', 'Skal revideres', 'Ferdig - Mangler Figma lenke', 'Ikke påbegynt'];

const sortedComponentsVersions = computed(() => {
  return componentsVersions.slice().sort((a, b) => {
    return sortOrder.indexOf(a.statusCode) - sortOrder.indexOf(b.statusCode);
  });
});

  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
    text-align: left;
  }
  
  .status {
    display: inline-block;
    background-color: #e0e0e0;
    padding: 2px 5px;
    border-radius: 3px;
    margin-right: 10px;
  }
  </style>
  