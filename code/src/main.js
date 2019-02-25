import Vue from 'vue'
import App from './App.vue'
import Cube from 'cube-ui'

Vue.config.productionTip = false

Vue.use(Cube)

new Vue({
  render: h => h(App)
}).$mount('#app')
