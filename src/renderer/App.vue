<template>
  <div id="app">
    <sidenav></sidenav>
    <v-container fluid class="mt-0">
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
  import sidenav from './components/Sidenav.vue'

  export default {
    components: {sidenav},
    name: 'invoice-app'
  }
</script>

<style lang="scss">
#app{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
}
*{
  font-family: 'Roboto',serif;
}
a{
  text-decoration: none;
  color: inherit;
  transition: all 300ms ease-out;
  &:hover{
    color:lightblue;
  }
}
</style>
