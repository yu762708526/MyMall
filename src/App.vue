<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import axios from 'axios'
// import jsonp from 'jsonp'
// import storage from './storage/index'
export default {
  name: 'app',
  data () {
    return {
      // res: {}
    }
  },
  mounted () {
    // 本地json方式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })
    // 用easy-mock实现数据mock
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })
    // 本地集成mockjs实现数据mock
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res
    // })
  }
}
</script>
<style>
</style>
