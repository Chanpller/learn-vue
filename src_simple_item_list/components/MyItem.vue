<template>
    <div>
<!--        <li  @mouseover="showButton(true)" @mouseleave="showButton(false)">-->
      <li >
            <label>
              <input type="checkbox" :checked="item.done"  @change="handlerItem(item.id)">
              <span>{{item.name}}</span>
            </label>
            <button :class="displayAttr" @click="handlerDelete(item.id)">删除</button>
        </li>
    </div>
</template>

<script>
    export default {
        name: "MyItem",
        props:['item','changeDone','deleteItem'],
        data(){
          return{
            displayAttr:['hideButton']
          }
        },
        methods:{
          showButton(isShow){
            if(isShow){
              this.displayAttr = 'showButton';
            }else{
              this.displayAttr = 'hideButton';
            }
          },
          handlerItem(id){
            this.changeDone(id);
          },
          handlerDelete(id){
            if(confirm("确定删除吗？")){
              this.deleteItem(id);
            }

          }
        }
    }
</script>

<style scoped>
  .showButton{
    display:inline;
  }
  .hideButton{
    display:none;
  }
  li button{
    display: none;
  }
  li:hover button{
    display:inline;
  }
</style>