import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import './element/element'
import './assets/scss/base.scss'
import './assets/scss/reset.scss'
import 'swiper/dist/css/swiper.css'
const mock = false // 给mock加个开关 不需要模拟就关掉
if (mock) {
  require('./mock/api')
}

// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5e7632562370fb6941f64afd/api' //easy-mock模拟数据
// 根据前端的跨域方式调整  /api/a/b =>/a/b
axios.defaults.baseURL = '/api'
// 请求超时的时间
axios.defaults.timeout = 8000
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  const res = response.data // response.data为接口返回的值
  const path = location.hash
  if (res.status == 0) { // 登录成功时
    return res.data
  } else if (res.status == 10) { // 没有登陆时
    if (path !== '#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  } else {
    alert(res.msg)
    return Promise.reject(res)
  }
})

Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueAwesomeSwiper)
// 图片懒加载
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
// cookie

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
