import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import router from "../../utils/router"


class head extends Component {
    createBreadcrmb(){
        let breadArr = []//面包屑jsx对象

        let path = this.props.location.pathname
        let arr = path.split('/').filter(ele=>ele)
        

        arr.map((ele,idx)=>{
            let url = "/"+ arr.slice(0,idx+1).join('/')
            console.log(url);
            let text = ''
            router.map((ele,idx)=>{
                if(ele.path===url){
                    text=ele.text
                }
            })
            
            breadArr.push(
                <Breadcrumb.Item>
        <Link to={url}>{text}</Link>
    </Breadcrumb.Item>
             )

        })
        return breadArr
        

    }
   
    
    render() {
        this.createBreadcrmb()
        // console.log(this.props.location.pathname);
        return (
            <div>
                  <Breadcrumb>
    {
        this.createBreadcrmb()
    }
  </Breadcrumb>
            </div>
        );
    }
}


const HeadWithRouter = withRouter(head)
export default HeadWithRouter