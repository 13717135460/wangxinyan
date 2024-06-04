import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import * as filters from './filters'
import './utils/directives.js' // 引入自定义指令
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// npm install 安装的插件需要use
Vue.use(VueRouter)
   .use(ElementUI)

Vue.config.productionTip = false

// 过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
