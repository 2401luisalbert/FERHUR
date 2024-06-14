import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import ServiceView from '@/views/ServiciosView.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: HomeView,
        name: 'Inicio'
      
      },
      {
        path: '/Nosotros',
        component: AboutView,
        name: 'Nosotros'
      }
      ,
      {
        path: '/servicios',
        component: ServiceView,
        name: 'Servicios'
      },
      {
        path: '/servicios/servicio1',
        name: 'Servicio1',
        component: ServiceView
      },
      {
        path: '/servicios/servicio2',
        name: 'Servicio2',
        component: ServiceView
      },
      {
        path: '/servicios/servicio3',
        name: 'Servicio3',
        component: ServiceView
      },
    ]
  }
]
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
  }
});

export default router
