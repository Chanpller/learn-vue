//该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";
import About from "../pages/About";
import Home from '../pages/Home';
import Message from '../pages/Message';
import News from '../pages/News';
import Detail from '../pages/Detail';
//创建并默认暴露一个路由器
const router = new VueRouter({
    mode:'history',
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
                   }
               }
           ]
       }
   ]
});
router.afterEach((to,from)=>{
    console.log(window.location.hash);
});
export default router;