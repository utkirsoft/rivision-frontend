import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// import { createI18n } from 'vue-i18n'
import '@/styles/index.scss' // global css
// import PerfectScrollbar from 'vue2-perfect-scrollbar'
// import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import App from './App'
import store from './store'
import router from './router'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import http from '@/service/http'
import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently, MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
// Vue.component('font-awesome-icon', FontAwesomeIcon)
import VueI18n from 'vue-i18n'
Vue.prototype.$http = http
Vue.use(VueI18n)
const messages = {
  uz: require('./locales/uz.json'),
  en: require('./locales/en.json'),
  ru: require('./locales/ru.json')
}

const i18n = new VueI18n({
  locale: 'en', // Default locale
  messages
})

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false
// Vue.use(PerfectScrollbar)
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
