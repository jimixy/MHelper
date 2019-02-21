<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
// import
// import '~styles/index.styl'
require('~styles/index.styl')

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
</style>
