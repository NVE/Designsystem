/**
 * Viser dokumentasjonssida for en komponent.
 * Inneholder 
 * - overskrift (navn på komponenten, fra JsDoc), 
 * - beskrivelse av komponenten (fra JsDoc), 
 * - hjelpetekst med kodeeksempler (fra komponentens markdown-fil),
 * - API-dokumentasjon (fra JsDoc)
 */
<template>
  <div>
    <h1>{{ componentName }}</h1>
    <ComponentDescription :component-name />
    <WebComponent />
    <ComponentSlots :component-name />
    <ComponentEvents :component-name />
    <ComponentFields :component-name />
    <ComponentMethods :component-name />
    <ComponentParts :component-name />
  </div>
</template>
 
 <script setup lang="ts">

    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import ComponentDescription from './ComponentDescription.vue';
    import WebComponent from './WebComponent.vue';
    import ComponentFields from './apidoc/ComponentFields.vue';
    import ComponentMethods from './apidoc/ComponentMethods.vue';
    import ComponentSlots from './apidoc/ComponentSlots.vue';
    import ComponentEvents from './apidoc/ComponentEvents.vue';
    import ComponentParts from './apidoc/ComponentParts.vue';

    const route = useRoute();
    const componentName = ref<string>('');

    watch(
    () => route.params.component,
    async (newComponent, oldComponent) => {
        if (newComponent !== oldComponent) {
            componentName.value = route.params.component as string;
        }   
    },
    { immediate: true }
    );

 </script>
