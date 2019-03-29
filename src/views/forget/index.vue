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
          v-model="member.cellphone"
          required
          clearable
          autocomplete
          label="手机号"
          placeholder="请输入手机号"
        />

        <van-field
          v-model="member.iCode"
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
          v-model="member.newpassword"
          label="新密码"
          placeholder="请输入新密码"
          required
          clearable
          autocomplete
          :right-icon="isShow?'eye-o':'closed-eye'"
          :type="isShow?'text':'password'"
          @click-right-icon="isShow = !isShow"
        />
      </van-cell-group>
    </form>

    <div class="pt20 p10">
      <van-button
        type="info"
        :loading="isLogin"
        loading-text="确定"
        :disabled="isLogin"
        class="w100"
        @click="forget"
      >确定</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      member: {
        cellphone: '',
        iCode: '',
        newpassword: ''
      },
      wait: 180,
      isGetVCode: false,
      getVcodeText: '获取验证码'
    }
  },
  created() {
    this.member.cellphone = this.$route.query.cellphone || ''
  },
  methods: {
    getVcode() {
      if (this.isGetVCode) return
      if (!this.member.cellphone) {
        this.$toast('请输入手机号')
        return
      }
      this.$rest.logReg
        .getICode({
          cellphone: this.member.cellphone,
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
    forget() {
      if (!this.member.cellphone) {
        this.$toast('请输入手机号')
        return
      }
      if (!this.member.iCode) {
        this.$toast('请输入验证码')
        return
      }
      this.$rest.logReg.forget(this.member).then(res => {
        if (!res) return
        this.$toast('修改密码成功')
        this.switchRoute('home')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
