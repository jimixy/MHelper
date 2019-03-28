import {
  isWeixin
} from '@/common/utils'

const mixinDevice = {
  computed: {
    isWeixin
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    switchRoute(name, query) {
      this.$router.push({
        name,
        query
      })
    }
  }
}

export {
  mixinDevice
}
