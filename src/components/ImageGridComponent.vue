<template>
    <div class="grid-container">
        <div v-for="(image, index) in props.images" :key="index" :class="['grid-item', imageClasses[index]]"
            @click="showModal(image)" :style="{ backgroundImage: `url(${image})` }"></div>
    </div>
    <div v-if="modalImage" class="modal-overlay" @click="hideModal">
        <div class="modal" @click.stop>
            <img :src="modalImage" alt="Modal Image" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps, onMounted } from 'vue';

const props = defineProps({
    images: {
        type: Array,
        required: true
    }
});


const modalImage = ref(null);
const imageClasses = ref([]);

const randomClass = () => {
    const classes = ['span-1', 'span-2', 'span-3'];
    return classes[Math.floor(Math.random() * classes.length)];
};

onMounted(() => {
    imageClasses.value = props.images.map(() => randomClass());
});

const showModal = (image) => {
    modalImage.value = image;
};

const hideModal = () => {
    modalImage.value = null;
};
</script>

<style scoped>

.grid-container {
    padding-top: 6rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    width: 100%;
    margin: 0 auto;
    position: relative;
}

.grid-item {
  border: 2px solid rgb(255, 255, 255);
  background-size: cover;
  background-position: center;
  height: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  cursor: pointer;
}

.grid-item:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  z-index: 999;
}
.grid-item.span-1 {
    grid-column: span 1;
}

.grid-item.span-2 {
    grid-column: span 2;
}

.grid-item.span-3 {
    grid-column: span 3;
}


/*Movil*/
@media (max-width: 768px) {

    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-item {
        height: 150px;
    }

    .grid-item span-1,
    span-2,
    span-3 {
        grid-column: span 1;
    }

}

h1 {
    color: black;
    font-size: 2.2rem;
    padding-left: 1rem;
    margin-top: 2rem;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 10px;
    box-sizing: border-box;
}

.modal {
    width: 90%;
    max-width: 600px;
    max-height: 90%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 10px;
}

.modal img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>