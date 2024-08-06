<template>
    <div class="header-container">
            <h1 class="title">{{title}}</h1>
        <img :src=getImage(imagePath) alt="">
    </div>
  </template>
  
  <script setup lang="ts">
    import { useData } from 'vitepress'
  type Props = {
    title: string,
    imagePath: string,
    pageLevel: string
  }
  const { title, imagePath, pageLevel } = defineProps<Props>();

  const { isDark } = useData()

  const getImage = (imagePath: string) => {
    let pageLevelString = "../"; 
    switch (pageLevel) {
      case "2":
      pageLevelString = "../../"
      case "3":
      pageLevelString = "../../../"
    }
    switch (imagePath) {
      case "intro":
        return isDark.value ? pageLevelString +'assets/images/intro-dark-mode.svg':pageLevelString+ 'assets/images/intro.png';
      case "designer":
        return isDark.value ? pageLevelString + 'assets/images/design-services-dark-mode.svg': pageLevelString + 'assets/images/design-services.png';
      case "developer":
        return isDark.value ? pageLevelString + 'assets/images/code-blocks-dark-mode.svg': pageLevelString + 'assets/images/code-blocks.png';
    }
  }

  </script>
  
  <style scoped>
    .header-container {
        background:  #F7F7F8;
        height:116px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--spacing-3x-large, 4rem);
    }

    .dark .header-container {
        background:  #292A2C;
        color: #fff;
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

    .dark .title {
        color: #fff;
    }

  </style>
  