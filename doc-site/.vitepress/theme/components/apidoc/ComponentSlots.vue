<!-- 
 Viser API-dokumentasjon for alle spor til en komponent
 Henter opplysningene fra custom-elements.json.
 -->
<template>
  <template v-if="slots.length">
    <h2 id="spor">
      Spor
      <a class="header-anchor" href="#spor" aria-label='Permalink to "Spor"'>&ZeroWidthSpace;</a>
    </h2>
    <table>
      <tr>
        <td>Navn</td>
        <td>Beskrivelse</td>
      </tr>
      <tr v-for="slot in slots" :key="slot.name">
        <td v-if="slot.name">
          {{ slot.name }}
        </td>
        <td v-else>(standard)</td>
        <td style="width: 100%">{{ slot.description }}</td>
      </tr>
    </table>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getComponentSlots } from '../../customElementsManifest.store';

const props = defineProps<{
  componentName: string;
}>();

const slots = computed(() => getComponentSlots(props.componentName));
</script>
