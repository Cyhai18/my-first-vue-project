<template>
	<div class="goods-list">

		<router-link :to="'/home/goodsinfo/' + 1" tag="div" class="goods-item">
			<img src="http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200119256512.jpg" alt="">
			<h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥899</span>
					<span class="old">￥999</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</router-link>

		<div class="goods-item">
			<img src="http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200119256512.jpg" alt="">
			<h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥899</span>
					<span class="old">￥999</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</div>

		<div class="goods-item">
			<img src="http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200119256512.jpg" alt="">
			<h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥899</span>
					<span class="old">￥999</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</div>

	</div>
</template>

<script></script>

<style lang="scss" scoped>
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		padding: 7px;
		justify-content: sapce-between;
		.goods-item {
			width: 49%;
			padding: 2px;
			border: 1px solid #ccc;
			margin: 4px 0;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			img {
				width: 100%;
			}
			.title {
				font-size: 14px;
			}
			.info {
				background-color: #eee;
				p {
					margin: 0;
					padding: 5px;
				}
				.price {
					.now {
						color: red;
						font-weight: bold;
						font-size: 16px;
					}
					.old {
						text-decoration: line-through;
						font-size: 12px;
						margin-left: 10px;
					}
				}
				.sell {
					display: flex;
					justify-content: space-between;
					font-size: 13px;
				}
			}
		}
	}
</style>