<!-- 
 Oversikt over alle sider i applikasjonen.
 De fleste sidene mapper til en markdown-fil under /doc/pages.
  -->
<template>
  <h1>NVE Designsystem</h1>
  <h2>
    <router-link to="/validation">Validering</router-link>
  </h2>
  <h2>Bruk i Vue</h2>
  <h2>Komponenter</h2>
  <ul>
    <li v-for="componentName in componentNames" :key="componentName">
      <router-link :to="`/components/${componentName}`">{{ componentName }}</router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { componentNames } from '../customElementsManifest.store';
</script>
