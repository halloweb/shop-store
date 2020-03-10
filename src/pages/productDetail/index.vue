<template>
  <view class="product-detail">
    <scroll-view style="height: calc(100% - 60px);background:#F5F7F9;" scroll-y="true">
      <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" :circular="true">
        <swiper-item  v-for="(item, index) in bannerList" :key="index">
            <img style="width:100%;height:300px;"  class="banner-img"  :src="item.url" mode="scaleToFill">
        </swiper-item>
      </swiper>
      <view style="padding:15px;background:#fff;">
        <view class="product-name">{{productInfo.name}}</view>
        <view class="product-desc">{{productInfo.desc}}</view>
        <view style="display:flex;margin-top:10px;">
          <view style="flex:1;">
            <text class="product-price">¥{{productInfo.price}}</text>
            <text class="product-originPrice">¥{{productInfo.originPrice}}</text>
          </view>
          <text class="sale">月销量{{productInfo.originPrice}}份</text>
        </view>
      </view>
    </scroll-view>
    <view class="footer">
      <view>
        <view class="shop-cart">
          <uni-icons type="cart" size="20" color="#6F7287"></uni-icons>
          <view class="count">0</view>
        </view>
      </view>
      <view class="btn">加入购物车</view>
    </view>
  </view>
</template>
<script>
import uniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'
export default {
  components: {uniIcons},
  data() {
    return {
      bannerList: [
        {url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=73701683,1313358204&fm=26&gp=0.jpg"},
        {url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=122439968,1640602082&fm=26&gp=0.jpg'},
        {url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3082026725,3980266131&fm=26&gp=0.jpg'}
      ],
      productInfo: {
        price: 156,
        originPrice: 112,
        name: '你觉得你觉得时空门打开速度快算得上是撒大声地所多所多所多所',
        desc: '但是但是多所多所所多'
      }
    }
  }
}
</script>
<style lang="scss">
.product-detail {
  height: 100vh;
  background: #F5F7F9;
}
.product-name {
  color: $p-title;
  line-height: 1.5;
}
.product-desc {
  margin-top: 5px;
  color: $p-desc;
  font-size: 12px;
  flex: 1;
}
.product-price {
  color: $theme-color;
  font-size: 16px;
}
.product-originPrice {
  color: $p-desc;
  font-size: 12px;
  text-decoration: line-through;
  margin-left: 5px;
}
.sale {
  color: $p-desc;
  font-size: 12px;
}
.footer {
  height:60px;
  padding:0 15px;
  box-shadow:0px -1px 6px rgba(238,43,123,0.16);
  display:flex;
  align-items: center;
  justify-content: space-between;
  .shop-cart {
    position:relative;
    .count {
      position:absolute;
      left:21px;
      top:-9px;
      color:#fff;
      padding:2px 4px;
      font-size: 8px;
      border-radius: 50%;
      background:$theme-color;
    }
  }
  .btn {
    width:260px;
    height:40px;
    line-height:40px;
    color:#fff;
    border-radius:10px;
    background: $theme-color;
    text-align: center;
  }
}
</style>

