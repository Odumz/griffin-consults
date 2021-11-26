<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <header-nav class="z-index" />
  <router-view class=""/>
  <!-- <footer-nav /> -->
</template>

<script>
import { defineComponent } from '@vue/runtime-core'
import headerNav from './components/header.vue'
// import footerNav from './components/footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    headerNav
    // footerNav
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  @apply px-52;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.z-index {
  z-index: 1000;
}
</style>
