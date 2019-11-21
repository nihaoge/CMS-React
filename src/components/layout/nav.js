import React, { Component } from 'react';
import './Layout.scss'
import routes from '../../routes'
import { NavLink} from 'react-router-dom'
import { Menu, Icon} from 'antd';
const { SubMenu } = Menu;



export default class Nav extends Component {
  // createLink(arr){
  //   let linkArr = []
  //   arr.map((ele,idx)=>{

  //   })
  // }
    constructor(props){
        super(props)
      this.state={

      }
    }
    
    render() {
        return (
            <div className="cms_nav">
                 <Menu

          mode="inline"
          theme="dark"
   
        >

          {
            
            routes.map((ele,idx)=>{
              if(ele.path&&ele.component){
        
                    return(
                     <Menu.Item key={ele.id}>
                       <NavLink to={ele.path}> <Icon type={ele.icon} />{ele.text}</NavLink>
                     </Menu.Item>
                    )
                  
                }

              
              if(ele.sub &&　ele.sub.length>0){
                return(
                  <SubMenu
                  key="sub1"
                  title={
                      <span><Icon type={ele.icon} /> {ele.text}</span>
                  }
                >
                  {
                    ele.sub.map((ele2,idx2)=>{
                      return(
                       <Menu.Item key={ele2.id}>
                         <NavLink to={ele2.path}>{ele2.text}</NavLink>
                       </Menu.Item>
                      )
                    })
                  }
                </SubMenu>
                )
              }
              
            })
          }
        </Menu>
               
            </div>
        );
    }
}


