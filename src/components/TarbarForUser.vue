<template>
<van-tabbar v-model="active" route fixed>
  <van-tabbar-item icon="search" replace to="/Dashboard">历史订单</van-tabbar-item>
  <van-tabbar-item icon="add" replace to="/OrderPage">开始下单</van-tabbar-item>
  <van-tabbar-item icon="user-circle-o" replace to="/TakerDefaultPage">我的信息</van-tabbar-item>
</van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>
