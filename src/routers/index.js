import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'mainView',
    component: () => import('../views/VMain.vue'),
    children: [
      {
        path: '',
        components: {
          mainView: () => import('../views/VDoc.vue'),
        },
        meta: { title: '指引', idx: '1-1' },
      },
      {
        path: 'doc',
        components: {
          mainView: () => import('../views/VDoc.vue'),
        },
        meta: { title: '指引', idx: '1-1' },
      },
      {
        path: 'use',
        components: {
          mainView: () => import('../views/VUse.vue'),
        },
        meta: { title: '使用', idx: '1-2' },
      },
      {
        path: 'install',
        components: {
          mainView: () => import('../views/VInstall.vue'),
        },
        meta: { title: '安裝', idx: '1-3' },
      },
      {
        path: 'elementPlus',
        components: {
          mainView: () => import('../views/VElementPlus.vue'),
        },
        meta: { title: 'ElementPlus', idx: '2-1' },
      },
      {
        path: 'element',
        components: {
          mainView: () => import('../views/VElement.vue'),
        },
        meta: { title: 'Element元件', idx: '2-4' },
      },
      {
        path: 'quasar',
        components: {
          mainView: () => import('../views/VQuasar.vue'),
        },
        meta: { title: 'Quasar元件', idx: '2-2' },
      },
      {
        path: 'gt-self',
        components: {
          mainView: () => import('../views/VGtSelf.vue'),
        },
        meta: { title: 'GT開發', idx: '2-3' },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: '/',
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
