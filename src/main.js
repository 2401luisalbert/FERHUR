import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueScrollTo from 'vue-scrollto';


const app = createApp(App);

app.use(router);
app.use(VueScrollTo, {
  duration: 800,
  easing: 'ease-in-out',
});

app.mount('#app');
