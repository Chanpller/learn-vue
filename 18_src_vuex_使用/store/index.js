//创建vuex核心store

import Vue from 'vue';

//引入vuex
import Vuex from 'vuex';

Vue.use(Vuex);

//准备actions-用于响应组件动作
const  actions = {
    jia(context,value){
        context.commit('JIA',value);
    },
    jishu_jia(context,value){
            context.commit('JISHU_JIA',value);

    },
    wait_jia(context,value){
        context.commit('WAIT_JIA',value);
    }
}
//准备actions-用于操作数据(state)
const  mutations = {
    JIA(state,value){
        state.sum += value;
    },
    JIAN(state,value){
        state.sum -= value;
    },
    JISHU_JIA(state,value){
        if(state.sum % 2) {
            state.sum += value;
        }
    },
    WAIT_JIA(state,value){
        setTimeout(()=>{
            state.sum += value;
        },500)

    }
}
//getters-用于将state中的数据加工
const  getters = {
    bigSum(state){
        return state.sum*10;
    }
}
//准备actions-用于存储数据
const  state = {
    sum:0,
    school:'银河学校',
    subject:'前端'
}
//创建store
const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});
//暴露store
export  default  store;