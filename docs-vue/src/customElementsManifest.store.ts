/// Tilbyr metadata om web-komponentene
import { ref } from 'vue';
import customElementsManifest from '../../dist/custom-elements.json';

export const modules = ref(customElementsManifest.modules);
export const componentNames = ref<string[]>([]);

modules.value.forEach((module) => {
    const name = module.path.split('/').pop()?.replace('.js', '');
    if (name) {
        componentNames.value.push(name);
    }
});

