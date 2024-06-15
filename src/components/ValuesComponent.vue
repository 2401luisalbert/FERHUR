<template>
  <div class="container__values">
    <transition name="fade-slide">
      <div v-if="showValores" class="content">
        <h3>Valores</h3>
        <ul class="list">
          <li class="list__item">
            <h4>Compromiso</h4>
          </li>
          <li class="list__item">
            <h4>Calidad</h4>
          </li>
          <li class="list__item">
            <h4>Responsabilidad</h4>
          </li>
          <li class="list__item">
            <h4>Seguridad</h4>
          </li>
          <li class="list__item">
            <h4>Transparencia</h4>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="fade-slide">
      <div v-if="showMision" class="content">
        <h1>Misión</h1>
        <h4>Ser la empresa líder en todos los proyectos constructivos que hacemos, involucrarnos por completo en los
          trabajos hasta satisfacer todas y cada una de las necesidades del cliente.</h4>
      </div>
    </transition>
    <transition name="fade-slide">
      <div v-if="showVision" class="content">
        <h1>Visión</h1>
        <h4>Ser la empresa líder en todos los proyectos constructivos que hacemos, involucrarnos por completo en los
          trabajos hasta satisfacer todas y cada una de las necesidades del cliente.</h4>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';

const showValores = ref(false);
const showMision = ref(false);
const showVision = ref(false);

const displaySection = async (section) => {
  section.value = true;
  await new Promise(resolve => setTimeout(resolve, 5000));
  section.value = false;
  await new Promise(resolve => setTimeout(resolve, 1000));
};

const cycleDisplay = async () => {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    await displaySection(showValores);
    await displaySection(showMision);
    await displaySection(showVision);
  }
};

onMounted(() => {
  cycleDisplay();

  const sr = ScrollReveal({
    reset: false,
    distance: '300px',
    duration: 1500,
    easing: 'ease-out',
    viewOffset: {
      bottom: 100,
    },
  });

  sr.reveal('.container__values', {
    origin: 'left',
  });


});
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

.container__values {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/img6.jpg');
  background-position: center;
  background-size: cover;
  height: 50vh;
  padding: 2rem;
}

.list {
  width: 100%;
  max-width: 1200px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  margin: 0;
}

.list__item {
  text-align: center;
  flex: 1;
  margin: 0.5rem;
}

h1,
h3 {
  color: #ffffff;
}

h1 {
  font-weight: 700;
  margin-bottom: 1rem;
}

h3 {
  font-weight: 100;
}

.content {
  position: relative;
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  overflow: hidden;
}

/* Mobile */
@media (max-width: 768px) {

  .container__values {
    height: 60vh;
  }

  .list {
    width: 90%;
    padding: 0;
    gap: 1rem;
  }

  .list__item {
    flex: 1 1 100%;
    margin: 0;
  }

  h1 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1rem;
  }

  .content {
    padding: 0;
    width: 100%;
  }
}

/* Animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10%);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}
</style>
