<template>
  <div id="book-detail">
    <!-- 图书详情 -->
    <nav class="nav-bar">
      <span @click="back"><img src="@/assets/返回1.png" alt=""></span>
      <p>书籍详情</p>
    </nav>
    <div class="BookCover">
      <img :src=bookSrc alt />
      <p>书名：盗墓笔记</p>
      <span>[中]南派三叔</span>
    </div>
    <div class="null"></div>
    <div class="tags">
      <p class="tou">短评</p>
      <div>
        <span>盗墓+19</span>
        <span>惊险刺激+10</span>
        <span>盗墓铁三角+10</span>
        <span>盗墓</span>
        <span>小哥真帅</span>
        <span>盗墓</span>
        <span>惊险刺激</span>
        <span>盗墓铁三角</span>
        <span>惊险</span>
        <span>小哥真帅,盗墓铁三角</span>
        <span>刺激</span>
        <span>盗墓</span>
        <span>惊险刺激</span>
        <span>盗墓铁三角</span>
        <span>小哥真帅</span>
      </div>
    </div>
    <div class="null"></div>
    <div class="introduce">
      <p class="tou">书籍简介</p>
      <div>
        <p>出身“老九门”世家的吴邪，因身为考古学家的父母在某次保护国家文物行动时被国外盗墓团伙杀害，吴家为保护吴邪安全将他送去德国读书，因而吴邪对“考古”事业有着与生俱来的兴趣。</p>
        <p>
          在一次护宝过程中他偶然获得一张记载着古墓秘密的战国帛书，为赶在不明势力之前解开帛书秘密，保护古墓中文物不受侵害，按照帛书的指引吴邪跟随三叔吴三省、潘子以及神秘小哥张起灵来到鲁殇王墓探究七星鲁王宫的秘密。
          在古墓中，吴邪结识了前来探秘的王胖子并救下身份不明的阿宁，经过一系列惊险刺激匪夷所思的事件之后，众人又发现了更多未解的谜团。吴邪等人在和不明势力斗智斗勇的同时又踏上了新的探秘之旅。
        </p>
      </div>
    </div>
     <div class="null"></div>
     <div class="bookImage">
         <div class="tou">书本信息</div>
         <!-- <p>出版社</p> -->
         <div class="left">
             <p>出版社</p>
             <p>出版年</p>
             <p>页数</p>
             <p>定价</p>
             <p>装帧</p>
             <p>购买链接</p>
         </div>
         <div class="left">
             <p>中国友谊出版公司</p>
             <p>2010-1</p>
             <p>274</p>
             <p>32.80元</p>
             <p>平装</p>
             <p>www.jingdong.com</p>
         </div>

     </div>
     <div style="clear:both"></div>
      <div class="null"></div>
       <div class="tou" @click="join">加入书架</div>
  </div>
</template>

<script>
//进入书架弹出组件
import { Toast } from 'mint-ui';
import { setTimeout } from 'timers';
export default {
   name: "BookDetail",
   data(){
     return{
       bookSrc:"",
       bookName:"",
       bookIntroduce:"",
     }
   },
   methods: {
    back() {
      this.$router.go(-1);
    }, 
    join(){
       Toast({
        message: '操作成功',
        iconClass: 'icon myIcon'
      });
    }
  },
  created(){
    // 发起请求
    this.$axios.get("/api/data/?id=64&key=AeHG+dFkG93+ip2L8Yo2QGzDMwTgsJeZ/px06Q&catalog_id=242&pn=10&rn=20")
    .then((res)=>{
      console.log(res.data.result.data[0].img);
      this.bookSrc = res.data.result.data[0].img

      // console.log(mysrc)
    })
  }

}
</script>

<style  lang="less" scoped>
#book-detail {
  margin-top: 50px;
  padding-top: 40px;
   background-color: #ffffff;
  width: 100%;
  height: 100%;
}

.null {
  margin-top: 10px;
  height: 20px;
  background-color: #e4e6f1;
}
.BookCover {
  text-align: center;
  img {
    width: 30%;
  }
  p {
    font-family: kaiti;
    font-size: 1em;
  }
  span {
    font-size: 0.8em;
    color: #484c55;
  }
}
.tou {
  text-align: center;
  margin: 10px;
  clear: both;
}
.tags {
  div {
    width: 90%;
    margin: 0 auto;
    span {
      color: rgba(28, 31, 28, 0.667);
      display: inline-block;
      margin-left: 20px;
      font-size: 0.8em;
      background-color: #FDDD9B;
      // border: 1px solid red;
      border-radius: 2px;
    }
  }
}

.introduce {
  margin: 0 auto;
  div {
    width: 90%;
    margin: 0 auto;

    p {
      text-indent: 2em;
      font-family: fangsong;
      margin-bottom:14px; 
    }
  }
}
.left{
    color: #8a8a8a;
    float: left;
    margin:0 20px; 
    font-size: 0.8em;
    margin-bottom: 50px;
    height: 56px;
}

.nav-bar {
  width: 100%;
  height: 50px;
  background-color: #8a8a8a;
  position: fixed;
  top: 0;
   position: fixed;
  z-index: 10;
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
