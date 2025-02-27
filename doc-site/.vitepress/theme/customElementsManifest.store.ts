/**
 * Tilbyr metadata om web-komponentene. Data hentes fra custom-elements.json ved oppstart
 */
import { ref } from 'vue';
import customElementsManifest from '../../../dist/custom-elements.json';
import {
  Package,
  Module,
  ClassDeclaration,
  ClassMember,
  ClassMethod,
  Reference,
  CustomElementField,
  CustomElementDeclaration,
  Slot,
  Event,
  CssPart,
  CssCustomProperty,
} from 'custom-elements-manifest/schema';

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
  const classDeclaration = module?.declarations?.find((declaration) => declaration.kind === 'class');
  return classDeclaration?.description || undefined;
};

/**
 * @param name navnet på komponenten, f.eks. `nve-checkbox`
 * @returns en referanse til komponenten denne komponenten arver fra, eller undefined om komponenten ikke arver fra noen
 */
export const getComponentParent = (name: string): Reference | undefined => {
  const module = getModuleByName(name);
  const classDeclaration = module?.declarations?.find(
    (declaration) => declaration.kind === 'class'
  ) as ClassDeclaration;
  return classDeclaration?.superclass || undefined;
};

/**
 * @param componentName navnet på komponenten, f.eks. `nve-checkbox`
 * @returns alle egenskaper til komponenten. Tom liste om vi ikke finner noe.
 */
export const getComponentFields = (componentName: string): CustomElementField[] => {
  const members = getComponentMembers(componentName);
  return (members.filter((member) => member.kind === 'field' && !member.static) as CustomElementField[]) || [];
};

/**
 * @param componentName navnet på komponenten, f.eks. `nve-checkbox`
 * @returns alle metoder til komponenten. Tom liste om vi ikke finner noe.
 */
export const getComponentMethods = (componentName: string): ClassMethod[] => {
  return (getComponentMembers(componentName).filter((member) => member.kind === 'method') as ClassMethod[]) || [];
};

/**
 * @param componentName navnet på komponenten, f.eks. `nve-checkbox`
 * @returns alle spor til komponenten. Tom liste om vi ikke finner noe.
 */
export const getComponentSlots = (componentName: string): Slot[] => {
  return (getComponentClassDeclaration(componentName)?.slots as Slot[]) || [];
};

/**
 * @param componentName navnet på komponenten, f.eks. `nve-checkbox`
 * @returns alle hendelser til komponenten. Tom liste om vi ikke finner noe.
 */
export const getComponentEvents = (componentName: string): Event[] => {
  return (getComponentClassDeclaration(componentName)?.events as Event[]) || [];
};

/**
 * @param componentName navnet på komponenten, f.eks. `nve-checkbox`
 * @returns alle css-deler til komponenten. Tom liste om vi ikke finner noe.
 */
export const getComponentParts = (componentName: string): CssPart[] => {
  return (getComponentClassDeclaration(componentName)?.cssParts as CssPart[]) || [];
};

const getComponentMembers = (componentName: string): ClassMember[] => {
  return (getComponentClassDeclaration(componentName)?.members as ClassMember[]) || [];
};

const getComponentClassDeclaration = (componentName: string): CustomElementDeclaration | undefined => {
  const module = getModuleByName(componentName);
  return module?.declarations?.find((declaration) => declaration.kind === 'class') as CustomElementDeclaration;
};

export const getComponentCssVariables = (componentName: string): CssCustomProperty[] => {
  return (getComponentClassDeclaration(componentName)?.cssProperties as CssCustomProperty[]) || [];
};

/**
 * @returns en komponent med angitt navn eller undefined om komponenten ikke finnes
 */
const getModuleByName = (name: string): Module | undefined => {
  const allModules = getAllModulesByName(name);
  const module = allModules.at(0);
  return module;
};

const getAllModulesByName = (name: string): Array<Module> => {
  const allModules = modules.value.filter((module) => getComponentName(module) === name);
  return allModules;
};

const getComponentName = (module: Module): string | undefined => {
  const name = module.path.split('/').pop()?.replace('.js', '')?.replace('.component.ts', '');
  return name;
};

// Henter navn på alle komponentene ved oppstart
modules.value.forEach((module) => {
  const name = getComponentName(module);
  if (name && !componentNames.value.includes(name)) {
    componentNames.value.push(name);
  }
});
componentNames.value.sort();
