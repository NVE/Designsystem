<template>
    <div class="header-container">
            <h1 class="title">{{title}}</h1>
        <img :src=getImage(imagePath) alt="">
    </div>
  </template>
  
  <script setup lang="ts">
    import { useData } from 'vitepress';
    import introDarkMode from '../../../assets/images/intro-dark-mode.svg';
    import intro from '../../../assets/images/intro.png';
    import designServicesDarkMode from '../../../assets/images/design-services-dark-mode.svg';
    import designServices from '../../../assets/images/design-services.png';
    import codeBlocksDarkMode from '../../../assets/images/code-blocks-dark-mode.svg';
    import codeBlocks from '../../../assets/images/code-blocks.png';

    type Props = {
      title: string;
      imagePath: string;
      pageLevel: string;
    };
    const { title, imagePath, pageLevel } = defineProps<Props>();

    const { isDark } = useData();

    const getImage = (imagePath: string) => {
      switch (imagePath) {
        case 'intro':
          return isDark.value ? introDarkMode : intro;
        case 'designer':
          return isDark.value ? designServicesDarkMode : designServices;
        case 'developer':
          return isDark.value ? codeBlocksDarkMode : codeBlocks;
      }
    };
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
  