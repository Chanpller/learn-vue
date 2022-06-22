<template>
    <div>
        <button   @click="sendPost()">发送请求</button>
    </div>
</template>

<script>
    export default {
        methods:{
          sendPost(){
            this.$http.get("http://localhost:8081/account/queryAsset").then(
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