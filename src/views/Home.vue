<template>
  <div class="home text-c">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    主页
    <div class="test11">
        这是测试文章
    </div>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

  </div>
</template>

<script>

import { Cell } from 'vant'

export default {
  name: 'home',
  components: {
    [Cell.name]: Cell
  },
  mounted() {
    // 测试 API 的调用
    // this.$rest.hehe.test({ name: 'tomy' })
  }
}
</script>

<style lang="stylus" scoped>
    .test11
        width 375px
        height 50px
</style>
