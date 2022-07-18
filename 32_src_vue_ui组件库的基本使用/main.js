import App from './App.vue'
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
const  vm = new Vue({
  render: h => h(App)
}).$mount('#app')
/*console.log(vm);*/
