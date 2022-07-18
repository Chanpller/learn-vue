//创建vuex核心store

import Vue from 'vue';

//引入vuex
import Vuex from 'vuex';

Vue.use(Vuex);

const  countOptions=  {
    namespaced:true,
    actions:{
        jia(context,value){
            context.commit('JIA',value);
        },
        jishu_jia(context,value){
            context.commit('JISHU_JIA',value);

        },
        wait_jia(context,value){
            context.commit('WAIT_JIA',value);
        }
    },
    mutations:{
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
    },
    getters:{
        bigSum(state){
            return state.sum*10;
        }
    },
    state:{
        sum:0,
        school:'银河学校',
        subject:'前端'
    }
}
const  personOptions=  {
    namespaced:true,
    actions:{
        addPerson(context,value){
            if(value.name.indexOf('王')===0){
                context.commit('addPerson',value);
            }

        }
    },
    mutations:{
        addPerson(state,value){
            state.personList.unshift(value);
        }
    },
    state:{
        personList:[]
    },
    getters: {
        firstPersonName(state){
            if(state.personList.length<1){
                return '';
            }
            return state.personList[0].name;
        }
    }
}
//创建store
const store = new Vuex.Store({
   modules:{
       countOptions:countOptions,
       personOptions:personOptions
   }
});
//暴露store
export  default  store;