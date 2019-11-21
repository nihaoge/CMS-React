import { observable,action } from 'mobx'
import {getUserList} from '../utils/api'
import CardStore from './card'
class Store {
    constructor(){
        this.CardStore=new CardStore()
    }

    @observable msg = "hello zhh"
    @action updateMsg() {
        this.msg = 'hello wored'
        // 调用axios
        getUserList(res=>{
            console.log("mobx user",res);
            
        })
    }
  
}

export default new Store()