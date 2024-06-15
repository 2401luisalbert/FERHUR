<template>
  <div class="container" id="contact">
    <div class="container__elements">
      <figure class="container__image"></figure>
      <div class="container__contac">
        <h1>Servicio especializado de Mantenimiento <b>FERHUR</b></h1>
        <h4>Contacta con nosotros y responderemos lo antes posible a cualquier pregunta que tengas sobre nuestros servicios.</h4>
          <a href="https://wa.me/1234567890" target="_blank" class="contact-button">
          Contactanos <img src="../assets/whatsapp.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';

onMounted(() => {
  const sr = ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 1500,
    easing: 'ease-out',
    viewOffset: {
      bottom: 100,
    },
  });

  sr.reveal('.container__contac', {
    origin: 'right',
  });

  sr.reveal('.container__image', {
    origin: 'left',
  });
});
</script>

<style lang="css" scoped>
@keyframes vibrate {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  overflow: hidden; 
}

.container__elements {
  position: relative;
  width: 100%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.container__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url('../assets/img1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container__contac {
  width: 90%;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  z-index: 1;
}

.container__contac h1 {
  color: black;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.container__contac h4 {
 color: #333333;
 font-size: 1rem;
  margin-bottom: 1.5rem;
}

.contact-button {
  background-color: #25D366;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #0091ff;
}

.contact-button:hover img {
  animation: vibrate 0.2s linear infinite;
}

.contact-button img {
  width: 1.2rem;
  height: 1.2rem;
}



@media (min-width: 768px) {
  .container__elements {
    margin-top: 4rem;
    flex-direction: row;
    align-items: center;
  }

  .container__image {
    width: 70%;
  }

  .container__contac {
    width: 60%;
    text-align: left;
    background-color: rgb(255, 255, 255);
    margin-left: 25rem;
  }

  .container__contac h1 {
    color: black;
    font-size: 2rem;
  }

  h4{
    font-size: 1.2rem;
  }

}
</style>
