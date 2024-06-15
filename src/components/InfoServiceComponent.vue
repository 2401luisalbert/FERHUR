<template>
    <div class="container">
        <div class="container__elements">
            <div class="container__texts">
                <h1>{{ props.title }}</h1>
                <p>{{ props.description }}</p>
                <p>¡No dejes que el mantenimiento afecte el rendimiento de tu negocio!</p>
            </div>
            <div class="container__images">
                <img :src="props.image" alt="service image" class="img1">
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, defineProps } from 'vue';
import ScrollReveal from 'scrollreveal';

// Definir props
const props = defineProps({
    title: String,
    description: String,
    image: String
});

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

    sr.reveal('.container__images', {
        origin: 'right',
    });

    sr.reveal('.container__texts h1', {
        origin: 'left',
    });

    sr.reveal('.container__texts p', {
        origin: 'left',
    });
});
</script>

<style scoped>
/* Escritorio*/
.container {
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
}

.container__elements {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.container__texts {
    width: 40%;
}

.container__texts h1 {
    font-size: 2rem;
    color: #000000;
}

.container__texts p {
    font-size: 1.3rem;
    line-height: 1.6;
    color: #505050;
}

.container__images {
    width: 50%;
}

.img1 {
    width: 100%;
    max-width: 100%;
    border: 8px solid #ffffff;
}

/* Movil */
@media (max-width: 768px) {
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 0rem;
    }

    .container__elements {
        flex-direction: column-reverse;
        align-items: center;
        padding-top: 2rem;
        padding: 1.5rem;
    }

    .container__texts {
        width: 100%;
        padding-right: 0;
    }

    .container__texts h1 {
        font-size: 1.8rem;

    }

    .container__texts p {
        font-size: 1rem;
    }

    .container__images {
        width: 100%;
    }
}
</style>
