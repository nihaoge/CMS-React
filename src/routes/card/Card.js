import React from 'react'
import { Tabs } from 'antd';
import './vip.scss'
import Viptab from './viptab';

const { TabPane } = Tabs;

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    //父组件调用方法跳转路由
    goCardCreate(){
       this.props.history.push('/card/create')
        
    }
    render() {
        function callback(key) {
            console.log(key);
        }
        return (
            <div className="vip-box">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="权益卡管理" key="1">
                        <Viptab onGo={()=>{this.goCardCreate()}} ></Viptab>
                    </TabPane>
                    <TabPane tab="领卡记录" key="2">
                        Content of Tab Pane 2
                        </TabPane>
                    <TabPane tab="退卡记录" key="3">
                        Content of Tab Pane 3
                        </TabPane>
                </Tabs>
            </div>
        )
    }


}