<!-- 
 Viser API-dokumentasjon for alle spor til en komponent
 Henter opplysningene fra custom-elements.json.
 -->
<template>
  <h2>Spor</h2>
  <table>
    <tr>
      <td>Navn</td>
      <td>Beskrivelse</td>
    </tr>
    <tr
      v-for="slot in slots"
      :key="slot.name"
    >
      <td v-if="slot.name">
        {{ slot.name }}
      </td>
      <td v-else>
        (standard)
      </td>
      <td>{{ slot.description }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getComponentSlots } from '../../customElementsManifest.store';

const props = defineProps<{
  componentName: string;
}>();

const slots = computed(() => getComponentSlots(props.componentName));
</script>
