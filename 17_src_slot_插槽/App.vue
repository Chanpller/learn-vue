
<template>
  <div id="app">
    <div class="container">
      <Category title="食物" :list="foods" ></Category>
      <Category title="电影" :list="films" ></Category>
      <Category title="游戏" :list="games" ></Category>
    </div>

    <!--默认插槽-->
    <div class="container">
      <!--AcquiesceSlot组件中有几个默认插槽，就会放几次AcquiesceSlot组件中的内容过去-->
      <AcquiesceSlot title="食物">
        <img src="./assets/2.jpg"></img><!--插槽是在该页面解析后再插入组件的slot中，所以img标签的样式可以在这个组件写，也可以在slot标签组件中写-->
        <a href="#">更多图片</a>
      </AcquiesceSlot>
      <AcquiesceSlot title="电影"></AcquiesceSlot><!--如果没写内容，slot中展示标签内容，如果slot没内容则什么也不展示-->
      <AcquiesceSlot title="游戏">
        <ul>
          <li v-for="game of games">{{game}}</li>
        </ul>
      </AcquiesceSlot>
    </div>

    <div class="container">
      <HasNameSlot title="食物">
        <img slot="top" src="./assets/2.jpg"></img>
        <a slot="footer" href="#">更多图片</a>&nbsp;&nbsp;&nbsp;&nbsp;<!--空格在这里补生效，因为插槽是拿元素插入进去，空格在元素外面-->
        <a slot="footer" href="#">更多内容</a>
      </HasNameSlot>
      <HasNameSlot title="电影">
        <!--多个标签放入一个插槽，可以使用template，不会生成多余的dom元素-->
        <template slot="top">
          <a href="#">单机游戏</a>
          <a href="#">网络游戏</a>
        </template>
        <template v-slot:footer><!--vue2.6之后使用template插槽，可以使用v-slot:插槽名-->
          <ul >
            <li ><a href="#">动作游戏</a></li>
            <li ><a href="#">角色扮演</a></li>
            <li ><a href="#">枪击游戏</a></li>
          </ul>
        </template>
      </HasNameSlot>
      <HasNameSlot title="游戏">
        <ul slot="footer" >
          <li v-for="game of games">{{game}}</li>
        </ul>
      </HasNameSlot>
    </div>


    <div class="container">
      <ScopeSlot >
        <template scope="scopeData" >
          <ul >
            <li v-for="hoby in scopeData.hobys">{{hoby}}</li>
          </ul>
        </template>
      </ScopeSlot>
      <ScopeSlot >
        <template slot-scope="scopeData" >
          <ol >
            <li v-for="hoby in scopeData.hobys">{{hoby}}</li>
          </ol>
        </template>
      </ScopeSlot>
      <ScopeSlot title="游戏">
        <template scope="{hobys}" >
            <h4 v-for="hoby in hobys">{{hoby}}</h4>
        </template>
      </ScopeSlot>
    </div>
  </div>

</template>

<script>
import Category from './components/Category.vue';
import AcquiesceSlot from './components/AcquiesceSlot.vue';
import HasNameSlot from './components/HasNameSlot.vue';
import ScopeSlot from './components/ScopeSlot.vue';
export default {
  name: 'App',
  components: {
    Category,
    AcquiesceSlot,
    HasNameSlot,
    ScopeSlot
  },
  data(){
    return {
      foods:['火锅','啤酒','蛋糕','鸡腿'],
      films:['A计划','大话西游','功夫','少林足球'],
      games:['刀剑','笑傲江湖','刀塔','cs在线']
    }
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: space-around;
  }
  img{
    width: 100%;
  }
</style>
