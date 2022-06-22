<template>
    <div v-show="items.length">
        <input type="checkbox" v-model="isAll">
        <span>已完成{{doneSize}}</span>/<span>全部{{items.length}}</span>
        <input type="button" @click="clearDone" value="清除所有已完成">
    </div>
</template>

<script>
    export default {
        name: "MyFoot",
        props:['items','checkAll','clearAllDone'],
        computed:{
            doneSize(){
              /*return this.items.filter((item)=>{
                 return item.done;
              }).length;*/
              return this.items.reduce((pre,current)=>{
                return current.done?pre+1:pre;
              },0);
            },
            isAll:{
              get(){
                if(this.items.length>0){
                  return this.items.length === this.doneSize;
                }
              },
              set(value){
                  this.checkAll(value);
              }
            }
        },
        methods:{
          clearDone(){
            this.clearAllDone();
          }
        }
    }
</script>

<style scoped>

</style>