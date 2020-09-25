# vue-toast-lp

a toast plugins for vue.

## Useage

```javascript
// first import plugin
import VueToast from 'vue-toast-demo'

// and register the plugin on vue
Vue.use(VueToast)

//last ,you can call it.
this.$toast.show("Hello,Toast")

//or
this.$toast.show("Hello,Toast",{
  duration:3000
})

//or
this.$toast.show("Hello,Toast",function(){
  // to-do
})

```# vue-toast-lp
