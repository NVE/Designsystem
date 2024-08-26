import { defineConfig } from 'vitepress';
import fs from 'fs';
import path from 'path';
import ThemeSelect from './theme/components/ThemeSelect.vue';

// Henter navn på alle filene i 'components' mappe
const componentFiles = fs.readdirSync(path.resolve(__dirname, '../components'));

// Generer sidebar komponenter lenker
const componentsLinks = componentFiles.map((file) => {
  const name = path.basename(file, path.extname(file));
  return { text: name, link: `/components/${name}` };
});

const figmaIcon = {
  svg: '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="1667" height="2500"><style type="text/css">.st0{fill:#0acf83}.st1{fill:#a259ff}.st2{fill:#f24e1e}.st3{fill:#ff7262}.st4{fill:#1abcfe}</style><title>Figma.logo</title><desc>Created using Figma</desc><path id="path0_fill" class="st0" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"/><path id="path1_fill" class="st1" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"/><path id="path1_fill_1_" class="st2" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"/><path id="path2_fill" class="st3" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"/><path id="path3_fill" class="st4" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"/></svg>',
};

export default defineConfig({
  title: 'NVE Designsystem',
  head: [['link', { rel: 'icon', href: '/assets/nve-logo.svg' }]],
  themeConfig: {
    docFooter: {
      prev: 'Forrige side',
      next: 'Neste side',
    },
    editLink: {
      pattern: 'https://github.com/NVE/Designsystem/edit/main/doc-site/:path',
      text: 'Rediger denne sida i Github',
    },
    nav: [
      { text: 'Introduksjon', link: '/introduction/home' },
      { text: 'Komponenter', link: `/components/Komponentoversikt.html` },
      { component: 'ThemeSelect' },
    ],
    outlineTitle: 'På denne sida',
    sidebar: [
      {
        text: 'Introduksjon',
        items: [
          { text: 'Om designsystemet', link: '/introduction/home' },
          { text: 'Designelementer', link: '/introduction/designElements' },
          {
            text: 'For designere',
            items: [
              { text: 'Design', link: '/introduction/forDesigner/design' },
              { text: 'Kom igang', link: '/introduction/forDesigner/getStarted' },
              { text: 'Bidrag', link: '/introduction/forDesigner/contribution' },
            ],
          },
          {
            text: 'For utviklere',
            items: [
              { text: 'Utvikling', link: '/introduction/forDevelopers/development' },
              { text: 'Bruk i Vue', link: '/introduction/forDevelopers/vue' },
              { text: 'Validering', link: '/introduction/forDevelopers/validation' },
            ],
          },
        ],
      },
      { text: 'Komponenter', items: componentsLinks },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NVE/Designsystem', ariaLabel: 'Link til kildekoden i Github' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/nve-designsystem', ariaLabel: 'Link til pakka i NPM' },
      {
        icon: figmaIcon,
        link: 'https://www.figma.com/files/1033298377581647627/project/85006605',
        ariaLabel: 'Link til designsystem-prosjektet i Figma',
      },
    ],
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
