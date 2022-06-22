const pluginsObj={
    install(Vue){
        //参数是Vue构造函数，不是实例对象
        console.log("插件使用",Vue);
        //添加过滤器
        Vue.filter('mySlice',function(value){});
        //添加自定义指令
        Vue.directive('fbind',{});
        //添加混入
        Vue.mixin({});
        //添加原型属性,vc和vm都能使用
        Vue.prototype.hellow  = ()=>{alert("添加原型属性")};
    }
}
export default pluginsObj;