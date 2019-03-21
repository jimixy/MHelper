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
      <van-tabs v-model="market" animated @change="changeMarket">
        <van-tab v-for="item in markets" :key="item" :title="item"></van-tab>
      </van-tabs>

      <van-tabs v-model="currency" :swipeable="childSwipe" animated @change="changeCurrency">
        <van-tab v-for="item in currencys" :key="item" :title="item">
          <div class="coins">
            <van-cell-group class="j-cell-group">
              <van-cell class="j-cell" v-for="item in coinsAll" :key="item.volume">
                <div slot="icon" class="j-cell-icon">
                  <img
                    class="coin-icon"
                    :src="item.image ? $imgApi + item.image : require('../../assets/icons/svg/default.svg')"
                  >
                </div>
                <div slot="title" class="j-cell-title">
                  <text>发:</text>
                </div>
                <div class="j-cell-value">
                  <div class="j-cell-value1">测试文字1测试文字1测试文字1测试文字1测试文字1测试文字1</div>
                  <div class="j-cell-value2">测试文字2</div>
                </div>
                <div slot="right-icon" class="j-cell-right-icon">
                  <van-tag type="success">标签 danger</van-tag>
                </div>
              </van-cell>
            </van-cell-group>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 底部上拉菜单 -->
    <van-actionsheet v-model="sheetVisible" cancel-text="取消" :actions="actions" @select="onSelect"/>
  </div>
</template>

<script>
import { Actionsheet, Tab, Tabs } from 'vant'

export default {
  name: 'home',
  components: {
    [Actionsheet.name]: Actionsheet,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
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
          volume: 56696183.06,
          market: 'mbaex',
          image: 'BTT.jpg',
          high: 0.000816,
          amount: 124035.39759138,
          low: 0.000789,
          curreny: 'USDT',
          change: '1.77',
          coinname: 'BTT',
          lastprice: 0.000803,
          updatetime: '2019-03-21 15:26:01'
        },
        {
          volume: 327026.2406,
          market: 'mbaex',
          image: 'FDG.jpg',
          high: 1.75,
          amount: 649075.67056321,
          low: 1.56,
          curreny: 'USDT',
          change: '1.51',
          coinname: 'FDG',
          lastprice: 1.67,
          updatetime: '2019-03-21 15:26:01'
        },
        {
          volume: 25846626.943,
          market: 'mbaex',
          image: 'GUBI.jpg',
          high: 0.0522,
          amount: 8806528.54599948,
          low: 0.048,
          curreny: 'USDT',
          change: '1.00',
          coinname: 'GUBI',
          lastprice: 0.0504,
          updatetime: '2019-03-21 15:26:01'
        },
        {
          volume: 5344.8791,
          market: 'mbaex',
          image: 'QTUM.jpg',
          high: 2.585,
          amount: 267429.48661083,
          low: 2.412,
          curreny: 'USDT',
          change: '2.36',
          coinname: 'QTUM',
          lastprice: 2.5488,
          updatetime: '2019-03-21 15:26:01'
        },
        {
          volume: 308060.4979,
          market: 'mbaex',
          image: 'RST.jpg',
          high: 1.14,
          amount: 2285867.253118,
          low: 1.04,
          curreny: 'USDT',
          change: '-3.64',
          coinname: 'RST',
          lastprice: 1.06,
          updatetime: '2019-03-21 15:26:01'
        },
        {
          volume: 5443977.3815,
          market: 'mbaex',
          image: 'MDP.jpg',
          high: 0.1899,
          amount: 2727629.99043908,
          low: 0.1835,
          curreny: 'USDT',
          change: '0.05',
          coinname: 'MDP',
          lastprice: 0.1851,
          updatetime: '2019-03-21 15:26:01'
        },
        {
          volume: 306759.5182,
          market: 'mbaex',
          image: 'ALLN.jpg',
          high: 1.01,
          amount: 2412891.409153,
          low: 0.92,
          curreny: 'USDT',
          change: '8.70',
          coinname: 'ALLN',
          lastprice: 1.0,
          updatetime: '2019-03-21 15:26:01'
        },
        {
          volume: 167.861,
          market: 'mbaex',
          image: 'BTC.jpg',
          high: 4005.0,
          amount: 725006.486782,
          low: 3960.94,
          curreny: 'USDT',
          change: '0.89',
          coinname: 'BTC',
          lastprice: 3996.71,
          updatetime: '2019-03-21 15:26:01'
        },
        {
          volume: 1189068.4759,
          market: 'mbaex',
          image: 'XRP.jpg',
          high: 0.3155,
          amount: 576574.82555235,
          low: 0.3125,
          curreny: 'USDT',
          change: '0.16',
          coinname: 'XRP',
          lastprice: 0.313,
          updatetime: '2019-03-21 15:26:01'
        },
        {
          volume: 10167.0229,
          market: 'mbaex',
          image: 'ETH.jpg',
          high: 137.74,
          amount: 698744.686824,
          low: 136.0,
          curreny: 'USDT',
          change: '1.23',
          coinname: 'ETH',
          lastprice: 137.69,
          updatetime: '2019-03-21 15:26:01'
        },
        {
          volume: 4368621.2193,
          market: 'mbaex',
          image: 'TRX.jpg',
          high: 0.0225,
          amount: 329083.1808239,
          low: 0.0223,
          curreny: 'USDT',
          change: '-0.44',
          coinname: 'TRX',
          lastprice: 0.0224,
          updatetime: '2019-03-21 15:26:01'
        },
        {
          volume: 3554.8699,
          market: 'mbaex',
          image: 'LTC.jpg',
          high: 59.83,
          amount: 206974.976735,
          low: 58.74,
          curreny: 'USDT',
          change: '-0.47',
          coinname: 'LTC',
          lastprice: 59.09,
          updatetime: '2019-03-21 15:26:01'
        },
        {
          volume: 4586.6853,
          market: 'mbaex',
          image: 'BCHSV.jpg',
          high: 67.35,
          amount: 181660.965782,
          low: 65.09,
          curreny: 'USDT',
          change: '0.32',
          coinname: 'BCHSV',
          lastprice: 65.41,
          updatetime: '2019-03-21 15:26:01'
        },
        {
          volume: 46.2856,
          market: 'mbaex',
          image: 'BCHABC.jpg',
          high: 157.92,
          amount: 180550.520544,
          low: 154.5,
          curreny: 'USDT',
          change: '0.36',
          coinname: 'BCHABC',
          lastprice: 157.0,
          updatetime: '2019-03-21 15:26:01'
        },
        {
          volume: 72.3787,
          market: 'mbaex',
          image: 'DASH.jpg',
          high: 91.6,
          amount: 332370.637507,
          low: 88.15,
          curreny: 'USDT',
          change: '-0.08',
          coinname: 'DASH',
          lastprice: 89.18,
          updatetime: '2019-03-21 15:26:01'
        }
      ]
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
    if (this.isWeixin()) {
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
    console.log('IMGURL', this)

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

<style lang="stylus">
.contain {
  .coins {
    width: 100%;
    min-height: 500px;
  }
}
</style>
