<!-- 
 Viser API-dokumentasjon for alle hendelser til en komponent
 Henter opplysningene fra custom-elements.json.
 -->
<template>
  <template v-if="events.length">
    <h2 id="hendelser">
      Hendelser
      <a class="header-anchor" href="#hendelser" aria-label='Permalink to "Hendelser"'>&ZeroWidthSpace;</a>
    </h2>
    <table>
      <tr>
        <td>Navn</td>
        <td>Arvet fra</td>
        <td>Beskrivelse</td>
      </tr>
      <tr v-for="event in events" :key="event.name">
        <td v-if="event.name">
          {{ event.name }}
        </td>
        <td v-else>(standard)</td>
        <td>{{ event.inheritedFrom?.name }}</td>
        <td style="width: 60%">{{ event.description }}</td>
      </tr>
    </table>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getComponentEvents } from '../../customElementsManifest.store';

const props = defineProps<{
  componentName: string;
}>();

const events = computed(() => getComponentEvents(props.componentName));
</script>
