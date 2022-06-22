<template>
    <div>
        <button   @click="isShow = !isShow">显示/隐藏</button>
        <transition>
          <h2 v-show="isShow" >默认动画，初始化时不加载</h2>
        </transition>
      <transition appear>
        <h2 v-show="isShow" >默认动画，初始化时就加载</h2>
      </transition>
      <transition name="mytransition" appear>
        <h2 v-show="isShow" >动画添加名字，初始化时就加载</h2>
      </transition>
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
}
.v-enter-active{
  animation: moveTo 1s;
}
.v-leave-active{
  animation: moveTo 1s reverse;
}
.mytransition-enter-active{
  animation: moveTo 4s;
}
.mytransition-leave-active{
  animation: moveTo 6s reverse;
}
@keyframes moveTo {
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>