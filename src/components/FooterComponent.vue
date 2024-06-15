<template>
  <footer>
    <div class="footer">
      <div class="row">
        <a href="https://www.facebook.com/profile.php?id=100089078094393" target="_blank"><i
            class="fa fa-facebook"></i></a>
        <a href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram"></i></a>
        <a href="https://www.youtube.com" target="_blank"><i class="fa fa-youtube"></i></a>
        <a href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter"></i></a>
      </div>

      <div class="row">
        <ul>
          <li><router-link :to="{ name: 'Inicio' }" exact-active-class="nav__link--active">Inicio</router-link></li>
          <li><router-link :to="{ name: 'Nosotros' }" exact-active-class="nav__link--active">Nosotros</router-link></li>
          <li><router-link :to="{ name: 'Servicios' }" exact-active-class="nav__link--active">Servicios</router-link>
          </li>
          <li><router-link to="/Terminos" exact-active-class="nav__link--active">Términos & Condiciones</router-link>
          </li>
        </ul>
      </div>

      <div class="row">
        FERHUR Copyright © 2024 FERHUR
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style lang="css" scoped>
.footer {
  background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 30px 0px;
  font-family: 'Play', sans-serif;
  text-align: center;
}

.footer .row {
  width: 100%;
  margin: 1% 0%;
  padding: 0.6% 0%;
  color: rgb(0, 0, 0);
  font-size: 0.8em;
}

.footer .row a,
.footer .row router-link {
  text-decoration: none;
  color: rgb(255, 255, 255);
  transition: 0.5s;
}

.footer .row a:hover,
.footer .row router-link:hover {
  color: #000000;
}

.footer .row ul {
  width: 100%;
}

.footer .row ul li {
  display: inline-block;
  margin: 0px 30px;
}

.footer .row a i,
.footer .row router-link i {
  font-size: 2em;
  margin: 0% 1%;
}

@media (max-width: 720px) {
  .footer {
    text-align: left;
    padding: 5%;
  }

  .footer .row ul li {
    display: block;
    margin: 10px 0px;
    text-align: left;
  }

  .footer .row a i,
  .footer .row router-link i {
    margin: 0% 3%;
  }
}
</style>
