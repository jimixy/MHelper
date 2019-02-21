function makeRes (res, msg = '信息未填写完整') {
  if (!res) {
    return {
      pass: false,
      msg: msg
    }
  }
  return {
    pass: true
  }
}

// 将输入框的数字转为字符串
function parseNum (fun) {
  return (val) => {
    val = (typeof val !== 'string') ? val + '' : val
    return fun(val)
  }
}

const rules = {
  required: parseNum(value => {
    return makeRes((value && value.trim() !== ''))
  }),
  validatePhone: parseNum(value => {
    return makeRes(/^1\d{10}$/.test(value), '请输入正确的手机号码')
  }),
  twoDecimals: parseNum(value => {
    return makeRes(/^\d{0,7}(\.\d{1,2})?$/.test(value), '最大7为正整数，2位小数')
  }),
  sevenDigit: parseNum(value => {
    return makeRes(/^\d{0,7}$/.test(value), '最大7为正整数')
  })
}

const handleStyles = {
  textRed (validateFun, e, vNode) {
    const correctPhone = validateFun(vNode.elm.value)
    const originClassName = vNode.elm.parentElement.className
    // 简化逻辑，先统一还原正常 class，而后有错加错
    vNode.elm.parentElement.className = originClassName.replace(/check-error/g, '').trim()
    if (!correctPhone.pass) {
      vNode.elm.parentElement.className = originClassName + ' check-error'
    }
    return correctPhone
  },
  textNormal (e, vNode) {
    const originClassName = vNode.elm.parentElement.className
    vNode.elm.parentElement.className = originClassName.replace(/check-error/g, '').trim()
  }
}

class Validation {
  constructor () {
    this.rules = rules
    this.handleStyles = handleStyles
    this.errorObj = {}
  }
  addErrorObj (key, el, msg) {
    this.errorObj[key] = {
      el,
      msg
    }
  }
  delErrorObj (key) {
    delete this.errorObj[key]
  }
  resetErrorObj () {
    this.errorObj = {}
  }
  hasError () {
    return JSON.stringify(this.errorObj) !== '{}'
  }
  getError () {
    // 取出其中一个校验不通过的对象即可
    for (let i in this.errorObj) {
      return this.errorObj[i]
    }
  }
  addOneError (key, el, msg) {
    this.errorObj[key] = {
      el,
      msg
    }
  }
}

export default Validation
