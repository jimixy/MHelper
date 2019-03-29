import {
  isWeixin
} from '@/common/utils'

import {
  mapGetters
} from 'vuex'

const mixinDevice = {
  data () {
    return {}
  },
  computed: {
    isWeixin,
    ...mapGetters(['isLogin'])
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
