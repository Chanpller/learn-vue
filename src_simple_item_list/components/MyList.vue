<template>
    <div>
        <MyItem v-for="item in items" :key="item.id" :item="item" :changeDone="changeDone" :deleteItem="deleteItem"></MyItem>
    </div>
</template>

<script>
    import MyItem from './MyItem.vue';
    export default {
        name: "MyList",
        components:{MyItem},
        props:['items','changeDone','deleteItem']
    }
</script>

<style scoped>

</style>