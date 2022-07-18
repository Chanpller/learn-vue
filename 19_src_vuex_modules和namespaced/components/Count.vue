<!--默认插槽-->
<template>
    <div>
        <h2>当前求和为：{{sum}}</h2>
      <h2>当前求和放大10倍为：{{bigSum}}</h2>
      <h2>我在{{school}}学{{subject}}</h2>
       <select v-model.number="num">
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
       </select>
        <button @click="jia(num)">+</button>
        <button @click="JIAN(num)">-</button>
        <button @click="jishu_jia(num)">为奇数加</button>
        <button @click="wait_jia(num)">等一会加</button>
      <h2 style="color: red">person组件数量为：{{personList.length}}</h2>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
        name: "Count",
        data(){
          return{
            num:1
          }
        },
        methods:{
          ...mapActions('countOptions',['jia','','jishu_jia','wait_jia']),
          ...mapMutations('countOptions',['JIAN']),
        },
        computed:{
          ...mapState('countOptions',['sum','school','subject']),
          ...mapGetters('countOptions',['bigSum']),
          ...mapState('personOptions',['personList']),
        }
    }
</script>

<style scoped>
</style>