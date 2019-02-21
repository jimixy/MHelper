import validate from './validate'

const installPlugin = Vue => {
  validate.install(Vue)
}

export default installPlugin
