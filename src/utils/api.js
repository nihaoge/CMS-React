import axios from 'axios'

function fetch (api,method,data,callBack){
    axios({
        url:"http://localhost:3000"+api,
        method:method,
        data:data
    }).then(res=>{
        console.log("成功",res);
        callBack && callBack(res.data.data)
    
    }).catch(err=>{
        console.log("错误",err);
        
    }).then(()=>{
// 总会执行
    })
}

export function getUserList(callBack){
    fetch('/db/data.json','GET',{},res=>{
        callBack && callBack(res)
    })
}

export function getCardList(data,callBack){
    fetch('/db/cards.json','GET',data,res=>{
        callBack && callBack(res)
    })
}