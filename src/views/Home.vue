<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
// require('~styles/index.styl')
// import
// import '~styles/index.styl'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus" scoped>
// .home
//     background #f00
    .home
        wh(20px, 30px)
        background $menu-dark-title
</style>
