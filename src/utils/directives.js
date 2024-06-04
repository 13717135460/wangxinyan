import Vue from 'vue'

Vue.directive('stat', {
  bind: (el, binding) => {
    console.log(el)
    console.log(binding)
  }
})