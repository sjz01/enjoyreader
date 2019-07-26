<template>
  <div id="mine">
    <!-- 我的 -->
    <!-- <p>我的</p> -->
    <div class="touxiang">
      <img src="@/assets/mineLogo.jpg" alt />
    </div>
    <p class="Login">登录/注册</p>

    <!-- <button>登录/注册</button> -->

    <div style="clear:both"></div>
    <br />
    <div class="about">
      <input type="text" name id placeholder="个性签名" />
      <br />
      <button>关于我们</button>
      <!-- <div class="button">关于我们</div> -->
      <!-- <p class="button">关于我们</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Mine"
};
</script>

<style lang="less"  scoped>
#mine {
  margin-top: 50px;
  // text-align: center;
}
.touxiang {
  height: 130px;
  width: 130px;
  border-radius: 100px;
  background-color: red;
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
  font-size: 40px;
  // color: aqua;
  line-height: 170px;
  color: #8a8a;
}
.about {
  width: 100%;
  text-align: center;
  // background-color: blue;

  input {
    margin-top:20px; 
    width: 90%;
    height: 60px;
    border-radius: 20px;
    border:1px solid #8a8a; 
    text-align: center;
  }

  button{
    margin-top:40px; 
    width: 90%;
    height: 60px;
    border-radius: 20px;
    text-align: center;
    border:1px solid #8a8a; 
  }
}
</style>
