import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import 'vuex'
import store from './plugins/store/store'
import axios from './plugins/axios'

Vue.config.productionTip = false

new Vue({
  axios,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
