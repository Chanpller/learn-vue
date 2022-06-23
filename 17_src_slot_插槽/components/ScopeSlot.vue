<!--具名插槽-->
<template>
    <div>
        <h2>{{title}}</h2>
        <slot :hobys="hobys">作用域插槽</slot>
    </div>
</template>

<script>
    export default {
        name: "ScopeSlot",
        data(){
            return{
                title:'爱好',
                hobys:['吃饭','睡觉','抽烟','喝酒']
            }
        }

    }
</script>

<style scoped>
    div{
        background: skyblue;
        width: 200px;
        height: 300px;
    }
    h2{
        background: orange;
        text-align: center;
    }
</style>