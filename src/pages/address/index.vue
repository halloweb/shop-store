<template>
  <view class="address-wrap">
    <view style="flex:1;padding:15px 0;overflow-y:auto;">
      <view style="padding:0 15px;background:#fff;">
        <view class="address">
          <view>
              <image style="width:24px;height:24px;" :src="require('../../static/circle.png')" alt=""/>
              <!-- <image style="width:24px;height:24px;" :src="require('../../static/selected.png')" alt=""/> -->
          </view>
          <view style="padding:0 10px;">
            <view class="title">北京市七里渠北京市七里渠北京市七里渠北京市七里渠北京市七里渠北京市七里渠</view>
            <view class="name">
              <text>hallo</text>
              <text style="margin-left:10px;">1300125</text>
            </view>
          </view>
          <uni-icons @click="editAddress" type="compose" color="#969696" size="20"></uni-icons>
        </view>
      </view>
    </view>
    <view class="btn">新增地址</view>
  </view>
</template>
<script>
import uniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'
export default {
  components: {
    uniIcons
  },
  methods: {
    editAddress () {
      uni.navigateTo({
          url: '../address/edit'
      })
    }
  }
}
</script>

<style lang="scss">
.address-wrap {
  height: 100vh;
  background: #F5F7F9;
  display: flex;
  flex-direction: column;
}
.address {
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding:15px 0;
  background:#fff;
  line-height:1.5;
  border-bottom:1px solid rgba(241,241,241,1);
  .title {
    color:$p-title;
    font-size:16px;
  }
  .name {
    color:$p-desc;
    font-size:12px;
  }
  &:last-child {
    border:none;
  }
}
.btn {
  height: 40px;
  line-height:40px;
  width: 100%;
  color:#fff;
  font-size:16px;
  background: $theme-color;
  text-align: center;
  &.disabled {
    background: $p-desc;
   }
  }
</style>
