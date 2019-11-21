import React from 'react';
import { HashRouter} from "react-router-dom"
// 路由
import routes from '@/routes'
// mobx-react
import { Provider } from 'mobx-react'
import store from './store'
//样式
import 'antd/dist/antd.css'
import './assets/css/common.scss'

//组件
import { Layout, } from './components'

//登入拦截
import Login from './routes/login/login'


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLogin:true
    }
  }

  render() {
    return (
      <HashRouter>
        {/* Provider 传值*/}
       <Provider store={store}>
        <div className="App">
          {
            this.state.isLogin ? <Layout></Layout>:<Login></Login>
          }
          


        </div>
        </Provider>
      </HashRouter>
    );
  }

}

