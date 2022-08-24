import { createRouter, createWebHashHistory } from 'vue-router';
import packageMap from '../../package/components.json';

const packagesCompNameList = Object.keys(packageMap);

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
        meta: { title: '指引', idx: '1-1' },
      },
      {
        path: 'gt/:componentName',
        components: {
          mainView: () => import('../views/VGtComponent.vue'),
        },
        meta: { title: 'GT元件', idx: null },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: '/',
  },
];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {

  if (to.path === '/') {
    return next('/doc');
  }
  
  if (
    to.path.includes('/gt/') &&
    !packagesCompNameList.includes(to.params.componentName)
  ) {
    return next('/doc');
  }

  next();
});

export default router;
