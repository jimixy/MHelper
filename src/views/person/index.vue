<template>
  <div class="container">
    <!-- <van-nav-bar class="j-nav-bar" fixed :title="$route.meta.title"></van-nav-bar> -->

    <div class="person fixed" @click="switchRoute('mineinfo')">
      <div class="person-info">
        <img
          class="avatar"
          :src="(user && user.avator) ? user.avator : require('../../assets/images/defaultAvatar.png')"
          alt
        >
        <div class="info">
          <div class="name">{{user && user.nickname}}</div>
          <div class="mobile">{{user && user.cellphone}}&nbsp;&nbsp;UID:{{user && user.userid}}</div>
        </div>
        <van-icon class="center" name="arrow"/>
      </div>

      <div class="person-account">234</div>
    </div>

    <div class="main-part">
      <van-row>
        <van-col class="main-part-item" span="6">
          <div>icon</div>
          <div>交易指南</div>
        </van-col>
        <van-col class="main-part-item" span="6">
          <div>icon</div>
          <div>我要大赏</div>
        </van-col>
        <van-col class="main-part-item" span="6">
          <div>icon</div>
          <div>我的业绩</div>
        </van-col>
        <van-col class="main-part-item" span="6">
          <div>icon</div>
          <div>成为股东</div>
        </van-col>
      </van-row>
    </div>

    <div class="part">
      <div class="part1">
        <van-cell title="我的权限" @click.native="hope"></van-cell>
        <van-cell title="行情提醒" @click.native="switchRoute('performance')"></van-cell>
        <van-cell
          title="平台账户管理"
          :value="user && user.last_num"
          @click.native="switchRoute('contribution')"
        ></van-cell>
        <van-cell title="数字币统计" @click.native="hope"></van-cell>
        <van-cell title="我要结算" @click.native="hope"></van-cell>
        <van-cell title="*运营管理" @click.native="hope"></van-cell>
        <van-cell title="分享好友获现金奖" @click.native="share"></van-cell>
      </div>

      <div class="part2">
        <van-cell title="已经反馈" @click.native="switchRoute('attentionpublic')"></van-cell>
        <van-cell title="联系客服" @click.native="switchRoute('attentionpublic')"></van-cell>
        <van-cell title="关于" @click.native="switchRoute('about')"></van-cell>
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
    hope() {
      this.$toast('敬请期待！')
    }
  }
}
</script>

<style lang="stylus">
.container {
  padding-top: 136Px;

  .person {
    top: 0;
    width: 100%;

    .van-cell {
      font-size: 16px;
    }

    .person-info {
      height: 80Px;
      width: 100%;
      background-color: #ffffff;
      margin-bottom: 10Px;
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
        padding: 10px 0;

        .name {
          font-size: 18px;
          color: #333333;
          line-height: 1.8;
        }

        .mobile {
          font-size: 14px;
          color: #999999;
        }
      }
    }
  }
}
</style>
