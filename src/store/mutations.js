
var mutations={
    padd(state){//直接指向state
        state.count++;
    },
    login(state,usernames){
        state.usernames=usernames;
    }
}

export default mutations;