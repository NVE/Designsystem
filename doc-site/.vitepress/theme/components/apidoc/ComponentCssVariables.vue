<!-- 
 Viser API-dokumentasjon for alle spesifikke css-variabler til en komponent
 Henter opplysningene fra custom-elements.json.
 -->
<template>
  <template v-if="customprops.length">
    <h2 id="spor">
      Spesifikke CSS-variabler for komponent
      <a class="header-anchor" href="#cssvariables" aria-label='Permalink to "cssvariables"'>&ZeroWidthSpace;</a>
    </h2>
    <table>
      <thead>
        <tr>
          <th style="min-width: max-content">Navn</th>
          <th>Beskrivelse</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="variable in customprops" :key="variable.name">
          <td style="width: 20%">
            {{ variable.name }}
          </td>
          <td style="width: auto">{{ variable.description }}</td>
        </tr>
      </tbody>
    </table>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getComponentCssVariables } from '../../customElementsManifest.store';

const props = defineProps<{
  componentName: string;
}>();

const customprops = computed(() => getComponentCssVariables(props.componentName));
</script>
