import App from './App.vue'
import store from './store'
import Vue from "vue";
/*去掉生产提示*/
Vue.config.productionTip = false
const  vm = new Vue({
  render: h => h(App),
  store
}).$mount('#app')
console.log(vm);
