<template>
  <div id="type">
    <!-- 只是组件，不是路由 -->
    <!-- 图书分类 中包括book图书样本 和 more一个分类的全部图书  -->
    <div class="typeTop" v-for="(result,key) in result" :key="key">
      <span>{{result.catalog}}</span>
      <router-link to="/more">
        <span @click="changeTitle('书城')" style="float:right;margin-right:14px;color:black; font-size: 16px;font-weight:400;">更多></span>
      </router-link>
      <ul class="typeBook"  v-for="(mydata,key) in mydata" :key="key">
        <router-link to="/bookdetail">
          <li @click="changeTitle('书城')">
            <img :src=mydata.img>
          </li>
        </router-link>
      </ul>
      <p class="e4e6f1"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Type",
  data(){
    return{
      result:[],
      mydata:[]
    }
  },

  methods: {
    changeTitle(title) {
      this.$store.commit("changeMytitle", { title });
    }
  },
  created(){
    // 发起请求
    this.$axios.get("api/goodbook/catalog?key=b72dfbf2e7198d964adb73307fe02443")
    .then((res)=>{
      console.log(res);
      this.result = res.data.result;
      // console.log(this.result)
      // console.log(mysrc)
    })
    // http://apis.juhe.cn/goodbook/query?key=b72dfbf2e7198d964adb73307fe02443&catalog_id=246&rn=10&rn=10
    this.$axios.get("api/goodbook/query?key=b72dfbf2e7198d964adb73307fe02443&catalog_id=246&rn=0&rn=3") 
    .then((res)=>{
      console.log(res);
       this.mydata = res.data.result.data;
       console.log(this.mydata)
    })
}
};
</script>
<style scoped>
#type {
  margin-top: 20px;
}
.typeTop span {
  margin-left: 22px;
  font-family: kaiti;
  font-weight:600;
  font-size: 20px;
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
  /* display: flex; */
  /* justify-content: space-around; */
  margin-top: 20px;
   /* display: flex; */
  /* display: inline-block; */
  /* justify-content: space-around; */
}
.typeBook div {
  height: 120px;
  width: 80px;
  background: #8a8a8a;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #333;
  /* float: left; */
  /* display: inline-block; */
 
}
/* .typeBook :nth-of-type(2) {
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
} */
.e4e6f1{
  margin-top: 20px;
  height: 20px;
  width: 100%;
  background-color: #e4e6f1;
}
</style>
