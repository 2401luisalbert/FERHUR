<template>
  <div class="header" :style="{ height: props.heightComponent }">
    <div class="inner__header">
      <img v-if="logo" src="../assets/logo.svg" alt="logo" class="logo">
      <h1 v-if="title" class="header-title">{{ props.title }}</h1>
      <h4 v-if="subtitle" class="header-subtitle">{{ props.subtitle }}</h4>
    </div>
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  logo: Boolean,
  title: String,
  subtitle: String,
  heightComponent: String
});
</script>

<style scoped>
.header {
  position: relative;
  text-align: center;
  background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inner__header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.logo {
  width: 12%;
  margin-bottom: 1rem;
}

.header-title {
color: #ffffff;
}

.header-subtitle {
  color: #ffffff;
}

.waves {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15vh;
  min-height: 100px;
  max-height: 150px;
  pointer-events: none;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
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

@media (max-width: 768px) {

  .header-title {
    font-size: 2rem;
  }
  .header-subtitle {
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
