<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted () {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    // 刷新时获取用户信息
    getUser () {
      this.axios.get('/user').then((res = {}) => { // 如果未登录就置为空
        // 保存到vuex
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    // 刷新时获取购物车数量
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res = 0) => { // 如果未登录就为0
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>
<style>
</style>
