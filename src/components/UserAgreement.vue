<template>
<div class="userAgreement" align="center">
  <div class="box">
    <div>
      <div @click="check" class="cbx">
        <input id="cbx" type="checkbox"/>
        <label for="cbx"></label>
        <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
          <path d="M2 8.36364L6.23077 12L13 2"></path>
        </svg>
      </div>
    </div>
    <div class="info">
      <u @click="popup">我同意《包裹配送服务协议》</u>
        <van-popup
          v-model="show"
          closeable
          position="bottom"
          :style="{ height: '40%' }"
        >
          <div align="center" class="popBox">
            <div class="content">
              <p>(1）若填错宿舍地址．电话号码、快递信息等，可以直接联系客服。</p>
              <p>（2）包衷的重量或体积大小规格填写有
                  误：我们会按照实际的规格来收费。若您的
                  包衷实际规格比下单所选的规格要小，可以
                  联系客服退回差额。若您的包表实际规格比
                  下单所选的规格要大，平台会向您发送差价
                  支付，需要您支付一下差价，请您谅解。
              </p> 
            </div>
          </div>
        </van-popup> 
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      show:false,
      flag: false,
    }
  },
  methods: {
    popup() {
      this.show = true
    },
    check() {
      this.$emit("protocolCheck")
    }
  }
}
</script>


<style scoped>
@import '../assets/css/userAgreement.css';
.userAgreement {
  width: 100%;
  height: 24px;
  margin-top: 40px;
}
.box{
  left: calc(50vw - 1px);
  width: 60%;
  height: 100%;
}
.info {
  bottom: 0px;
  height: 100%;
}

.info u{
  height: 100%;
  bottom:0px;
  padding:0px;
  font-size: 15px;
  margin-left: 25px;
  color: #864879;
}

.popBox {
  margin-top: 10%;
  height: 100%;

}
.content {
  width: 80%;

}

.content p{
  width: 80%;
  height: 100%;
  word-wrap:break-word;
  word-break:normal;
}
</style>