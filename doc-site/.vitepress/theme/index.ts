// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import '../../../public/css/global.css';
import '../../../public/css/varsom.css';
import { icons, registerIconLibrary } from '../../../src/registerIcons/systemLibraryCustomization';
import ComponentLayout from './components/ComponentLayout.vue';
import CodeExamplePreview from './components/CodeExamplePreview.vue';
import SandboxPreview from './components/SandboxPreview.vue';
import StartPage from './components/StartPage.vue';
import LinkButton from './components/LinkButton.vue';
import PageHeader from './components/PageHeader.vue';
import ComponentOverview from './components/ComponentOverview.vue';
import Card from './components/Card.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      // siden VitePress bygges via SSR, vi må sikre at våre web komponenter lastes ned i nettleseren bare
      // derfor importerer vi alle komponenter når miljø ikke er SSR
      const components = import.meta.glob('../../../src/components/*/*.component.ts');

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
    app.component('Card', Card);

    registerIconLibrary('system', {
      resolver: (name) => {
        return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
      },
    });
  },
} satisfies Theme;
