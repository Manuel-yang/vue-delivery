<template>
  <van-cell-group inset>
    <van-cell>
      <van-field v-model="userName" label="收货人" placeholder="注:收货人需与收件人一致" />
    </van-cell>
    <van-cell>
      <van-field v-model="userPhone" label="手机号" />
    </van-cell>

      <van-cell is-link title="取件地址" @click="servePopup" :value="serveValue" ></van-cell>
        <van-popup v-model="serveFlag"  position="bottom" :style="{ height: '270px' }">
          <van-picker
            show-toolbar
            title="Title"
            :columns="columns"
            @confirm="serveConfirm"
            @cancel="onCancel"
          />
        </van-popup>

      <van-cell is-link title="收货地址" @click="dormitoryPopup" :value="dormitoryValue"></van-cell>
        <van-popup v-model="dormitoryFlag"  position="bottom" :style="{ height: '270px' }">
          <van-picker
            show-toolbar
            title="Title"
            :columns="dormitory"
            @confirm="dormitoryConfirm"
            @cancel="onCancel"
          />
        </van-popup>
  </van-cell-group>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      userName: '',
      userPhone: '',
      serveFlag: false,
      dormitoryFlag: false,
      serveValue: '请选择',
      dormitoryValue: '请选择',
      columns: [
        {
          text: '东苑',
          children: [{text:'圆通'},{text:'顺丰'},{text:'中通'},{text:'京东'},{text:'韵达'}],
        },
        {
          text: '中苑',
          children: [{text:'圆通'},{text:'顺丰'},{text:'中通'},{text:'京东'},{text:'韵达'}],
        },
                {
          text: '西苑',
          children: [{text:'顺丰'},{text:'中通'},{text:'京东'},{text:'韵达'}],
        },
      ],

      dormitory: [
        {
          text: '晖园',
          children: [{text:'14栋'},{text:'15栋'},{text:'16栋'},{text:'17栋'},{text:'12栋'}],
        },
        {
          text: '文园',
          children: [{text:'14栋'},{text:'15栋'},{text:'16栋'},{text:'17栋'},{text:'12栋'}],
        },
        {
          text: '硕园',
          children: [{text:'14栋'},{text:'15栋'},{text:'16栋'},{text:'17栋'},{text:'12栋'}],
        },
        {
          text: '沁园',
          children: [{text:'14栋'},{text:'15栋'},{text:'16栋'},{text:'17栋'},{text:'12栋'}],
        },
      ],
    };
  },

  methods: {
    servePopup() {
      this.serveFlag = true;
    },
    dormitoryPopup() {
      this.dormitoryFlag = true;
    },
    serveConfirm(value, index) {
      this.serveValue = (value).join(",");
      this.serveFlag = !this.serveFlag;
    },
    dormitoryConfirm(value, index) {
      this.dormitoryValue = (value).join(",");
      this.dormitoryFlag = !this.dormitoryFlag;
    },
    onCancel() {
      Toast('Cancel');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
