import VueRouter from "vue-router"

import HomeContainer from "../src/components/tabbar/HomeContainer.vue"
import MemberContainer from "../src/components/tabbar/MemberContainer.vue"
import ShopcarContainer from "../src/components/tabbar/ShopcarContainer.vue"
import SearchContainer from "../src/components/tabbar/SearchContainer.vue"
import NewsList from "../src/components/news/newsList.vue"
import NewsInfo from "../src/components/news/newsInfo.vue"
import PhotoList from "../src/components/photos/photolist.vue"
import PhotoInfo from "../src/components/photos/photoinfo.vue"
import GoodsList from "../src/components/goods/goodslist.vue"
import GoodsInfo from "../src/components/goods/goodsinfo.vue"

var router = new VueRouter({
	routes: [
		{ path: "/", redirect: "/home" },
		{ path: "/home", component: HomeContainer },
		{ path: "/member", component: MemberContainer },
		{ path: "/shopcar", component: ShopcarContainer },
		{ path: "/search", component: SearchContainer },
		{ path: "/home/newslist", component: NewsList},
		{ path: "/home/newsinfo/:id", component: NewsInfo},
		{ path: "/home/photolist", component: PhotoList },
		{ path: "/home/photoinfo/:id", component: PhotoInfo},
		{ path: "/home/goodslist", component: GoodsList},
		{ path: "/home/goodsinfo/:id", component: GoodsInfo}
	],
	linkActiveClass: "mui-active"
})

export default router