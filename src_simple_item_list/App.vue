<template>
  <div id="app">
    <MyHeader :addItem="addItem"></MyHeader>
    <MyList :items="items" :changeDone="changeDone" :deleteItem="deleteItem"></MyList>
    <MyFoot :items="items" :checkAll="checkAll" :clearAllDone="clearAllDone"></MyFoot>
    <School msg="propo属性传值1" />
    <hr/>
    <School msg="propo属性传值2" />
    <hr/>
    <School msg="propo属性传值2" />
    <hr/>
    <Student msg="属性值是String" num="number不是数字" />
    <hr/>
    <Student msg="属性值是String" :num="18" />
    <hr/>
    <Teacher />
    <hr/>
    <Teacher msg="属性值是String"  />
    <hr/>
    <Teacher msg="属性值是String" :num="26" />

  </div>
</template>

<script>
import School from './components/School.vue';
import Student from './components/Student.vue';
import Teacher from './components/Teacher.vue';
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFoot from './components/MyFoot.vue';
export default {
  name: 'App',
  components: {
    School,
    Student,
    Teacher,
    MyHeader,
    MyList,
    MyFoot
  },
  data(){
    return {
     /* items:[
        {
          id:'001',
          name:'吃饭',
          done:false
        },
        {
          id:'002',
          name:'睡觉',
          done:true
        },
        {
          id:'003',
          name:'打豆豆',
          done:false
        }

      ]*/
      items:JSON.parse(localStorage.getItem('items')) || []
    }
  },
  methods:{
    addItem(item) {
        this.items.unshift(item);
    },
    changeDone(id){
      this.items.forEach((item)=>{
          if(item.id===id){
            item.done = !item.done;
          }
      });
    },
    deleteItem(id){
      this.items = this.items.filter((item)=>{
        return item.id!==id;
      });
    },
    checkAll(isDone){
      this.items.forEach((item)=>{
          item.done = isDone;
      });
    },
    clearAllDone(){
      this.items = this.items.filter((item)=>{
        return !item.done;
      });
    }
  },
  watch:{
    items:{
      deep:true,
      handler(value){
        localStorage.setItem("items",JSON.stringify(value))
      }
    }
  }
}
</script>

<style scoped>
  .color-red{
    color:red;
  }
</style>
