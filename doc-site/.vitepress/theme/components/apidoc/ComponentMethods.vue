<!-- 
 Viser API-dokumentasjon for alle metoder til en komponent
 Henter opplysningene fra custom-elements.json.
 Vi trenger ikke å vise private metoder, men også lit lifecycle methods, derfor blir de filtrert bort.
-->
<template>
  <template v-if="methods.length">
    <h2 id="metoder">
      Metoder
      <a class="header-anchor" href="#metoder" aria-label='Permalink to "Metoder"'>&ZeroWidthSpace;</a>
    </h2>
    <table>
      <thead>
        <tr>
          <th>Navn</th>
          <th>Parametre</th>
          <th>Returtype</th>
          <th>Arvet fra</th>
          <th>Beskrivelse</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="method in methods" :key="method.name">
          <td>{{ method.name }}</td>
          <td>
            <div v-for="parameter in method.parameters" :key="parameter.name">
              {{ parameter.name }}: {{ parameter.type?.text }}
            </div>
          </td>
          <td>{{ method.return?.type?.text }}</td>
          <td>{{ method.inheritedFrom?.name }}</td>
          <td>{{ method.description }}</td>
        </tr>
      </tbody>
    </table>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getComponentMethods } from '../../customElementsManifest.store';

const props = defineProps<{
  componentName: string;
}>();

/** Lifecycle metoder fra lit, eller alt annet som vi ikke skal vise i doc sida. */
const methodsToExclude = [
  'render',
  'connectedCallback',
  'disconnectedCallback',
  'attributeChangedCallback',
  'adoptedCallback',
  'requestUpdate',
  'hasChanged',
  'shouldUpdate',
  'willUpdate',
  'update',
  'firstUpdated',
  'updated',
  'updateComplete',
];

const methods = computed(() =>
  getComponentMethods(props.componentName).filter((m) => m.privacy !== 'private' && !methodsToExclude.includes(m.name))
);
</script>
