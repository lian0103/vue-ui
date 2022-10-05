import { createRouter, createWebHashHistory } from 'vue-router';
import packageMap from '../../package/components.json';

const packagesCompNameList = Object.keys(packageMap);

function getDemoRoute() {
  const isDev = import.meta.env.MODE === 'development';
  return isDev
    ? [
        {
          path: 'gt/a-i/:componentName',
          components: {
            mainView: () => import('../views/VGtComponent.vue'),
          },
          meta: { title: 'GT元件a-i', idx: null },
        },
        {
          path: 'gt/j-r/:componentName',
          components: {
            mainView: () => import('../views/VGtComponent.vue'),
          },
          meta: { title: 'GT元件j-r', idx: null },
        },
        {
          path: 'gt/s-z/:componentName',
          components: {
            mainView: () => import('../views/VGtComponent.vue'),
          },
          meta: { title: 'GT元件s-z', idx: null },
        },
        {
          path: 'chart/:componentName',
          components: {
            mainView: () => import('../views/VGtChart.vue'),
          },
          meta: { title: '圖表', idx: null },
        }
      ]
    : [
        {
          path: 'gt/a-i/:componentName',
          components: {
            mainView: () => import('../views/VGtComponentProd.vue'),
          },
          meta: { title: 'GT元件a-i', idx: null },
        },
        {
          path: 'gt/j-r/:componentName',
          components: {
            mainView: () => import('../views/VGtComponentProd.vue'),
          },
          meta: { title: 'GT元件j-r', idx: null },
        },
        {
          path: 'gt/s-z/:componentName',
          components: {
            mainView: () => import('../views/VGtComponentProd.vue'),
          },
          meta: { title: 'GT元件s-z', idx: null },
        },
        {
          path: 'chart/:componentName',
          components: {
            mainView: () => import('../views/VGtChartProd.vue'),
          },
          meta: { title: '圖表', idx: null },
        }
      ];
}

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
        path: 'style',
        components: {
          mainView: () => import('../views/VStyle.vue'),
        },
        meta: { title: '樣式', idx: '2-1' },
      },
      ...getDemoRoute()
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
