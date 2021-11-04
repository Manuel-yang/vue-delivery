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
      <van-cell-group>
        <van-cell  />
        <van-cell title="我的积分" :value="credit" />
        <van-cell  />
      </van-cell-group>
    </div>
    <div>
      <van-card
        desc="描述信息"
        title="商品标题"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #footer>

        </template>
      </van-card>
      <van-card
        desc="描述信息"
        title="商品标题"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #footer>

        </template>
      </van-card>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
const requests = axios.create({ baseURL:'http://110.42.145.177:8081'})
export default {
  mounted() {
    this.getCredit();
  },
  data() {
    return {
      credit:0,
    }
  },
  methods: {
    getCredit() {
      requests.get(`api/user/getPoint/${localStorage.getItem("studentId")}/${localStorage.getItem("token")}`).then( res => {
        this.credit = res.data.object;
        console.log(this.credit)
      })
    },
    onClickLeft() {
      this.$router.push('/') 
      this.$router.push({name:''}) 
      this.$router.push({path:'/'})
    },
  }
}
</script>