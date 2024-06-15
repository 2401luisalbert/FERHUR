<template>
    <div>
    <HeaderComponent :title=serviceTitle
        heightComponent="35vh" />
      <h1>{{ serviceTitle }}</h1>
      <p>{{ serviceDescription }}</p>
      <ContactServiceComponent/>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import HeaderComponent from '@/components/HeaderComponent.vue';
import ContactServiceComponent from '@/components/ContactServiceComponent.vue';
  
  const route = useRoute();
  
  const serviceTitle = ref('');
  const serviceDescription = ref('');
  
  const services = {
    refrigeracion: {
      title: 'Refrigeración',
      description: 'Descripción sobre el servicio de refrigeración. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
    },
    clima: {
      title: 'Clima',
      description: 'Descripción sobre el servicio de clima. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
    },
    fumigacion: {
      title: 'Fumigación',
      description: 'Descripción sobre el servicio de fumigación. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
    },
    camarasderefrigeracion: {
      title: 'Cámaras de Refrigeración',
      description: 'Descripción sobre cámaras de refrigeración. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
    },
  };
  
  watch(route, () => {
    const service = route.params.service;
    if (services[service]) {
      serviceTitle.value = services[service].title;
      serviceDescription.value = services[service].description;
    }
  }, { immediate: true });
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  </style>
  