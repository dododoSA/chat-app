import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import VueLocalStorage from 'vue-localstorage'

Vue.config.productionTip = false
Vue.config.devtools = true

//Vue.use(VueLocalStorage)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
