import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// 根据前端的跨域方式调整  /api/a/b =>/a/b
axios.defaults.baseURL = '/api'
// 请求超时的时间
axios.defaults.timeout = 8000
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status === 0) { // 登录成功时
    return res.data
  } else if (res.status === 10) { // 没有登陆时
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
