<template>
  <div id="register">
    <nav class="nav-bar">
      <span @click="back"><img src="@/assets/返回1.png" alt=""></span>
      <p>用户注册</p>
    </nav>
    <div class="zc">
      <p>注册</p>
    </div>
    <div class="top">
      <form action>
        <input type="text" placeholder="用户名" name="u" />
        <input type="password" placeholder="密码" name="p" />
        <input type="password" placeholder="确认密码" name="p" />
      </form>
    </div>
    <div class="btn">
      <button>注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
   methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
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
.nav-bar img{
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
.top {
  margin: 70px auto;
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
  margin-top: -50px;
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
