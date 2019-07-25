<template>
  <div id="navbar">
    <!-- 顶部导航栏 -->
    <p>{{$store.state.myTitle}}</p>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
#navbar {
  width: 100%;
  height: 50px;
  background-color: #8a8a8a;
  position: fixed;
  top: 0;
}

p {
  color: white;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  font-weight: 400;
}
</style>
