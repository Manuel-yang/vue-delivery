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
  <div class="body">
  <van-cell-group inset>
      <van-field v-model="userName" label="收货人" placeholder="注:收货人需与收件人一致" /> 
      <van-field v-model="userPhone" label="手机号"  placeholder="在此输入"/>
      <van-field v-model="expressCode" label="取件码" placeholder="在此输入"/>

      <van-cell is-link title="取件地址" @click="servePopup" :value="serveValue" ></van-cell>
      <van-popup v-model="serveFlag"  position="bottom" :style="{ height: '270px' }">
        <van-picker
          show-toolbar
          title="取件地址"
          :columns="columns"
          @confirm="serveConfirm"
          @cancel="onCancel"
        />
      </van-popup>

      <van-cell is-link title="收货地址" @click="dormitoryPopup" :value="dormitoryValue"></van-cell>
        <van-popup v-model="dormitoryFlag"  position="bottom" :style="{ height: '270px' }">
          <van-picker
            show-toolbar
            title="收货地址"
            :columns="dormitory"
            @confirm="dormitoryConfirm"
            @cancel="onCancel"
          />
        </van-popup>
        
      <van-cell is-link title="收货时间" @click="datePopup" :value="dateValue"></van-cell>
        <van-popup v-model="dateFlag"  position="bottom" :style="{ height: '270px' }">
          <van-datetime-picker v-model="currentTime" type="time" :filter="filter" @confirm="dateConfirm"/>
        </van-popup>
  </van-cell-group>
    <UserAgreement @protocolCheck="protocolCheck"/>
  <van-submit-bar :price="300" button-text="提交订单" @submit="submit" />
  </div>
</div>
</template>

<script>
import { Toast } from 'vant';
import UserAgreement from '../components/UserAgreement.vue'
export default {
  components: {
    UserAgreement,
  },
  data() {
    return {
      userName: '',
      userPhone: '',
      serveFlag: false,
      dormitoryFlag: false,
      dateFlag: false,
      serveValue: '请选择',
      dormitoryValue: '请选择',
      dateValue: '请选择',
      currentTime: '12:00',
      expressCode: '',
      protocolFlag:false,
      columns: [
        {
          text: '文德楼',
          children: [{text:'圆通'},{text:'顺丰'},{text:'中通'},{text:'京东'},{text:'韵达'}],
        },
        {
          text: '百世快递(西苑)',
          children: [{text:'圆通'},{text:'顺丰'},{text:'中通'},{text:'京东'},{text:'韵达'}],
        },
        {
          text: '滨江楼',
          children: [{text:'顺丰'},{text:'中通'},{text:'京东'},{text:'韵达'}],
        },
        {
          text: '百世快递(人才公寓)',
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

      fileList: [
      ],
      data: {},
    };
  },

  methods: {
    servePopup() {
      this.serveFlag = true;
    },
    dormitoryPopup() {
      this.dormitoryFlag = true;
    },
    datePopup() {
      this.dateFlag = true;
    },
    serveConfirm(value, index) {
      this.serveValue = (value).join(",");
      this.serveFlag = !this.serveFlag;
    },
    dormitoryConfirm(value, index) {
      this.dormitoryValue = (value).join(",");
      this.dormitoryFlag = !this.dormitoryFlag;
    },
    dateConfirm(value, index) {
      this.currentTime = value
      this.dateValue = value
      this.dateFlag = !this.dateFlag;
    },
    onCancel() {
      Toast('Cancel');
    },
    afterRead(file) {
      console.log("upload success");
    },
    submit() {
      this.data.studentId = localStorage.getItem("studentId");
      this.data.targetName = this.userName;
      this.data.phone = this.userPhone;
      this.data.expressCode = this.expressCode;
      this.data.address = this.dormitoryValue;
      this.data.company = this.serveValue;
      this.data.arriveDate = this.currentTime;
      this.data.price = '0.01',
      this.data.orderDate =  new Date().toLocaleString();
      if (!this.dataCheck(this.data)) {
        Toast('请填写完整的数据');
        return
      }
      if(!this.protocolFlag) {
        Toast('请先同意配送协议');
        return
      }
      this.$emit('submit',this.data)
    },

    filter(type, options) {
      if (type === 'minute') {
        return options.filter((option) => option % 5 === 0);
      }
      return options;
    },

    dataCheck(json) {
      for (var key in json) {
        if(json[key] == '' || json[key] == "请选择") {
          return false
        }
      }
      return true
    },
    onClickLeft() {
      this.$router.push('/') 
      this.$router.push({name:''}) 
      this.$router.push({path:'/'})
    },
    protocolCheck() {
      this.protocolFlag = !this.protocolFlag
    }
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

.bottom-button {
    width: 160px;
    height: 40px;
  }

.body {
  margin-top: 60px;
}
</style>
