<template>
    <div class="container">
        <div class="container__elements">
            <div class="container__left">
                <h3>¿POR QUE NOSOTROS?</h3>
                <h1>Garantizamos soliciones inmediatas para tu empresa</h1>
            </div>
            <div class="container__right">
                <div v-for="item in infolist" :key="item.number">
                    <div>
                        <hr />
                        <div class="container__list">
                            <h1>{{ item.number }}</h1>
                            <div class="text__list">
                                <h1>{{ item.title }}</h1>
                                <h3>{{ item.description }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';

const infolist = [
    {
        number: 1,
        title: "Personal Capacitado",
        description:
            "Ofrecemos asistencia eficaz y segura gracias a nuestro equipo altamente capacitado.",
    },
    {
        number: 2,
        title: "Atención Personalizada",
        description:
            "Estamos contigo de manera personal en todo momento, brindándote una atención exclusiva.",
    },
    {
        number: 3,
        title: "Enfoque en tu Satisfacción",
        description:
            "Gestionamos soluciones adaptadas a tus necesidades para garantizar tu satisfacción.",
    },
    {
        number: 4,
        title: "Análisis de Soluciones",
        description:
            "Validamos y proporcionamos la mejor solución para resolver tus problemas de manera eficiente.",
    },
];


onMounted(() => {
  const sr = ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 800,
    easing: 'ease-out',
    viewOffset: {
        bottom: 100,
    },
  });

  sr.reveal('.container__list', {
    origin: 'left',
  });

  sr.reveal('.text__list', {
    origin: 'left',
  });

});
</script>

<style lang="css" scoped>
.container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.container__elements {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: space-between;
    align-items: flex-start; 

}

.container__left h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
}

.container__left h1 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
}

.container__right {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.container__list {
    display: flex;
    gap: 1rem;
    align-items: end;
}

.container__list hr {
    width: 100%;
    border: none;
    border-top: 1px solid #ccc;
}

.container__list h1 {
    font-size: 2.2rem;
}

.text__list h1 {
    font-size: 1.4rem;

}

.text__list h3 {
    font-size: 0.9rem;
    color: #555;
}

@media (min-width: 768px) {
    .container__elements {
        flex-direction: row;
    }

    .container__left,
    .container__right {
        width: 50%;
    }


    .container__list {
        flex-direction: row;
        align-items: center;
        align-items: end;
    }


}
</style>