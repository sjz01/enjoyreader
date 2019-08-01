<template>
  <div id="book-shelf">
    <!-- 书架 -->
    <div class="bookone">
      <ul class="books">
        <router-link to="/bookcity" >
        <li class="add" @click="changeTitle('书城')">
          <img src="@/assets/添加.png" alt />
        </li>
        </router-link>
        <!-- <template v-for="(title,key) in this.$store.state.title" :key="key"></template> -->
        <li v-for="(src,key) in $store.state.img" :key="key" >
          <img :src="src" alt />
          <p>{{$store.state.title[key]}}</p>
        </li>
       
        
       
        
      </ul>
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
export default {
  name: "BookShelf",
   components: {
    Tabbar
  },
  data(){ 
     return{
       img:"",
     }
   },
  methods:{
     changeTitle(title) {
      this.$store.commit("changeMytitle", { title });
    },
    ob(){
      console.log(this.$store.state.img)
    },
     created:function() {
    this.img = this.$store.state.img
  }
    
  }
};
</script>

<style lang='less' scoped>
#book-shelf {
  margin-top: 60px;
  margin-bottom: 80px;
  width: 100%;
}
.bookone {
  width: 100%;
}
.books {
  width: 94%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  text-align: center;
  margin: 0 auto;
}

li {
  width: 26%;
  height: 100%;
  // margin-left: 10px;
  // box-sizing: border-box;
}
li img {
  width: 80px;
  height: 120px;
  border-radius: 10px;
  text-align: center;
}
li p {
  text-align: center;
  font-size: 15px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.add{
  height: 120px;
  width: 80px;
  position: relative;
}
.add img{
    width: 60px;
    height: 80px;
    margin: 20px auto;
}
</style>
