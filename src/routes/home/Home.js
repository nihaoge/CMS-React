import React from 'react'
import { Button } from 'antd'


import { inject,observer } from 'mobx-react'
@inject('store') @observer
class Home extends React.Component{
  
    componentDidMount() {
         //生命周期,调用方法
        this.props.store.updateMsg()
      }
    render(){
        return (
            <div>

                <h1>home</h1>
                <h1>{this.props.store.msg}</h1>
                
          <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>

            </div>
        )
    }
}

export default Home