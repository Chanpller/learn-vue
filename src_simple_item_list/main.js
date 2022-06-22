
import Vue from 'vue'
import App from './App.vue'

/*去掉生产提示*/
Vue.config.productionTip = false
/*全局混合*/
import {mixinObject,mixinData} from './mixin.js';
Vue.mixin(mixinObject);
Vue.mixin(mixinData);

import pluginsObj from './plugins.js';
Vue.use(pluginsObj);

new Vue({
  render: h => h(App)
  /*render(createElement){
    /!*createElement 是个函数 function*!/
    return createElement('h1','你好呀');
  }*/
  /*render:createElement=>{
    /!*createElement 是个函数 function*!/
    return createElement('h1','你好呀');
  }*/
  /*render:createElement=>createElement('h1','你好呀')*/
}).$mount('#app')
