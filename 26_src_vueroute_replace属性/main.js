import App from './App.vue'
import Vue from 'vue';
import VueRouter from  'vue-router'
import router from './router';
Vue.use(VueRouter)
/*去掉生产提示*/
Vue.config.productionTip = false
const  vm = new Vue({
  render: h => h(App),
  router
}).$mount('#app')
console.log(vm);
