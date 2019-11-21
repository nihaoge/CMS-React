import React from 'react'
import './newCard.scss'
import {
    Row,
    Col,
    Input,
    Radio,
    DatePicker,
    Checkbox,
    Icon,
    Switch,
    Select,
    Button
} from 'antd'
import moment from 'moment'
import { inject, observer } from 'mobx-react'





const { RangePicker } = DatePicker
const { TextArea } = Input
const { Option } = Select
@inject('store') @observer
class CardCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          time1:moment().format("YYYY-MM-DD"),
          time2:moment().subtract(-1, "years").format("YYYY-MM-DD"),
          name:'', //卡名字
          period:1,//卡的有效期
          periodTime:'',
          condition:1,//领取条件
          rights:[1,2,4]


        }
    }


    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
//获取name
      nameChange(e){
        // console.log(e.target);
        
        this.setState({name:e.target.value})
      }

// 获取有效时间=============================================
      periodChange(e){
console.log(e.target.value);
this.setState({
  //改变period值
  period:e.target.value
})
      }

      // 获取选择日期时间=========================================
timeChange(e){

  this.setState({
    periodTime:e[0].format('YYYY-MM-DD')+"至"+e[1].format('YYYY-MM-DD')
  })
}

// 设置领取条件================================================
condChange(e){
  this.setState({
    condition:e.target.value
  })

}
//权益===============================================
rightsChanfe(e){
  console.log(e.target.value);
  let arr =this.state.rights 
  if(e.target.checked){
    arr.push(e.target.value)
  }else{
    let idx = arr.findIndex(ele=>ele==e.target.value)
    arr.splice(idx,1)
  }
  //去重复
  this.setState({
    rughts:new Set(arr)
    
  })
  
}
//提交新建卡信息===============================================
      submit(){
        const period = this.state.period
        const data = {
          name:this.state.name,
          period:period ===3? this.state.periodTime:period,
          condition:this.state.condition,
          rights:this.state.rights

         
        }
        this.props.store.CardStore.add(data)
        console.log('入仓',data);
        //提交成功跳转首页
        this.props.history.replace('/card')
        
        
      }

    render() {
        // 取出this.state值
        let {name,period,condition,rights} = this.state
        const options1 = [
            { label: '包邮', value: 1 },
            { label: '消费折扣', value: 2 },
            { label: '积分回馈倍率', value: 3 },
            { label: '获取好友体验卡', value: 4 }
          ]
          options1.map((ele,idx)=>{
          let res =  rights.findIndex(ele2 => ele2==ele.value)
          if(res!==-1){
            options1[idx].checked=true
          }else{
            options1[idx].checked=false

          }

          })
          console.log(options1);
          
          const options2 = [
            { label: '送积分', value: '1' },
            { label: '送优惠券', value: '2' },
            { label: '送赠品', value: '3' }
          ]
          const options3 = [
            { label: '非会员', value: '1' },
            { label: '会员', value: '2' },
            { label: 'VIP会员', value: '3' }
          ]
        
        
        return (
            <div className="new_page_card">
                {/* 基本信息块 */}
                <div className="npc_block">
                    <div className="npc_block_top">基本信息</div>
                    <Row type='flex' align='middle' className='pcc_block_row'>
                        <Col span={4}>
                          {/* 卡明name获取 */}
                        <span className='pcc_block_lable'>名称:</span>
                        </Col>
                        <Col span={6}>
                        <Input 
                        value={name}
                        onChange={this.nameChange.bind(this)}
                        placeholder="最多输入9个字符" />
                        </Col>
                    </Row>

                    <Row className='pcc_block_row'>
                        <Col span={4}>
                        <span className='pcc_block_lable'>背景设置:</span>
                        </Col>
                        <Col span={4}>
                        <Radio.Group>
                        <Radio  value={1}>
                        <span>背景色</span>
                        </Radio>
                        <Radio  value={2}>
                        <span>背景图</span>
                        </Radio>
                        </Radio.Group>
                        </Col>
                    </Row>

                    <Row className='pcc_block_row'>
                        <Col span={4}>
                          {/* 卡有效期 */}
                        <span className='pcc_block_lable'>卡有校期:</span>
                        </Col>
                        <Col span={6}>
                        <Radio.Group 
                        onChange = {this.periodChange.bind(this)}
                        value={period}>
                        <Radio  value={1} className='pcc_block_radio'>
                        <span>永久有效</span>
                        </Radio>
                        <Radio  value={2} className='pcc_block_radio'>
                        <span>领卡时180天内有效</span>
                        </Radio>
                        <Radio value={3} className='pcc_block_radio'>
                          {/* disabled={period !==3禁用日期选择 */}
                        <RangePicker 
                        // 设置,时间默认值
                         defaultValue={[moment(this.state.time1),moment(this.state.time2)]}
                        onChange={this.timeChange.bind(this)}
                        size="small" 
                        disabled={period !==3} />
                  </Radio>
                        </Radio.Group>
                        </Col>
                    </Row>

                    <Row className='pcc_block_row'>
                        <Col span={4}>
                          {/* 领取条件设置 */}
                        <span className='pcc_block_lable'>领取条件设置:</span>
                        </Col>
                        <Col span={6}>
                        <Radio.Group
                        value={condition}
                        onChange={this.condChange.bind(this)}
                        >
                        <Radio  value={1} className='pcc_block_radio'>
                        <span>可直接领取</span>
                        </Radio>
                        <Radio  value={2} className='pcc_block_radio'>
                        <span>没钱还想领?不存在的</span>
                        </Radio>
                        <Radio  value={3} className='pcc_block_radio'>
                        <span>满足任一条件即可领取</span>
                        </Radio>
                        </Radio.Group>
                        </Col>
                    </Row>

                    <Row className='pcc_block_row'>
                        <Col span={4}>
                    <span className='pcc_block_lable'>使用须知：</span>
                        </Col>
                        <Col span={10}>
                        <TextArea rows={4} />
                    </Col>
                    </Row>

                    <Row type='flex' align='middle' className='pcc_block_row'>
                        <Col span={4}>
                        <span className='pcc_block_lable'>客服电话：</span>
                        </Col>
                        <Col span={10}>
                        <Input placeholder="请输入固定电话或手机号" />
                        </Col>
                    </Row>
        
                </div>


                  {/* 权益礼包块 */}
                  <div className="npc_block1">
                  <div className="npc_block_top1">权益礼包</div>


                  <Row className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>权益：</span>
              </Col>
              <Col span={10}>
                {
                  options1.map((ele,idx)=>{
                    return(
                      <div>
                        {/* 多选 */}
                        <Checkbox
                        value={ele.value}

                        checked={ele.checked}
                        onChange={this.rightsChanfe.bind(this)}
                        >{ele.label}</Checkbox>
                      </div> 
                    )
                  })
                }
                <div><a>更多权益</a></div>
              </Col>
            </Row>

            <Row className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>领卡礼包：</span>
              </Col>
              <Col span={10}>
                <div>领卡礼包仅在权益卡首次领取和续费时发放</div>
                {
                  options2.map((ele,idx)=>{
                    if (idx ==2 ) {
                      return(
                        <div key={idx}>
                          <Checkbox>{ele.label}</Checkbox>
                          <Icon type='google'></Icon>
                        </div>
                      )
                    } else {
                      return(
                        <div key={idx}>
                          <Checkbox>{ele.label}</Checkbox>
                        </div>
                      )
                    }

                  })
                }
                <div>权益不够用？<a>去配置权益</a></div>
              </Col>
            </Row>

                      </div>
                        {/* 高级设置块 */}
                  <div className="npc_block1">
                  <div className="npc_block_top1">权益礼包</div>

                  <Row className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>激活设置：</span>
              </Col>
              <Col span={10}>
              <Switch defaultChecked />
              </Col>
              
            </Row>
            <Row className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>同步微信卡包：</span>
              </Col>
              <Col span={6}>
              未绑定认证的服务号或订阅号<a>去绑定</a><br/>
              未认证的订阅号或服务号建议<a>申请代制卡券</a>
              </Col>
              
            </Row>
            
            <Row className='pcc_block_row'>
            <Col span={4}>
                <span className='pcc_block_lable'>分享设置：</span>
              </Col>
                <Col span={6}>
                <Checkbox ></Checkbox><span>允许分享</span>
                </Col>
            
            </Row>
            <Row className='pcc_block_row'>
            <Col span={4}>
                <span className='pcc_block_lable'>过期设置：</span>
              </Col>
                <Col span={6}>
               <span> 卡过期后，消费者变更至</span>
               <Select size="small" defaultValue="请选择" style={{ width: 120 }} >
               {
                    options3.map((ele,idx)=>{
                      return(
                        <Option value={ele.value}>{ele.label}</Option>
                      )
                    })
                  }
    </Select>
                </Col>
            
            </Row>
           
                  </div>

                      

{/* 按钮区域块 */}
<div className="foo" >
    <Row type="flex" align="center">
    <Button 
    onClick={()=>this.submit()}
    type="primary">确定</Button>
    <Button>取消</Button>
    </Row>

</div>
            </div>
        )
    }


}

export default CardCreate