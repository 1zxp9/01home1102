import Vue from 'vue';
import Vuex from 'vuex';
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import modules from "./modules"

Vue.use(Vuex);


export default new Vuex.Store({//如果数据量比较多的时候，把每一部分当成一个单独模块来写
//然后通过 import 和 export在需要的位置引入和暴露接收
    state,
    getters,
    mutations,
    actions,
    modules
})

//实例化的路由对象，暴露完以后要，