import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'

import "./app.scss"

// Init jQuery...
let jQuery = require('jquery');
window.$ = window.jQuery = jQuery;


Vue.use(BootstrapVue)


Vue.config.productionTip = false
window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
