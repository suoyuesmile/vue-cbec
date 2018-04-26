<template>
  <div>
    <div class="center">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="never" class="auth-card">
            <div slot="header" class="card-header">
              <span>
                <i class="iconfont icon-qikongzhongxin"></i>企业信息
              </span>
            </div>
            <div class="auth-content">
              <div class="info">
                <div class="awatar"></div>
                <div class="info-content">
                  <h2 class="name">{{data.auth.name}}</h2>
                  <div class="degree">认证等级：{{data.auth.degree}}级</div>
                  <p class="desc">{{data.auth.desc}}</p>
                  <p class="register_time">注册时间：{{data.auth.register_time}}</p>
                </div>
              </div>
              <div class="chart-content">
                <div ref="authchart" class="authchart" :style="{width: '250px', height: '250px'}"></div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="never" class="todo-card">
            <div slot="header" class="card-header">
              <span>
                <i class="iconfont icon-selected"></i>待办事项
              </span>
            </div>
            <div class="card-content">
              <ul>
                <li class="card-item" v-for="(item, index) in data.todo" :key="index">{{item.content}}</li>
              </ul>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="never" class="notify-card">
            <div slot="header" class="card-header">
              <span>
                <i class="iconfont icon-remind"></i>消息提示
              </span>
            </div>
            <div class="card-content">
              <ul>
                <li class="card-item" v-for="(item, index) in data.notify" :key="index" @click="showNotify(item.title, item.content)">{{item.title}}</li>
              </ul>
            </div>
            <el-dialog :title="notify.title" :visible.sync="notifyDialogVisible" width="30%" center>
              <span>{{notify.content}}</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="notifyDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="notifyDialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="18">
          <el-card shadow="never" class="active-card">
            <div slot="header" class="card-header">
              <span>
                <i class="iconfont icon-baobiaofenxi"></i>企业订单日活量
              </span>
            </div>
            <div class="active-content">
              <div ref="activechart" :style="{width: '900px', height: '250px'}"></div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="never" class="jianyi-card">
            <div slot="header" class="card-header">
              <span>
                <i class="iconfont icon-edit"></i>提出建议
              </span>
            </div>
            <div class="card-content">
              <el-form>
                <el-form-item>
                  <el-input type="text" placeholder="标题"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input type="textarea" rows="4" placeholder="内容"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button>提交</el-button>
                </el-form-item>
              </el-form>
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
    this._getCenterData()
    this._drawCreditGraph()
    this._drawActiveChard()
  },
  data() {
    return {
      data: {
        auth: {
          name: '',
          degree: '',
          desc: '',
          register_time: ''
        }
      },
      notify: {
        title: '',
        content: ''
      },
      notifyDialogVisible: false
    }
  },
  methods: {
    _getCenterData() {
      this.$http.get('/api/center').then(response => {
        const data = response
        this.data = data.body
      })
    },
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
    },
    showNotify(title, content) {
      this.notifyDialogVisible = true
      this.notify.title = title
      this.notify.content = content
    }
  }
}
</script>

<style lang="stylus">
.iconfont
  padding-right 4px
  color #888
.center
  position relative
  width 100%
  // height 100%
  background #E9EEF3
  // 卡片头部
  .auth-card, .todo-card, .notify-card, .active-card, .jianyi-card
    height 340px
    border-radius 0px
    .el-card__header
      .card-header
        text-align left
        font-size 14px
        line-height 14px
        height 10px
  .active-card, .jianyi-card
    margin-top 20px
    height 300px
  // 卡片内容
  .auth-card
    .el-card__body
      .auth-content
        .info
          float left
          position relative
          height 250px
          color #333
          .awatar
            height 128px
            width 128px
            border-radius 6%
            background #999
          .info-content
            text-align center
            flex 1
            margin-top 6px
            height 120px
            .name
              line-height 36px
              font-size 18px
            .degree
              // display inline-block
              line-height 20px
              font-size 14px
            .desc, .register_time
              color #666
              line-height 20px
              font-size 12px
        .chart-content
          float right
  .todo-card, .notify-card
    .el-card__body
      .card-content
        .card-item
          text-align left
          line-height 36px
          height 36px
          font-size 14px
          color #75838C
          border-bottom 1px solid #eee
          &:hover
            color #3986C4
</style>

