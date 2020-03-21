<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import axios from 'axios'
import jsonp from 'jsonp'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted () {
    const url = '/api/common/adver-getadver'
    jsonp(url, () => {

    })
  }
}
</script>
<style>
</style>
