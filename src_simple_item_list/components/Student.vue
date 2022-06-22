<template>
    <div>
        <h1>
            学生名字：{{name}}
        </h1>
        <h1>
            学生年龄：{{age}}
        </h1>
        <h1>
            信息：{{msg}}
        </h1>
        <h1>
            数量：{{num}}
        </h1>
        <button @click="showName()">点击显示名字</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data(){
            return {
                name:'张三',
                age:18
            }
        },
        props:{
            msg:String,
            num:Number
        }//,
        // mixins:[mixinObject]
    }
</script>

<style scoped>

</style>