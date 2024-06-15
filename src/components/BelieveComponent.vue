<template>
    <div class="container__believe">

        <div>
            <h1 class="title">Lo que creemos...</h1>
        </div>

        <div class="container__elements">

            <div class="container__img">
                <div class="container__images">
                    <img src="../assets/img4.jpg" class="image image4" alt="Imagen 4">
                    <img src="../assets/img5.jpg" class="image image5" alt="Imagen 5">
                    <img src="../assets/img6.jpg" class="image image6" alt="Imagen 6">
                    <img src="../assets/img7.jpg" class="image image7" alt="Imagen 7">
                </div>
            </div>

            <div class="container__texts">
                <h3>En FERHUR tenemos la firme creencia de que no existen límites para hacer crecer tu negocio, en
                    cualquier parte del mundo existe alguien que necesita lo que tú haces, ¡Déjanos encontrarlo por ti!
                </h3>
                <h3>Por otro lado, si buscas un servicio con ciertas características, danos la oportunidad de
                    presentártelo dándote al mismo tiempo nuestro respaldo, para que obtengas lo que necesitas. En
                    FERHUR ofrecemos servicios confiables y de calidad. Todos nuestros proveedores pasan por un filtro
                    previo e investigación que nos permite ofrecer seguridad en cada uno.</h3>
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

    sr.reveal('.image4', {
        origin: 'right',
    });

    sr.reveal('.image5', {
        origin: 'bottom',
    });

    sr.reveal('.image6', {
        origin: 'left',
    });

    sr.reveal('.image7', {
        origin: 'top',
    });
});


</script>

<style lang="css" scoped>
.container__believe {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: left;
}

.title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
}

.container__elements {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
}

.container__img {
    width: 50%;
}

.container__images {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
    transition: filter 0.3s ease;
}

.image:hover {
    filter: brightness(1);
}

.container__texts {
    display: flex;
    flex-direction: column;
    text-align: right;
    justify-content: center;
    background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
    width: 50%;
    padding: 0 2rem;
}

h3 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #ffffff;
    margin: 3rem 0;
}

/* Mobile Styles */
@media (max-width: 768px) {
    .container__elements {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
    }

    .container__img,
    .container__texts {
        width: 100%;
    }

    .title {
        text-align: lef;
        font-size: 2.3rem;
        margin-bottom: 0;
        padding-left: 2rem ;
    }

    h3 {
        text-align: left;
        font-size: 0.9rem;
        margin: 0.5rem 0;
    }
}
</style>