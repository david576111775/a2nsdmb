import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import * as Sentry from '@sentry/browser';
import * as Integrations from "@sentry/integrations";

// 完整引入 Element
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

const production = process.env.NODE_ENV === 'production';

if (production) {
  Sentry.init({
    dsn: 'https://9636aaa824a744f98a619df0aaabba00@sentry.io/1536764',
    integrations: [new Integrations.Vue({Vue, attachProps: true})],
    logErrors: false,
    release: 'frontend-v2@' + (Vue.config.version || 'unknown'),
  });
}



Vue.use(ElementUI, { locale })
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
