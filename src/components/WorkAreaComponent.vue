<template>
  <div class="services" id="services"></div>

  <div class="container">
    <div class="container__elements">
      <div class="container__texts">
        <h1 class="title">Mantenimiento General</h1>
        <hr class="hr" />
        <ul class="list">
          <li class="list__item" v-for="(item, index) in lista" :key="index">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const lista = [
  { name: "Electricidad" },
  { name: "Mantenimiento General" },
  { name: "Refrigeración" },
  { name: "Climatización y HVAC" },
  { name: "Reparación de Electrodomésticos" },
  { name: "Control de Plagas" },
  { name: "Técnico en Refrigeración Comercial" },
];
</script>

<style lang="css" scoped>
.services {
  padding-top: 2rem;
}

.container {
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding: 0 1rem;
  background-image:  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url('../assets/img3.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden; 
}

.container__elements {
  margin-top: 2rem;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2.5rem;
  box-sizing: border-box;
}

.container__texts {
  width: 100%;
}

h1{
  color: #ffffff;
}

.hr {
  width: 100%;
  border: none;
  border-top: 4px solid #0000ff;
  margin: 0;
  margin-bottom: 1rem;
}

.list {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center; 
  padding: 0;
  margin: 0;
}

.list__item {
  list-style-position: outside;
  position: relative;
  padding-bottom: 0.2rem;
  cursor: pointer;
}

.list__item::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background-color: rgb(255, 255, 255);
  left: 0;
  bottom: 0;
  transition: width 0.3s ease-in-out;
}

.list__item:hover::after {
  width: 100%;
}

.container__img {
  width: 100%;
  display: flex;
  justify-content: center;
}

.img {
  max-width: 100%;
  height: auto;
}

@media (min-width: 768px) {
  .container {
    height: 500px;
  }

  .hr {
    margin-bottom: 6rem;
  }

  .title {
    text-align: right;
    font-size: 2.5rem;
    margin: 0;
  }

  .list {
    justify-content: center;
    align-items: center;
  }

  .list__item {
    font-size: 1.5rem;
  }
}
</style>
