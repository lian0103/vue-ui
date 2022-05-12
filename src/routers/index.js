import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'mainView',
    component: () => import('../views/VMain.vue'),
    children: [
      {
        path: 'doc',
        components: {
          mainView: () => import('../views/VDoc.vue'),
        },
        meta: { title: '文件', idx: '1-1' },
      },
      {
        path: 'elementPlus',
        components: {
          mainView: () => import('../views/VElementPlus.vue'),
        },
        meta: { title: 'ElementPlus', idx: '2-1' },
      },
      {
        path: 'quasar',
        components: {
          mainView: () => import('../views/VQuasar.vue'),
        },
        meta: { title: 'Quasar', idx: '2-2' },
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
