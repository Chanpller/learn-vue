<!--默认插槽-->
<template>
    <div>
      <h2>当前求为被：{{$store.state.sum}}</h2>
      <h2>当前求和放大10倍：{{$store.getters.bigSum}}</h2>
      <h2>我在{{$store.state.school}}学{{$store.state.subject}}</h2>
      <hr />
      <h2>通过计算属性简化插值语法：</h2>
      <h2>当前求为被：{{qiuhe}}</h2>
      <h2>当前求和放大10倍：{{fangda}}</h2>
      <h2>我在{{xuexiao}}学{{xueke}}</h2>

      <hr />
      <h2>通过mapstate计算：</h2>
      <h2>当前求为被：{{sum}}</h2>
      <h2>当前求和放大10倍：{{bigSum}}</h2>
      <h2>我在{{school}}学{{subject}}</h2>

      <hr />
      <h2>当前求和为：{{$store.state.sum}}</h2>
      <select v-model.number="num">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="add(num)">+</button>
      <button @click="del(num)">-</button>
      <button @click="jishujia(num)">为奇数加</button>
      <button @click="waijia(num)">等一会加</button>
    </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
    export default {
      name: "VuexMapStateAndMapGetter",
      data(){
        return{
          num:1
        }
      },
      methods:{
        /*mapActions对象写法 数据一般可以通过插值语法传递*/
        ...mapActions({add:'jia',jishujia:'jishu_jia',waijia:'wait_jia'}),
        /*mapActions数组写法 数据一般可以通过插值语法传递*/
       /* ...mapActions({'jia','jishu_jia','wait_jia']),*/
        /*mapMutations对象写法 数据一般可以通过插值语法传递*/
        ...mapMutations({del:'JIAN'})
        /*mapMutations数组写法 数据一般可以通过插值语法传递*/
        /* ...mapMutations({'JIAN')*/
      },
      computed:{
        /*自己亲自写计算函数*/
        qiuhe(){
          return this.$store.state.sum;
        },
        fangda(){
          return this.$store.getters.bigSum;
        },
        xuexiao(){
          return this.$store.state.school;
        },
        xueke(){
          return this.$store.state.subject;
        },
        /*mapState对象写法{计算属性名:state中属性名}   两个都是字符串，不能简写，简写会变成sum:sum 就直接找变量，对象的前面属性字符串的单引号可以省略*/
        // ...mapState({sum:'sum',school:'school',subject:'subject'})
        /*数组写法*/
        ...mapState(['sum','school','subject']),

        /*mapGetters对象写法*/
        // ...mapGetters({bigSum:'bigSum'})
        /*mapGetters数组写法*/
        ...mapGetters(['bigSum'])
      }
    }
</script>

<style scoped>
</style>