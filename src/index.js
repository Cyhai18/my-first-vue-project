// 入口文件

import Vue from "../node_modules/vue/dist/vue.min.js"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import VuePreview from "vue-preview"
Vue.use(VuePreview)

import Vuex from "vuex"
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem("car") || "[]")

var store = new Vuex.Store({
	state: {
		car: car
	},
	mutations: {
		addToCar(state, goodsinfo) {

			var flag = false

			state.car.some(item => {
				if (item.id == goodsinfo.id) {
					item.count += parseInt(goodsinfo.count)
					flag = true
					return true
				}
			})

			if (!flag) {
				state.car.push(goodsinfo)
			}

			localStorage.setItem("car", JSON.stringify(state.car))
		},
		updateGoodsInfo(state, goodsinfo) {

			state.car.some(item => {
				if (item.id == goodsinfo.id) {
					item.count = parseInt(goodsinfo.count)
					return true
				}
			})
			localStorage.setItem("car", JSON.stringify(state.car))
		},
		removeFormCar(state, id) {
			state.car.some((item, i) => {
				if (item.id == id) {
					state.car.splice(i, 1)
					return true
				}
			})
			localStorage.setItem("car", JSON.stringify(state.car))
		},
		updateGoodsSelected(state, info) {
			state.car.some(item => {
				if (item.id == info.id) {
					item.selected = info.selected
				}
			})
			localStorage.setItem("car", JSON.stringify(state.car))
		}
	},
	getters: {
		getAllCount(state) {
			var c = 0
			state.car.forEach(item => {
				c += item.count
			})
			return c
		},
		getGoodsCount(state) {
			var o = {}
			state.car.forEach(item => {
				o[item.id] = item.count
			})
			return o
		},
		getGoodsSelected(state) {
			var o = {}
			state.car.forEach(item => {
				o[item.id] = item.selected
			})
			return o
		},
		getGoodsCountAndAmount(state) {
			var o = {
				count: 0,
				amount: 0,
			}
			state.car.forEach(item => {
				if (item.selected) {
					o.count += item.count
					o.amount += item.price * item.count
				}
			})
			return o
		}
	}
})

// 导入格式化时间的插件
import moment from "moment"
Vue.filter("dateFormat", function(dateStr, pattern="YYYY-MM-DD HH:mm:ss") {
	return moment(dateStr).format(pattern)
})

import VueResource from "vue-resource"
Vue.use(VueResource)
// 设置请求的跟路径
Vue.http.options.root = "https://www.easy-mock.com/mock/5b923160025e8441af0349fb/vueproject"

import router from "../src/router.js"

import app from "../src/app.vue"

import "../src/lib/mui/css/mui.min.css"
import "../src/lib/mui/css/icons-extra.css"


// import { Header, Swipe, SwipeItem, Button, Lazyload } from "mint-ui"
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)

import MintUI from "mint-ui"
Vue.use(MintUI)
import "../node_modules/mint-ui/lib/style.min.css"


var vm = new Vue({
	el: "#app",
	data: {
		
	},
	components: {
		app
	},
	router: router,
	store
})