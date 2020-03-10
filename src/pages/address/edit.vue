<template>
  <view class="address-wrap">
    <view class="form">
      <view class="form-item">
        <view class="label">姓名</view>
        <input class="content"  focus  />
      </view>
      <view class="form-item">
        <view class="label">姓别</view>
          <radio-group class="content">
            <radio color="#ff4891" value="男" /><text>男士</text>
            <radio color="#ff4891" style="margin-left:20px;" value="女" /><text>女士</text>
          </radio-group>
      </view>
      <view class="form-item">
        <view class="label">手机号</view>
        <input class="content" focus type="number" />
      </view>
      <view class="form-item">
        <view class="label">地址</view>
        <textarea class="content"  auto-height />
      </view>
      <view class="form-item">
          <view class="label" style="flex:1;">设为默认地址</view>
          <switch color="#ff4891"/> 
      </view>
    </view>
    <view class="btn">保存</view>
    <view class="btn disabled">删除</view>
  </view>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.address-wrap {
  height: 100vh;
  background: $theme-bg;
}
.form {
  background:#fff;
  padding:0 15px;
  margin-top:15px;
  .form-item {
    display:flex;
    align-items: center;
    padding:15px 0;
    border-bottom:1px solid rgba(241,241,241,1);
    &:last-child {
      border-bottom: none;
    }
    .label {
      width:80px;
      }
    .content {
      flex:1;
    }
    }
}
.btn {
  height: 40px;
  line-height:40px;
  width: 80%;
  margin:0 auto;
  margin-top:20px;
  border-radius:4px;
  color:#fff;
  font-size:16px;
  background: $theme-color;
  text-align: center;
  &.disabled {
    background: $p-desc;
   }
  }
</style>


