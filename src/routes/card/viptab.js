import React from 'react'
import { Tabs } from 'antd';
import './vip.scss'
import { Button } from 'antd';
import Tablte from './tablte'
import { inject, observer } from 'mobx-react'
import { Input } from 'antd';
import {withRouter } from "react-router"
const { Search } = Input;
const { TabPane } = Tabs;





@inject('store') @observer
 class Viptab extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tabKey:"1"

        }
    }

// 跳转权益卡方法 点击事件
goCardCreate(){
// console.log(this.props);
// // 调用父组件事件
// this.props.onGo()


// 利用withRouter来调取方法
this.props.history.push('/card/create')

}
//根据状态改变
stateChange(e){
    console.log(e);
    this.setState({
        tabKey : e
    })
    this.props.store.CardStore.getCardListOffStatus(e)
    

}
// 搜索 关键字 筛选
SearchChange(e){
    console.log(e);
    this.props.store.CardStore.getCardListOffSearch(e)
    
    

}


    render() {
        function callback(key) {
            console.log(key);
        }
        return (

            <div className="vip-tab">
                <div className="imp">
                    <Button onClick={()=>{this.goCardCreate()}} type="primary">新建权益卡</Button>
                    <Search
                        placeholder="搜索我的权益卡"
                        onSearch={this.SearchChange.bind(this)}
                        style={{ width: 200 }}
                    />

                    {/* 三个筛选按钮 */}
                </div>
                <Tabs onChange={callback} activeKey={this.state.tabKey} type="card" onChange={this.stateChange.bind(this)}>
                    <TabPane tab="使用中" key="1">
                       <div>
                           <Tablte />
                       </div>
             </TabPane>
                    <TabPane tab="已禁用" key="2">
                    <div>
                           <Tablte />
                       </div>
             </TabPane>
                    <TabPane tab="已过期" key="3">
                    <div>
                           <Tablte />
                       </div>
             </TabPane>
                </Tabs>



            </div>
        )
    }


}
export default withRouter(Viptab)