<template>
  <div class="home ml10 text-c">
    <HelloWorld msg="主页吗"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

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

<style lang="stylus">
@import '~@/assets/styles/index.styl';
    .home
        wh(20px, 30px)
        background $menu-dark-title
</style>
