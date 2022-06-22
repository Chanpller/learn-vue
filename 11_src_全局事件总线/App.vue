<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <School />
    <Student />
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
  }
}
</script>

<style scoped>
  .color-red{
    color:red;
  }
</style>
