<template>
    <div class="category">
        <h3>{{titile}}</h3>
        <ul>
          <li v-for="list in listArr">{{list}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"Category",
        props:['titile','listArr']
      }
</script>

<style scoped>
.category{
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3{
  text-align: center;
  background-color: coral;
}
</style>