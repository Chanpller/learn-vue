<!--默认插槽-->
<template>
    <div>
        <h2>当前求和为：{{count}}</h2>
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
        name: "Count",
        data(){
            return{
                num:1,
                count:0
            }
        },
        methods:{
            add(){
                this.count += this.num;
            },
            del(){
                this.count -= this.num;
            },
            jishujia(){
                if(this.count % 2){
                    this.count += this.num;
                }
            },
            waijia(){
                setTimeout(()=>{
                    this.count += this.num;
                },500)
            }

        }
    }
</script>

<style scoped>
</style>