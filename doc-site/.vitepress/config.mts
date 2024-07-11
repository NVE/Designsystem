import { defineConfig } from 'vitepress';
import fs from 'fs';
import path from 'path';

// Henter navn på alle filene i 'components' mappe
const componentFiles = fs.readdirSync(path.resolve(__dirname, '../components'));

// Generer sidebar komponenter lenker
const componentsLinks = componentFiles.map((file) => {
  const name = path.basename(file, path.extname(file));
  return { text: name, link: `/components/${name}` };
});

export default defineConfig({
  title: 'NVE Designsystem',
  themeConfig: {
    nav: [
      { text: 'Introduksjon', link: '/introduction/home' },
      { text: 'Komponenter', link: `/components/nve-alert.html` },
    ],
    sidebar: [
      {
        text: 'Introduksjon',
        items: [
          { text: 'Om komponentbiblioteket', link: '/introduction/home' },
          { text: 'Bruk i Vue', link: '/introduction/vue' },
          { text: 'Validering', link: '/introduction/validation' },
        ],
      },
      { text: 'Komponenter', items: componentsLinks },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/NVE/Designsystem' }],
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return tag.toLowerCase().indexOf('nve-') === 0;
        },
      },
    },
  },
});
