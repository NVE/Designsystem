// https://vitepress.dev/guide/custom-theme
import { h, watch } from 'vue';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import '../../../public/css/global.css';
import '../theme/styles/nve_theme.css';
import '../theme/styles/varsom_theme.css';
import { icons, registerIconLibrary } from '../../../src/registerIcons/systemLibraryCustomization';
import ComponentLayout from './components/ComponentLayout.vue';
import CodeExamplePreview from './components/CodeExamplePreview.vue';
import SandboxPreview from './components/SandboxPreview.vue';
import StartPage from './components/StartPage.vue';
import LinkButton from './components/LinkButton.vue';
import PageHeader from './components/PageHeader.vue';
import ComponentOverview from './components/ComponentOverview.vue';
import ThemeSelect from './components/ThemeSelect.vue';
import ColorList from './components/ColorList.vue';
import TypographyTable from './components/TypographyTable.vue';
import { cssTokenState } from './cssTokenState';
import { useCurrentTheme, Theme } from './composables/useCurrentTheme';
import NveTableDemo from './components/NveTableDemo.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { isDark } = useData();
    const { currentTheme } = useCurrentTheme();

    // Hente rikig tema
    const applyTheme = () => {
      if (currentTheme.value === Theme.NVE) {
        document.documentElement.classList.remove('varsom');
        document.documentElement.classList.remove('varsom_darkmode');
        document.documentElement.classList.add('nve');
      } else {
        document.documentElement.classList.remove('nve');
        document.documentElement.classList.remove('nve_darkmode');
        document.documentElement.classList.add('varsom');
      }

      // Setter darkmode må sikkert trigge det en gang til når jeg bytter tema
      if (isDark.value) {
        document.documentElement.classList.add(`${currentTheme.value}_darkmode`);
      } else {
        document.documentElement.classList.remove(`${currentTheme.value}_darkmode`);
      }
    };
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      applyTheme();

      watch([isDark, currentTheme], () => {
        applyTheme();
      });
    }
    return h(DefaultTheme.Layout, null, {});
  },
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      // siden VitePress bygges via SSR, vi må sikre at våre web komponenter lastes ned i nettleseren bare
      // derfor importerer vi alle komponenter når miljø ikke er SSR
      const components = import.meta.glob('../../../src/components/*/*.component.ts');

      // Lese inn nve_theme.css for å hente ut css variabler
      const styles = import.meta.glob('./styles/nve_theme.css', { query: '?raw', import: 'default' });
      (async () => {
        const importPromises = Object.values(styles).map((importFunc) =>
          typeof importFunc === 'function' ? importFunc() : Promise.resolve(null)
        );
        const cssFileResult = await Promise.all(importPromises);
        cssTokenState.initGlobalState(cssFileResult.join('\n'));
      })();
      //vi batcher imports for å redusere antall nettverksforespørsler og for å ikke restarte applikasjonen flere ganger
      (async () => {
        const importPromises = Object.values(components).map((importFunc) =>
          typeof importFunc === 'function' ? importFunc() : Promise.resolve(null)
        );
        await Promise.all(importPromises);
      })();
    }
    app.component('component', ComponentLayout);
    app.component('CodeExamplePreview', CodeExamplePreview);
    app.component('SandboxPreview', SandboxPreview);
    app.component('StartPage', StartPage);
    app.component('LinkButton', LinkButton);
    app.component('PageHeader', PageHeader);
    app.component('ComponentOverview', ComponentOverview);
    app.component('ThemeSelect', ThemeSelect);
    app.component('ColorList', ColorList);
    app.component('TypographyTable', TypographyTable);
    app.component('NveTableDemo', NveTableDemo);

    registerIconLibrary('system', {
      resolver: (name) => {
        return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
      },
    });
  },
};
