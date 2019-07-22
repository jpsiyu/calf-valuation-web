<template>
  <div class="balance">
    <el-table :data="list" border>
      <el-table-column prop="report_name" label="日期" />
      <el-table-column prop="total_assets" label="资产合计" />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      symbol: '',
      name: '',
      list: []
    }
  },
  mounted() {
    this.$axios.get("/api/balance?symbol=SH601318")
      .then(res => {
        const serverMsg = res.data
        const serverData = serverMsg.data
        this.symbol = serverData.symbol
        this.name = serverData.quote_name
        this.list = serverData.list
      })
  },
}
</script>


