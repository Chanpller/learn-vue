<!--默认插槽-->
<template>
    <div>
        <h2>{{title}}</h2>
        <slot>插槽默认值1</slot>
        <slot>插槽默认值2</slot>
    </div>
</template>

<script>
    export default {
        name: "AcquiesceSlot",
        props:['title']
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