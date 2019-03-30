<template>
  <div class="container">
    <!-- 顶部导航栏 -->
    <van-nav-bar class="j-nav-bar" fixed :title="$route.meta.title">
      <div slot="left" @click="notice">
        <svg-icon icon-class="notice"></svg-icon>
        <span class="ml5">行情提醒</span>
      </div>
      <div slot="right" @click="sheetVisible = true">
        <svg-icon icon-class="component"></svg-icon>
        <span class="ml5">更多</span>
      </div>
    </van-nav-bar>

    <div class="contain">
      <van-tabs :ellipsis="false" color="#1989fa" class="tabs1 fixed w100" v-model="market" animated @change="changeMarket">
        <van-tab v-for="item in markets" :key="item" :title="item"></van-tab>
      </van-tabs>

      <van-tabs
        class="tabs2 w100"
        color="#1989fa"
        :ellipsis="false"
        v-model="currency"
        :swipeable="childSwipe"
        animated
        @change="changeCurrency"
      >
        <van-tab v-for="item in currencys" :key="item" :title="item">
          <div class="coins">
            <van-cell-group class="j-cell-group">
              <van-cell class="j-cell" v-for="item in coinsAll" :key="item.volume">
                <div slot="icon" class="j-cell-icon">
                  <img class="coin-icon" src="../../assets/images/default.png">
                </div>
                <div slot="title" class="j-cell-title">
                  <div class="j-cell-title1">测试标题1</div>
                  <div class="j-cell-title2">量 {{item.volume | filterMoney}}</div>
                </div>
                <div class="j-cell-value j-span" :class="[item.change>0?'c-success': 'c-danger']">
                  <div class="j-cell-value1">{{item.lastprice}}</div>
                  <div class="j-cell-value2">{{item.lastprice}}</div>
                </div>
                <div slot="right-icon" class="j-cell-right-icon">
                  <van-tag
                    :class="[item.change>0?'b-success': 'b-danger']"
                    class="j-tag min70 center"
                  >{{item.change}}%</van-tag>
                </div>
              </van-cell>
            </van-cell-group>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <screen-shots :show="screenShow"></screen-shots>

    <!-- <div class="refresh" @click="refreshCon" v-if="canRefresh">
        <svg-icon icon-class="refresh"></svg-icon>
    </div> -->

    <!-- 底部上拉菜单 -->
    <van-actionsheet v-model="sheetVisible" cancel-text="取消" :actions="actions" @select="onSelect"/>
  </div>
</template>

<script>
import { Actionsheet } from 'vant'
// import QRCode from 'qrcode'
import screenShots from '@/components/ScreenShots'

