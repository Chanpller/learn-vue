<template>
    <div>
        <h1>
            学生名字：{{name}}
        </h1>
        <h1>
            学生年龄：{{age}}
        </h1>
        <button @click="showSendName()">点击发送学生名给学校</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js';
    export default {
        name: 'Student',
        data(){
            return {
                name:'张三',
                age:18
            }
        },
        methods:{
          showSendName(){
            pubsub.publish('student',this.name);
          }
        }
    }
</script>

<style scoped>

</style>