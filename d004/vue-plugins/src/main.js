/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import vueMsg from 'vue-msg-plugins-kunkun'
// import 'vue-msg-plugins-kunkun/lib/vue-msg-plugins-kunkun.css';

import vueMsg from './plugins/index.js'
console.log("vueMsg===>",vueMsg);

Vue.config.productionTip = false
Vue.use(vueMsg)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
