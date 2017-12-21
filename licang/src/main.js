// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Fastclick from 'fastclick'

import Header from './components/page/common/header/header'
Vue.component(Header.name,Header);

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/js/jquery-1.4.2.min'
import './assets/css/reset.css'
import './assets/js/rem.js'

import animate from 'animate.css' //引入动画

// import './assets/js/swiper-3.4.2.min'
// import './assets/css/swiper.min.css'

Vue.use(ElementUI)
Vue.use(animate)
Vue.config.productionTip = false



if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
