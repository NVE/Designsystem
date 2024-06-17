/// Tilbyr metadata om web-komponentene
import { ref } from 'vue';
import customElementsManifest from '../../dist/custom-elements.json';

export const modules = ref(customElementsManifest.modules);

/**
 * Liste over navn på komponentene
 */
export const componentNames = ref<string[]>([]);

/**
 * @param name navnet på komponenten, f.eks. `nve-checkbox`
 * @returns beskrivelse av komponenten eller undefined om beskrivelse mangler eller komponent ikke finnes
 */
export const componentDescription = (name: string): string | undefined => {
    const module = modules.value.find(module => componentName(module) === name);
    return module?.declarations[0]?.description || undefined;
};

const componentName = (module: any): string => {
    return module.path.split('/').pop()?.replace('.js', '');
}

modules.value.forEach((module) => {
    const name = componentName(module);
    if (name) {
        componentNames.value.push(name);
    }
});


