import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ServiceLayout from '@/layouts/ServiceLayout.vue';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ServiceView from '@/views/ServicieView.vue';
import ServiceDetail from '@/views/ServiceDetail.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: HomeView,
        name: 'Inicio',
      },
      {
        path: 'nosotros',
        component: AboutView,
        name: 'Nosotros',
      },
      {
        path: 'servicios',
        component: ServiceView,
        name: 'Servicios',
      },
    ],
  },
  {
    path: '/servicios',
    component: ServiceLayout,
    children: [
      {
        path: ':service',
        name: 'ServiceDetail',
        component: ServiceDetail,
      },
    ],
  },
];
//process.env.BASE_URL
const router = createRouter({
  history: createWebHistory('#'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
