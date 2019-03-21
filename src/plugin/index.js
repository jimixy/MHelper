import APIs from '../rest/index'
import {
  mixinDevice
} from './mixins/mixins.js'

import config from '../config'

console.log('config', config)

export default function (Vue) {
  Vue.prototype.$rest = APIs

  Vue.prototype.$imgApi = config.imgApi

  Vue.mixin(
    mixinDevice
  )
}
