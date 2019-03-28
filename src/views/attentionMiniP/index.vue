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
      <div class="qrcode">
        <img class="qrcode-img" src="../../assets/images/qrcode-mini.jpg" alt>
        <p class="f14 ">扫码获取小程序，使用更加方便</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.qrcode {
  width: 100%;
  padding: 20px 0 50px 0;
  text-align: center;
  .qrcode-img {
    display: inline-block;
    width: 200px;
    height: 200px;
  }
}
</style>
