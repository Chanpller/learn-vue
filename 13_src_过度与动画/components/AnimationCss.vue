<template>
    <div>
        <button   @click="changClass()">显示/隐藏</button>
        <h2 v-show="isShow" :class="h2Class">你好啊</h2>
        <h2 :class="h2Class2">第二个动画</h2>
    </div>
</template>

<script>
    export default {
        data(){
            return {
               isShow:true,
               h2Class:"come",
               h2Class2:"come"
            }
        },
        methods:{
          //改变样式重新解析dom元素时不会展示，会导致动画消失。
          changClass(){
            this.isShow = !this.isShow;
            if(this.isShow){
              this.h2Class = "come";
              this.h2Class2 = "come";
            }else{
              this.h2Class = "gogo";
              this.h2Class2 = "go";
            }
          }
        }
      }
</script>

<style scoped>
h2{
  background-color: coral;
}
.come{
  animation: moveTo 1s;
}
.go{
  animation: moveTo 6s reverse;/*取反动画只执行一次*/
}
.gogo{
  animation: removeTo 6s;
}
@keyframes moveTo {
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0px);
  }
}
@keyframes removeTo {
  from{
    transform: translateX(0px);
  }
  to{
    transform: translateX(-100%);
  }
}
</style>