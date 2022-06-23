<!--具名插槽-->
<template>
    <div>
        <h2>{{title}}</h2>
        <slot name="top">具名插槽1</slot>
        <slot name="footer">
            <ul>
                <li>具名插槽2</li>
            </ul>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "HasNameSlot",
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