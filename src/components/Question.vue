<template>
  <div id="register">
    <nav class="nav-bar">
      <span @click="back">
        <img src="@/assets/返回1.png" alt />
      </span>
      <p>忘记密码</p>
    </nav>
    <div class="zc">
      <p>回答问题</p>
    </div>
    <div class="top">
      <input type="text" v-model="username" placeholder="用户名" />
      <p>{{question}}</p>
      <form id="question">
        <input type="radio" name="color" value="红" checked v-model="answer" />
        红
        <input type="radio" name="color" value="绿" v-model="answer" />
        绿
        <input type="radio" name="color" value="蓝" v-model="answer" />
        蓝
      </form>
      <input type="password" v-model="password" placeholder="新密码" name="p" />
    </div>
    <div class="btn">
      <!-- 此处点击判断username是否为空，为空提示 请输入
      输入如果与曾输入不符提示 输入错误
      输入无误 跳转到回答问题-->
      <!-- <router-link to="/resetpwd"> -->
      <button @click="join">提交</button>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import http from "../axios/myApi";
export default {
  name: "Forget",
  data() {
    return {
      username: "",
      password: "",
      ruestion: "",
      answer: "",
       question:'你最喜欢的颜色是？',
    };
  },
  created() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    join: function() {
      http.correct(this, this.username).then(res => {
        if (res.data.result) {
          if (localStorage.answer == this.answer ) {
              http.updatePassword(this, this.username, this.password,this.question,this.answer)
                .then(res => {
                  console.log(res);
                  if (res.data.result) {
                    location.href = "http://localhost:8080/login";
                  } else {
                    alert(res.data.msg);
                  }
                });
            // location.href = "http://localhost:8080/resetpwd";
          } else {
            alert("答案不正确或用户名不正确");
          }
        } else {
          alert(res.data.msg);
        }
      });
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
  margin: 100px 0 40px 0;

  p {
    text-align: center;
    font-size: 26px;
    font-family: kaiti;
  }
}
#question input {
  width: 20px;
  height: 20px;
  color: #ffffff;
  text-align: center;
  padding-bottom: 10px;
  vertical-align: middle;
  margin-top: -2px;
  margin-bottom: 1px;
}
#question {
  margin-top: 20px;
  color: #000000;
  // text-align: center;
  font-size: 26px;
  font-family: kaiti;
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
  margin-top: 10px;
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
