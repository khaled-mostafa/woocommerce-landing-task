import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import core styles
require('@/assets/sass/styles.scss')

new Vue({
  render: h => h(App),
}).$mount('#app')
