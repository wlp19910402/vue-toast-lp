import ToastCmp from './vue-toast.vue'
let Toast = {}
Toast.install = function (Vue, options) {
  let opt = {
    duration: 3000
  }
  for (var key in options) {
    opt[key] = options[key];
  }
  Vue.prototype.$toast = function (message, option) {
    let callback = ''
    if (typeof option === 'object') {
      for (var key in option) {
        opt[key] = option[key];
      }
    } else if (typeof option === 'function') {
      callback = option
    }
    const ToastController = Vue.extend(ToastCmp)
    let instance = new ToastController().$mount(document.createElement('div'))
    document.body.appendChild(instance.$el);
    instance.message = message
    instance.visible = true;
    setTimeout(() => {
      instance.visible = false;
      setTimeout(() => {
        document.body.removeChild(instance.$el)
        callback && callback()
      })
    }, opt.duration)
  }
  //后期扩展
  let funArr = ['show', 'success', 'info', 'error']
  funArr.forEach((type) => {
    Vue.prototype.$toast[type] = function (tips, option) {
      return Vue.prototype.$toast(tips, option)
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Toast)
}
export default Toast;