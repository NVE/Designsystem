<!-- 
 Viser API-dokumentasjon for alle css-deler til en komponent
 Henter opplysningene fra custom-elements.json.
 -->
<template>
  <template v-if="parts.length">
    <h2 id="deler">
      Deler
      <a class="header-anchor" href="#deler" aria-label='Permalink to "Deler"'>&ZeroWidthSpace;</a>
    </h2>
    <table>
      <thead>
        <tr>
          <th>Navn</th>
          <th>Beskrivelse</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="part in parts" :key="part.name">
          <td>{{ part.name }}</td>
          <td style="width: 100%">{{ part.description }}</td>
        </tr>
      </tbody>
    </table>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getComponentParts } from '../../customElementsManifest.store';

const props = defineProps<{
  componentName: string;
}>();

const parts = computed(() => getComponentParts(props.componentName));
</script>
