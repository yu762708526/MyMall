<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import navHeader from '../components/NavHeader'
import navFooter from '../components/NavFooter'
export default {
  name: 'home',
  components: {
    navHeader,
    navFooter
  }
}
</script>
