import Vue from 'vue';
import App from './App.vue'
import {Button} from 'element-ui';
Vue.use(Button);
Vue.config.productionTip = false
const  vm = new Vue({
  render: h => h(App)
}).$mount('#app')
/*console.log(vm);*/
