<template>
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
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      swiperOption: {
        //   swiper的具体配置 信息
         effect: 'fade',
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
    }
  },
  components: {
    //  Swiper
    // More,Book,BookDetail
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, false);
  }
};
</script>

<style>
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}
img {
  width: 100%;
  height: 100%;
}
</style>
