<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home
      </router-link>
      <router-link to="/cart">购物车
      </router-link>
      <router-link to="/checkout">
        结算
      </router-link>
      <router-link to="/shipping">
        运费
      </router-link>
      <router-link to="/payment">
        支付
      </router-link>
      <router-link to="/review-order">
        订单
      </router-link>
      <router-link to="/order-complete">
        订单完成
      </router-link>
      <router-link to="/test">
        测试页面
      </router-link>

    </div>
    <router-view />
  </div>
</template>
<script>
  export default {
    computed: {
      cartList () {
        return this.$store.state.cartList;
      }
    }
  }
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
