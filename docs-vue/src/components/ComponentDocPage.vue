/**
 * Viser dokumentasjonssida for en komponent.
 * Inneholder 
 * - overskrift (navn på komponenten), 
 * - beskrivelse av komponenten (fra JsDoc), 
 * - hjelpetekst med kodeeksempler (fra komponentens markdown-fil),
 * - API-dokumentasjon (fra JsDoc)
 */
 <template>
    <div>
      <h1>{{ componentName }}</h1>
      <ComponentDescription :componentName></ComponentDescription>
      <WebComponent></WebComponent>
    </div>
 </template>
 
 <script setup lang="ts">

    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import ComponentDescription from './ComponentDescription.vue';
    import WebComponent from './WebComponent.vue';

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
