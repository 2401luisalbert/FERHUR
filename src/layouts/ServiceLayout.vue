<template>
  <div>
    <NavbarComponent/>
    <main>
      <router-view />
    </main>
    <FooterComponent/>
  </div>
</template>

<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<style scoped>
/* Estilos para ServiceLayout */
</style>
