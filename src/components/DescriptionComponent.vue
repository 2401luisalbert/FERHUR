<template>
  <div class="container">
    <div class="container__images">
      <figure class="container__figure">
        <img src="../assets/img4.jpg" alt="" class="image1">
      </figure>
      <figure class="container__figure">
        <img src="../assets/img5.jpg" alt="" class="image2">
      </figure>
    </div>
    <div class="container__texts">
      <div class="container__text1">
        <h1>Somos FERHUR</h1>
        <h3>Con una vasta experiencia en la ejecución de proyectos industriales, comerciales y residenciales, hemos adquirido un conocimiento profundo y valioso en diversas áreas.</h3>
      </div>
      <div class="container__text2">
        <h1>¿Qué buscamos?</h1>
        <h3>Nuestro objetivo es seguir creciendo y aprendiendo, aplicando nuestros conocimientos para ofrecer soluciones eficientes y de alta calidad a nuestros clientes.</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding:0 5rem ;
}

.container__images, .container__texts {
  width: 50%;
}

.container__images {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Asegura que las imágenes no se desborden fuera del contenedor */
  height: 100%; /* Asegura que el contenedor de imágenes ocupe todo el alto disponible */
}

.container__figure {
  margin: 0;
  width: 100%; /* Asegura que las figuras ocupen todo el ancho del contenedor */
  height: 100%;
  position: absolute;
}

.container__images img {
  display: flex;
  width: 500px; /* Asegura que las imágenes se ajusten al tamaño del contenedor */
  max-width: 100%; /* Asegura que las imágenes no excedan el tamaño del contenedor */
  height: auto; /* Mantiene la proporción de las imágenes */
  object-fit: cover;
}

.container__images .image1 {
  z-index: 1;
}

.container__images .image2 {
  z-index: 2;
  transform: translate(200px, 200px); /* Ajusta el desplazamiento según sea necesario */
}

.container__texts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px; /* Añade padding para separación entre textos y bordes */
  box-sizing: border-box;
}

.container__text1, .container__text2 {
  margin-bottom: 20px;
}

.container__text1 h1, .container__text2 h1 {
  margin: 0;
}

.container__text1 h3, .container__text2 h3 {
  margin: 5px 0 0 0;
}
</style>
