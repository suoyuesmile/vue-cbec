<template>
  <div>
    <div class="wuliu">
      <el-row :gutter="20">
        <el-col :span="16">
          <el-card class="wuliu-progress" shadow="never">
            <div class="card-header" slot="header">当前订单</div>
            <div class="content">
              <el-table :data="tableData4" style="width: 100%" max-height="580">
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
                      移除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="my-wuliu" shadow="never">
            <div class="card-header" slot="header">订单统计</div>
            <div class="content">暂无
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">
                      点击添加
              </el-button>
            </div>
          </el-card>
          <el-card class="other-wuliu" shadow="never">
            <div class="card-header" slot="header">历史订单</div>
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
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
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
