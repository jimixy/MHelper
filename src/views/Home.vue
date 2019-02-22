<template>
  <div class="home">
    <HelloWorld msg="主页吗"/>
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
  },
  mounted() {
    // 测试 API 的调用
    this.$rest.hehe.test({ name: 'tomy' })
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
