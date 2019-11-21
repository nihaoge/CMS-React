import routes from '../routes' 

let router = []
function routesToArray(routes){
    router = [...router,...routes]
    routes.map((ele,idx)=>{
    if(ele.children && ele.children.length>0){
        routesToArray(ele.children)
    }
    if(ele.sub && ele.sub.length>0){
        routesToArray(ele.sub)
    }
    
    
})
}
routesToArray(routes)

export default router
