import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import api from "../data/product.js";

const state = {
	cartList: [],
	productList: [],
	product: {},
	productSku: {}
}

const mutations = {
	getProduct (state, res) {
		state.productList = JSON.parse(JSON.stringify(res));
	},
	setProductSku (state, productId, skuId) {
		state.productSku = state.productList.filter(product => {
			return product.id = productId;
		})[0].product_skus.filter(sku => {
			return sku.id = skuId;
		})
	},
	setCartList (state, data) {
		state.cartList = 
	}
}

const actions = {
	getProductApi ({commit}) {
		api.productApi()
		.then(res => {
			commit('getProduct', res);
		})
	}
}

const getters = {

}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});
