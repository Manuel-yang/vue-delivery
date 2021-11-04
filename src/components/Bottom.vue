<template>
  <div class="body">
<!--Hey! This is the original version
of Simple CSS Waves-->

    <div class="header">

<!--Content before waves-->
      <div class="inner-header flex">
      <!--Just the logo.. Don't mind this-->

      </div>

<!--Waves Container-->
      <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
<!--Waves end-->
    </div>
<!--Header ends-->

<!--Content starts-->
    <div class="content flex">
      <p>苏ICP备 2021037534 号-1</p>
      <u @click="showPopup" class="qrcode">意见反馈 • 客服反馈</u>
      <van-popup
        v-model="show"
        closeable
        position="bottom"
        :style="{ height: '40%' }"
      >
        <img src="../assets/QRCode.jpg"/>
      </van-popup>
      <p class="company">2021 | 南京星坠网络科技有限公司</p>
    </div>
<!--Content ends-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  }
}
</script>

<style scoped>
@import '../assets/css/bottom.css';

img{
  margin-top: 50px;
  height: 250px;
}
</style>