<template>
    <div class="container">
        <div class="container__elements">
            <div class="container__texts">
                <h1>¿Problemas con el mantenimiento?</h1>
                <p>En <b>FERHUR</b>, contamos con la <b>experiencia, conocimientos técnicos y un equipo capacitado</b> para
                    ofrecer soluciones integrales de mantenimiento adaptadas a las necesidades específicas de tu empresa.
                    Nos especializamos en mantener tus equipos en óptimas condiciones operativas, garantizando así la
                    continuidad de tu productividad.</p>
                <p>¡No dejes que el mantenimiento afecte el rendimiento de tu negocio!</p>
            </div>
            <div class="container__images">
                <img src="../assets/img1.jpg" alt="maintenance1" class="img1">
                <img src="../assets/img2.jpg" alt="maintenance2" class="img2">
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
.container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15rem;
  
}

.container__elements {
    padding-top: 6rem;
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start; 
}

.container__texts {
    width: 40%; 
    padding-right: 20px; 
}

.container__texts h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #000000;
}

.container__texts p {
    font-size: 1.3rem;
    line-height: 1.6;
    color: #666666;
    margin-bottom: 20px;
}

.container__texts b {
    font-weight: bold;
}

.list__icons {
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    padding-left: 0;
    margin-top: 10px;
    gap: 0.8rem;
}

.list__check {
   width: 15px;
}

.container__images {
    position: relative; 
    width: 50%;
    display: flex;
    justify-content: flex-end; 
}

.img1, .img2 {
    position: absolute; 
    top: 0;
    width: 70%; 
    max-width: 100%; 
    border: 8px solid #ffffff; 
    z-index: 1; 
}

.img1 {
    top: 150px; 
    left: 10px; 
    z-index: 2; 
}

@media (max-width: 768px) {
    .container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0rem;
}

    .container__elements {
        flex-direction: column;
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

    .list__icons {
        font-size: 0.9rem;
    }

    .list__check {
   width: 12px;
}

    .container__images {
        display: none;
    }
}
</style>
