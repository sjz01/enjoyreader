<template>
  <div id="app">
    <Navbar /> 
    <router-view></router-view>
    <Tabbar />
  </div>
</template>

<script>
 import Tabbar from './components/Tabbar'
 import Navbar from './components/Navbar'
  

  export default {
    name: "App",
    components: {
      Tabbar,Navbar
    },
    // data() {
    //   return {

    //   }
    // },
    // methods: {

    // },
    // created:{

    // }
  }
</script>

<style lang="less">



</style>
