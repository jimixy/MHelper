<template>
  <div class="picker">
    <van-button @click="popupShow" size="small">{{value}}</van-button>
    <van-popup v-model="show" position="bottom">
      <van-picker
        show-toolbar
        @confirm="show = false"
        @cancel="show = false"
        :columns="options"
        @change="onChange"
        :default-index="deafult"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'picker',
  props: {
    value: [String, Number],
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      show: false,
      deafult: 0
    }
  },
  methods: {
    popupShow() {
      const idx = this.options.findIndex(_ => _ === this.value)
      this.deafult = idx > -1 ? idx : 0
      this.show = true
    },
    onChange(pick, val, index) {
      this.$emit('input', val)
      this.show = false
    }
  }
}
</script>

<style lang='stylus' scoped>
.picker {
}
</style>
