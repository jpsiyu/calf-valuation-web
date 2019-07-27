<template>
  <div class="dcf">
    <el-row>
      <h2 class="dcf-title">自由现金流分析</h2>
      <p class="dcf-standard">选取标准：稳定，可预测的自由现金流量</p>
    </el-row>
    <el-table :data="list" border="">
      <el-table-column prop="report_name" label="日期" />
      <el-table-column prop="ncf_from_oa" label="经营活动现金流净额"/>
      <el-table-column prop="cash_paid_for_assets" label="购买固定，长期资产现金流出"/>
      <el-table-column label="自由现金流">
        <template slot-scope="scope">
          {{fcf[scope.$index]}}
        </template>
      </el-table-column>
    </el-table>
    <div class="dcf-chart" ref="chart" />
    <div v-if="dcfModel" class="dcf-model">
      <h4>模型因子</h4>
      <el-row type="flex" >
        <el-col :span="5">
          <span>Beta</span>
          <span>{{dcfModel.Factor.Beta}}</span>
        </el-col>
        <el-col :span="5">
          <span>资金成本</span>
          <span>{{dcfModel.Factor.CostOfEquity}}</span>
        </el-col>
        <el-col :span="5">
          <span>债务成本</span>
          <span>{{dcfModel.Factor.CostOfDebtAfterTax}}</span>
        </el-col>
        <el-col :span="5">
          <span>WACC</span>
          <span>{{dcfModel.Factor.WACC.toFixed(2)}}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5">
          <span>长期增长率</span>
          <span>{{dcfModel.Factor.LongTermGrowthRate}}</span>
        </el-col>
        <el-col :span="5">
          <span>总股本</span>
          <span>{{dcfModel.Factor.SharesOutstanding}}</span>
        </el-col>
        <el-col :span="5" class="dcf-target">
          <span>每股内含价值</span>
          <span>{{dcfModel.Cashflow.IntrinsicPerShare.toFixed(2)}}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: ["symbol"],
  data() {
    return {
      list: [],
      fcf: [],
      fcfPredict: [],
      dcfModel: null,
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
      this.reqFinance()
        .then(_ => {
          this.fcf = this.list.map(e => {
            const diff = e['ncf_from_oa'] - e['cash_paid_for_assets']
            return diff.toFixed(2)
          })
        })
        .then(() => {
          return this.reqRunDcf()
        })
        .then(() => {
          this.renderChart()
        })
    },
    reqFinance() {
      return this.$axios.get(`/api/cashflow?symbol=${this.symbol}`)
        .then(res => {
          const serverMsg = res.data
          const serverData = serverMsg.data
          this.list = serverData.list
        })
    },
    reqRunDcf() {
      return this.$axios.get(`/api/rundcf?symbol=${this.symbol}`)
        .then(res => {
          const serverMsg = res.data
          const serverData = serverMsg.data
          this.dcfModel = serverData
        })
    },
    calFcfAndPredict() {
      this.fcf = this.list.map(e => {
        const diff = e['ncf_from_oa'] - e['cash_paid_for_assets']
        return diff.toFixed(2)
      })
    },
    renderChart() {
      const passYears = []
      const passValues = []
      this.list.map(e => {
        passYears.unshift(e["report_name"])
        passValues.unshift(e['ncf_from_oa'] - e['cash_paid_for_assets'])
      })

      const futureYears = []
      const futureValues = []
      this.dcfModel.Cashflow.FutureValues.forEach(e => {
        futureYears.push(e.Year + '预测')
        futureValues.push(e.Value.toFixed(2))
      })
      const years = passYears.concat(futureYears)
      const values = passValues.concat(futureValues)

      const chart = echarts.init(this.$refs.chart)
      chart.setOption({
        title: {
          text: '自由现金流预测',
          left: 'center',
        },
        xAxis: {
          data: years,
          axisLabel: {
            rotate: 60,
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}元'
          }
        },
        tooltip: {},
        legend: {
          data: ['自由现金流'],
          right: 10,
        },
        series: [
          {
            name: '自由现金流',
            type: 'line',
            data: values,
            itemStyle: {
              color: '#409EFF'
            }
          },
        ]
      })
    },
  }
}
</script>

<style scoped>
.dcf-title {
  margin: 20px 0;
}

.dcf-standard {
  margin: 10px 0;
  color: #606266;
}

.dcf-chart {
  height: 400px;
  margin: 30px 0;
}

.dcf-model{
  margin: 30px 0;
  padding: 20px 0;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
}

.dcf-model h4 {
  text-align: center;
  margin: 20px 0;
}

.dcf-model .el-col {
  display: flex;
  justify-content: space-between;
  border: 1px #dcdfe6 solid;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 10px;
}

.el-col span:first-child {
  color: #606266;
}

.el-col span:last-child {
  color: #303133;
}

.dcf-target {
  background-color: #67c23a;
}

.dcf-target span {
  color: white !important;
}
</style>
