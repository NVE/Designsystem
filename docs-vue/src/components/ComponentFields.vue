<!-- 
 Viser API-dokumentasjon for alle felter til en komponent
 Henter opplysningene fra custom-elements.json.
 -->
<template>
  <h2>Felter</h2>
  <!-- TODO: Hvordan kan vi vise om en property er et attributt eller ikke? Finner ikke dette i custom-elmenets.json -->
  <table>
    <tr>
      <td>Navn</td>
      <td>Type</td>
      <td>Standardverdi</td>
      <td>Arvet fra</td>
      <td>Beskrivelse</td>
    </tr>
    <tr v-for="field in fields">
      <td>{{ field.name }}</td>
      <td>{{ field.type?.text }}</td>
      <td>{{ field.default }}</td>
      <td>{{ field.inheritedFrom?.name }}</td>
      <td>{{ field.description }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getComponentFields } from '../customElementsManifest.store';

const props = defineProps<{
  componentName: string;
}>();

const fields = computed(() => getComponentFields(props.componentName));
</script>

<style scoped>
  th {
    text-align: left;
  }
</style>