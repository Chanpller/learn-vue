<!--默认插槽-->
<template>
    <div>
        <h2>当前求和为：{{$store.state.sum}}</h2>
       <select v-model.number="num">
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
       </select>
        <button @click="add()">+</button>
        <button @click="del()">-</button>
        <button @click="jishujia()">为奇数加</button>
        <button @click="waijia()">等一会加</button>
    </div>
</template>

<script>
    export default {
        name: "CountBaseVuex",
        data(){
            return{
                num:1
            }
        },
        methods:{
            add(){
                this.$store.dispatch("jia",this.num);
            },
            del(){
                this.$store.commit("JIAN",this.num);
            },
            jishujia(){
                this.$store.dispatch("jishu_jia",this.num);
            },
            waijia(){
                this.$store.dispatch("wait_jia",this.num);

            }

        }
    }
</script>

<style scoped>
</style>