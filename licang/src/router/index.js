import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/page/index' //首页
import UserInfo from '@/components/page/user/userinfo' //用户信息
import Collection from '@/components/page/user/collection' //用户收藏
import Header from '@/components/page/common/header/header' //头部

Vue.use(Router)

export default new Router({
  strict: process.env.NODE_ENV !== 'production',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
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

