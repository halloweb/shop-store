<template>
<view class="cart-page">
  <view class="head">
    <view class="title">购物车</view>
    <text class="remove">删除</text>
  </view>
  <view class="product-wrap">
    <view class="product-list">
       <view class="item-wrap" v-for="(item, index) in list" :key="index">
         <view>
           <image style="width:24px;height:24px;" :src="require('../../static/circle.png')" alt=""/>
           <!-- <image style="width:24px;height:24px;" :src="require('../../static/selected.png')" alt=""/> -->
         </view>
         <view  class="product-item" @click="viewDetail(item)">
          <view class="product-image" :style="{'background-image': `url(${item.image})`}" ></view>
          <view class="product-info">
            <view class="product-name">{{item.name}}</view>
            <view class="product-desc"></view>
            <view class="product-price">
                <text class="price">¥{{item.price}}</text>
                <Plus/>
            </view>
          </view>
        </view>
       </view>
    </view>
  </view>
  <view class="buy-action">
        <view style="color:#333;font-size:14px;display:flex;align-items:center;">
           <image style="width:24px;height:24px;" :src="require('../../static/circle.png')" alt=""/>
           <!-- <image style="width:24px;height:24px;" :src="require('../../static/selected.png')" alt=""/> -->
           <text style="margin-left:5px;">全选</text>
        </view>
        <view class="buy-info">
          <text>不含运费</text>
          <text style="margin-left:10px;">合计:<text class="price">¥152</text></text>
        </view>
        <view class="buy-btn" @click="confirm">去结算(14)</view>
  </view>
  <Footer/>
</view>
</template>
<script>
import Footer from '@/components/footer-nav.vue'
import Plus from '@/components/plus.vue'
export default {
  components: {
    Footer,
    Plus
  },
  data () {
    return {
       list: [{
          image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=73701683,1313358204&fm=26&gp=0.jpg',
          name: '山东大西瓜',
          desc: '纯正山东搭建大家都能大年三十绝对是',
          label: [{name: '限时秒杀',type:'info'},{name: '限时秒杀',type:'warn'}],
          price: 99.9,
          originPrice: 109.9
        }]
    }
  },
  methods: {
    confirm() {
      uni.navigateTo({
          url: '../fillOrder/index'
      })
    }
  }
}
</script>
<style lang="scss">
.cart-page {
  height: 100vh;
  background: #F5F7F9;
  display: flex;
  flex-direction: column
}
.head {
  height: 60px;
  line-height: 60px;
  padding:0 15px;
  background: #fff;
  position: relative;
  .title {
    font-size: 16px;
    text-align: center
  }
  .remove {
    position: absolute;
    top:0;
    color: $p-desc;
    font-size: 14px;
    right: 15px;
  }
}
.product-wrap {
  padding: 15px;
  flex: 1;
  overflow-y:auto;
  .product-list {
    background: #fff;
    border-radius: 5px;
    .item-wrap {
      display: flex;
      align-items: center;
      padding-left:15px;
    }
  }
}
 .product-item {
    padding:10px 15px 10px 25px;
    flex: 1;
    display: flex;
    align-items: stretch;
    border-bottom:1px solid rgba(241,241,241,1);
    .product-image {
      width: 80px;
      height: 80px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50%;
      border-radius: 5px;
    }
    .product-info {
      padding-left: 15px;
      flex: 1;
      display: flex;
      flex-direction: column;
      line-height: 1.5;
      .product-name {
        color: $p-title;
        line-height: 1.5;
        font-size: 14px;
      }
      .product-name {
        flex: 1;
      }
      .product-price {
        display: flex;
        align-items: center;
        .price {
          color: $theme-color;
          font-size: 14px;
          flex: 1;
        }
      }
    }
  }
  .buy-action {
    display:flex;
    align-items: center;
    height: 60px;
    background: #fff;
    padding:0 15px;
    .buy-info {
      flex:1;
      text-align:right;
      font-size:12px;
      color:$p-desc;
      margin-right: 15px;
      .price {
        color:$theme-color;
        font-size:16px;
      }
    }
    .buy-btn {
      height: 40px;
      line-height:40px;
      padding: 0 20px;
      border-radius: 5px;
      color:#fff;
      font-size:16px;
      background: $theme-color;
      text-align: center;
      &.disabled {
        background: $p-desc;
      }
    }
  }
</style>


