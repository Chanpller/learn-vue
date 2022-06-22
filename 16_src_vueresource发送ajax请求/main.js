
import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
/*去掉生产提示*/
Vue.config.productionTip = false
Vue.use(vueResource);

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
