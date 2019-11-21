import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '../../routes/index'
import router from '../../utils/router'

export default class Content extends React.Component {

  // 生成Route容器
  // cerateRoute(arr){
  //   let routeArr = []
  //   // 一级组件
  //   arr.map((ele,idx)=>{
  //     if(ele.path&&ele.component){
  //       routeArr.push(
  //         <Route key={ele.id} path={ele.path} exact component={ele.component}></Route>
  //       )
  //     }
      
  //     if(ele.sub&&ele.sub.length>0){
        
  //   // 二级组件
  //       ele.sub.map((ele2,idx2)=>{
  //         routeArr.push(
  //           <Route key={ele2.id} path={ele2.path} exact component={ele2.component}></Route>
  //         )

  //         // 三级组件
  //         if(ele2.children&&ele2.children.length>0){
  //           ele2.children.map((ele3,idx)=>{
  //             routeArr.push(
  //               <Route key={ele3.id} path={ele3.path} exact component={ele3.component}></Route>

  //             )
  //           })

  //         }
  //       })
  //     }
  //   })
  //   return routeArr
  // }


  //递归后的数组,一次循环解决
  updataRouter(router){
    let routeArr = []
    router.map((ele,idx)=>{
      if(ele.path&&ele.component){
        routeArr.push(
          <Route key={ele.id} path={ele.path} exact component={ele.component}></Route>

        )

      }
    })
    return routeArr

  }

  render() {
    return (
      <div className='cms_content'>
        <Switch>
       
       {
         this.updataRouter(router)
       }
        </Switch>
       
      </div>
    )
  }
}
