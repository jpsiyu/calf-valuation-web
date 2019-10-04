<template>
  <div class="bl">
    <el-row>
      <h2 class="bl-title">权益与负债</h2>
      <p class="bl-standard">选取标准：1.债务权益比 < 0.5; 2.流动比率 > 1.5</p>
    </el-row>
    <div class="bl-tableWrap">
      <el-table :data="list" border>
        <el-table-column prop="report_name" label="日期" />
        <el-table-column prop="total_current_liab" label="流动负债合计" />
        <el-table-column prop="total_current_assets" label="流动资产合计" />
        <el-table-column prop="total_assets" label="资产合计" />
        <el-table-column prop="total_liab" label="负债合计" />
        <el-table-column prop="total_quity_atsopc" label="股东权益合计" />
        <el-table-column label="债务权益比">
          <template slot-scope="scope">
            {{(scope.row.total_liab / scope.row.total_quity_atsopc).toFixed(2)}}
          </template>
        </el-table-column>
        <el-table-column label="流动比率">
          <template slot-scope="scope">
            {{(scope.row.total_current_assets / scope.row.total_current_liab).toFixed(2)}}
          </template>
        </el-table-column>
      </el-table>
      <p class="bl-tableWrap__unit">单位：元</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["symbol"],
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.analyze()
  },
  watch: {
    symbol() {
      this.analyze()
    }
  },
  methods: {
    analyze() {
      this.reqFiniance()
    },
    reqFiniance() {
      this.$axios.get(`/va/balance?symbol=${this.symbol}`)
        .then(res => {
          const serverMsg = res.data
          const serverData = serverMsg.data
          this.list = serverData.list
        })
    }
  }
}
</script>

<style scoped>
.bl-title {
  margin: 20px 0;
}

.bl-standard {
  margin: 10px 0;
  color: #606266;
}

.bl-tableWrap {
  position: relative;
}

.bl-tableWrap__unit {
  position: absolute;
  right: 0;
  top: -25px;
  color: #606266;
  padding: 0 10px;
}
</style>


