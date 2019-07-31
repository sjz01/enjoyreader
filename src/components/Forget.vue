<template>
  <div id="register">
    <nav class="nav-bar">
      <span @click="back">
        <img src="@/assets/返回1.png" alt />
      </span>
      <p>忘记密码</p>
    </nav>
    <div class="zc">
      <p>找回密码</p>
    </div>
    <div class="top">
      <form action>
        <input type="text" v-model="username" placeholder="用户名" name="u" />
        
      </form>
    </div>
    <div class="btn">
      <!-- 此处点击判断username是否为空，为空提示 请输入
      输入如果与曾输入不符提示 输入错误
      输入无误 跳转到回答问题-->
      <!-- <router-link to="/question"> -->
      <button @click="forget">提交</button>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import http from '../axios/myApi'
export default {
  name: "Forget",
  data() {
    return {
      username: ""
    };
  },
  created() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    submit(){
     if(this.data.username == ""){
         alert("请输入用户名");
     }
    },
    forget:function(){
       http.find(this,this.username).then((res)=>{
        
        if(res.data.result){
         localStorage.username = this.username
         location.href = 'http://localhost:8080/Question'
        } else{
          alert(res.data.msg)
        }
         
       })
     }
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
input:focus {
  outline: none;
  border: 2px solid #ffffff;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #ffffff;
  font-size: 18px;
  text-indent: 0.4rem;
  font-family: kaiti;
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
  outline: none;
  font-family: kaiti;
  font-size: 20px;
}
</style>
