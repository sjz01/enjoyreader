<template>
  <div id="type">
    <!-- 只是组件，不是路由 -->
    <!-- 图书分类 中包括book图书样本 和 more一个分类的全部图书  -->
    <div id="typeTop">
      <span>中国文学</span>
      <router-link to="/more">
        <span @click="changeTitle('书城')" style="float:right;margin-right:14px;color:black; font-size: 16px;font-weight:400;">更多></span>
      </router-link>
      <div class="typeBook">
        <router-link to="/bookdetail">
          <div @click="changeTitle('书城')"></div>
        </router-link>
        <router-link to="/bookdetail">
          <div @click="changeTitle('书城')"></div>
        </router-link>
        <router-link to="/bookdetail">
          <div @click="changeTitle('书城')"></div>
        </router-link>
        
      </div>
      <p class="e4e6f1"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Type",
  methods: {
    changeTitle(title) {
      this.$store.commit("changeMytitle", { title });
    }
  }
};
</script>
<style scoped>
#type {
  margin-top: 20px;
}
#typeTop span {
  margin-left: 22px;
  font-family: kaiti;
  font-weight:600;
  font-size: 20px;
  display: inline-block;
}
/* #typeTop span:nth-of-type(2) {
  font-size: 14px !important;
  float: right;
  margin-right: 22px;
} */
span button {
  background: #eee;
  /* border-radius: 20px; */
}
.typeBook {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.typeBook :nth-of-type(1) {
  height: 120px;
  width: 80px;
  background: #8a8a8a;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #333;
}
.typeBook :nth-of-type(2) {
  height: 120px;
  width: 80px;
  background: #8a8a8a;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #333;
}
.typeBook :nth-of-type(3) {
  height: 120px;
  width: 80px;
  background: #8a8a8a;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #333;
}
.e4e6f1{
  margin-top: 20px;
  height: 20px;
  width: 100%;
  background-color: #e4e6f1;
}
</style>
