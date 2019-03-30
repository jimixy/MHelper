import ajax from '../common/ajax'

export default {
  news: {
    infoAll: ajax.get('/news/all'),
    infoDetail: ajax.get('/news/detail')
  }
}
