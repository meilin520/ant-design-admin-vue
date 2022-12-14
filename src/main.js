import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import "@/assets/style/common.css"
import "@/assets/style/reset.css"
// 实际打包过程中没引入mock
if (process.env.NODE_ENV !== 'production') require('@/mock');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
