import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入自定义样式
import './assets/global.scss'

// 导入axios
import axios from 'axios'
axios.defaults.baseURL = 'https://v1.itooi.cn/tencent'
Vue.prototype.$axios = axios

// 导入消息弹框模块
import Message from 'vue-m-message'
import 'vue-m-message/dist/index.css'
Vue.prototype.$message = Message
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
