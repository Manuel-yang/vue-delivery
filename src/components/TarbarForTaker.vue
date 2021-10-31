<template>
<van-tabbar v-model="active" route fixed>
  <van-tabbar-item icon="home-o" replace to="/TakerDefaultPage">全部订单</van-tabbar-item>
  <van-tabbar-item icon="search" replace to="/TakerToDoPage">我的订单</van-tabbar-item>
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
