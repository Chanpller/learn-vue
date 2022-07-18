
<template>
  <div id="app">
    <div class="container">
      <Count></Count>
      <CountBaseVuex></CountBaseVuex>
      <CountVuexGetter></CountVuexGetter>
      <hr />
      <VuexMapStateAndMapGetter></VuexMapStateAndMapGetter>
    </div>
  </div>

</template>

<script>
import Count from './components/Count.vue';
import CountBaseVuex from './components/CountBaseVuex.vue';
import CountVuexGetter from './components/CountVuexGetter.vue';
import VuexMapStateAndMapGetter from './components/VuexMapStateAndMapGetter.vue';
export default {
  name: 'App',
  components: {
    Count,
    CountBaseVuex,
    CountVuexGetter,
    VuexMapStateAndMapGetter
  },
  data(){
      return{}
  }
}
</script>

<style scoped>
</style>
