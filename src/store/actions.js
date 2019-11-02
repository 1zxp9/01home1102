
var actions={//经过commit异步提交
    yibuadd({commit}){
        setTimeout(function(){
            commit("padd")//代表调用当前mutations里边的函数
        },2000)
    },
    yibulogin({commit},usernames){
        setTimeout(function(){
            commit("login",usernames)
        },2000)
    }
}

export default actions;