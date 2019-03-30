<template>
  <div class="container">
    <van-nav-bar
      class="j-nav-bar"
      fixed
      left-arrow
      left-text="返回"
      @click-left="back"
      :title="$route.meta.title"
    ></van-nav-bar>
    <div class="wrapper">
      <h3 class="title">{{news.title}}</h3>
      <div class="detail" v-html="news.content"></div>
      <div class="qrcode">
        <img class="qrcode-img" src="../../../assets/images/qrcode.jpg" alt>
        <p class="qrcode-txt">扫码关注公众号，行情变化及时通知您</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoDetail',
  data() {
    return {
      news: {}
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      const newId = this.$route.query.newsId
      this.$rest.news.infoDetail({ newId }).then(res => {
        this.news = res
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
.container {
  .wrapper {
    height: 100%;
    overflow: scroll;
    background: #fff;
    .detail{
        min-height: 600px;
    }
    .qrcode {
      width: 100%;
      padding: 20px 0 50px 0;
      .qrcode-img {
        display: block;
        width: 200px;
        height: 200px;
        margin: 0 auto;
      }
      .qrcode-txt {
        text-align: center;
        color: rgb(51, 51, 51);
        letter-spacing: 0.33px;
        background: white;
        font-size: 16px;
      }
    }
  }
}
</style>
