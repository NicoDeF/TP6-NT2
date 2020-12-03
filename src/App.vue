<template>
<header>
<NavBar />
</header>
<br>
<router-view/>
</template>

<script>
import NavBar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    NavBar 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
    width: 100%;
    opacity: 0.5;
    position: absolute;
    top: 0;
    text-align: center;
}
</style>
