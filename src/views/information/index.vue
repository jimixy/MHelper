<template>
  <div class="container info-contain">
    <van-nav-bar class="j-nav-bar" fixed :title="$route.meta.title"></van-nav-bar>
    <div class="contain">
      <div class="search-contain">
        <form action="/">
          <van-search
            v-model="serchValue"
            placeholder="请输入搜索关键词"
            show-action
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </div>
      <div class="main-contian">
        <van-tabs
          class="j-tabs__card"
          color="#1989fa"
          v-model="currentInfo"
          :swipeable="true"
          animated
          @change="changeInfo"
          :ellipsis="false"
        >
          <van-tab v-for="item in infoTitle" :key="item" :title="item">
            <div class="info">
              <van-cell-group class="j-cell-group">
                <van-cell class="j-cell" v-for="item in infoAll" :key="item.volume" @click="switchRoute('infoDetail', {newsId: item.newsId})">
                  <div slot="icon" class="j-cell-icon f16">{{item.title}}</div>
                  <div slot="right-icon" class="j-cell-right-icon">
                    <img class="coin-icon" :src="item.thumbnail">
                  </div>
                </van-cell>
              </van-cell-group>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { Search } from 'vant'
export default {
  name: 'info',
  components: {
    [Search.name]: Search
  },
  data() {
    return {
      serchValue: '',
      currentInfo: '',
      infoTitle: ['M商学院', '教程', 'App和网址', '区块链与通证', '其他'],
      infoAll: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.$rest.news.infoAll().then(res => {
        this.infoAll = res
      })
    },
    onSearch(val) {
      console.log('search', val)
    },
    onCancel() {
      console.log('cancel')
    },
    changeInfo(index, title) {
      console.log('changeInfo', index, title)
    }
  }
}
</script>

<style lang="stylus">
.info-contain {
  .main-contian {
    margin-top: 10Px;
    height: 100%;
    overflow: scroll;
    padding-bottom: 130Px;
    .van-tabs__wrap{
        position: fixed;
        top: 100Px;
    }
    .j-cell-icon{
        width: 100%;
    }
    .j-cell-right-icon{
        width: 50%;
        text-align: center;
    }
    .coin-icon {
      width: 70Px;
    }
  }
}
</style>
