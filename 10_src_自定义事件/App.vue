<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <School :getSchoolName="getSchoolName" /> <!-- 子传给父 -->
<!--  通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 ，第一种写法@或v-on:,如果是需要实现一次 在后面加once,@compentEvent.once-->
    <Student @compentEvent = "getStudentName" />
    <!--  通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 ，第二种写法ref,改方法使用this.$refs.实例名.$on手动绑定事件名，更为灵活，可以用来在ajax请求完成之后，或者等待几秒后再加载事件-->
<!--    <Student ref= "student" />-->
  </div>
</template>

<script>
import School from './components/School.vue';
import Student from './components/Student.vue';
export default {
  name: 'App',
  components: {
    School,
    Student
  },
  data(){
    return {
      msg:"你好啊"
    }
  },
  methods:{
    getSchoolName(name){
        alert("显示学校名字："+name);
    },
    getStudentName(name,...params){//params表示可以接收多个参数，params是个数组
      alert("显示学生名字："+name);
    }
  },
  mounted(){
    /*this.$refs.student.$on('compentEvent',this.getStudentName);
    this.$refs.student.$once('compentEvent',this.getStudentName);*/
    /*这里不能这样写*/
    /*this.$refs.student.$on('compentEvent',function (){
      console.log(this.getStudentName)//这里的this指向不是app组件
    });*/
  }
}
</script>

<style scoped>
  .color-red{
    color:red;
  }
</style>
