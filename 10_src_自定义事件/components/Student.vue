<template>
    <div>
        <h1>
            学生名字：{{name}}
        </h1>
        <h1>
            学生年龄：{{age}}
        </h1>
        <button @click="showName()">点击显示名字</button>
        <button @click="offEvent()">解绑自定义事件</button>
      <button @click="deathVc()">销毁vc实例</button>
    </div>
</template>

<script>
    // import {mixinObject} from '../mixin.js';
    export default {
        name: 'Student',
        data(){
            return {
                name:'张三',
                age:18
            }
        },
        methods:{
          showName(){
            this.$emit('compentEvent',this.name,'参数2','参数3');
          },
          offEvent() {
            this.$off('compentEvent');//解绑一个自定义事件
            //this.$off(['compentEvent']);//清除某个事件，多个事件传入数组，一个事件可以传入字符串。
            // this.$off();//解绑所有自定义事件
          },
          deathVc(){
            this.$destroy();//销毁组件,销毁后原生dom事件还在，该组件及该组件的子组件自定义事件没有了，页面没有响应式了。
          }
        }
    }
</script>

<style scoped>

</style>