/**
 * 校验表单
 */
import Validation from './rules'

/* Validator类 */
class Validator {
  constructor () {
    this.cache = []
  }
  isEmpty (value) {
    return value && value !== ''
  }
  add (value, rules) {
    for (let index = 0; index < rules.length; index++) {
      const item = rules[index]
      if (item.required) {
        return this.isEmpty(value)
      }
    }
  }
  start () {
    for (let validatorFunc of this.cache) {
      let errorMsg = validatorFunc()
      if (errorMsg) {
        return errorMsg
      }
    }
  }
}

const ValidatePlugin = {}

ValidatePlugin.install = function (Vue, options) {
  if (!ValidatePlugin.validation) {
    ValidatePlugin.validation = new Validation()
  }
  Vue.directive('blur-validate', {
    inserted (el, binding, vNode) {
      const { arg, value } = binding
      const { rules, handleStyles } = ValidatePlugin.validation
      // 保存 vm 实例
      if (!ValidatePlugin.validation._vm) {
        ValidatePlugin.validation._vm = vNode.context
      }

      function handleFun (el, vNode) {
        debugger
        console.log('this', this)
        const elName = el.name
        for (let i = 0; i < value.length; i++) {
          const result = handleStyles[arg](rules[value[i]], el, vNode)
          if (result.pass) {
            ValidatePlugin.validation.delErrorObj(elName)
          } else {
            if (!ValidatePlugin.validation.errorObj[elName]) {
              ValidatePlugin.validation.addErrorObj(elName, el, result.msg)
              return
            } else {
              ValidatePlugin.validation.errorObj[elName].msg = result.msg
            }
          }
        }
      }
      el.addEventListener('blur', handleFun.bind(vNode.context, el, vNode), false)
      el.addEventListener('focus', handleStyles['textNormal'].bind(vNode.context, el, vNode), false)
    }
  })
  Vue.directive('check-submit', {
    inserted (el, binding, vNode) {
      el.addEventListener('click', e => {
        debugger
        e.preventDefault()
        // 清空错误列表
        ValidatePlugin.validation.resetErrorObj()
        const form = vNode.context.$refs[binding.arg]
        const rulesName = form.attributes['rules'].value

        function handleFun (el, vNode) {
          debugger
          const elName = el.name
          const formRules = this[rulesName]

          // console.log('this', this[rulesName])
          for (let i = 0; i < value.length; i++) {
            const result = handleStyles[arg](rules[value[i]], el, vNode)
            if (result.pass) {
              ValidatePlugin.validation.delErrorObj(elName)
            } else {
              if (!ValidatePlugin.validation.errorObj[elName]) {
                ValidatePlugin.validation.addErrorObj(elName, el, result.msg)
                return
              } else {
                ValidatePlugin.validation.errorObj[elName].msg = result.msg
              }
            }
          }
        }
        form.addEventListener('change', handleFun.bind(vNode.context, el, vNode), false)

        if (!form) {
          console.warn('请传入包裹表单元素容器的引用')
          return
        }
        let elements = form.getElementsByTagName('input')
        const evObj = document.createEvent('Event')
        evObj.initEvent('blur', true, true)
        for (let element of elements) {
          element.dispatchEvent(evObj)
        }
        let errorInputs = form.getElementsByClassName('check-error')
        if (errorInputs.length === 0) {
          binding.value()
        } else {
          const firstErrEl = errorInputs[0].getElementsByTagName('input')[0]
          // const errorKey = errorInputs[0].getElementsByTagName('input')[0].name
          // ValidatePlugin.validation._vm.$toast(ValidatePlugin.validation.errorObj[firstErrEl.name].msg)

          // 第一个元素滚动到可视区
          document.getElementsByClassName('content-container')[0].scrollTop = firstErrEl.offsetTop - document.documentElement.clientHeight + 100
          firstErrEl.focus()
        }
      })
    },
    unbind () {
      // 还原校验对象
      ValidatePlugin.validation = new Validation()
    }
  })
  Vue.directive('rules', {
    inserted (el, binding, vNode) {
      console.log('rules---222', el, binding, vNode)
      const rules = binding.value
      let validator = new Validator()
      // Object.entries(rules).forEach(([key, value]) => {
      //     console.log('key,value', key, value)
      //     if(Array.isArray(value)){
      //         value.forEach((item)=>{
      //             console.log('item', item);
      //         })
      //     }
      // });
      el.addEventListener('change', event => {
        debugger
        event = event || window.event
        var target = event.target || event.srcElement
        if (!target.name) {
          console.error('请填写name属性')
        }
        const Form = ['input', 'textarea']
        if (Form.includes(target.tagName.toLowerCase())) {
          console.log('nodeName')
          if (Array.isArray(rules[target.name])) {
            validator.add(target, rules[target.name])
          }
          let errorMsg = validator.start()
          return errorMsg

          // if (Array.isArray(rules[target.name])) {
          //     rules[target.name].forEach((item) => {
          //         console.log('item', item);
          //     })
          // }else{
          //     console.error('校验规则有误!!!');
          // }
        }

        // target.value;
        console.log('this222', this)
        console.log('event', event, target)
      })
    }
  })
}

export default ValidatePlugin
