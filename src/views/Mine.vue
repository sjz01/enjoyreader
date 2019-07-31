<template>
  <div id="mine">
    <!-- 我的 -->
    <!-- <p>我的</p> -->
    <div class="touxiang">
      <img src="@/assets/mineLogo.jpg" alt />
    </div>
    <p class="Login">
      <router-link to="/login">
        <span>登录</span>
      </router-link>/
      <router-link to="/register">
        <span>注册</span>
      </router-link>
    </p>

    <!-- <button>登录/注册</button> -->

    <div style="clear:both"></div>
    <br />
    <div class="about">
      <button @click="alert()">关于我们</button>
      <br />
      <button @click="showCont">友情赞助</button>
      <div>
        <img src="@/assets/付款码.jpg" alt="" v-if="show">
      </div>
      <!-- <div class="button">关于我们</div> -->
      <!-- <p class="button">关于我们</p> -->
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
import { MessageBox } from "mint-ui";
export default {
  name: "Mine",
  data() {
    return {
      show: false
    };
  },
  components: {
    Tabbar
  },
  methods: {
    alert() {
      MessageBox({
        title: "关于我们",
        message: "团队：Supreme <br>成员:王磊,张倩瑶,蒙伯乐"
        //  showCancelButton: true
      });
    },
    showCont: function() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="less"  scoped>
#mine {
  margin-top: 50px;
  z-index: 9;
  background: url(../assets/背景123.jpg);
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: fixed;
  top: 0;
}
a {
  color: #8a8a8a;
}
.touxiang {
  height: 130px;
  width: 130px;
  border-radius: 100px;
  // background-color: red;
  overflow: hidden;
  // display: inline-block;
  float: left;
  margin: 30px 20px;

  img {
    widows: 130px;
    height: 130px;
  }
}
.Login {
  font-size: 1.5em;
  // color: aqua;
  line-height: 170px;
  color: #8a8a8a;
  font-family: kaiti;
}
.about {
  width: 100%;
  text-align: center;
  color: #8a8a8a;
  // background-color: blue;

  button {
    margin-top: 40px;
    width: 90%;
    height: 60px;
    border-radius: 20px;
    text-align: center;
    color: #8a8a8a;
    background-color: #ffffff;
    border: 1px solid #8a8a8a;
    font-family: kaiti;
    font-size: 20px;
  }
  button:focus {
    outline: none;
    border: 1px solid deepskyblue;
  }
  div {
    margin-top: 8px;
    overflow: hidden;
    img {
      margin-top: 10px auto;
      width: 150px;
      height: 150px;
      overflow: hidden;
    }
  }
}
</style>
