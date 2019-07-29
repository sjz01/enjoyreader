<template>
  <div id="book-city">
    <!-- 书城 -->
    <div id="search">
      <mt-search></mt-search>
      <!-- <form action> -->
        <!-- <input type="search" placeholder="请输入书籍名称" /> -->
        <!-- <button type="submit"><img src="../assets/搜索.png" alt=""></button> -->
      <!-- </form> -->
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="../assets/img1.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img2.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img3.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img4.jpg" alt />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    
    <Type />
    <Type />
    <Type />
    <Type />
    <!-- <More /> -->
    <Tabbar />
    <!-- <Swiper /> -->
  </div>
</template>
<script>
import Tabbar from "@/components/Tabbar"
import Swiper from "@/components/Swiper";
import Type from "@/components/Type"
export default {
  name: "BookCity",
  data() {
    return {
      swiperOption: {
        //   swiper的具体配置 信息
        //  effect: 'flip',
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    Type,Tabbar
    // Swiper
    // More,Book,BookDetail
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(0, 1000, false);
  }
};
</script>

<style scoped>
#book-city {
  margin-top: 50px;
  margin-bottom: 50px;
  
}
#search {
  height: 50px;
  width: 100%;
  border-radius: 5px;
  transition: 0.5s;
  border: none;
}
#search input {
  width: 100%;
  height: 38px;
  /* border: 1px solid #8a8a8a; */
  /* border-radius: 20px; */
}
#search img {
  width: 20px;
  height: 20px;
}
button {
  height: 40px;
  width: 20%;
  top: 0;
  right: 0;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 150px;
}
img {
  width: 100%;
  height: 100%;
}
</style>
