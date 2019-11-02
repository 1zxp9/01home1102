import * as API from './index' ;//把index 所有暴露的对象给到一个 对象 API
// API GET POST
export const getList=(params)=>{
    return API.GET('/productlist.php',params)
    }
export const getDetail=(params)=>{
    return API.GET('/detail.php',params)
    }