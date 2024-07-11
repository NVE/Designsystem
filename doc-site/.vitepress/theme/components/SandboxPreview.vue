<!-- Live code sandboks komponent. Viser en codesandbox embedded vindu. Foreløpig støtter kun vue-->
<template>
  <div id="embed-container">
    <iframe v-if="sandboxUrl" :src="sandboxUrl" style="width: 100%; height: 500px"></iframe>
  </div>
  <div style="display: none" ref="slot">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue';
const sandboxId = ref('');
const slot = ref<HTMLElement | null>(null);
const filePath = '/src/App.vue';

watch(
  () => slot.value?.textContent,
  async (newVal) => {
    if (!newVal) return;
    const text = newVal.replace('vue', '').replace(/\n/g, '\\n').replace(/\t/g, '\\t');
    await fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sandboxDefinition(newVal)),
    })
      .then((response) => response.json())
      .then((data) => {
        sandboxId.value = data.sandbox_id;
      });
  },
  { immediate: true }
);

const sandboxUrl = computed(() => {
  if (!sandboxId.value) return '';
  return `https://codesandbox.io/embed/${sandboxId.value}?module=${encodeURIComponent(filePath)}`;
});

// Codesandbox vue prosjekt oppsette. Kjøres via vue cli. Klarte ikke å kjøre vite script setup malen i codesandbox.
const sandboxDefinition = (content: string) => ({
  files: {
    'package.json': {
      content: {
        dependencies: {
          vue: '^3.2.0',
          'nve-designsystem': '^0.1.65',
          '@vue/cli-plugin-babel': '~4.5.0',
          '@vue/cli-service': '~4.5.0',
          '@vue/compiler-sfc': '^3.0.0-0',
          'core-js': '^3.6.5',
          'vue-loader': '17.4.2',
        },
        scripts: {
          serve: 'vue-cli-service serve',
        },
      },
    },
    'babel.config.js': {
      content: `module.exports = {
        presets: [
          '@vue/cli-plugin-babel/preset'
        ]
      }`,
    },
    'index.html': {
      content:
        `
        <div id="app"></div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/cdn/themes/light.css" />
        <script src="/src/main.js"></` +
        'script' +
        `>
      `,
    },
    'vue.config.js': {
      content: `
        module.exports = {
        chainWebpack: config => {
          config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
              options.compilerOptions = {
                ...(options.compilerOptions || {}),
                isCustomElement: tag => tag.startsWith('nve-')
              }
              return options
            })
        }
      }`,
    },
    'src/main.js': {
      content: `
        import { createApp } from 'vue';
        import 'nve-designsystem/css/varsom.css';
        import "nve-designsystem/css/global.css";
        import {icons,registerIconLibrary,} from 'nve-designsystem/registerIcons/systemLibraryCustomization.js';
        import App from './App.vue';
        const app = createApp(App);
        app.mount('#app');

        registerIconLibrary('system', {
          resolver: (name) => {
            return \`data:image/svg+xml,\${encodeURIComponent(icons[name])}\`;
          },
        });
      `,
    },
    'src/App.vue': {
      content: content,
    },
  },
});
</script>
