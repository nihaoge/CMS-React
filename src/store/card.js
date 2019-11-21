import { observable,action } from "mobx"
import {getCardList} from "../utils/api"

class CardStore{
    @observable list = []  //所有数据
    @observable list1 = [] //用于增删改查
    @observable list2 = [] //用于页面显示
    @observable list3 = []



    @action getCardList(){
        getCardList({page:1,size:2},res=>{
                console.log(res,'================');
                this.list=res
                this.list1=res
                this.list = [...this.list3,...res]
                this.list1 = [...this.list3,...res]

                //初始化
                this.updataList2(1)
                
    
        })
    }
    @action updataList2(page){
            this.list2=this.list1.slice((page-1)*2,page*2)
    }
    //获取页码,调用 updataList2,传入页码
    @action getCardListOffPage(payload){
        this.updataList2(payload)
    }
    @action getCardListOffStatus(payload){
        const status = payload
        const res = this.list.filter(ele=>{
            return ele.status ==status
        })
        this.list1 = res
        this.updataList2(1)
        
    }
    @action getCardListOffSearch(payload){
        // trim(去除空格
        const searchText = payload.trim()
       let res = this.list.filter(ele=>{
           return ele.name.indexOf(searchText) !== -1
       })
       console.log("ssssss",res);
       this.list1=res
       this.updataList2(1)
        
    }
    @action add(payload){
        console.log('接受',payload);
        const card = payload
        card.id = Date.now()
        card.status = 1
        this.list3.unshift(card)



        
    }
}
    


export default CardStore