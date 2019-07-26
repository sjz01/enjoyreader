<template>
  <div id="app">
    <Navbar />
    <!-- <BookCity /> -->
    <router-view></router-view>
    <Tabbar />
    <!-- <p>{{$store.state.wanglei.name}}</p>
      <p>{{$store.state.qianyao.name}}</p>
    <p>{{$store.state.bole.name}}</p>-->
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar";
import Navbar from "./components/Navbar";
import BookCity from "./views/BookCity";
import BookShelf from "./views/BookShelf";
import BookDetail from "./views/BookDetail";

export default {
  name: "App",
  components: {
    Tabbar,
    Navbar,
    BookCity,
    BookShelf,
    BookDetail
  }
  // data() {
  //   return {

  //   }
  // },
  // methods: {

  // },
  // created:{

  // }
};
</script>

<style lang="less">
</style>
