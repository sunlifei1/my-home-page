import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/global.css'
Vue.config.productionTip = false
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
