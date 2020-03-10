<template>
  <view class="full-page">
			<scroll-view class="main" scroll-y="true">
				<Banner/>
				<view>
					<product-list/>
				</view>
			</scroll-view>
		<Footer/>
	</view>
</template>

<script>
  import Banner from '@/components/banner.vue'
  import Footer from '@/components/footer-nav.vue'
  import ProductList from '@/components/product-list.vue'
	export default {
		components: {
			Banner,
			ProductList,
			Footer
		}
	}
</script>

<style lang="scss">
.full-page {
	height: 100vh;
	.main {
		height: calc(100% - 60px)
	}
}
</style>
