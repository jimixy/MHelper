<template>
  <div class="container person">
    <van-nav-bar class="j-nav-bar" fixed :title="$route.meta.title"></van-nav-bar>

    <div class="member-info" @click="switchRoute('mineinfo')">
      <img
        class="avatar"
        :src="(user && user.avator) ? user.avator : require('../../assets/images/defaultAvatar.png')"
        alt
      >
      <div class="info">
        <div class="name">{{user && user.nickname}}</div>
        <div class="mobile">{{user && user.cellphone}}&nbsp;&nbsp;UID:{{user && user.userid}}</div>
      </div>
      <van-icon class="center" name="arrow" />
    </div>
    <van-cell title="等级" value="普通会员"  @click.native="hope"></van-cell>
    <van-cell title="业绩" @click.native="switchRoute('performance')"></van-cell>
    <van-cell title="贡献值" :value="user && user.last_num" @click.native="switchRoute('contribution')"></van-cell>
    <van-cell title="购买记录" @click.native="hope"></van-cell>
    <van-cell title="结算" @click.native="hope"></van-cell>
    <van-cell title="银行卡" @click.native="hope"></van-cell>
    <van-cell title="关于" @click.native="switchRoute('about')"></van-cell>
    <van-cell title="关注公众号获得行情通知" @click.native="switchRoute('attentionpublic')"></van-cell>
    <van-cell title="分享好友获现金奖" @click.native="share"></van-cell>
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
.person {
  .van-cell {
    font-size: 16px;
  }

  .member-info {
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
</style>
