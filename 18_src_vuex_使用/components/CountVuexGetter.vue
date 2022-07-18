<!--默认插槽-->
<template>
    <div>
        <h2>当前求和放大10倍：{{$store.getters.bigSum}}</h2>
    </div>
</template>

<script>
    export default {
        name: "CountVuexGetter"
    }
</script>

<style scoped>
</style>