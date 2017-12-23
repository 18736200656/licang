import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/page/index' //首页
import UserInfo from '@/components/page/user/userinfo' //用户信息
import Collection from '@/components/page/user/collection' //用户收藏
import ImgList from '@/components/page/imglist' //个人展览
import Concernman from '@/components/page/concernman' //关注人物信息


import Tab from '@/components/page/common/tab' //底部切换
import  F from '@/components/page/F/f'
import  C from '@/components/page/C/c'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tab',
      component: Tab,
      children:[
        {
          path: '',
          name: 'index',
          component: Index
        },
        {
          path: 'c',
          name: 'index',
          component: C
        },
        {
          path: 'f',
          name: 'f',
          component: F
        },
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: UserInfo
    },
    {
      path: '/imglist',
      name: 'imglist',
      component: ImgList
    },
    // {
    //   path: '/preview',
    //   name: 'preview',
    //   component: Preview
    // },
    {
      path: '/concernman',
      name: 'concernman',
      component: Concernman
    },

  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

