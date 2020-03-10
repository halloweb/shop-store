<template>
  <view class="order-wrap">
    <view style="flex:1;overflow-y:auto;padding:15px;">
       <view class="address" @click="selectAddress">
          <view>
            <view class="title">北京市七里渠北京市七里渠北京市七里渠北京市七里渠北京市七里渠北京市七里渠</view>
            <view class="name">
              <text>hallo</text>
              <text style="margin-left:10px;">1300125</text>
            </view>
          </view>
          <uni-icons type="arrowright" color="#969696" size="20"></uni-icons>
       </view>
      <view class="product-wrap">
       <view class="product-list">
        <view class="item-wrap" v-for="(item, index) in list" :key="index">
         <view  class="product-item" @click="viewDetail(item)">
          <view class="product-image" :style="{'background-image': `url(${item.image})`}" ></view>
          <view class="product-info">
            <view class="product-name">{{item.name}}</view>
            <view class="product-desc"></view>
            <view class="count">共11件</view>
          </view>
          <view class="total-price">¥299</view>
        </view>
      </view>
      <view class="price-info">
          <text>商品总价</text>
          <text>¥256</text>
        </view>
        <view class="price-info">
          <text>配送费</text>
          <text>¥256</text>
        </view>
        <view class="sumPrice">小计¥256</view>
       </view>
     </view>
    </view>
    <view class="buy-action">
      <text class="pay-amount">实付<text class="amount">¥256</text></text>
      <view class="buy-btn">立即支付</view>
    </view>
  </view>
</template>
<script>
import uniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'
export default {
  components: {
     uniIcons
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
    selectAddress () {
      uni.navigateTo({
          url: '../address/index'
      })
    }
  }
}
</script>
<style lang="scss">
.order-wrap {
  height: 100vh;
  background: #F5F7F9;
  display: flex;
  flex-direction: column
}
.address {
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding:15px 15px;
  background:#fff;
  line-height:1.5;
  border-radius: 5px;
  .title {
    color:$p-title;
    font-size:16px;
  }
  .name {
    color:$p-desc;
    font-size:12px;
  }
}
.product-wrap {
  margin-top: 15px;
  flex: 1;
  overflow-y:auto;
  .product-list {
    background: #fff;
    border-radius: 5px;
    .item-wrap {
      display: flex;
      align-items: center;
    }
  }
}
 .product-item {
    padding:10px 15px 10px 15px;
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
      .count {
        color:$p-desc;
        font-size: 12px;
      }
    }
    .total-price {
      color:$p-title;
      font-size: 14px;
      display: flex;
      align-items: center;
    }
  }
  .price-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:5px 15px;
    color:$p-title;
    font-size: 12px;
  }
  .sumPrice {
    text-align:right;
    padding:8px 15px;
    color:$p-title;
    font-size: 14px;
    border-top:1px solid rgba(241,241,241,1);
  }
  .buy-action {
    display:flex;
    align-items: center;
    height: 60px;
    background: #fff;
    padding:0 15px;
    .pay-amount {
      color:$p-title;
      font-size:14px;
      flex:1;
      .amount {
        font-size:16px;
        color:$theme-color;
      }
    }
    .buy-btn {
      height: 40px;
      line-height:40px;
      padding: 0 40px;
      border-radius: 5px;
      color:#fff;
      font-size:16px;
      background: $theme-color;
      text-align: center;
      box-shadow:0px -1px 6px rgba(0,0,0,.1);
      &.disabled {
        background: $p-desc;
      }
    }
  }
</style>


