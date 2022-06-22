<template>
    <input v-model="titile" @keyup.enter="createItem()">
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name: "MyHeader",
        data(){
            return {
                titile: ''
            }
        },
        props:['addItem'],
        methods:{
            createItem(){
                if(this.titile == ''){
                  return;
                }
                const item = {
                    id:nanoid(),
                    name:this.titile,
                    done:false
                }
                this.addItem(item);
              this.titile='';
            }
        }
    }
</script>

<style scoped>

</style>