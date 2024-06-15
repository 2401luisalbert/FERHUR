<template>
    <div class="container__believe">
        <div class="container__img">
            <h1 class="title">Lo que creemos...</h1>
            <div class="container__images">
                <div class="image image1" alt="Imagen 4"></div>
                <div class="image image2" alt="Imagen 5"></div>
                <div class="image image3" alt="Imagen 6"></div>
                <div class="image image4" alt="Imagen 7"></div>
            </div>
        </div>
        <div class="container__texts">
            <h3>En FERHUR tenemos la firme creencia de que no existen límites para hacer crecer tu negocio, en cualquier
                parte del mundo existe alguien que necesita lo que tú haces, ¡Déjanos encontrarlo por ti!</h3>
            <h3>Por otro lado, si buscas un servicio con ciertas características, danos la oportunidad de presentártelo
                dándote al mismo tiempo nuestro respaldo, para que obtengas lo que necesitas. En FERHUR ofrecemos
                servicios confiables y de calidad. Todos nuestros proveedores pasan por un filtro previo e investigación
                que nos permite ofrecer seguridad en cada uno.</h3>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

.container__believe {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem;
  text-align: left;
  font-family: 'Roboto', sans-serif;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  width: 100%;
  text-align: center;
}

.container__img {
  width: 50%;
}

.container__images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.image {
  width: 100%;
  padding-top: 75%; /* Aspect ratio 4:3 */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(0.7);
  transition: filter 0.3s ease;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.image::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease;
}

.image:hover::after {
  background: rgba(0, 0, 0, 0);
}

/* Individual images */
.image1 {
  background-image: url('../assets/img4.jpg');
}

.image2 {
  background-image: url('../assets/img5.jpg');
}

.image3 {
  background-image: url('../assets/img6.jpg');
}

.image4 {
  background-image: url('../assets/img7.jpg');
}

.container__texts {
  width: 50%;
  padding: 2rem;
  text-align: right;
  background-color: rgba(0, 172, 193, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: auto;
}

h3 {
  font-size: 1.2rem;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .container__believe {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .container__img,
  .container__texts {
    width: 100%;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1rem;
    text-align: center;
  }

  .container__texts {
    text-align: center;
    align-items: center;
    padding: 1rem;
  }
}

</style>