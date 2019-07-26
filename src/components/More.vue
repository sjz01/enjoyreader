<template>
  <div id="more">
    <!-- 一个分类的全部图书 -->
    <!-- 是组件，也是路由 -->
    <nav class="nav-bar">
      <span @click="back">返回</span>
      <p>更多图书</p>
    </nav>
  </div>
</template>

<script>
export default {
  name: "More",
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
#more {
  background-color: #ffffff;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.nav-bar {
  width: 100%;
  height: 50px;
  background-color: #8a8a8a;
  position: fixed;
  top: 0;
}
.nav-bar span {
  position: absolute;
  width: 50px;
  height: 100%;
  color: white;
  left: 10px;
  line-height: 50px;
}
p {
  color: white;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  font-weight: 400;
}
</style>
