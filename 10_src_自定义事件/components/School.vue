<template>
    <div>
        <h1 ref="h1name">
            学校名字：{{name}}
        </h1>
        <h1>
            学校地址：{{adress}}
        </h1>
        <button @click="showName()">点击显示名字</button>
    </div>
</template>

<script>
    export default {
        name: 'School',
        props:['getSchoolName'],
        data(){
            return {
                name:'Vue学校',
                adress:'银河路2号'
            }
        },
       methods:{
         showName(){
           this.getSchoolName(this.name);
         }
       }
    }
</script>

<style scoped>

</style>