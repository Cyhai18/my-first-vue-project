<template>
	<div>
		<mt-swipe :auto="4000">
  			<mt-swipe-item v-for="item in lunbotulist" :key="item.url">
  				<img :src="item.url" alt="">
  			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default {
		props: ["lunbotulist"]
	}
</script>

<style scoped>
	.mint-swipe {
		height: 200px;
	}

	.mint-swipe-item:nth-child(1) {
		background-color: lightblue;
	}
	.mint-swipe-item:nth-child(2) {
		background-color: cyan;
	}
	.mint-swipe-item:nth-child(3) {
		background-color: pink;
	}

	.mint-swipe-item img {
		width: 100%;
		height: 100%;
	}
</style>