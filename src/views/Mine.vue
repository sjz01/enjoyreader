<template>
  <div id="mine">
    <!-- 我的 -->
    <!-- <p>我的</p> -->
    <div class="touxiang">
      <img src="../assets/cege.jpg" alt />
    </div>
    <p v-if="!showname" class="Login">
      <router-link to="/login">
        <span>登录</span>
      </router-link>/
      <router-link to="/register">
        <span>注册</span>
      </router-link>
    </p>
    <p v-if="showname" class="Login">{{username}}</p>
    <div style="clear:both"></div>
    <br />

    <div class="about">
      <!-- <button>退出登录</button> -->
      <br />
      <div id="fukuan">
        <img src="@/assets/付款码.png" alt v-if="show" />
      </div>
      <button @click="alert()">关于我们</button>
      <button @click="showCont">友情赞助</button>
      <router-link  to="/login">
        <button  v-if="showname" @click="quit">退出登录</button>
      </router-link>
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
      showname: false,
      username: "",
      show: false,
      tou:""
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
    },
    quit(){
        localStorage.username = "";
        this.username = localStorage.username;
        console.log(this.username);
        this.showname = false;
    } 
     },
  created() {
    if (localStorage.username) {
      this.username = localStorage.username;
      this.showname = true;
    }
    this.tou= this.$store.state.touxiang
    console.log(this.tou)
    console.log(typeof(this.tou))
  }
};
</script>

<style lang="less"  scoped>
#mine {
  margin-top: 50px;
  z-index: 9;
  background: url(../assets/背景123.jpg);
  height:86%;
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
  margin: -50px auto;
  width: 100%;
  text-align: center;
  color: #8a8a8a;
  padding-bottom: 20px;
  // background-color: blue;

  input {
    margin-top: 20px;
    width: 90%;
    height: 60px;
    border-radius: 20px;
    border: 1px solid #8a8a8a;
    text-align: center;
    font-family: kaiti;
    font-size: 20px;
  }
  input:focus {
    outline: none;
    border: 1px solid deepskyblue;
  }
  button:focus {
    outline: none;
    border: 1px solid deepskyblue;
    }
    #fukuan {
      margin: 0 auto;
      position: absolute;
      left: 30%;
      img {
        width: 150px;
        height: 150px;
      }
    }
  
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
