<template>
<<<<<<< HEAD
  <div id="more">
    <!-- 一个分类的全部图书 -->
    <!-- 是组件，也是路由 -->
    <nav class="nav-bar">
      <span @click="back">返回</span>
      <p>更多图书</p>
    </nav>
  </div>
=======
    <div id="more">
<!-- 一个分类的全部图书 -->
        <!-- 是组件，也是路由 -->
      <ul class="books">
<!--            循环-->
            <li>
                <div class="item">
                    <img class="book-pic" src="http://img2.imgtn.bdimg.com/it/u=1110306649,2309417113&fm=26&gp=0.jpg" alt="图片加载异常">
                    <div class="info">
                        <h2 class="book-name" >title</h2>
                        <p class="book-common">
                            图书简介
                        </p>
                        <p class="book-classify">
                            分类
                        </p>
                    </div>

                </div>
            </li>
            <li>
                <div class="item">
                    <img class="book-pic" src="http://img2.imgtn.bdimg.com/it/u=1110306649,2309417113&fm=26&gp=0.jpg" alt="图片加载异常">
                    <div class="info">
                        <h2 class="book-name" >title</h2>
                        <p class="book-common">
                            图书简介
                        </p>
                        <p class="book-classify">
                            分类
                        </p>
                    </div>

                </div>
            </li>
        </ul>
    </div>
>>>>>>> 345a8f235e41a2541683e9c43546733b6aca02c5
</template>

<script>
export default {
<<<<<<< HEAD
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
=======
  name: "More"
};
</script>

<style lang='less' scoped>
#more {
  margin-top: 50px;
  margin-bottom: 50px;
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
                    padding:13px 0;

                    .book-pic {
                        width: 80px;
                        height: 120px;
                        float: left;
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
                        .book-common,.book-classify{
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
>>>>>>> 345a8f235e41a2541683e9c43546733b6aca02c5
}
</style>
