import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import { icons, registerIconLibrary } from '../../src/registerIcons/systemLibraryCustomization';
import './importAllComponennts';

const app = createApp(App);
app.use(router);
app.mount('#app');

registerIconLibrary('system', {
  resolver: (name) => {
    return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
  },
});
