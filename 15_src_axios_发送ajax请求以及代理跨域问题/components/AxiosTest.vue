<template>
    <div>
        <button   @click="sendBaidu()">发送请求</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        methods:{
          sendBaidu(){
            axios.get("http://localhost:8081/account/queryAsset").then(
                response=>{
                  console.log("请求成功",response.data)
                },
                error=>{
                  console.log("请求失败",error.message)
                }
            )
          }
        }
      }
</script>

<style scoped>
h2{
  background-color: coral;
}
</style>