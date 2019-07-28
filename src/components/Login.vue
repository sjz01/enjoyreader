<template>
  <div id="register">
    <nav class="nav-bar">
      <span @click="back">
        <img src="@/assets/返回1.png" alt />
      </span>
      <p>用户登录</p>
    </nav>
    <div class="zc">
      <p>登录</p>
    </div>
    <div class="top">
      <form action>
        <input type="text" v-model="username" placeholder="用户名" name="u" />
        <input type="password" v-model="password" placeholder="密码" name="p" />
      </form>
      <router-link to="/register">
        <span>忘记密码？</span>
      </router-link>
    </div>
    <div class="btn">
      <router-link to="/mine">
        <button>登录</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      username:'',
      password:''
    }
  },
  created(){
      

  },
   methods: {
    back() {
      this.$router.go(-1);
    },
  }
};
</script>

<style lang="less"  scoped>
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
#register {
  position: fixed;
  z-index: 10;

  margin: 0 auto;
  background: url(../assets/背景1.jpg);
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: fixed;
  top: 0;
}
.zc {
  margin-top: 100px;
  color: #8a8a8a;
  text-align: center;
  font-family: STXingkai;
  font-size: 80px;
}
//router link 用a标签更改样式
a {
  color: #000000;
}
.top {
  margin: 70px auto;
  position: relative;

  span {
    position: absolute;
    margin-top: 10px;
    margin-left: 70%;
  }
}
form {
  text-align: center;
}
input {
  width: 75%;
  height: 42px;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 20px;
  margin-top: 10px;
  text-shadow: 1px;
  color: black;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #ffffff;
  font-size: 14px;
  text-indent: 0.4rem;
}
.btn {
  /* margin-top: 50px; */
  text-align: center;
  margin-top: -20px;
}
.btn button {
  height: 42px;
  width: 75%;
  background-color: #ffffff;
  color: #8a8a8a;
  border: 2px solid #eee;
  border-radius: 20px;
}
</style>
