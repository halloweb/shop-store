<template>
	<swiper style="padding:0 15px;height:150px;" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" :circular="true">
		<swiper-item v-for="(item, index) in bannerList" :key="index">
				<img class="banner-img"  :src="item.url" mode="scaleToFill">
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				bannerList: [
					{url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=73701683,1313358204&fm=26&gp=0.jpg"},
					{url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=122439968,1640602082&fm=26&gp=0.jpg'},
					{url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3082026725,3980266131&fm=26&gp=0.jpg'}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
  .banner-img {
		width: 100%;
		height: 100%;
		background: red;
		border-radius: 10px;
	}
</style>
