<template>
  <div class="cards">
    <div class="services">
      <div v-for="(service, index) in services" :key="index" class="content__cards">
        <img :src="service.image" class="icon" alt="" />
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
        <a :href="service.link">Ver</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';

const services = ref([
  {
    image: require('../assets/frigor.png'), 
    title: 'Refrigeración',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
    link: '#',
  },
  {
    image: require('../assets/aire.png'),
    title: 'Clima',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
    link: '#',
  },
  {
    image: require('../assets/pesticida.png'),
    title: 'Fumigación',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
    link: '#',
  },
  {
    image: require('../assets/maquinaria.png'), 
    title: 'Cámaras de refrigeración',
    description: 'Descripción sobre el refrigerador. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?',
    link: '#',
  },
]);

onMounted(() => {
  const sr = ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 1500,
    easing: 'ease-out',
    viewOffset: {
      bottom: 300,
    },
  });

  sr.reveal('.content__cards', {
    origin: 'right',
  });
});
</script>



<style lang="css" scoped>
.cards {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
}

.cards h2.header {
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}

.content__cards {  
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: calc(33.333% - 20px);
  margin: 10px;
  padding: 15px;
  height: 360px;
  border-radius: 4px;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.icon {
  width: 50px;
  height: 50px;
}


.content__cards h2 {
  font-size: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.content__cards p {
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
}

.content__cards:hover p {
  color: white;
}

.content__cards a {
  font-family: 'Lato', sans-serif;
  margin: 16px 0;
  background: black;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 0;
  border-radius: 25px;
  transition: 0.3s ease;
  width: 80%;
}

.content__cards a:hover {
  border-radius: 4px;
}

.content__cards:hover {
  color: white;
  background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
  border-color: transparent;
}

.content__cards:hover a {
  border-color: white;
  background: white;
  color: black;
}

.content__cards:hover .icon {
  filter: invert();
}

@media (max-width: 900px) {
  .content__cards {
    width: calc(50% - 20px);
    /* Ajusta el ancho para pantallas más pequeñas */
  }
}

@media (max-width: 600px) {
  .content__cards {
    width: calc(100% - 20px);
    /* Ajusta el ancho para pantallas muy pequeñas */
  }
}
</style>

