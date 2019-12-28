import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
	blogTitle: 'hello blog',
	views: 0,
	blogNumber: 1000,
	total: 0,
	todos: [
		{id: 1, done: true, text: 'i am working hard'},
		{id: 2, done: true, text: 'i will be rich'},
		{id: 3, done: false, text: 'i am later'}
	],
	cartList: {}
}

const mutations = {
	addViews (state) {
		state.views++;
	},
	blogAdd () {
 		state.blogNumber++;
	},
	clickTotal () {
		state.total++;
	}
}

const actions = {
	addViews ({commit}) {
		commit('addViews');
	},
	clickTotal ({commit}) {
		commit('clickTotal');
	},
	blogAdd ({commit}) {
		commit('blogAdd');
	}
}

const getters = {
	getTodo (state) {
		return state.todos.filter(item=>item.done === true);
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});
