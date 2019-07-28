import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    { 
      path: '/bookcity',
      component: () => import('@/views/BookCity'),
    },
    {
      path: "/more",
      name:"more",
      component: () => import('@/components/More')
    },
    {
      path: '/bookshelf',
      component: () => import('@/views/BookShelf'),
      children: [
        {
          path: "bookdetail",
          component: () => import('@/views/BookDetail')
        },
        {
          path: 'bookcity',
          component: () => import('@/views/BookCity')
        }
      ]
      // 按需加载，等同于懒加载
    },
    {
      path: '/mine',
      component: () => import('@/views/Mine')
      // 按需加载，等同于懒加载
    },
    {
      path: "/bookdetail",
      name:"datail",
      component: () => import('@/views/BookDetail')
    },
    {
      path: "/register",
      name:"register",
      component: () => import('@/components/Register')
    },
    {
      path: "/login",
      name:"login",
      component: () => import('@/components/Login')
    },
    {
      // 如果用户随意输入了不合法的路由，那么一般情况下有两种操作
      // 1. 提示用户404，给按钮点击跳转
      // 2. 重定向 到首页
      path: "*",
      redirect: "/bookcity"
    }
  ]
})
