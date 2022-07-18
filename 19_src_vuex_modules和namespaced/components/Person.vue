<!--默认插槽-->
<template>
    <div>
      <input v-model="personName"/>
      <button @click="add()">添加</button>
      <ul>
        <li v-for="person in personList" :key="person.id">{{person.name}}</li>
      </ul>
      <h2 style="color: green">第一个人的人名为：{{firstPersonName}}</h2>
      <h2 style="color: red">count组件和为：{{sum}}</h2>
    </div>
</template>

<script>
    import {mapActions,mapState} from "vuex";
    import {nanoid} from "nanoid";

    export default {
        name: "Count",
        data(){
            return{
              personName:''
            }
        },
        methods:{
          add(){
            if(this.personName=='')return;
            const person = {
              id:nanoid(),
              name:this.personName,
            }
            this.$store.dispatch('personOptions/addPerson',person);
            this.personName=''
          }
        },
      computed:{
        personList(){
          return this.$store.state.personOptions.personList;
        },
        ...mapState('countOptions',['sum']),
        firstPersonName(){
          return this.$store.getters["personOptions/firstPersonName"];
        }
      }
    }
</script>

<style scoped>
</style>