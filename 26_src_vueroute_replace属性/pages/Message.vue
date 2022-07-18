<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!---跳转路由并携带query参数，to的字符串写法-->
<!--        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp;-->
        <!---跳转路由并携带query参数，to的对象写法-->
        <--   replace 控制浏览器历史记录，替换当前浏览记录       -->
        <router-link replace
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
  }
}
</script>

<style scoped>

</style>
