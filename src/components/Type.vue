<template>
  <div id="type">
    <!-- 只是组件，不是路由 -->
    <!-- 图书分类 中包括book图书样本 和 more一个分类的全部图书  -->
    <div class="typeTop" >
      <!-- <span>{{mydata.catalog}}</span> -->
      <span>中国文学</span>
      <router-link to="/more">
        <span @click="changeTitle('书城'),dj(key,1)" style="float:right;margin-right:14px;color:black; font-size: 16px;font-weight:400;">更多></span>
      </router-link>
      <ul class="typeBook">
        <router-link to="/bookdetail">
          <li @click="changeTitle('书城'),dj(key,1)"  v-for="(mydata,key) in mydata" :key="key">
            <!-- <img :src="$store.state.myData[$store.state.content].img" > -->
            <img :src=mydata.img alt="">
          </li>
        </router-link>
      </ul>
      <p class="e4e6f1"></p>
    </div>
    <div class="typeTop" >
      <!-- <span>{{mydata.catalog}}</span> -->
      <span>外国文学</span>
      <router-link to="/more">
        <span @click="changeTitle('书城'),dj(key,2) " style="float:right;margin-right:14px;color:black; font-size: 16px;font-weight:400;">更多></span>
      </router-link>
      <ul class="typeBook">
        <router-link to="/bookdetail">
          <li @click="changeTitle('书城'),dj(key,2)"  v-for="(mydata2,key) in mydata2" :key="key">
            <!-- <img :src="$store.state.myData[$store.state.content].img" > -->
            <img :src=mydata2.img alt="">
          </li>
        </router-link>
      </ul>
      <p class="e4e6f1"></p>
    </div>
    <div class="typeTop" >
      <!-- <span>{{mydata.catalog}}</span> -->
      <span>儿童文学</span>
      <router-link to="/more">
        <span @click="changeTitle('书城'),dj(key,3)" style="float:right;margin-right:14px;color:black; font-size: 16px;font-weight:400;">更多></span>
      </router-link>
      <ul class="typeBook">
        <router-link to="/bookdetail">
          <li @click="changeTitle('书城'),dj(key,3)"  v-for="(mydata3,key) in mydata3" :key="key">
            <!-- <img :src="$store.state.myData[$store.state.content].img" > -->
            <img :src=mydata3.img alt="">
          </li>
        </router-link>
      </ul>
      <p class="e4e6f1"></p>
    </div>
  </div>
</template>

<script>
import { connect } from 'net';
import http from "../axios/myApi"
import { Indicator } from 'mint-ui';

export default {
  name: "Type",
  data(){
    return{
      result:[],
      mydata:[],
      key:"",
      result2:[],
      mydata2:[],
      result3:[],
      mydata3:[],
      obj:{},
    }
  },

  methods: {
    changeTitle(title) {
      this.$store.commit("changeMytitle", { title });
    },
    dj(key,id){
      this.$store.state.id = id
      this.$store.state.content = key
      console.log(this.$store.state.content)
    }
  },
  beforeCreate (){
    Indicator.open('网快的话你可能看不见这个加载..网慢的话你也不会无聊...');
  },
  updated  (){
    Indicator.close();
  },
  created(){
    // 发起请求
    // this.$axios.get("api/data/?id=64&key=UO7HqNE0Soz+hpOL8Yo2RGnCPQTgsJeZ/px06Q&catalog_id=242&pn=10&rn=3")
    // .then((res)=>{
    //   console.log(res.data.result.data);
    //   this.mydata = res.data.result.data
    //   this.$store.state.myData = res.data.result.data
    // })

    // this.$axios.get("api/data/?id=64&key=UO7HqNE0Soz+hpOL8Yo2RGnCPQTgsJeZ/px06Q&catalog_id=247&pn=10&rn=3")
    // .then((res)=>{
    //   console.log(res.data.result.data);
    //   this.mydata2 = res.data.result.data
    //   this.$store.state.myData2 = res.data.result.data
    // })
    // this.$axios.get("api/data/?id=64&key=UO7HqNE0Soz+hpOL8Yo2RGnCPQTgsJeZ/px06Q&catalog_id=244&pn=10&rn=3")
    // .then((res)=>{
    //   console.log(res.data.result.data);
    //   this.mydata3 = res.data.result.data
    //   this.$store.state.myData3 = res.data.result.data
    // })

    //王磊接口
     this.$axios.get("api/data/?id=64&key=AeHG+dFkG93+ip2L8Yo2QGzDMwTgsJeZ/px06Q&catalog_id=242&pn=10&rn=3")
    .then((res)=>{
      console.log(res);
      this.mydata = res.data.result.data
      this.$store.state.myData = res.data.result.data
    })
    this.$axios.get("api/data/?id=64&key=AeHG+dFkG93+ip2L8Yo2QGzDMwTgsJeZ/px06Q&catalog_id=247&pn=10&rn=3")
    .then((res)=>{
      console.log(res);
      this.mydata2 = res.data.result.data
      this.$store.state.myData2 = res.data.result.data
    })
    this.$axios.get("api/data/?id=64&key=AeHG+dFkG93+ip2L8Yo2QGzDMwTgsJeZ/px06Q&catalog_id=244&pn=10&rn=3")
    .then((res)=>{
      console.log(res);
      this.mydata3 = res.data.result.data
      this.$store.state.myData3 = res.data.result.data
    })
}
};
</script>
<style scoped  lang="less">
#type {
  margin-top: 20px;

}
.typeTop{
  padding-top: 10px;
  span {
  margin-left: 22px;
  font-family: kaiti;
  font-weight:600;
  font-size: 20px;
}
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
