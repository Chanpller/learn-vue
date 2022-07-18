<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!---跳转路由并携带query参数，to的字符串写法-->
<!--        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp;-->
        <!---跳转路由并携带query参数，to的对象写法-->
        <router-link
            :to="{
              name:'xiangqin',
              /*path:'/home/message/detail',*/
              params:{
                id: m.id,
                title: m.title
              }
        }">
          {{ m.title }}
        </router-link>&nbsp;&nbsp;
        <input value="push查看" type="button" @click="pushShow(m)">
        <input value="repalce查看" type="button" @click="replaceShow(m)">
        <input type="text">
      </li>
    </ul>
    <hr/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Message",
  data(){
    return {
      messageList:[
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'},
      ]
    }
  },
  methods:{
    pushShow(m){
      this.$router.push({
        name:'xiangqin',
        /*path:'/home/message/detail',*/
        params:{
          id: m.id,
          title: m.title
        }
      });
    },
    replaceShow(m){
      this.$router.replace({
        name:'xiangqin',
        /*path:'/home/message/detail',*/
        params:{
          id: m.id,
          title: m.title
        }
      });
    }
  },
  //通过路由规则，进入该组件前调用。
  beforeRouteEnter(to,from,next){
    console.log("进入组件内路由守卫to",to);
    console.log("进入组件内路由守卫from",from);
    console.log("进入组件内路由守卫next",next);
    next();
  },
// 在当前路由改变，但是该组件被复用时调用
// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
// 可以访问组件实例 `this`
  beforeRouteUpdate(to,from,next){
    console.log("更新组件内路由守卫to",to);
    console.log("更新组件内路由守卫from",from);
    console.log("更新组件内路由守卫next",next);
    next();
  },
  //通过路由规则，离开该组件前调用。
  beforeRouteLeave(to,from,next){
    console.log("离开组件内路由守卫to",to);
    console.log("离开组件内路由守卫from",from);
    console.log("离开组件内路由守卫next",next);
    next();
  }
}
</script>

<style scoped>

</style>
