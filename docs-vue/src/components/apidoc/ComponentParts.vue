<!-- 
 Viser API-dokumentasjon for alle css-deler til en komponent
 Henter opplysningene fra custom-elements.json.
 -->
<template>
  <h2>Deler</h2>
  <table>
    <tr>
      <td>Navn</td>
      <td>Beskrivelse</td>
    </tr>
    <tr
      v-for="part in parts"
      :key="part.name"
    >
      <td>{{ part.name }}</td>
      <td>{{ part.description }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getComponentParts } from '../../customElementsManifest.store';

const props = defineProps<{
  componentName: string;
}>();

const parts = computed(() => getComponentParts(props.componentName));
</script>
