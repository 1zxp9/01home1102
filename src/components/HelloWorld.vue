<template>
  <div class="hello">
      <router-view class="beijing"/>
   <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to="index">首页</van-tabbar-item>
  <van-tabbar-item icon="stop-circle" dot to="classify">分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" :info="num" to="/cart">购物车</van-tabbar-item>
  <van-tabbar-item icon="contact" info="20" to="my">我的</van-tabbar-item>
</van-tabbar>





  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      active:"",
      num:1,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .beijing{
  background: #f5f4f9;
  /* height:calc(100vh - 50px); */
  color:#ff5a00;
  /* margin-top: 45px;*/
  margin-bottom: 50px; 
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.van-tabbar-item--active{
  /* background:
		-webkit-linear-gradient(left, orange, red);
		-webkit-background-clip:text;
		-webkit-text-fill-color:transparent; 我的字体渐变*/
    color:orangered;
}
</style>
