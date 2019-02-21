
class Store {
  constructor () {
    this.local = window.localStorage
  }
  getLocal (key) {
    try {
      return JSON.parse(this.local.getItem(key))
    } catch (error) {
      console.log(error)
    }
  }
  setLocal (key, val) {
    this.local.setItem(key, typeof val === 'string' ? val : JSON.stringify(val))
  }
  delLocal (key) {
    try {
      this.local.removeItem(key)
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Store()
