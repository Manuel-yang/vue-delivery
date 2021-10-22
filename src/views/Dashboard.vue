<template>
  <div class="app-container">
      <div class="app-header">
        <SearchBlock />
        <UserBlock />
      </div>

      <div class="app-content">
        <Sidebar />
        <div class="projects-section">
          <SectionHeader />
          <SectionLine :data="data" />
          <BoxBlock :data="data"/>
        </div>
        <MessageBox />
      </div>
  </div>
</template>
<script>
import MessageBox from '../components/MessageBox.vue'
import BoxBlock from '../components/BoxBlock.vue'
import Sidebar from '../components/Sidebar.vue'
import SectionLine from '../components/SectionLine.vue'
import SectionHeader from '../components/SectionHeader.vue'
import UserBlock from '../components/UserBlock.vue'
import SearchBlock from '../components/SearchBlock.vue'
import axios from 'axios'

const requests = axios.create({ baseURL: 'http://localhost:3000'})

export default {
  data() {
    return {
      data:[],
      statusValue:[]
    }
  },
  components: {
    MessageBox,
    BoxBlock,
    Sidebar,
    SectionLine,
    SectionHeader,
    UserBlock,
    SearchBlock,
  },
  mounted() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      requests.get('/order/findByUserId').then( res => {
        console.log(res.data.data)
        this.data =res.data.data;
        this.statusData();
      })
    },

    statusData() {
      for(let i = 0; i < this.data.length; i++)
      {
        if (this.data[i].status == "prepared") this.statusValue.prepared++;
        if (this.data[i].status == "delivering") this.statusValue.delivering++;
        if (this.data[i].status == "accomplish") this.statusValue.accomplish++;
      }
      console.log(this.statusValue)
    }
  },
}
</script>

<style scoped>
@import '../assets/css/style.css'
</style>
