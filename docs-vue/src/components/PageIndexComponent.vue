<!-- 
 En liste over alle sider i applikasjonen.
 Hvert innslag i lista er en link til en side.
 Lista er organisert som en trestruktur.
  -->
<template>
    <h1>Innholdsfortegnelse</h1>
    <h2>Validering</h2>
    <h2>Bruk i Vue</h2>
    <h2>Komponenter</h2>
    <ul>
        <li v-for="page in componentPages" :key="page.name">
            <router-link :to="page.path">{{ page.name }}</router-link>
        </li>
    </ul>   
</template>

<script setup lang="ts">
interface ComponentPage {
    name: string;
    path: string;
}
import '../../styles/global.css';
import '../../styles/varsom.css';
import { onMounted, ref } from 'vue';
import customElementsManifest from '../../../dist/custom-elements.json';

const componentPages = ref<ComponentPage[]>([]);

onMounted(async () => {
    customElementsManifest.modules.forEach((module) => {
        console.log(module.path);
        const name = module.path.split('/').pop()?.replace('.js', '');
        const path = `/components/${name}`;
        componentPages.value.push({
            name: name || 'Ukjent navn',
            path: path
        });
    });
});
</script>
