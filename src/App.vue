<template>
  <div id="app">
    <Navbar />
    <!-- <BookCity /> -->
    <router-view></router-view>
    <router-view name="more"></router-view>
    <router-view name="detail"></router-view>
    <router-view name="register"></router-view>
    <router-view name="login"></router-view>
    <router-view name="forget"></router-view>
    <router-view name="question"></router-view>
    <router-view name="resetpwd"></router-view>
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
import { timingSafeEqual } from 'crypto';


export default {
  name: "App",
  methods:{
    _isMobile() {
	 let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android)/i)
	 return flag;
}
  },
  components: {
    Tabbar,
    Navbar,
    BookCity,
    BookShelf,
    BookDetail
  },
  mounted() {
    if (this._isMobile()) {
       return;
    }else{
      alert("请在移动端打开");
      // this.$router.replace('/');
    }
  }
};
</script>

<style lang="less">



</style>
