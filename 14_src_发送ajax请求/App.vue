<template>
  <div id="app">
    <AxiosTest />
  </div>
</template>

<script>
import AxiosTest from './components/AxiosTest.vue';
export default {
  name: 'App',
  components: {
    AxiosTest
  }
}
</script>

<style scoped>
  .color-red{
    color:red;
  }
</style>
