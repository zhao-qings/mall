import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/tabbar/home/Home')
const Category = () => import('views/tabbar/category/Category')
const Cart = () => import('views/tabbar/cart/Cart')
const Profile = () => import('views/tabbar/profile/Profile')

// 1. 安装VueRouter
Vue.use(VueRouter)

// 2. 创建路由对象
const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }
]
const router = new VueRouter({
  routes,
  mode: "history"
})

// 3. 导出并挂载到Vue实例上
export default router
