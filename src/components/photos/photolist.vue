<template>
	<div>
		<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a href="#" :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @click="getPhotoListById(item.id)">
							{{ item.title }}
						</a>
					</div>
				</div>
		</div>

		<ul class="photo-list">
  			<router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
    			<img v-lazy="item.img_url">
    			<div class="info">
    				<div class="info-title">{{ item.title }}</div>
    				<div class="info-body">{{ item.zhaiyao }}</div>
    			</div>
  			</router-link>
		</ul>

	</div>
</template>

<script>

	// import mui from "../../lib/mui/js/mui.min.js"

	export default {
		data() {
			return {
				list: [],
				cates: []
			}
		},
		created() {
			this.getPhotoListById(0)
			this.getAllCategory()
		},
		// mounted() {
		// 	mui('.mui-scroll-wrapper').scroll({
		// 		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		// 	})
		// },
		methods: {
			getAllCategory() {
				this.$http.get("getimgcategory").then(result => {
					if (result.body.status === 0) {
						this.cates = result.body.message
					}
				})
			},

			getPhotoListById(cateId) {
				this.$http.get("getimages/" + cateId).then(result => {
					if (result.body.status === 0) {
						this.list = result.body.message
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.photo-list {
		list-style: none;
		margin: 0;
		padding: 0 10px;

		li {
			margin-bottom: 10px;
			position: relative;
			background-color: #ccc;
			text-align: center;
			box-shadow: 0 0 9px #999;
		}
		img {
			width: 100%;
			vertical-align: middle;
		}

		img[lazy=loading] {
  			width: 40px;
 			height: 300px;
  			margin: auto;
		}

		.info {
			color: white;
			text-align: left;
			position: absolute;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.4);
			max-height: 84px;
			.info-title {
				font-size: 14px;
			}
			.info-body {
				font-size: 13px;
			}
		}
	}
</style>