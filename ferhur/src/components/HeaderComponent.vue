<template>
    <div class="header">
      <div class="inner-header flex">
        <img ref="logo" src="../assets/logo.svg" alt="ferhur" class="logo">
        <h1 ref="title">Gestión y Eficiencia</h1>
        <h3 ref="subtitle">Control de Plagas, Mantenimiento y Reparación de Equipos Domésticos y Comerciales</h3>
      </div>
  
      <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import ScrollReveal from 'scrollreveal';
  
  onMounted(() => {
    const sr = ScrollReveal();
  
    sr.reveal('.header img', {
      origin: 'left',
      distance: '100px',
      duration: 800,
      easing: 'ease-out',
      scale: 1,
      viewOffset: {
        bottom: 100,
    },
    });
  
    sr.reveal('.header h1', {
      origin: 'left',
      distance: '100px',
      easing: 'ease-out',
      scale: 1,
      delay: 200,
    });
  
    sr.reveal('.header h3', {
      origin: 'left',
      distance: '100px',
      easing: 'ease-out',
      scale: 1,
      delay: 400,
    });
  });
  </script>

<style lang="css" scoped>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);

.header {
    position: relative;
    text-align: center;
    background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
    color: white;
    z-index: 1;
}

.logo {
    width: 12%;
    fill: white;
    padding-right: 15px;
    display: inline-block;
    vertical-align: middle;
}

.inner-header {
    height: 50vh;
    width: 100%;
    margin: 0;
    padding: 0;
}

.flex {
    /*Flexbox for containers*/
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

.waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
}



/* Animation */

.parallax>use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}

.parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}

.parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}

.parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }

    100% {
        transform: translate3d(85px, 0, 0);
    }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {

  h3{
    font-size: 1rem;
  }

    .logo {
    width: 30%;
}

    .waves {
        height: 40px;
        min-height: 40px;
    }

}
</style>