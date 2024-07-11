<!-- 
 Viser API-dokumentasjon for alle metoder til en komponent
 Henter opplysningene fra custom-elements.json.
 -->
<template>
  <h2 id="metoder">
    Metoder
    <a class="header-anchor" href="#metoder" aria-label='Permalink to "Metoder"'>&ZeroWidthSpace;</a>
  </h2>
  <table>
    <tr>
      <td>Navn</td>
      <td>Parametre</td>
      <td>Returtype</td>
      <td>Arvet fra</td>
      <td>Beskrivelse</td>
    </tr>
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
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getComponentMethods } from '../../customElementsManifest.store';

const props = defineProps<{
  componentName: string;
}>();

const methods = computed(() => getComponentMethods(props.componentName));
</script>
