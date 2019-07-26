import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'

// 引入reset.css到全局
import '../public/reset.css'
// 引入myfont.css到全局
import '../public/myfont.css'
// 引入swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入swiper需要的样式
import 'swiper/dist/css/swiper.css'


// 使用swiper组件
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
