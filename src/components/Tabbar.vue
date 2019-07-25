<template>
  <div id="tabbar">
    <!-- 底部导航栏 -->
    <router-link to="/BookCity"   exact>
    <img src="@/assets/书城.png" @click="changeTitle('书城')" alt="">
      <p>书城</p>
    </router-link>
    <router-link to="/BookShelf"  >
    <img  src="@/assets/书架.png" @click="changeTitle('书架')" alt="">
      <p>书架</p>
    </router-link>
    <router-link to="/Mine"  >
    <img src="@/assets/我的.png" @click="changeTitle('我')" alt="">
      <p>我</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Tabbar"
};
</script>

<style lang="less" scoped>
#tabbar {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  color: #8a8a8a;
  background-color: white;
  text-align: center;
  border-top: 1px solid #8a8a8a;
}
img {
  width: 22px;
  height: 22px;
}
// .router-link-active {
//   text-decoration: none;
//   color: #e54847;
// }
</style>
