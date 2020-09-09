import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './registerServiceWorker'
import router from './router';
import store from './store';
import axios from 'axios';
import echarts from 'echarts';
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
