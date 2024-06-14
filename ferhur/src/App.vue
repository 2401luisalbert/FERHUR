<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="css">
*{
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

body {
    margin: 0;
}

li{
  font-family: 'Lato', sans-serif;
  font-weight: 600;
}

h1,h3{
    padding: 10px;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 2.3rem;
}

h3 {
    font-weight: 200;
    font-size: 2rem;
}

p {
    font-family: 'Lato', sans-serif;
    letter-spacing: 1px;
    font-size: 14px;
    color: #333333;
}
</style>


