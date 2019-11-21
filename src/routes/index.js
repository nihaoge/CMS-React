//路由
import Home from './home/Home'
import Card from './card/Card'
import CartCreate from './card_create/CardCreate'
import abc from './abc'




const routes = [
    {
        id:1,
        path:"/",
        text:'概况',
        component:Home,
        icon:'google'
    },
    {
        id:2,
        path:null,
        text:'客户管理',
        component:null,
        icon:'bar-chart',
        sub:[
            {
                id:201,
                path:'/card',
                text:'权益卡',
                component:Card,
                children:[
                    {
                        id:20101,
                        path:'/card/create',
                        text:'新建权益卡',
                        component:CartCreate
                    }
                    
                ]
            },
            {
                id:202,
                path:'/404',
                text:'客户查询',
                component:abc
            },
        ]
    },
    
  
    
]

export default routes