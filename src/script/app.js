import '../icon/iconfont.css';
import Vue from 'vue';
import router from '../router';
import App from './App.vue'
import { store } from '../store/store.js'
import Axios from '../http/axios.js'

// 全局样式
import '../static/css/reset.css'
import '../static/css/style.css'
// vuebus
import Vuebus from 'vue-bus';
Vue.use(Vuebus);
// element-插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

new Vue({
    el: '#app',
    store,
    router,
    render(createElement) {
        return createElement(App)
    }
})