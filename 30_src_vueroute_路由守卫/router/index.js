//该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";
import About from "../pages/About";
import Home from '../pages/Home';
import Message from '../pages/Message';
import News from '../pages/News';
import Detail from '../pages/Detail';
//创建并默认暴露一个路由器
const router = new VueRouter({
   routes:[
       {
           name:'guanyu',
           path:'/about',
           component: About
       },
       {
           name:'zhuye',
           path:'/home',
           component: Home,
           children:[
               {
                   name:'xiaoxi',
                   path:'message',
                   component: Message,
                   children:[
                           {
                               name:'xiangqin',
                               path:'detail/:id/:title',
                               component: Detail,
                               /*props:{id:'001'}*/
                               props:true
                               /*props(route){
                                   return{
                                       id:route.params.id,
                                       title:route.params.title
                                   }
                               }*/
                           }
                       ]
               },
               {
                   name:'xinwen',
                   path:'news',
                   component: News,
                   meta:{
                       isAuth:true
                   },
                   beforeEnter(to,from,next){
                       console.log("独享路由守卫to",to);
                       console.log("独享路由守卫from",from);
                       console.log("独享路由守卫next",next);
                       if(to.meta.isAuth === true){//在route组件中添加meta属性，这样控制权限就好看得多
                            alert("你无权查看新闻");
                        }else{
                            next();//放行
                        }
                   }
               }
           ]
       }
   ]
});
//全局前置路由首位，初始化的时候被调用、每次路由切换前被调用
// router.beforeEach((to,from,next)=>{
//     console.log("前置路由守卫to",to);
//     console.log("前置路由守卫from",from);
//     console.log("前置路由守卫next",next);
//     /*if(to.name === 'xinwen' || to.path === '/home/xinwen'){//可以使用路由名或者路径名匹配,这样写如果有很多路由就很麻烦
//         alert("你无权查看新闻");
//     }else{
//         next();//放行
//     }*/
//     if(to.meta.isAuth === true){//在route组件中添加meta属性，这样控制权限就好看得多
//         alert("你无权查看新闻");
//     }else{
//         next();//放行
//     }
// });
//
//
// router.afterEach((to,from)=>{
//     console.log("后置路由守卫to",to);
//     console.log("后置路由守卫from",from);
//     document.title = to.name;
// });
export default router;