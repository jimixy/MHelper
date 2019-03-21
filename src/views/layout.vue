<template>
  <div class="layout-container">
    <router-view></router-view>
    <van-tabbar v-model="active" v-if="$route.meta.tabIndex!=null" @change="getChange">
      <van-tabbar-item :to="{name: 'home'}">
        <span>首页</span>
        <van-icon slot="icon" slot-scope="props" name="home-o" :color="props.active? iconColor: ''"/>
      </van-tabbar-item>
      <van-tabbar-item :to="{name: 'information'}">
        <span>资讯</span>
        <van-icon slot="icon" slot-scope="props" name="newspaper-o" :color="props.active? iconColor: ''"/>
      </van-tabbar-item>
      <van-tabbar-item :to="{name: 'person'}">
        <span>我的</span>
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
      active: this.$route.meta.tabIndex,
      iconColor: '#1989fa'
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  methods: {
    getChange(val) {
    //   console.log('val', val)
    }
  },
  mounted() {
    // 测试 API 的调用
    // console.log('router', this.$route)
    // this.$rest.hehe.test({ name: 'tomy' })
  }
}
</script>
