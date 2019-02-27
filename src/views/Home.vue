<template>
  <div class="home ml10 text-c">
    主页
  </div>
</template>

<script>

export default {
  name: 'home',
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
