<template>
  <div id="app">
    <VueResourceTest />
  </div>
</template>

<script>
import VueResourceTest from './components/VueResourceTest.vue';
export default {
  name: 'App',
  components: {
    VueResourceTest
  }
}
</script>

<style scoped>
  .color-red{
    color:red;
  }
</style>
