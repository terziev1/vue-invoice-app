import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
// importing vuetify and dependencies
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'typeface-roboto/index.css'
// import '~vuetify/src/stylus/main'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'md'
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
