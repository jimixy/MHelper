<template>
  <div class="screenShots">
    <van-dialog v-model="modalShow" ref="dialogRef" show-cancel-button :before-close="beforeClose">
        <div class="modal-info">
            <div class="modal-tips">长按图片，保存、发送好友或分享朋友圈</div>
            <div id="closeBtn" @click="doClose">关闭</div>
        </div>
        <div class="download-div">
            <img class="download-img" :src="imgUri" alt="">
        </div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: 'screenShots',
  props: {
    show: {
      default: false
    }
  },
  data() {
    return {
      modalShow: this.show,
      imgUri: ''
    }
  },
  methods: {
    beforeClose(action, done) {
      if (action === 'confirm') {
        setTimeout(done, 1000)
      } else {
        done()
      }
    },
    doClose() {
      this.$refs.dialogRef.close()
    }
  }
}
</script>

<style lang='stylus' scoped>
.screenShots {
}
</style>
