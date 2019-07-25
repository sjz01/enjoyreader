import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入reset.css到全局
import '../public/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
