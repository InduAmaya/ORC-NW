<template>
  <div id="app">
    <div id="nav">
      <TopHeader/>
      
    </div>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import TopHeader from "./components/TopHeader.vue"
import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  components: {
    TopHeader,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin-top: 20px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
