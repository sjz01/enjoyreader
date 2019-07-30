<template>
  <div id="type">
    <!-- 只是组件，不是路由 -->
    <!-- 图书分类 中包括book图书样本 和 more一个分类的全部图书  -->
    <div class="typeTop" >
      <!-- <span>{{mydata.catalog}}</span> -->
      <span>中国文学</span>
      <router-link to="/more">
        <span @click="changeTitle('书城')" style="float:right;margin-right:14px;color:black; font-size: 16px;font-weight:400;">更多></span>
      </router-link>
      <ul class="typeBook">
        <router-link to="/bookdetail">
          <li @click="changeTitle('书城')"  v-for="(mydata,key) in mydata" :key="key">
            <img :src=mydata.img >
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
    // this.$axios.get("api/goodbook/catalog?key=b72dfbf2e7198d964adb73307fe02443")
    // .then((res)=>{
    //   console.log(res);
    //   this.result = res.data.result;
    //   // console.log(this.result)
    //   // console.log(mysrc)
    // })
    // http://apis.juhe.cn/goodbook/query?key=b72dfbf2e7198d964adb73307fe02443&catalog_id=246&rn=10&rn=10
    this.$axios.get("api/data/?id=64&key=AeHG+dFkG93+ip2L8Yo2QGzDMwTgsJeZ/px06Q&catalog_id=242&pn=10&rn=3") 
    .then((res)=>{
      console.log(res);
       this.mydata = res.data.result.data;
       console.log(this.mydata)
    })
}
};
</script>
<style scoped  lang="less">
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
.e4e6f1{
  margin-top: 20px;
  height: 20px;
  width: 100%;
  background-color: #e4e6f1;
}
.typeBook{
  // float: left;
  display: flex;
  justify-content: space-around;
  margin-right: 30px;
  li{
    width: 20%;
    height: 30%;
      float: left;
      margin-left: 40px;
      img{
        width: 80px;
        height: 120px;

      }
  }
}
</style>
