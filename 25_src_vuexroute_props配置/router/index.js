//该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";
import About from "../pages/About";
import Home from '../pages/Home';
import Message from '../pages/Message';
import News from '../pages/News';
import Detail from '../pages/Detail';
//创建并默认暴露一个路由器
export default new VueRouter({
   routes:[
       {
           name:'guanyu',
           path:'/about',
           component: About
       },
       {
           path:'/home',
           component: Home,
           children:[
               {
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
                   path:'news',
                   component: News
               }
           ]
       }
   ]
});

