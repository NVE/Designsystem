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
        <li v-for="componentName in componentNames" :key="componentName">
            <router-link :to="`/components/${componentName}`">{{ componentName }}</router-link>
        </li>
    </ul>   
</template>

<script setup lang="ts">
import '../../styles/global.css';
import '../../styles/varsom.css';
import { componentNames } from '../customElementsManifest.store';
</script>

