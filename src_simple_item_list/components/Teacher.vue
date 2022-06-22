<template>
    <div>
        <h1 class="color-red">
            老师名字：{{name}}
        </h1>
        <h1>
            老师年龄：{{age}}
        </h1>
        <h1>
            信息：{{msg}}
        </h1>
        <h1>
            数量：{{num}}
        </h1>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data(){
            return {
                name:'王老师',
                age:46
            }
        },
        props:{
            msg:{
                type:String,
                required:true
            },
            num:{
                type:Number,
                required:false,
                default:99
            }
        }
    }
</script>

<style scoped>

</style>