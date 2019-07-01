import Vue from 'vue'
import './plugins/vuetify'
import App from './components/User.vue'
import router from './router'
import store from './store'
import StatusComponents from './components/UserEdit'

// Vue.component('컴포넌트명', 옵션)
Vue.component('AppStatus', StatusComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
