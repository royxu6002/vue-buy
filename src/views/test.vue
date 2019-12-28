<template>
	<div>
		<h4>vuex 的状态管理数据</h4>
		<h5>blog title</h5>
		<i>{{ this.$store.state.blogTitle }}</i>
		<h5>todos text</h5>
		<ul>
			<li v-for="item in todosAlise" :key="item.id">
				<span>{{item.text}}</span><br>
				<span>{{item.done}}</span>
			</li>
		</ul>
		<h5>初始化访问量</h5>
		<p>
			mapState 方式 {{viewCount}} 
			<br>
			直接使用 views {{this.$store.state.views}}
		</p>
		<h5>blogNumber 数字</h5>
		<span>
			state 中 blogNumber: {{ this.$store.state.blogNumber }}
		</span>
		<h4>总计</h4>
		<span>
			state 中 total: {{ this.$store.state.total }}
		</span>
		<button @click="totalAlise">点击增加 total</button>
	</div>
</template>
<script>
	import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
	export default {
		data () {
			return {
				checked: true
			}
		},
		created () {
			// this.$store.dispatch('addViews') 调用了 $store 里 actions 方法
			this.blogAdd(); 
		},
		computed: {
			...mapGetters({
				todosAlise: 'getTodo'
			}),
			...mapState({
				viewCount: 'views'
			})
		},
		methods: {
			...mapMutations({
				totalAlise: 'clickTotal'
			}),
			...mapActions({
				blogAdd: 'blogAdd'
			})
		}
	}
</script>