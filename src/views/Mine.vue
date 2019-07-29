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
      <input type="text" name id placeholder="个性签名" />
      <br />
      <button @click=alert()>关于我们</button>
      <!-- <div class="button">关于我们</div> -->
      <!-- <p class="button">关于我们</p> -->
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
import { MessageBox } from 'mint-ui';
export default {
  name: "Mine",
  components: {
    Tabbar
  },
  methods:{
    alert(){
     MessageBox({
     title: '关于我们',
     message: '团队：Supreme <br>成员:王磊,张倩瑶,蒙伯乐',
    //  showCancelButton: true
});
    }
  }
};
</script>

<style lang="less"  scoped>
#mine {
  margin-top: 50px;
  // text-align: center;
}
a{
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
}
.about {
  width: 100%;
  text-align: center;
  color: #8a8a8a;
  // background-color: blue;

  input {
    margin-top: 20px;
    width: 90%;
    height: 60px;
    border-radius: 20px;
    border: 1px solid #8a8a8a;
    text-align: center;
  }
  input:focus{
    outline: none;
    border: 1px solid red;
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
  }
}
</style>
