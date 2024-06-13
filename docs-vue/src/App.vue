<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import '../styles/global.css';
import '../styles/varsom.css';
import '../styles/codePreview.css';
//sikre at den importeres fra bibliotekk i prod
import '../../src/components/nve-icon/nve-icon.component';
</script>
