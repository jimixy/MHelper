<template>
  <div class="container">
    <van-nav-bar class="j-nav-bar" fixed :title="$route.meta.title"></van-nav-bar>
    <form>
      <van-cell-group>
        <van-field
          v-model="member.loginaccount"
          required
          clearable
          autocomplete
          label="手机号"
          placeholder="请输入手机号"
        />

        <van-field
          v-model="member.password"
          label="密码"
          placeholder="请输入密码"
          required
          clearable
          autocomplete
          :right-icon="isShow?'eye-o':'closed-eye'"
          :type="isShow?'text':'password'"
          @click-right-icon="isShow = !isShow"
        />
      </van-cell-group>
    </form>

    <div class="p10 f14 over-hidden">
      <span
        class="fl danger-color"
        @click="switchRoute('register', {cellphone: member.loginaccount})"
      >注册新帐号</span>
      <span
        class="fr primary-color"
        @click="switchRoute('forget', {cellphone: member.loginaccount})"
      >忘记密码</span>
    </div>

    <div class="p10">
      <van-button type="info" class="w100" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      member: {
        loginaccount: '17665334755',
        password: '117304',
        accounttype: 1
      }
    }
  },
  methods: {
    login() {
      if (!this.member.loginaccount) {
        this.$toast('请输入手机号')
        return
      }
      if (!this.member.password) {
        this.$toast('请输入密码')
        return
      }
      this.$rest.logReg.login(this.member).then(res => {
        this.$toast(res.data.msg)
        if (res.data.code === 200) {
          localStorage.setItem('token', res.headers['authorization'])
          this.$store.dispatch('getUserInfo').then((res) => {
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
