<template>
  <div class="projects-section-header">
    <LogoText />
    
  </div>
</template>

<script>
import LogoText from '../components/LogoText.vue'
export default {
  data(){
    return{
      updateTime:""
    }
  },
  components: {
    LogoText,
  },
  methods:{
  //获取当前年月日
    addDate(){
      const nowDate = new Date();
            const date = {
                year: nowDate.getFullYear(),
                month: nowDate.getMonth() + 1,
                date: nowDate.getDate(),
            }
            const newmonth = date.month>=10?date.month:'0'+date.month
            const day = date.date>10?date.date:'0'+date.date
            this.updateTime = date.year + '.' + newmonth + '.' + day
            console.log(this.updateTime)
    
    },
  },
  mounted() {
    this.addDate()
  }
}
</script>
<style scoped>
@import '../assets/css/style.css';
</style>