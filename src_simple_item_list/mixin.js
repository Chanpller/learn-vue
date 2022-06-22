export  const mixinObject={
    methods:{
        showName(){
            alert(this.name);
        }
    },
    mounted() {
        console.log("挂载成功");
    }
}
export  const mixinData={
    data(){
        return{
            name:'混合',
            msg:'混合信息',
            count:1
        }
    }
}