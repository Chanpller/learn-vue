<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link  class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
<!--   replace 控制浏览器历史记录，替换当前浏览记录       -->
          <router-link :replace="true" class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <router-view>
      </router-view>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
</style>
