<template>
  <div>
    <HeaderComponent :title="serviceTitle" heightComponent="35vh" />
    <InfoServiceComponent :title="serviceTitle" :description="serviceDescription" :image="serviceImage" />
    <ImageGridComponent :images="imageList"/>
    <ContactServiceComponent />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ContactServiceComponent from '@/components/ContactServiceComponent.vue';
import InfoServiceComponent from '@/components/InfoServiceComponent.vue';
import ImageGridComponent from '@/components/ImageGridComponent.vue';

const route = useRoute();

import img1 from '@/assets/img1.jpg';
import img2 from '@/assets/img2.jpg';
import img3 from '@/assets/img3.jpg';
import img4 from '@/assets/img4.jpg';

const serviceTitle = ref('');
const serviceDescription = ref('');
const serviceImage = ref('');
const imageList = ref([]);  // Asegúrate de inicializar imageList como un array vacío

const services = {
  refrigeracion: {
    title: 'Refrigeración',
    description: 'Descripción sobre el servicio de refrigeración. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
    image: img1,
    imageList:[
      img1,
      img2,
    ]
  },
  clima: {
    title: 'Clima',
    description: 'Descripción sobre el servicio de clima. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
    image: img2,
    imageList:[
      img1,
      img2,
      img3,
    ]
  },
  fumigacion: {
    title: 'Fumigación',
    description: 'Descripción sobre el servicio de fumigación. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
    image: img3,
    imageList:[
      img1,
      img2,
      img3,
      img1,
      img2,
      img3,
    ]
  },
  camarasderefrigeracion: {
    title: 'Cámaras de Refrigeración',
    description: 'Descripción sobre cámaras de refrigeración. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
    image: img4,
    imageList:[
      img1,
      img2,
      img3,
      img1,
    ]
  },
};

watch(route, () => {
  const service = route.params.service;
  if (services[service]) {
    serviceTitle.value = services[service].title;
    serviceDescription.value = services[service].description;
    serviceImage.value = services[service].image;
    imageList.value = services[service].imageList || [];  // Asegúrate de asignar un array vacío si imageList no está definido
  }
}, { immediate: true });
</script>
