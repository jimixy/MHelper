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
    <form>
      <van-cell-group>
        <van-field
          v-model="member.cellPhone"
          required
          clearable
          autocomplete
          label="手机号"
          placeholder="请输入手机号"
        />

        <van-field
          v-model="member.icode"
          maxlength="6"
          required
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <van-button
            :disabled="isGetVCode"
            @click.prevent="getVcode"
            slot="button"
            size="small"
          >{{getVcodeText}}</van-button>
        </van-field>

        <van-field
          v-model="member.password"
          label="密码"
          placeholder="请输入密码"
          required
          clearable
          autocomplete
        />

        <van-field
          v-model="recommender"
          :disabled="isRecommender"
          required
          clearable
          autocomplete
          label="邀请码"
          placeholder="请输入邀请码"
        />
      </van-cell-group>
    </form>

    <div class="p10">
      <van-button type="info" class="w100" @click="register">注册</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      member: {
        cellPhone: '',
        password: '',
        icode: '',
        nickName: '',
        openid: '',
        unionid: '',
        avator: ''
      },
      wait: 180,
      isGetVCode: false,
      getVcodeText: '获取验证码',
      recommender: '',
      isRecommender: false
    }
  },
  created() {
    const recommender = localStorage.getItem('recommender')
    if (recommender) {
      this.isRecommender = true
      this.recommender = recommender
    }
    this.member.cellPhone = this.$route.query.cellphone || ''
  },
  methods: {
    getVcode() {
      if (this.isGetVCode) return
      if (!this.member.cellPhone) {
        this.$toast('请输入手机号')
        return
      }
      this.$rest.logReg
        .getICode({
          cellphone: this.member.cellPhone,
          type: 2
        })
        .then(res => {
          this.timeGo()
        })
    },
    /**
     * 倒计时
     */
    timeGo() {
      if (this.wait === 0) {
        this.getVcodeText = '重新获取'
        this.isGetVCode = false
        this.wait = 180
      } else {
        this.isGetVCode = true
        this.getVcodeText = this.wait + 's'
        this.wait--
        setTimeout(() => {
          this.timeGo()
        }, 1000)
      }
    },
    register() {
      if (!this.member.cellPhone) {
        this.$toast('请输入手机号')
        return
      }
      if (!this.member.password) {
        this.$toast('请输入密码')
        return
      }
      if (!this.member.icode) {
        this.$toast('请输入验证码')
        return
      }
      const wxUserInfo = localStorage.getItem('wxUserInfo')
      if (wxUserInfo) {
        const wxUser = JSON.parse(wxUserInfo)
        this.member.nickName = wxUser.nickname
        this.member.avator = wxUser.headimgurl
        this.member.openid = wxUser.openid
        this.member.unionid = wxUser.unionid
      }
      if (this.recommender) this.member.recommender = this.recommender
      this.$rest.logReg.registry(this.member).then(res => {
        this.$toast(res.data.msg)
        if (res.data.code === 200) {
          localStorage.setItem('token', res.headers['authorization'])
          this.$store.dispatch('getUserInfo').then(res => {
            if (!res) return
            this.switchRoute('home')
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
