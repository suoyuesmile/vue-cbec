<template>
  <div>
    <div class="jiaoshui">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card class="huowuqingdan" shadow="never">
            <div slot="header" class="card-header">企业信用</div>
            <div class="content">

            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="wupingqingdan" shadow="never">
            <div slot="header" class="card-header">缴税记录</div>
            <div class="content">

            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="jingchukou" shadow="never">
            <div slot="header" class="card-header">银行卡包</div>
            <div class="content">

            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="16">
          <el-card class="baodan" shadow="never">
            <div slot="header" class="card-header">税务清单</div>
            <div class="content"></div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="wuliu" shadow="never">
            <div slot="header" class="card-header">第三方支付</div>
            <div class="content">
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
      fileList2: []
    }
  },
  methods: {
    handlePreview() {

    },
    handleRemove() {

    }
  }
}
</script>

<style lang="stylus">
.jiaoshui
  position relative
  height 700px
  width 100%
  .huowuqingdan, .wuliu, .baodan, .wupingqingdan, .jingchukou
    height 250px
    border-radius 0px
    .el-card__header
      .card-header
        line-height 14px
        font-size 14px
        height 10px
  .baodan, .wuliu
    margin-top 20px
    height 390px
  .wuliu
    .el-card__body
      .content
        font-size 14px
        color #606266
        .zhifu-info, .wuliu-info
          margin-top 12px
          .title
            line-height 30px
            font-weight 400
            height 30px
            border-bottom 1px solid #eee
          .list
            padding-left 24px
            .item
              line-height 30px
              .label
                display inline-block
                padding-right 8px
                text-align right
              .text
                color #000
                font-weight 300

</style>

