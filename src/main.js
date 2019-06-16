// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

import 'animate.css'
import {WOW} from 'wowjs';
new WOW({live: false}).init();

//import {jquery} from '../static/jquery-1.11.0.min.js'
//import {wow} from '../static/wow.min_1.js'
import {owl} from '../static/owl.carousel.min.js'
import {page} from '../static/page.js'
//
//Vue.prototype.$jquery = jquery
//Vue.prototype.$wow = wow
Vue.prototype.$owl = owl
Vue.prototype.$page = page

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  router,

  render: h => h(App)
}).$mount("#app")
