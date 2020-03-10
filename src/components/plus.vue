<template>
  <view class="plus-wrap">
    <image v-show="value" style="width:24px;height:24px;" :src="require('../static/less.png')" @click="plus">
    <text v-show="value" class="number">{{value}}</text>
    <image style="width:24px;height:24px;" :src="require('../static/plus.png')" @click="less">
  </view>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
     plus() {
       this.$emit('input', this.value + 1)
     },
     less() {
       let result = this.value - 1
       this.$emit('input', result >= 0 ? result : 0)
     }
  }
}
</script>
<style lang="scss">
.plus-wrap {
  display: flex;
  align-items: center;
  .number {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #333;
    min-width:40px;
  }
}
</style>


