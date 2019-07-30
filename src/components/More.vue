<template>
  <div id="more">
    <!-- 一个分类的全部图书 -->
    <!-- 是组件，也是路由 -->
    <nav class="nav-bar">
      <span @click="back"><img src="@/assets/返回1.png" style=" z-index:10;" alt=""></span>
      <p>更多图书</p>
    </nav>
    <ul class="books">
      <!--            循环-->
      <li>
        <div class="item"  v-for="(mysrc,key) in mydata" :key="key">
          <!-- <img class="book-pic" :src=mysrc.img alt="图片加载异常"/> -->
      
          <router-link :to="{path: '/bookdetail',params:{id:mydata.title}}" tag="img"  class="book-pic" :src=mysrc.img alt="图片加载异常" @click="tp">  </router-link>
          <div class="info">
            <h2 class="book-name">{{mysrc.title}}</h2>
            <p class="book-common">图书简介:{{mysrc.sub2}}</p>
            <p class="book-classify">分类:{{mysrc.catalog}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "More",
  data(){
    return{
      mydata:[],
      key:"",
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    tp(){
      $this.$store.state.myData=mydata
    }
  },
  created(){
    // 发起请求
    this.$axios.get("/api/data/?id=64&key=AeHG+dFkG93+ip2L8Yo2QGzDMwTgsJeZ/px06Q&catalog_id=242&pn=10&rn=15")
    .then((res)=>{
      // console.log(res.data.result.data);
      this.mydata = res.data.result.data
      console.log(this.mydata[key])
    })
}
}
</script>

<style  lang='less' scoped>
#more {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  z-index: 10;

  .books {
    margin-top: 50px;
    margin-bottom: 50px;
    li {
      height: 140px;
      background-color: white;

      .item {
        width: 94%;
        height: 100%;
        margin-left: 5%;
        box-sizing: border-box;
        padding: 13px 0;

        .book-pic {
          width: 80px;
          height: 120px;
          float: left;
          box-shadow: 2px 2px 5px #8a8a8a;
          border-radius: 5px;
        }
        .info {
          width: 150px;
          height: 86px;
          float: left;
          margin-left: 10px;

          .book-name {
            font-size: 19px;
            line-height: 24px;
            width: 150px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .book-common,
          .book-classify {
            font-size: 15px;
            color: #666;
            line-height: 22px;
            width: 200px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
.nav-bar {
  width: 100%;
  height: 50px;
  background-color: #8a8a8a;
  position: fixed;
  z-index: 10;
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
.nav-bar p {
  color: white;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  font-weight: 400;
  font-family: kaiti;
}
.nav-bar img{
    width: 20px;
    height: 20px;
    margin-top: 15px;
}
</style>
