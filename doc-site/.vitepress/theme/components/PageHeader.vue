<template>
    <div class="header-container">
            <h1 class="title">{{title}}</h1>
        <img :src=imagePath alt="">
    </div>
  </template>
  
  <script setup lang="ts">
  type Props = {
    title: string,
    imagePath: string
  }
  const { title, imagePath } = defineProps<Props>();

  </script>
  
  <style scoped>
    .header-container {
        background:  #F7F7F8;
        /* width: 887px; */
        height:116px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--spacing-3x-large, 4rem);
    }

    .title {
        font-family: Source Sans Pro;
        font-size: 32px;
        font-weight: 600;
        line-height: 40px;
        text-align: left;
        color: #000000;
        padding-left: 2rem;
    }
  </style>
  