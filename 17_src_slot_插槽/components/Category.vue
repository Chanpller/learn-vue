<template>
    <div>
        <h2>{{title}}</h2>
        <ul>
            <li v-for="object of list">{{object}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props:['title','list']
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