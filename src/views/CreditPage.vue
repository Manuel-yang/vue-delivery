<template>
  <div>
    <div>
      <van-nav-bar
        title="南信大Nuister"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #footer>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #footer>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push('/') 
      this.$router.push({name:''}) 
      this.$router.push({path:'/'})
    },
  }
}
</script>