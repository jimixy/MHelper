<template>
  <div class="home text-c">
    <router-view></router-view>
    <van-tabbar v-model="active" v-if="$route.meta.hasTab" @change="getChange">
      <van-tabbar-item :to="{name: 'home'}">
        <span>首页</span>
        <van-icon slot="icon" slot-scope="props" name="home-o" :color="props.active? iconColor: ''"/>
      </van-tabbar-item>
      <van-tabbar-item :to="{name: 'information'}">
        <span>资讯</span>
        <van-icon slot="icon" slot-scope="props" name="newspaper-o" :color="props.active? iconColor: ''"/>
      </van-tabbar-item>
      <van-tabbar-item :to="{name: 'person'}">
        <span>个人中心</span>
        <van-icon slot="icon" slot-scope="props" name="manager-o" :color="props.active? iconColor: ''"/>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'home',
  data() {
    return {
      active: 0,
      iconColor: '#1989fa',
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      }
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  methods: {
    getChange(val) {
      console.log('val', val)
    }
  },
  mounted() {
    console.log('route', this.$route)

    // 测试 API 的调用
    // this.$rest.hehe.test({ name: 'tomy' })
  }
}
</script>

<style lang="stylus" scoped>
.test11 {
  width: 375px;
  height: 50px;
}
</style>
