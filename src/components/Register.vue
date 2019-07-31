<template>
  <div id="register">
    <nav class="nav-bar">
      <span @click="back">
        <img src="@/assets/返回1.png" alt />
      </span>
      <p>用户注册</p>
    </nav>
    <div class="zc">
      <p>注册</p>
    </div>
    <div class="top">
      <form action>
        <input type="text" v-model="username" placeholder="用户名" name="u" />
        <input type="password" v-model="password" placeholder="密码" name="p" />
        <p>请回答下面问题</p>
        <p>{{question}}</p>
        <form id="question">
          <input type="radio" name="color" value="红" checked  v-model="answer"/>红
          
          <input type="radio" name="color" value="绿" v-model="answer" />绿
        
          <input type="radio" name="color" value="蓝"  v-model="answer"/>蓝
          
        </form>
      </form>
    </div>
    <div class="btn">
      <!-- <router-link to="/mine"> -->
        <button @click="register">注册</button>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import http from '../axios/myApi'
export default {
  name: "Register",
  data(){
    return{
       username: '',
       password: '',
       question:'你最喜欢的颜色是？',
       answer:'',
       
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    register(){
      console.log(this.answer)
      http.register(this,this.username,this.password,this.question,this.answer).then((res)=>{
        if(res.data.result){
          localStorage.question = this.question
          localStorage.answer = this.answer
          location.href = 'http://localhost:8080/Login'
        } else{
          alert(res.data.msg)
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
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
.top {
  margin: 70px auto;
}
form {
  text-align: center;
  p{
    // margin-top: 30px;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 20px;
    font-family: kaiti;
    color: white;
  }
  p:nth-of-type(1){
    margin-top: 30px;
    
  }
  #question input{
    width: 20px;
    height: 20px;
    color: #ffffff;
    text-align: center;
    padding-bottom: 10px;
    vertical-align:middle; 
    margin-top:-2px; 
    margin-bottom:1px;
  }
  #question{
    margin-top: 10px;
    color: white;
    // text-align: center;
    font-size: 20px;
    font-family: kaiti;
  }

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
  margin-top: -50px;
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
