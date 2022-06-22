<template>
    <div>
        <button   @click="isShow = !isShow">显示/隐藏</button>
      <transition-group name="mytransition" appear>
        <h2 v-show="isShow"  key="1" >第一个好h2</h2>
        <h2 v-show="!isShow"  key="2" >第二个好h2</h2>
      </transition-group>
    </div>
</template>

<script>
    export default {
        data(){
            return {
               isShow:true
            }
        }
      }
</script>

<style scoped>
h2{
  background-color: coral;
  transition: 1s linear;
}
/*进入的起点，离开的终点*/
.mytransition-enter,.mytransition-leave-to{
  transform: translateX(-100%);
}
/*进入的终点，离开的七点*/
.mytransition-enter-to,.mytransition-leave{
  transform: translateX(0);
}

/* 离开和进入的过程，可以动画速度添加到这里，也可以添加到h2的样式里。
.mytransition-enter-active，.mytransition-leave-active{
  transition: 1s linear;
}*/

</style>