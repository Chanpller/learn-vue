<template>
    <div>
        <h1 ref="h1name">
            学校名字：{{name}}
        </h1>
        <h1>
            学校地址：{{adress}}
        </h1>
        <h1>
            信息：{{msg}}
        </h1>
        <h1>
            混合count值：{{count}}
        </h1>
        <button @click="showName()">点击显示名字</button>
    </div>
</template>

<script>
    // import {mixinObject,mixinData} from '../mixin.js';
    export default {
        name: 'School',
        data(){
            return {
                name:'Vue学校',
                adress:'银河路2号'
            }
        },
        props:['msg']//,
        // mixins:[mixinObject,mixinData]
    }
</script>

<style scoped>

</style>