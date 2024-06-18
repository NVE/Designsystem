<!-- 
 Viser beskrivelsen til en komponent.
 Beskrivelsen er selve klasse-dokumentasjonen til komponenten, og hentes fra JsDoc.
 -->
<template>
  <!-- TODO: Fjern v-html og erstatt med en komponent som håndterer markdown
    -->
  <div
    v-if="description"
    v-html="description"
  />
  <div v-else>
    Beskrivelse mangler.
  </div>

  <div v-if="parent">
    Arvet fra: 
    <span v-if="parentDocUrl">
      <a
        :href="parentDocUrl"
        target="_blank"
      >{{ parent.name }}</a>
    </span>
    <span v-else> {{ parent.name }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getComponentDescription, getComponentParent } from '../customElementsManifest.store';

const props = defineProps<{
  componentName: string;
}>();

const description = computed(() => getComponentDescription(props.componentName));
const parent = computed(() => getComponentParent(props.componentName));
const parentDocPagename = computed(() => parent.value?.package?.split('/').pop()?.replace('.js', ''));

const parentDocUrl = computed(() => 
  {
    if (parent.value?.package?.includes('shoelace')) {
      return `https://shoelace.style/components/${parentDocPagename.value}`; 
    }
    return undefined;
  });
</script>