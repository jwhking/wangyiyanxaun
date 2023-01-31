import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
// const Login = ()=>import('@/views/Login.vue')


const routes = [
  {
    path:'/',
    name:'Layout',
    component:Layout,
    children:[
      {
        path:'/',
        name:'Home',
        component:()=>import('@/views/Home/Home.vue')
      },
      {
        path:'/Category/:id',
        name:'Category',
        component:()=>import('@/views/Category/Category.vue')
      }
    ]
  },
  {
    path:'/Login',
    name:'Login',
    component:()=>import('@/views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
