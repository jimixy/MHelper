<template>
  <div class="container peroson-container">
    <div class="person fixed">
      <div class="person-info" @click="switchRoute('mineinfo')">
        <img
          class="avatar"
          :src="(user && user.avator) ? user.avator : require('../../assets/images/defaultAvatar.png')"
          alt
        >
        <div class="info">
          <div class="name">
            <span class="f18">{{user && user.nickname}}</span>
            <span
              class="f14 inline ml10"
            >UID:{{user && user.userid}}&nbsp;&nbsp;{{user && user.cellphone}}</span>
          </div>
          <div class="mobile">
            <svg-icon icon-class="free-acount"></svg-icon>
            <span>免费用户</span>
            <van-button
              class="ml10"
              type="warning"
              size="small"
              @click.stop="switchRoute('bugCombol')"
            >购买套餐</van-button>
          </div>
        </div>
        <van-icon class="center f18" name="arrow"/>
      </div>

      <div class="person-account">
        <van-row>
          <van-col class="person-account-item" span="10">
            <span class="text">现金总价值:</span>
            <span class="value">100</span>
          </van-col>
          <van-col class="person-account-item" span="8">
            <span class="text">数字货币:</span>
            <span class="value">100</span>
          </van-col>
          <van-col class="person-account-item" span="6">
            <span class="text">MFC:</span>
            <span class="value">100</span>
          </van-col>
        </van-row>
        <van-row>
          <van-col class="person-account-item" span="10">
            <span class="text">贡献值剩余:</span>
            <span class="value">100</span>
          </van-col>
          <van-col class="person-account-item" span="8">
            <span class="text">推广:</span>
            <span class="value">100</span>
          </van-col>
          <van-col class="person-account-item" span="6">
            <span class="text">打赏:</span>
            <span class="value">100</span>
          </van-col>
        </van-row>
        <van-row>
          <van-col class="person-account-item" span="8">
            <span class="text">好意见:</span>
            <span class="value">100</span>
            <span class="primary-color ml5" @click="switchRoute('mineinfo')">结算</span>
          </van-col>
          <van-col class="person-account-item" span="16">
            <span class="text">待提现金额:</span>
            <span class="value">100</span>
            <span class="primary-color ml5" @click="switchRoute('mineinfo')">马上提现</span>
          </van-col>
        </van-row>
      </div>
    </div>

    <div class="scroll">
      <div class="main-part">
        <van-row>
          <van-col class="main-part-item" span="6" @click.native="switchRoute('tradGuide')">
            <div class="icon">
              <svg-icon icon-class="zhinan"></svg-icon>
            </div>
            <div class="text">交易指南</div>
          </van-col>
          <van-col class="main-part-item" span="6" @click.native="switchRoute('giveReward')">
            <div class="icon">
              <svg-icon icon-class="dashang"></svg-icon>
            </div>
            <div class="text">我要打赏</div>
          </van-col>
          <van-col class="main-part-item" span="6" @click.native="switchRoute('myScore')">
            <div class="icon">
              <svg-icon icon-class="icon-test"></svg-icon>
            </div>
            <div class="text">我的业绩</div>
          </van-col>
          <van-col class="main-part-item" span="6" @click.native="switchRoute('beHolders')">
            <div class="icon">
              <svg-icon icon-class="gudongxinxi"></svg-icon>
            </div>
            <div class="text">成为股东</div>
          </van-col>
        </van-row>
      </div>

      <div class="other-part">
        <div class="part1">
          <van-cell title="我的权限" @click.native="hope"></van-cell>
          <van-cell title="行情提醒" @click.native="switchRoute('performance')"></van-cell>
          <van-cell title="平台账户管理" @click.native="switchRoute('contribution')"></van-cell>
          <van-cell title="数字币统计" @click.native="hope"></van-cell>
          <van-cell title="我要结算" @click.native="hope"></van-cell>
          <van-cell title="运营管理" @click.native="hope"></van-cell>
          <van-cell title="分享好友获现金奖" @click.native="share"></van-cell>
        </div>

        <div class="part2">
          <van-cell title="意见反馈" @click.native="switchRoute('attentionpublic')"></van-cell>
          <van-cell title="联系客服" @click.native="switchRoute('attentionpublic')"></van-cell>
          <van-cell title="关于" @click.native="switchRoute('about')"></van-cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'person',
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.$store.dispatch('getUserInfo').then(res => {
      this.user = this.userInfo
    })
  },
  methods: {
    bug() {},
    hope() {
      this.$toast('敬请期待！')
    }
  }
}
</script>

<style lang="stylus">
.peroson-container {
  padding-top: 173Px;

  .person {
    top: 0;
    width: 100%;
    margin-bottom: 5Px;

    .van-cell {
      font-size: 16px;
    }

    .person-info {
      height: 80Px;
      width: 100%;
      background-color: $primary-color;
      color: #fff;
      flex(row);

      .avatar {
        display: block;
        width: 60Px;
        height: 60Px;
        border-radius: 30Px;
        margin: 10Px;
      }

      .info {
        flex();
        width: 100%;
        padding: 10Px 0;

        .name {
          .inline {
            color: #d8c4c4;
          }
        }

        .mobile {
          color: #d8c4c4;
          font-size: 14px;
        }
      }
    }

    .person-account {
      font-size: 14px;
      background: #fff;
      padding: 10Px 15Px;

      .van-row {
        &+.van-row {
          margin-top: 10Px;
        }

        .person-account-item {
          ell2(1);
        }
      }
    }
  }

  .main-part {
    background: #fff;
    margin-bottom: 5Px;
    padding: 10Px 0;

    .main-part-item {
      text-align: center;

      .icon {
        margin-bottom: 2Px;
        font-size: 24px;
      }

      .text {
        font-size: 14px;
      }
    }
  }

  .other-part {
    .part1 {
      margin-bottom: 5Px;
    }
  }

  .scroll {
    height: 100%;
    overflow: scroll;
    padding-bottom: 80Px;
  }
}
</style>
