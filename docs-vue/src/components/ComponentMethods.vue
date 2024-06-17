<!-- 
 Viser API-dokumentasjon for alle metoder til en komponent
 Henter opplysningene fra custom-elements.json.
 -->
<template>
  <h2>Metoder</h2>
  <table>
    <tr>
      <td>Navn</td>
      <td>Returtype</td>
      <td>Arvet fra</td>
      <td>Beskrivelse</td>
    </tr>
    <tr v-for="field in fields">
      <td>{{ field.name }}</td>
      <td>{{ field.return?.type?.text }}</td>
      <td>{{ field.inheritedFrom?.name }}</td>
      <td>{{ field.description }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getComponentMethods } from '../customElementsManifest.store';

const props = defineProps<{
  componentName: string;
}>();

const fields = computed(() => getComponentMethods(props.componentName));
</script>

<style scoped>
  th {
    text-align: left;
  }
</style>