export default {
  name: 'home',
  components: {
    [Actionsheet.name]: Actionsheet,
    screenShots
  },
  data() {
    return {
      parentSwipe: false,
      childSwipe: true,
      isProMini: false,
      sheetVisible: false,
      actions: [
        {
          name: '历史行情'
        },
        {
          name: '搬砖分析'
        },
        {
          name: '发送给朋友'
        }
      ],
      markets: ['MBAEX', 'EUNEX', 'WCEEX', 'WCGACC'],
      market: 'EUNEX',
      currencys: ['USDT', 'USDTK', 'MDP', 'BTC'],
      currency: '',
      swipeDirection: '',
      coinsAll: [
        {
          volume: 41697395.69,
          market: 'mbaex',
          image: 'BTT.jpg',
          high: 0.000798,
          amount: 124035.39759138,
          low: 0.000769,
          curreny: 'USDT',
          change: '-0.38',
          coinname: 'BTT',
          lastprice: 0.00078,
          updatetime: '2019-03-22 15:40:12'
        },
        {
          volume: 430472.6759,
          market: 'mbaex',
          image: 'FDG.jpg',
          high: 1.64,
          amount: 649075.67056321,
          low: 1.53,
          curreny: 'USDT',
          change: '-3.05',
          coinname: 'FDG',
          lastprice: 1.59,
          updatetime: '2019-03-22 15:40:12'
        },
        {
          volume: 28995850.6598,
          market: 'mbaex',
          image: 'GUBI.jpg',
          high: 0.0587,
          amount: 8806528.54599948,
          low: 0.0507,
          curreny: 'USDT',
          change: '11.26',
          coinname: 'GUBI',
          lastprice: 0.0573,
          updatetime: '2019-03-22 15:40:12'
        },
        {
          volume: 6752.2662,
          market: 'mbaex',
          image: 'QTUM.jpg',
          high: 2.5,
          amount: 267429.48661083,
          low: 2.32,
          curreny: 'USDT',
          change: '-0.18',
          coinname: 'QTUM',
          lastprice: 2.4116,
          updatetime: '2019-03-22 15:40:12'
        },
        {
          volume: 599520.3138,
          market: 'mbaex',
          image: 'RST.jpg',
          high: 1.05,
          amount: 2285867.253118,
          low: 0.91,
          curreny: 'USDT',
          change: '-10.78',
          coinname: 'RST',
          lastprice: 0.91,
          updatetime: '2019-03-22 15:40:12'
        },
        {
          volume: 6354085.7732,
          market: 'mbaex',
          image: 'MDP.jpg',
          high: 0.184,
          amount: 2727629.99043908,
          low: 0.1781,
          curreny: 'USDT',
          change: '-1.49',
          coinname: 'MDP',
          lastprice: 0.1785,
          updatetime: '2019-03-22 15:40:12'
        },
        {
          volume: 226011.1189,
          market: 'mbaex',
          image: 'ALLN.jpg',
          high: 0.95,
          amount: 2412891.409153,
          low: 0.89,
          curreny: 'USDT',
          change: '-4.30',
          coinname: 'ALLN',
          lastprice: 0.89,
          updatetime: '2019-03-22 15:40:12'
        },
        {
          volume: 299.1621,
          market: 'mbaex',
          image: 'BTC.jpg',
          high: 4015.0,
          amount: 725006.486782,
          low: 3972.14,
          curreny: 'USDT',
          change: '0.49',
          coinname: 'BTC',
          lastprice: 4000.16,
          updatetime: '2019-03-22 15:40:12'
        },
        {
          volume: 776485.2173,
          market: 'mbaex',
          image: 'XRP.jpg',
          high: 0.3115,
          amount: 576574.82555235,
          low: 0.3072,
          curreny: 'USDT',
          change: '-0.55',
          coinname: 'XRP',
          lastprice: 0.3083,
          updatetime: '2019-03-22 15:40:12'
        },
        {
          volume: 8580.2244,
          market: 'mbaex',
          image: 'ETH.jpg',
          high: 135.99,
          amount: 698744.686824,
          low: 134.5,
          curreny: 'USDT',
          change: '0.19',
          coinname: 'ETH',
          lastprice: 135.25,
          updatetime: '2019-03-22 15:40:12'
        },
        {
          volume: 4716367.6113,
          market: 'mbaex',
          image: 'TRX.jpg',
          high: 0.0224,
          amount: 329083.1808239,
          low: 0.0221,
          curreny: 'USDT',
          change: '0.00',
          coinname: 'TRX',
          lastprice: 0.0223,
          updatetime: '2019-03-22 15:40:12'
        },
        {
          volume: 6620.3025,
          market: 'mbaex',
          image: 'LTC.jpg',
          high: 59.3,
          amount: 206974.976735,
          low: 58.11,
          curreny: 'USDT',
          change: '-0.03',
          coinname: 'LTC',
          lastprice: 58.29,
          updatetime: '2019-03-22 15:40:12'
        },
        {
          volume: 6547.5065,
          market: 'mbaex',
          image: 'BCHSV.jpg',
          high: 66.69,
          amount: 181660.965782,
          low: 64.32,
          curreny: 'USDT',
          change: '1.05',
          coinname: 'BCHSV',
          lastprice: 65.22,
          updatetime: '2019-03-22 15:40:12'
        },
        {
          volume: 3589.3337,
          market: 'mbaex',
          image: 'BCHABC.jpg',
          high: 159.5,
          amount: 180550.520544,
          low: 152.14,
          curreny: 'USDT',
          change: '-1.62',
          coinname: 'BCHABC',
          lastprice: 152.82,
          updatetime: '2019-03-22 15:40:12'
        },
        {
          volume: 183.2361,
          market: 'mbaex',
          image: 'DASH.jpg',
          high: 90.95,
          amount: 332370.637507,
          low: 88.45,
          curreny: 'USDT',
          change: '0.19',
          coinname: 'DASH',
          lastprice: 90.11,
          updatetime: '2019-03-22 15:40:12'
        }
      ],

      screenShow: false
    }
  },
  methods: {
    changeMarket(index, title) {
      this.currency = 0
      console.log('changeMarket', this.swipeDirection, index)
    },
    changeCurrency(index, title) {
      console.log('changeCurrency', this.swipeDirection, index)
    },
    onSelect(item) {
      this.sheetVisible = false
      if (item.name === '获取小程序') {
        this.$router.push({ name: 'attentionminip' })
      }
    },
    notice() {
      this.$toast('敬请期待！')
    }
  },
  created() {
    if (this.isWeixin) {
      wx.miniProgram.getEnv(res => {
        if (res.miniprogram) {
          this.isProMini = true
        } else {
          this.isProMini = false
          this.actions.push({ name: '获取小程序' })
        }
      })
    } else {
      this.actions.push({
        name: '获取小程序'
      })
    }
  },
  mounted() {
    const mybody = document.getElementsByTagName('body')[0]
    const self = this
    let startX, startY, moveEndX, moveEndY, X, Y
    mybody.addEventListener(
      'touchstart',
      function(e) {
        startX = e.touches[0].pageX
        startY = e.touches[0].pageY
      },
      false
    )
    mybody.addEventListener('touchmove', function(e) {
      moveEndX = e.changedTouches[0].pageX
      moveEndY = e.changedTouches[0].pageY
      X = moveEndX - startX
      Y = moveEndY - startY
      if (Math.abs(X) > Math.abs(Y) && X > 0) {
        self.swipeDirection = 'right'
      } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
        self.swipeDirection = 'left'
      } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
        self.swipeDirection = 'down'
      } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
        self.swipeDirection = 'up'
      } else {
        // 没有发生滑动
        self.swipeDirection = ''
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
</style>
