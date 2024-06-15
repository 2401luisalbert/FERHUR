<template>
  <div class="container">
    <div class="container__elements">
      <div class="container__images" ref="imageContainer">
        <img src="../assets/img4.jpg" alt="" class="img1">
        <img src="../assets/img5.jpg" alt="" class="img2">
      </div>
      <div class="container__texts">
        <div class="container__top">
          <h1 class="title">Somos FERHUR</h1>
          <p class="paragraph">
            Con una vasta experiencia en la ejecución de proyectos industriales, comerciales y residenciales, hemos
            adquirido un conocimiento profundo y valioso en diversas áreas.
          </p>
        </div>
        <div class="container__bottom">
          <h1 class="title">¿Qué buscamos?</h1>
          <p class="paragraph">
            Nuestro objetivo es seguir creciendo y aprendiendo, aplicando nuestros conocimientos para ofrecer soluciones
            eficientes y de alta calidad a nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ScrollReveal from 'scrollreveal';

const imageContainer = ref(null);

const calculateDimensions = () => {
  const images = imageContainer.value.querySelectorAll(".img1, .img2");
  let maxWidth = 0;
  let maxHeight = 0;

  images.forEach((image) => {
    const rect = image.getBoundingClientRect();
    maxWidth = Math.max(maxWidth, rect.right - rect.left);
    maxHeight = Math.max(maxHeight, rect.bottom - rect.top);
  });

  imageContainer.value.style.width = `${maxWidth}px`;
  imageContainer.value.style.height = `${maxHeight}px`;
};

onMounted(() => {
  calculateDimensions();
  window.addEventListener("resize", calculateDimensions);

  const sr = ScrollReveal({
    reset: false,
    distance: '200px',
    duration: 1500,
    easing: 'ease-out',
    viewOffset: {
        bottom: 100,
    },
  });

  sr.reveal('.img1', {
    origin: 'left',
  });

  sr.reveal('.img2', {
    origin: 'right',
  });

  sr.reveal('.container__bottom', {
    origin: 'left',
  });
  sr.reveal('.container__top', {
    origin: 'right',
  });
  
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", calculateDimensions);
});

</script>

<style lang="css" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 5rem;
  overflow: hidden;
}

.container__elements {
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container__texts {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}

.container__images {
  display: flex;
  position: relative;
  margin-bottom: 9rem;
}

.img1 {
  object-fit: cover;
  position: absolute;
  width: 250px;
  height: 250px;
  top: 0px;
  left: -50px;
}

.img2 {
  object-fit: cover;
  position: absolute;
  width: 250px;
  height: 250px;
  top: 150px;
  left: 50px;
}


h1 {
  font-size: 2.3rem;
}

p{
  font-size: 16px;
  line-height: 1.5;
}


/* Escritorio */
@media (min-width: 768px) {
  .container {
    width: 100%;
    height: 600px;
    display: flex;
  }

  .container__elements {
    flex-direction: row;
    justify-content: space-between;
  }

  .container__texts {
    width: 50%;
    padding: 2rem;
  }

  .container__images {
    margin-bottom: 0;
  }

  .img1,
  .img2 {
    width: 400px;
    height: 400px;
  }

  .img1 {

    top: -100px;
    left: -50px;
  }

  .img2 {
    border: #ffff 8px solid;
    top: 150px;
    left: 220px;
  }
}
</style>