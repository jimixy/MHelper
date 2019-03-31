<template>
  <van-cell>
    <div class="first">
      <div class="top">
        <img src="" class="logo">
        <div class="title">
          <span class="name">WCG</span>
          <span class="num">234.34万</span>
        </div>
      </div>
      <span class="bottom">JHDRG/FGNJH</span>
    </div>
    <div class="middle">

    </div>
    <div class="last">

    </div>
  </van-cell>
</template>

<script>
  export default {
    name: "CoinCard"
  }
</script>

<style lang="stylus" scoped>
  .first
    display flex
    flex-direction column

    .top
      display flex
      .logo
      .title
        display flex
        flex-direction column
        .name
        .num
    .bottom

  .middle
    display flex
    flex-direction column

  .last
    flex 1
    display flex
    flex-direction column
    justify-content center

    .top
    .bottom
</style>