<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,700&family=Lato:wght@400;700&display=swap');

* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

body {
  margin: 0;
  font-family: 'Lato', sans-serif;
  line-height: 1.6;
  color: #333333;
  background-color: #f9f9f9;
}

li {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5 {
  font-family: 'Lato', sans-serif;
  font-weight: 200;
  letter-spacing: 2px;
  color: #ffffff;
}

h1 {
  font-size: 2.8rem;
}

h2 {
  font-size: 2.4rem;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-size:1.5rem;
}

h5 {
  font-size:1rem;
}

p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size: 1rem;
  color: #333333;
  margin-bottom: 20px;
  line-height: 1.5;
}
b {
  font-family: 'Lora', serif;
  font-weight: bold; 
}

/* Additional styles for other text elements */
a {
  color: #007BFF;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}


</style>


