<template>
  <div id="book-detail">
    <!-- 图书详情 -->
<<<<<<< HEAD
    <div class="BookCover">
      <img src="http://img0.imgtn.bdimg.com/it/u=3963626460,748883260&fm=26&gp=0.jpg" alt />
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
         </div>
         <div class="left">
             <p>具体出版社</p>
             <p>具体出版年</p>
             <p>具体页数</p>
             <p>具体定价</p>
             <p>具体装帧</p>
         </div>

     </div>
=======
    <nav class="nav-bar">
      <span @click="back">返回</span>
      <p>图书详情</p>
    </nav>
>>>>>>> 0028f7126038f037b4ed4ded2257a5918fc29e11
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  name: "BookDetail"
};
</script>

<style  lang="less" scoped>
#book-detail {
  margin-top: 50px;
  padding-top: 40px;
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
    //   margin: 1px 20px;
    }
  }
}
.left{
    color: #8a8a8a;
    float: left;
    margin:0 20px; 
    font-size: 0.8em;
    margin-bottom: 200px;
}

=======
  name: "BookDetail",
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
#book-detail {
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
>>>>>>> 0028f7126038f037b4ed4ded2257a5918fc29e11
</style>
