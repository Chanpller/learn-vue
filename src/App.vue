<template>
  <div id="app" class="contaier">
    <Category titile="食物" :listArr="foods" />
    <Category titile="游戏"  :listArr="games" />
    <Category titile="电影"  :listArr="films"  />
  </div>
</template>

<script>
import Category from './components/Category.vue';
export default {
  name: 'App',
  components: {
    Category
  },
  data(){
    return {
      foods:['香蕉','面包片','啤酒','蛋糕'],
      games:['刀剑','cs','梦幻西游','笑傲江湖'],
      films:['A计划','大话西游','整蛊专家','逃学威龙']
    }
  }
}
</script>

<style scoped>
  .contaier{
    display: flex;
    justify-content: space-around;
  }
</style>
