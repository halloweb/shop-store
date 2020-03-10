<template>
 <view class="footer">
  <view class="footer-nav">
    <view v-for="item in navList" :key="item.name" :class="['footer-item',{'active': item.url === currentUrl}]" @click="go(item.url)">
      <uni-icons :type="item.icon" size="20" :color="item.url === currentUrl ? '#ff4891' : '#6F7287'"></uni-icons>
      <view v-if="item.name === '购物车'" class="count">10</view>
      <view>{{item.name}}</view>
    </view>
	</view>
	</view>
</template>
<script>
import uniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'
export default {
  components: {
    uniIcons
  },
  data() {
    return {
      navList: [
        {name: '首页', icon: 'home-filled', url: 'pages/index/index'},
        {name: '购物车', icon: 'cart-filled', url: 'pages/cart/index'},
        {name: '我的', icon: 'person-filled', url: 'pages/personal/index'},
      ],
      currentUrl: ''
    }
  },
  methods: {
    go (url) {
      if (url === this.currentUrl) return
      uni.navigateTo({
          url: url.replace('pages','..')
      })
    }
  },
  created () {
    let routeArr = getCurrentPages()
    this.currentUrl = routeArr[routeArr.length - 1].route
  }
}
</script>

<style lang="scss">
  .footer {
   height: 60px;
   width: 100%;
  }
 .footer-nav {
   width: 100%;
   height: 60px;
   display: flex;
   align-items: center;
   background-color: #fff;
   font-size: 12px;
   color: #6F7287;
   box-shadow:0px -1px 6px rgba(0,0,0,.1);
   .footer-item {
     width: 33.3%;
     text-align: center;
     position: relative;
     &.active {
       color: $theme-color;
     }
     .count {
      position:absolute;
      right:34%;
      top:-6px;
      color:#fff;
      padding:2px 4px;
      font-size: 8px;
      border-radius: 50%;
      background:$theme-color;
    }
   }
 }
</style>

