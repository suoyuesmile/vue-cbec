<template>
  <div>
    <div class="wuliu">
      <el-row :gutter="20">
        <el-col :span="16">
          <el-card class="wuliu-progress" shadow="never">
            <div class="card-header" slot="header">物流进度</div>
            <div class="content">
              <el-steps :active="3">
                <el-step title="阿里巴巴"></el-step>
                <el-step title="广州"></el-step>
                <el-step title="广州海关" description="通关审核中"></el-step>
                <el-step title="武汉" description="终点"></el-step>
              </el-steps>
              <el-table :data="tableData4" style="width: 100%" max-height="480">
                <el-table-column fixed prop="date" label="日期" width="150">
                </el-table-column>
                <el-table-column prop="name" label="订单" width="120">
                </el-table-column>
                <el-table-column prop="province" label="省份" width="120">
                </el-table-column>
                <el-table-column prop="city" label="市区" width="120">
                </el-table-column>
                <el-table-column prop="address" label="具体地址" width="300">
                </el-table-column>
                <el-table-column prop="zip" label="物流编号" width="120">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="120">
                  <template slot-scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">
                      查看
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="my-wuliu" shadow="never">
            <div class="card-header" slot="header">我的物流</div>
            <div class="content">暂无物流
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">
                      点击添加
              </el-button>
            </div>
          </el-card>
          <el-card class="other-wuliu" shadow="never">
            <div class="card-header" slot="header">第三方物流</div>
            <div class="content">
              <ul>
                <li class="card-item" v-for="(item, index) in wuliu" :key="index">{{item.content}}</li>
              </ul>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wuliu: [
        {content: '顺丰SF'},
        {content: '韵达快递'},
        {content: '圆通快递'},
        {content: '京东快递'},
        {content: '中通快递'}
      ],
      tableData4: [{
          date: '2018-05-03',
          name: '邵锁',
          province: '湖北',
          city: '武汉',
          address: '武汉纺织大学',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: 'ss',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2018-05-04',
          name: '张三',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2018-05-01',
          name: '王五',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2018-05-08',
          name: '李四',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2018-05-06',
          name: '中华',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2018-05-07',
          name: 'ok',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
    }
  }
}
</script>

.<style lang="stylus">
.wuliu
  height 700px
  .wuliu-progress, .my-wuliu, .other-wuliu
    border-radius 0px
    .el-card__header
      line-height 14px
      font-size 14px
  .wuliu-progress
    .el-card__body
      height 580px
      .el-steps
        margin-top 40px
  .my-wuliu, .el-card__body
    height 260px
  .other-wuliu
    margin-top 20px
  .el-card__body
    height 300px
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
