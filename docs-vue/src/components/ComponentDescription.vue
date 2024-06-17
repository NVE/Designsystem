<!-- 
 Viser beskrivelsen til en komponent.
 Beskrivelsen er selve klasse-dokumentasjonen til komponenten, og hentes fra JsDoc.
 -->
<template>
  <div v-if="description" v-html="description"></div>
  <div v-else>Beskrivelse mangler.</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getComponentDescription } from '../customElementsManifest.store';

const props = defineProps<{
  componentName: string;
}>();

const description = computed(() => getComponentDescription(props.componentName));
</script>