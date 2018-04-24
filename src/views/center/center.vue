<template>
  <div>
    <div class="center">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="never" class="auth-card">
            <div slot="header" class="auth-header clearfix">
              <span>企业信息</span>
            </div>
            <div class="auth-content">
              <div ref="authchart" :style="{width: '250px', height: '250px'}"></div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="never" class="todo-card">
            <div slot="header" class="auth-header clearfix">
              <span>待办事项</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="never" class="todo-card">
            <div slot="header" class="auth-header clearfix">
              <span>消息提示</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="18">
          <el-card shadow="never" class="active-card">
            <div slot="header" class="auth-header clearfix">
              <span>企业订单日活量</span>
            </div>
            <div class="active-content">
              <div ref="activechart" :style="{width: '900px', height: '250px'}"></div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="never" class="active-card">
            <div slot="header" class="auth-header clearfix">
              <span>提出建议</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this._drawCreditGraph()
    this._drawActiveChard()
  },
  data() {
    return {}
  },
  methods: {
    _drawCreditGraph() {
      let authChart = this.$echarts.init(this.$refs.authchart)
      let option = {
        tooltip: {},
        legend: {
          // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              fontSize: '12px',
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '信用', max: 6500 },
            { name: '订单', max: 16000 },
            { name: '缴税', max: 30000 },
            { name: '物流', max: 38000 },
            { name: '支付', max: 52000 },
            { name: '反馈', max: 25000 }
          ]
        },
        series: [
          {
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000]
              }
            ]
          }
        ]
      }
      authChart.setOption(option)
    },
    _drawActiveChard() {
      let echarts = this.$echarts
      let activeChart = echarts.init(this.$refs.activechart)
      function getVirtulData(year) {
        year = year || '2017'
        var date = +echarts.number.parseDate(year + '-01-01')
        var end = +echarts.number.parseDate(+year + 1 + '-01-01')
        var dayTime = 3600 * 24 * 1000
        var data = []
        for (var time = date; time < end; time += dayTime) {
          data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
          ])
        }
        return data
      }

      let option = {
        tooltip: {},
        visualMap: {
          min: 0,
          max: 10000,
          type: 'piecewise',
          orient: 'horizontal',
          left: 'center',
          top: 188,
          textStyle: {
            color: '#000'
          }
        },
        calendar: {
          top: 40,
          left: 30,
          right: 30,
          cellSize: ['auto', 20],
          range: '2016',
          itemStyle: {
            normal: { borderWidth: 0.5 }
          },
          yearLabel: { show: true }
        },
        series: {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: getVirtulData(2016)
        }
      }
      activeChart.setOption(option)
    }
  }
}
</script>

<style lang="stylus">
.center
  position relative
  width 100%
  height 100%
  background #E9EEF3
  .auth-card
    height 340px
    // width 700px
    border-radius 0px
    .el-card__header
      .auth-header
        text-align left
        font-size 14px
        line-height 14px
        height 10px
  .todo-card
    height 340px
    // width 300px
    border-radius 0px
    .el-card__header
      .auth-header
        text-align left
        font-size 14px
        line-height 14px
        height 10px
  .active-card
    margin-top 20px
    height 300px
    // width 300px
    border-radius 0px
    .el-card__header
      .auth-header
        text-align left
        font-size 14px
        line-height 14px
        height 10px
</style>

