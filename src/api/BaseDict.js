import Base from './Base'
import axios from '@/libs/axios'

class BaseDict extends Base {
  getDict (params) {
    return axios.post('/v1/habit')(params)
  }
}

export default new BaseDict('/base/dict', axios)
