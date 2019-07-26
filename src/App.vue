<template>
  <div id="app">
    <Navbar /> 
    <router-view></router-view>
    <Tabbar />
    <p>{{$store.state.wanglei.name}}</p>
      <p>{{$store.state.qianyao.name}}</p>
        <p>{{$store.state.bole.name}}</p>
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
