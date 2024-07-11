<!-- 
 Viser API-dokumentasjon for alle felter til en komponent
 Henter opplysningene fra custom-elements.json.
 -->
<template>
  <h2 id="egenskaper">
    Egenskaper
    <a class="header-anchor" href="#egenskaper" aria-label='Permalink to "Egenskaper"'>&ZeroWidthSpace;</a>
  </h2>
  <table>
    <tr>
      <td>Navn</td>
      <td>Attributt-synk</td>
      <td>Type</td>
      <td>Standardverdi</td>
      <td>Arvet fra</td>
      <td>Beskrivelse</td>
    </tr>
    <tr v-for="field in fields" :key="field.name">
      <td>{{ field.name }}</td>
      <td>
        <nve-icon v-if="field.reflects" name="Check" />
      </td>
      <td>{{ field.type?.text }}</td>
      <td>{{ field.default }}</td>
      <td>{{ field.inheritedFrom?.name }}</td>
      <td>{{ field.description }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getComponentFields } from '../../customElementsManifest.store';

const props = defineProps<{
  componentName: string;
}>();

const fields = computed(() => getComponentFields(props.componentName));
</script>
