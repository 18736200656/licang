// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import Fastclick from 'fastclick'
import animate from 'animate.css' //引入动画
import store from './store'
import ElementUI from 'element-ui'
import './assets/js/jquery-1.4.2.min'
import './assets/js/rem.js'


/*共用组件*/
import Preview from './components/page/common/preview' //点击图片放大
Vue.component('preview',Preview) //使用组件

import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'




// import './assets/js/swiper-3.4.2.min'
// import './assets/css/swiper.min.css'



Vue.use(ElementUI)
//Vue.use(Fastclick)


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
