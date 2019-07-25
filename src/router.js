import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/bookcity',
    //   component: () => import('@/views/BookCity'),
    // },
    // {
    //   path: '/bookshelf',
    //   component: () => import('@/views/BookShelf')
    //   // 按需加载，等同于懒加载
    // },  
    // {
    //   path: '/mine',
    //   component: () => import('@/views/Mine')
    //   // 按需加载，等同于懒加载
    // },  
    // {
    //   // 如果用户随意输入了不合法的路由，那么一般情况下有两种操作
    //   // 1. 提示用户404，给按钮点击跳转
    //   // 2. 重定向 到首页
    //   path: "*",
    //   redirect: "/views/BookCity"
    // }
  ]
})
