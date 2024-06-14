<template>
    <nav :class="['nav', { 'nav--open': menuOpen, 'nav--scrolled': scrolled }]" id="nav">
        <div class="container">
            <router-link :to="{ name: 'Inicio' }" class="nav__link" exact-active-class="nav__link--active"
                @click="closeMenu">
                <!-- <img class="nav__logo nav__logo--default" :class="{ 'nav__logo--hidden': scrolled }" src="../assets/logo__negro.svg" alt="Logo Negro"> -->
                <img class="nav__logo" src="../assets/logo.svg" alt="Logo Color">
            </router-link>

            <ul class="nav__links">
                <router-link :to="{ name: 'Inicio' }" class="nav__link" exact-active-class="nav__link--active"
                    @click="closeMenu">
                    <img class="nav__logo--mobile" src="../assets/logo__negro.svg" alt="">
                </router-link>
                <li class="nav__item">
                    <router-link :to="{ name: 'Inicio' }" class="nav__link" exact-active-class="nav__link--active"
                        @click="closeMenu">Inicio</router-link>
                </li>
                <li class="nav__item">
                    <router-link :to="{ name: 'Nosotros' }" class="nav__link" exact-active-class="nav__link--active"
                        @click="closeMenu">Acerca de</router-link>
                </li>
                <li class="nav__item nav__item--has-submenu">
                    <a href="#" class="nav__link" :class="{ 'nav__link--active': isActive('Servicios') }"
                        @click.prevent="toggleSubmenu">Servicios</a>
                    <ul class="nav__submenu" :class="{ 'submenu-visible': submenuVisible || isActive('Servicios') }">
                        <li class="nav__submenu-item">
                            <router-link :to="{ name: 'Servicio1' }" class="nav__submenu-link"
                                exact-active-class="nav__submenu-link--active" @click="closeMenu">Servicio
                                1</router-link>
                        </li>
                        <li class="nav__submenu-item">
                            <router-link :to="{ name: 'Servicio2' }" class="nav__submenu-link"
                                exact-active-class="nav__submenu-link--active" @click="closeMenu">Servicio
                                2</router-link>
                        </li>
                        <li class="nav__submenu-item">
                            <router-link :to="{ name: 'Servicio3' }" class="nav__submenu-link"
                                exact-active-class="nav__submenu-link--active" @click="closeMenu">Servicio
                                3</router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav__item">
                    <router-link to="/contacto" class="nav__link" exact-active-class="nav__link--active"
                        @click="closeMenu">Contacto</router-link>
                </li>
            </ul>

            <a href="#" class="nav__toggle" @click="openMenu">
                <img v-if="!menuOpen" src="../assets/menu.png" class="nav__icon nav__icon--menu">
                <img v-else src="../assets/close.png" class="nav__icon nav__icon--close">
            </a>
        </div>
    </nav>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const menuOpen = ref(false);
const submenuVisible = ref(false);
const route = useRoute();
const scrolled = ref(false);

const toggleSubmenu = () => {
    submenuVisible.value = !submenuVisible.value;
};

const openMenu = () => {
    menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
    menuOpen.value = false;
    submenuVisible.value = false;
};

const isActive = (menu) => {
    if (menu === 'Servicios') {
        return route.name === 'Servicio1' || route.name === 'Servicio2' || route.name === 'Servicio3';
    }
    return false;
};

const threshold = 10;

const handleScroll = () => {
  scrolled.value = Math.abs(window.scrollY) > threshold;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>



<style lang="css" scoped>
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
}

.container {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow: visible;
}

.nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    color: #000;
    transition: all 4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.nav--scrolled {
    background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav--open .nav__links {
    transform: translateX(0);
}


.nav__logo {
    display: none;
    width: 60px;
    transition: opacity 1s ease, transform 1s ease;
}

.nav__logo--hidden {
    opacity: 0;
    transform: scale(0.9);
}

.nav__logo--visible {
    opacity: 1;
    transform: scale(1);
}

.nav__logo--scrolled {
    opacity: 0;
    transform: scale(0.9);
    position: absolute;
    top: 10px; 
}

.nav--scrolled .nav__logo--scrolled {
    opacity: 1;
    transform: scale(1);
}

.nav--scrolled .nav__logo--default {
    opacity: 0;
    transform: scale(0.9);
}
.nav__logo--mobile {
    display: block;
    width: 80px;
}

.nav__icon {
    width: 30px;
}

.nav__links {
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100vh;
    padding: 0;
    display: grid;
    align-content: center;
    justify-items: center;
    gap: 2em;
    transform: translateX(-100%);
    transition: transform 0.3s;
}

.nav__item {
    list-style: none;
    position: relative;
}

.nav__link {
    color: #000;
    text-decoration: none;
    font-size: 1.5rem;
    letter-spacing: 1px;
    transition: all ease 0.3s;
}

.nav__link:hover {
    color: #0000ff;
}

.nav__link--active {
    color: #0000ff;
    font-weight: bold;
}

.nav__submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 150px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 10;
    transition: background-color 0.3s;
}

.nav__submenu-item {
    list-style: none;
}

.nav__submenu-link {
    display: block;
    padding: 10px 20px;
    color: #000;
    text-decoration: none;
    font-size: 1rem;
    transition: background-color 0.3s, color 0.3s;
}

.nav__submenu-link:hover {
    background-color: #f0f0f0;
    color: #0000ff;
}

.nav__submenu-link--active {
    background-color: #f0f0f0;
    color: #0000ff;
    font-weight: bold;
}

.nav__item--has-submenu:hover .nav__submenu {
    display: block;
}

.nav__item--has-submenu .nav__submenu {
    display: none;
}

.nav__item--has-submenu.submenu-visible .nav__submenu {
    display: block;
}

.nav__toggle {
    display: block;
}

@media (min-width: 768px) {

    .container {
        width: 85%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .nav {
        width: 100%;
    }

    .nav__logo--mobile {
        display: none;
    }

    .nav__logo {
        display: block;
        width: 60px;
    }

    .nav__toggle {
        display: none;
    }

    .nav__links {
        width: auto;
        height: auto;
        padding: 0;
        background-color: transparent;
        position: static;
        display: flex;
        align-items: center;
        gap: 1.5em;
        transform: none;
    }

    .nav__link {
        color: #000;
        font-size: 1.2rem;
        letter-spacing: normal;
        transition: color 0.3s;
    }

    .nav__link:hover {
        color: #ffffff;
    }

    .nav__link--active {
        color: #ffffff;
        font-weight: bold;
    }

    .nav__link--active--scroll {
        color: #ffffff;
        font-weight: bold;
    }

    .nav__submenu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        min-width: 150px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        z-index: 10;
        transition: background-color 0.3s;
    }

    .nav__item--has-submenu:hover .nav__submenu {
        display: block;
    }
}
</style>
