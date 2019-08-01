<template>
  <div id="more">
    <!-- 一个分类的全部图书 -->
    <!-- 是组件，也是路由 -->
    <nav class="nav-bar">
      <span @click="back">
        <img src="@/assets/返回1.png" style=" z-index:10;" alt />
      </span>
      <p>更多图书</p>
    </nav>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" bottomPullText=""  ref="loadmore">
      <ul class="books">
        <!--循环-->
        <li>
          <div class="item" v-for="(mysrc,key) in mydata" :key="key" @click="dj(key)">
            <!-- <img class="book-pic" :src=mysrc.img alt="图片加载异常"/> -->
            <router-link
              :to="{path: '/bookdetail',params:{id:mydata.title}}"
              tag="img"
              class="book-pic"
              :src="mysrc.img"
              alt="图片加载失败"
              @error.native="imgError(item)"
            ></router-link>
            <div class="info">
              <h2 class="book-name">{{mysrc.title}}</h2>
              <p class="book-common">图书简介:{{mysrc.sub2}}</p>
              <p class="book-classify">分类:{{mysrc.catalog}}</p>
            </div>
          </div>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
export default {
  name: "More",
  data() {
    return {
      mydata: [],
      key: "",
      img:""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    dj(key) {
      console.log(key);
      this.$store.state.content = key;
      console.log(this.$store.state.content);
    },
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      this.allLoaded = true; // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
    },
    imgError(item){
       item.img = require('../assets/错误图片.png');
    }
      
  },
  created() {
    // 发起请求
    
    if (this.$store.state.id == 1) {
      this.$axios
        .get(
          "api/data/?id=64&key=XOjC/NViS4/+ipyL84oxT2zBOQTgsJeZ/px06Q&catalog_id=242&pn=10&rn=20"
        )
        .then(res => {
          console.log(res.data.result.data);
          this.mydata = res.data.result.data;
          this.$store.state.myData = res.data.result.data;
        });
    } else if (this.$store.state.id == 2) {
      this.$axios
        .get(
          "api/data/?id=64&key=XOjC/NViS4/+ipyL84oxT2zBOQTgsJeZ/px06Q&catalog_id=247&pn=10&rn=20"
        )
        .then(res => {
          console.log(res.data.result.data);
          this.mydata = res.data.result.data;
          this.$store.state.myData = res.data.result.data;
        });
    } else {
      this.$axios
        .get(
          "api/data/?id=64&key=XOjC/NViS4/+ipyL84oxT2zBOQTgsJeZ/px06Q&catalog_id=244&pn=10&rn=20"
        )
        .then(res => {
          console.log(res.data.result.data);
          this.mydata = res.data.result.data;
          this.$store.state.myData = res.data.result.data;
        });
    }
  }
};
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
.nav-bar img {
  width: 20px;
  height: 20px;
  margin-top: 15px;
}
</style>
