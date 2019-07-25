<template>
  <div id="tabbar">
    <!-- 底部导航栏 -->
    <router-link to="/bookcity" exact>
      <p @click="changeTitle('书城')">&#xe663;</p>
      <p>书城</p>
    </router-link>
    <router-link to="/bookshelf">
      <p @click="changeTitle('书架')">&#xe60e;</p>
      <p>书架</p>
    </router-link>
    <router-link to="/mine">
      <p @click="changeTitle('我')">&#xe512;</p>
      <p>我</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
  methods: {
    changeTitle(title) {
      this.$store.commit("changeMytitle", { title });
    }
  }
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
// a {
//   display: block;
//   text-decoration: none;
//   overflow: hidden;
// }

p:nth-of-type(1) {
  font-family: myFont;
  font-size: 28px;
  color: #8a8a8a;
}
p:nth-of-type(2) {
  font-family: fangsong;
  // font-size: 28px;
  color: #8a8a8a;
}
</style>
