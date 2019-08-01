<template>
  <div id="book-detail">
    <!-- 图书详情 -->
    <nav class="nav-bar">
      <span @click="back">
        <img src="@/assets/返回1.png" alt />
      </span>
      <p>书籍详情</p>
    </nav>
    <div class="BookCover">
      <img :src="content[$store.state.content].img" alt />
      <p>书名： {{content[$store.state.content].title}}</p>
      <span>分类：{{content[$store.state.content].catalog}}</span>
    </div>
    <div class="null"></div>
    <div class="tags">
      <p class="tou">短评</p>
      <div>{{content[$store.state.content].tags}}</div>
    </div>
    <div class="null"></div>
    <div class="tou" @click="join">加入书架</div>
    <div class="null"></div>
    <div class="introduce">
      <p class="tou">书籍简介</p>
      <div>
        <p>{{content[$store.state.content].sub2}}</p>
      </div>
    </div>
    <div class="null"></div>
    <div class="bookImage">
      <div class="tou">书本信息</div>
      <!-- <p>出版社</p> -->
      <div class="left">
        <p>出版社</p>
        <p>出版年</p>
        <p>阅读人数</p>
        <p>定价</p>
        <p>装帧</p>
        <p>购买链接</p>
      </div>
      <div class="left">
        <p>中国友谊出版公司</p>
        <p>{{content[$store.state.content].bytime}}</p>
        <p>{{content[$store.state.content].reading}}</p>
        <p>32.80元</p>
        <p>平装</p>
        <!-- <p>{{$store.state.myData[$store.state.content].online}}</p> -->
        <p>www.taobao.com</p>
      </div>
    </div>
    <div style="clear:both"></div>
    <div class="null"></div>
    <div class="tou" @click="cancel">撤出书架</div>
  </div>
</template>

<script>
//进入书架弹出组件
import { Toast } from "mint-ui";
import { setTimeout } from "timers";
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  name: "BookDetail",
  data() {
    return {
      data: "",
      img: "",
      content: [],
      myData: []
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    join() {
      console.log(this.content[this.$store.state.content].img);
      console.log(this.content[this.$store.state.content].title);

      this.$store.state.img.push(this.content[this.$store.state.content].img);
      this.$store.state.title.push(
        this.content[this.$store.state.content].title
      );

      //数组去重
      var arr = [];
      var a = this.$store.state.img;
      var bole = function() {
        a.forEach(function(item) {
          if (arr.indexOf(item) == -1) {
            arr.push(item);
          }
        });
        return arr;
      };
      bole();
      this.$store.state.img = arr;
      console.log(this.$store.state.img);
      // *******************************
      var arr2 = [];
      var b = this.$store.state.title;
      var bole2 = function() {
        b.forEach(function(item) {
          if (arr2.indexOf(item) == -1) {
            arr2.push(item);
          }
        });
        return arr2;
      };
      bole2();
      this.$store.state.title = arr2;
      console.log(this.$store.state.title);

      Toast({
        message: "操作成功",
        iconClass: "icon myIcon"
      });
    },
    //取消书架收藏
    cancel() {
      var c = this.content[this.$store.state.content].img
      var d = this.content[this.$store.state.content].title
      // console.log(c)
      // console.log(d)
      //  console.log(this.$store.state.img)
     

      this.$store.state.img.remove(c);
       this.$store.state.title.remove(d);
      Toast({
        message: "操作成功",
        iconClass: "icon myIcon"
      });
    }
  },
  computed: {},
  created: function() {
    if (this.$store.state.id == 1) {
      this.content = this.$store.state.myData;
    } else if (this.$store.state.id == 2) {
      this.content = this.$store.state.myData2;
    } else {
      this.content = this.$store.state.myData3;
    };
//取消收藏remove方法数组去元素
 Array.prototype.indexOf = function(val) {
      for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
      }
      return -1;
    };
    Array.prototype.remove = function(val) {
      var index = this.indexOf(val);
        console.log(2);
      if (index > -1) {

        this.splice(index, 1);
      }
    };

  },
};
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
    padding: 5px;
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
    text-indent: 2em;
    font-family: fangsong;
    letter-spacing: 1px;
    line-height: 22px;
    span {
      color: rgba(28, 31, 28, 0.667);
      display: inline-block;
      margin-left: 20px;
      font-size: 0.8em;
      background-color: #fddd9b;
      // border: 1px solid red;
      border-radius: 2px;
    }
  }
}
.introduce {
  margin: 0 auto;
  line-height: 24px;
  div {
    width: 90%;
    margin: 0 auto;

    p {
      text-indent: 2em;
      font-family: fangsong;
      margin-bottom: 14px;
      font-size: 18px;
      letter-spacing: 1px;
    }
  }
}
.left {
  color: #8a8a8a;
  float: left;
  margin: 0 20px;
  font-size: 0.8em;
  margin-bottom: 50px;
  height: 56px;
  letter-spacing: 1px;
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
.nav-bar img {
  width: 20px;
  height: 20px;
  margin-top: 15px;
}
</style>
