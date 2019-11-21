import React from "react"
import { Table } from 'antd';
import { inject, observer } from 'mobx-react'



@inject('store') @observer
 class Tablte extends React.Component{
 

    constructor(props){
        super(props)
        this.state = {
        }
      }
      componentDidMount(e){
        this.props.store.CardStore.getCardList(e)
      }

// 设置分页,传出e页码
pageChange(e){
console.log(e.current);
this.props.store.CardStore.getCardListOffPage(e.current)

}
    render(){

      let {list2,list1} = this.props.store.CardStore

      // 处理中文
      list2.map((ele,idx)=>{
        let str = ''
        ele.rights.map((ele2,idx2)=>{
         
          switch (ele2) {
            case 1:
              str+="包邮"
              
              break;
              case 2:
              str+="消费8.8折"
              
              break;
              case 3:
              str+="消费满1w减5元"
              
              break;
              case 4:
              str+=`获得好友体验卡`
              
              break;
          
            default:
            
          }
        })
        list2[idx].rights_zh = str

      })
      const columns = [
        {
          title: '权益卡名称',
          dataIndex: 'name',
          key: 'name',
          
        },
        {
          title: '领取条件',
          dataIndex: 'condition',
          key: 'condition',
          render:(text,row,index)=>{
            let zh = ''
            switch (row.condition) {
              case 1:
                zh="满足条件领取"
                
                break;
                case 2:
                zh="需要付费购买"
                break;
                case 3:
                  zh="满足任一条件领取"
                  break;

            
              default:
                break;
            }
          return(<span>{zh}</span>)
          }
          
          
        },
        {
          title: '有效期',
          dataIndex: 'period',
          key: 'period',
          render:(text,row,index)=>{
            let zh = ''
            switch (row.period) {
              case 1:
                zh="永久有效"
                
                break;
                case 2:
                zh="领取180天后到期"
                break;

               
              default:
                zh=row.period
                break;
            }
          return(<span>{zh}</span>)
          }
          
        },
        {
          title: '权益',
          dataIndex: 'rights_zh',
          key: 'rights_zh',
          
        },
        
        {
          title: '操作',
          key: 'operation',
          fixed: 'right',
          width: 170,
          align:'right',
          render: () =>{
            return(<div>
              <a>查看成员 | </a>
              <a> 发卡 | </a>
              <a> 编辑 </a>
           </div>)
            
          },
        },
      ];

   
      return (
        // 表格区域
        <div>
          <Table 
          // onChange={()=>{this.pageChange()}}
          // 返回页码
          onChange={this.pageChange.bind(this)}

          rowKey='id'
           columns={columns} 
           dataSource={list2}
           scroll={{ x: 800 }} 
           pagination={{pageSize:2,total:list1.length}}
           />
        </div>
      
      )
    }}
    export default Tablte