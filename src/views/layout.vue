<template>
  <div class="home text-c">
    <router-view></router-view>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'home',
  data () {
    return {
      active: 0
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
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
