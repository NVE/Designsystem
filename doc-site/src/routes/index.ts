import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../components/MainLayoutComponent.vue'),
    children: [
      //TODO: Kan dette skrives smartere?
      {
        path: '/',
        redirect() {
          return { path: 'home' };
        },
      },
      {
        path: 'components/:component',
        component: () => import('../components/ComponentDocPage.vue'),
      },
      {
        path: ':page',
        component: () => import('../components/WebComponent.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
