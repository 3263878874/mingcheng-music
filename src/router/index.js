import { createRouter , createWebHashHistory } from "vue-router"

import Layout from "../view/layout.vue"

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'index',
            component: Layout, 
            redirect:'/reco',
            meta:{
                title:'名城音乐'
            }, 
            children:[
                { 
                    path:'/reco',
                    name:'reco',
                    component:()=> import('../components/reco.vue'),
                    meta:{
                        title:'名城音乐'
                    },
                },
                {
                    path:'/rank',
                    name:'rank',
                    component:()=> import('../components/rank.vue'),
                    meta:{
                        title:'排行'
                    },
                },
                {
                    path:'/link',
                    name:'link',
                    component:()=> import('../components/link.vue'),
                    meta:{
                        title:'喜欢'
                    },
                },
                {
                    path:'/sonlist',
                    name:'sonlist',
                    component:()=> import('../components/sonlist.vue'),
                    meta:{
                        title:'推荐音乐'
                    },
                },
                {
                    path:'/serchsonglist',
                    name:'serchsonglist',
                    component:()=> import('../components/serchsonglist.vue'),
                    meta:{
                        title:'搜索音乐'
                    },
                },
                {
                    path:'/setbox',
                    name:'setbox',
                    component:()=> import('../components/setbox.vue'),
                    meta:{
                        title:'设置页面'
                    },
                }
            ]
        }
    ]
})

//路由后置守卫
router.afterEach((to)=>{
    document.title = to.meta.title
})

export default router