<template>
  <view class="product-list">
    <view v-for="(item, index) in productList" :key="index" class="product-item" @click="viewDetail(item)">
      <view class="product-image" :style="{'background-image': `url(${item.image})`}" ></view>
      <view class="product-info">
         <view class="product-name">{{item.name}}</view>
         <view class="product-desc">{{item.desc}}</view>
         <view class="product-label">
            <view v-for="(label,index) in item.label" :key="index" :class="['label-item', `label-item-${label.type}`]">
              {{label.name}}
            </view>
         </view>
         <view class="product-price">
            <view style="flex:1;">
              <text class="price">¥{{item.price}}</text>
              <text class="originPrice">¥{{item.originPrice}}</text>
            </view>
            <Plus/>
         </view>
      </view>
    </view>
  </view>
</template>
<script>
import Plus from '@/components/plus.vue'
export default {
  components: {
    Plus
  },
  data() {
    return {
      productList: [
        {
          image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=73701683,1313358204&fm=26&gp=0.jpg',
          name: '山东大西瓜',
          desc: '纯正山东搭建大家都能大年三十绝对是',
          label: [{name: '限时秒杀',type:'info'},{name: '限时秒杀',type:'warn'}],
          price: 99.9,
          originPrice: 109.9
        },
        {
          image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=73701683,1313358204&fm=26&gp=0.jpg',
          name: '山东大西瓜',
          desc: '纯正山东搭建大家都能大年三十绝对是',
          label: [{name: '限时秒杀',type:'info'},{name: '限时秒杀',type:'warn'}],
          price: 99.9,
          originPrice: 109.9
        },
        {
          image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=73701683,1313358204&fm=26&gp=0.jpg',
          name: '山东大西瓜',
          desc: '纯正山东搭建大家都能大年三十绝对是',
          label: [{name: '限时秒杀',type:'info'},{name: '限时秒杀',type:'warn'}],
          price: 99.9,
          originPrice: 109.9
        },
        {
          image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=73701683,1313358204&fm=26&gp=0.jpg',
          name: '山东大西瓜',
          desc: '纯正山东搭建大家都能大年三十绝对是',
          label: [{name: '限时秒杀',type:'info'},{name: '限时秒杀',type:'warn'}],
          price: 99.9,
          originPrice: 109.9
        }
      ]
    }
  },
  methods: {
    viewDetail(item) {
      console.log('aa')
      uni.navigateTo({
          url: `../productDetail/index?id=${item.id}`
      })
    }
  },
  onPullDownRefresh() {
    console.log('refresh');
    setTimeout(function () {
        uni.stopPullDownRefresh();
    }, 1000);
  }
}
</script>
<style lang="scss">
.product-list {
  height: 100%;
  padding: 0 15px;
  .product-item {
    padding: 15px 0;
    display: flex;
    align-items: stretch;
    border-top:1px solid rgba(241,241,241,1);
    .product-image {
      width: 100px;
      height: 100px;
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
      }
      .product-desc {
        margin-top: 5px;
        color: $p-desc;
        font-size: 12px;
        flex: 1;
      }
      .product-label {
        display: flex;
        .label-item {
          border: 1px solid;
          margin-right: 5px;
          border-radius: 10px;
          font-size: 10px;
          line-height:1;
          padding:0 3px;
          &.label-item-info {
            border-color: rgba(150,150,150,.4);
            color: $p-desc;
          }
          &.label-item-warn {
            border-color: rgba(221,82,77,.4);
            color: #dd524d
          }
        }
      }
      .product-price {
        display: flex;
        align-items: center;
      }
      .price {
        color: $theme-color;
        font-size: 16px;
      }
      .originPrice {
        color: $p-desc;
        font-size: 12px;
        text-decoration: line-through;
        margin-left: 5px;
      }
    }
  }
}
</style>


