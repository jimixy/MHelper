import APIs from '../rest/index'
import {
  mixinDevice
} from './mixins'

import config from '../config'
import * as filters from './filters'

export default function (Vue) {
  Vue.prototype.$rest = APIs

  Vue.prototype.IMG_API = config.imgApi

  Vue.mixin(
    mixinDevice
  )

  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}
