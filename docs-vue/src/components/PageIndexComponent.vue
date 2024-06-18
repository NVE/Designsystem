<!-- 
 Oversikt over alle sider i applikasjonen.
 De fleste sidene mapper til en markdown-fil under /doc/pages.
  -->
<template>
  <nve-label>NVE Designsystem</nve-label>
  <ul>
    <li>
      <router-link to="/vue">
        Bruk i Vue
      </router-link>
    </li>
    <li>
      <router-link to="/validation">
        Validering
      </router-link>
    </li>
    <li>Komponenter</li>
    <ul>
      <li
        v-for="componentName in componentNames"
        :key="componentName"
      >
        <router-link :to="`/components/${componentName}`">
          {{ componentName }}
        </router-link>
      </li>
    </ul>
  </ul>
</template>

<script setup lang="ts">
import { componentNames } from '../customElementsManifest.store';
</script>
