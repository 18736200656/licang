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
import  Imgdetail from '@/components/page/F/imgdetail'



import  C from '@/components/page/C/c'
import  Works from '@/components/page/C/works'
import  Content from '@/components/page/C/content'


import  Preview from '@/components/page/common/preview'
import  Header from '@/components/page/common/header' //头部

import  Ztree from '@/components/page/common/ztree' //下拉菜单
import  Listmenu from '@/components/page/common/listmenu' //下拉菜单

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tab',
      component: Tab,
      children:[
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'c',
          name: 'c',
          component: C
        },
        {
          path: 'f',
          name: 'f',
          component: F
        },
        {
          path: 'userinfo',
          name: 'userinfo',
          component: UserInfo
        },
        {
          path: 'imglist',
          name: 'imglist',
          component: ImgList
        },
        {
          path: 'concernman',
          name: 'concernman',
          component: Concernman
        },
      ]
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },


    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    },
    {
      path: '/imgdetail',
      name: 'imgdetail',
      component: Imgdetail
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/ztree',
      name: 'ztree',
      component: Ztree
    },
    {
      path: '/listmenu',
      name: 'listmenu',
      component: Listmenu
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

