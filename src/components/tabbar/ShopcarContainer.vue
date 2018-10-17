<template>
	<div class="shopcar-container">

		<div class="goods-list">

			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[1]" @change="selectedChanged(1, $store.getters.getGoodsSelected[1])"></mt-switch>
						<img src="http://img13.360buyimg.com/n5/s54x54_jfs/t19912/33/927199229/297549/8c269ff0/5b0fca0fN8d5600df.jpg" alt="">
						<div class="info">
							<h1>小米8全面屏游戏智能手机6GB+64GB黑色全网通4G双卡双待</h1>
							<p>
								<span class="price">￥2599</span>
								<numbox :initcount="$store.getters.getGoodsCount[1]" :goodsid="1"></numbox>
								<a href="#" @click.prevent="remove(1)">删除</a>
							</p>
						</div>
					</div>
				</div>
			</div>

		</div>
		
		<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
							<p>总计（不含运费）</p>
							<p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件，总价 <span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
						</div>
						<mt-button type="danger">去结算</mt-button>
					</div>
				</div>
		</div>

	</div>
</template>

<script>
	import numbox from "../subcomponents/shopcar_numbox.vue"

	export default {
		data() {
			return {

			}
		},
		methods:{
			remove(id) {
				// this.goodslist.splice(index, 1)
				this.$store.commit("removeFormCar", id)
				// the shuju shi xieside xianzai zhege qingkuang suoyi shanchu buduitou
			},
			selectedChanged(id, val) {
				this.$store.commit("updateGoodsSelected", {id, selected: val})
			},
		},
		components: {
			numbox
		}
	}
</script>

<style lang="scss" scoped>
	.shopcar-container {
		background-color: #eee;
		.goods-list {
			.mui-card-content-inner {
				display: flex;
				align-items: center;
				img {
					width: 60px;
				}
				h1 {
					font-size: 13px;
				}
				.info {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					padding: 5px 0 0 5px;
					.price {
						color: red;
						font-weight: bold;
					}
					.mui-numbox {
						height: 25px;
					}
				}
			}
		}
		.jiesuan {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.red {
				color: red;
				font-weight: bold;
				font-size: 16px;
			}
		}
	}
</style>