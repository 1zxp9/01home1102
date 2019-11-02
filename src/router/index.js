import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from "@/views/Index"
import Classify from "@/views/Classify"
import Cart from "@/views/Cart"
import My from "@/views/My"
import Page from "@/views/Page"
import Public from "@/views/Public"
import Evaluate from "@/views/Evaluate"
// import Cartchild from "@/views/Cartchild"
import Myorder from "@/views/Myorder"
import Aftersale from "@/views/Aftersale"
// import Youlike from "@/views/Youlike"
import Pubhead from "@/views/Pubhead"
import Member from "@/views/Member"
import Gift from "@/views/Gift"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:'/index',
          name:'index',
          component:Index
        },
        {
          path: '/classify',
          name: 'classify',
          component: Classify,
          // children:[
          // ]
        },
        {
          path:'/cart',
          name:'cart',
          component:Cart
        },
        {
          path:'/my',
          name:'my',
          component:My
        },
        
      ]
    },
    {
      path:'/page',
      name:'page',
      component:Page
    },
    {
      path:'/public',
      name:'public',
      component:Public
    },
    {
      path:'/evaluate',
      name:'evaluate',
      component:Evaluate
    },
    // {//购物车没有东西的时候显示的组件
    //   path:'/cartchild',
    //   name:'cartchild',
    //   component:Cartchild
    // },
    {
      path:'/myorder',
      name:'myorder',
      component:Myorder
    },
    {
      path:'/aftersale',
      name:'aftersale',
      component:Aftersale
    },
    // {//猜你喜欢的组件
    //   path:'/youlike',
    //   name:'youlike',
    //   component:Youlike
    // },
    {//公共头部导航栏
      path:'/pubhead',
      name:'pubhead',
      component:Pubhead
    },
    {//礼品兑换
      path:'/gift',
      name:'gift',
      component:Gift
    },
    {//臻选会员
      path:'/member',
      name:'member',
      component:Member
    },
    
    
  ]
})
