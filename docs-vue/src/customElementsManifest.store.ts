/// Tilbyr metadata om web-komponentene
import { ref } from 'vue';
import customElementsManifest from '../../dist/custom-elements.json';
import { Package, ClassField, Module, ClassDeclaration, ClassMember, ClassMethod } from 'custom-elements-manifest/schema';

export const modules = ref<Array<Module>>((customElementsManifest as Package)['modules']);

/**
 * Liste over navn på komponentene
 */
export const componentNames = ref<string[]>([]);

/**
 * @param name navnet på komponenten, f.eks. `nve-checkbox`
 * @returns beskrivelse av komponenten eller undefined om beskrivelse mangler eller komponent ikke finnes
 */
export const getComponentDescription = (name: string): string | undefined => {
    const module = getModuleByName(name);
    const classDeclaration = module?.declarations?.find(declaration => declaration.kind === 'class');
    return classDeclaration?.description || undefined;
};

/**
 * @param componentName navnet på komponenten, f.eks. `nve-checkbox`
 * @returns alle properties og attributter til komponenten. Tom liste om vi ikke finner noe.
 */
export const getComponentFields = (componentName: string): ClassField[] => {
    const members = getComponentMembers(componentName);
    return members.filter(member => member.kind === 'field' && !member.static) as ClassField[] || [];
};

/**
 * @param componentName navnet på komponenten, f.eks. `nve-checkbox`
 * @returns alle metoder til komponenten. Tom liste om vi ikke finner noe.
 */
export const getComponentMethods = (componentName: string): ClassMethod[] => {
    return getComponentMembers(componentName).filter(member => member.kind === 'method') as ClassMethod[] || [];
};

const getComponentMembers = (componentName: string): ClassMember[] => {
    const module = getModuleByName(componentName);
    const classDeclaration = module?.declarations?.find(declaration => declaration.kind === 'class') as ClassDeclaration;
    const members = classDeclaration?.members as ClassMember[] || [];
    return members;
};

const getModuleByName = (name: string): Module | undefined => {
    return modules.value.find(module => componentName(module) === name);
}

const componentName = (module: any): string => {
    return module.path.split('/').pop()?.replace('.js', '');
}

modules.value.forEach((module) => {
    const name = componentName(module);
    if (name) {
        componentNames.value.push(name);
    }
});


