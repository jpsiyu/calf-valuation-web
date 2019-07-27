<template>
  <div class="id">
    <el-row>
      <h2 class="id-title">成长性分析</h2>
      <p class="id-standard">选取标准：净资产、净利润稳定增长，成长趋势可预测</p>
    </el-row>
    <div class="id-chart" ref="chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      symbol: '',
      name: '',
      list: []
    }
  },

  mounted() {
    this.reqFinance()
      .then(_ => {
        this.renderChart()
      })
  },
  methods: {
    reqFinance() {
      return this.$axios.get('/api/indicator?symbol=SZ000423')
        .then(res => {
          const serverMsg = res.data
          const serverData = serverMsg.data
          this.symbol = serverData.symbol
          this.name = serverData.quote_name
          this.list = serverData.list
        })
    },
    renderChart() {
      const years = []
      const netEquity = []
      const profits = []
      this.list.forEach(e => {
        netEquity.unshift(e["np_per_share"])
        profits.unshift(e["undistri_profit_ps"])
        years.unshift(e["report_name"])
      })

      const chart = echarts.init(this.$refs.chart)
      chart.setOption({
        title: {
          text: `${this.name}成长性分析`,
          left: 'center',
        },
        legend: {
          data: ['每股净资产', '每股未分配利润'],
          right: 10,
        },
        tooltip: {},
        xAxis: {
          data: years
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}元'
          }
        },
        series: [
          {
            name: '每股净资产',
            type: 'bar',
            data: netEquity,
            itemStyle: {
              color: '#409EFF'
            }
          },
          {
            name: '每股未分配利润',
            type: 'bar',
            data: profits,
            itemStyle: {
              color: '#F56C6C'
            }
          }
        ]
      })
    },
  }
}
</script>


<style scoped>
.id-chart {
  height: 400px;
}

.id-title {
  margin: 20px 0;
}

.id-standard {
  margin: 10px 0;
  color: #606266;
}
</style>
