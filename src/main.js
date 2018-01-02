// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/js/jquery-1.4.2.min'
import './assets/js/rem.js'


import store from './store'


/*共用组件*/
import Preview from './components/page/common/preview' //点击图片放大
Vue.component(Preview.name,Preview) //使用组件


import './assets/css/reset.css'
import animate from 'animate.css' //引入动画

/*引入第三方插件*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//import Fastclick from 'fastclick'
//Vue.use(Fastclick)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false



// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function() {
//     FastClick.attach(document.body);
//   }, false);
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
