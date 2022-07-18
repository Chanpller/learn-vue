<template>
  <ul>
    <h2 :style="{opacity}">透明度</h2>
    <li>news001<input type="text"></li>
    <li>news002<input type="text"></li>
    <li>news003<input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data(){
    return{
      opacity:1
    }
  },
  activated() {/*组件被激活时生命周期钩子*/
    /*console.log('@');*/
    this.temer = setInterval(()=>{
      /*console.log('@');*/
      this.opacity -= 0.01;
      if(this.opacity<0){
        this.opacity = 1;
      }
    },16)
  },
  deactivated() {/*组件被失活时生命周期钩子*/
    clearInterval( this.temer);
  }

}
</script>

<style scoped>

</style>
