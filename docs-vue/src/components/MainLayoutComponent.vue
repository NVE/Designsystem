<template>
  <div style="display: flex">
    <aside>
      <PageIndexComponent></PageIndexComponent>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import PageIndexComponent from './PageIndexComponent.vue';
</script>

<style scoped></style>
