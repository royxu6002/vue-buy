import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Vue-buy online samples"
    },
    component: Home
  },
  {
    path: '/show',
    redirect: '/'
  },
  {
    path: "/show/:id",
    name: "show",
    meta: {
      title: "product detail"
    },
    component: () => import("../views/Show.vue")
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      title: 'test a vuex function'
    },
    component: () => import("../views/test.vue")
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: '购物车页面'
    },
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    meta: {
      title: '结算页面'
    },
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/shipping',
    name: 'Shipping',
    meta: {
      title: '运费结算页'
    },
    component: () => import('../views/Shipping.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    meta: {
      title: '支付页'
    },
    component: () => import('../views/Payment.vue')
  },
  {
    path: '/review-order',
    name: 'ReviewOrder',
    meta: {
      title: '订单页'
    },
    component: () => import('../views/ReviewOrder.vue')
  },
  {
    path: '/order-complete',
    name: 'OrderComplete',
    meta: {
      title: '订单完成页'
    },
    component: () => import('../views/OrderComplete.vue')
  },

];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to,from,next) => {
  window.document.title = to.meta.title;
  next();
});

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

export default router;
