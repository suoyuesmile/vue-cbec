<template>
  <div>
    <div class="wuliu">
      <el-row :gutter="20">
        <el-col :span="16">
          <el-card class="wuliu-progress" shadow="never">
            <div class="card-header" slot="header" >物流进度</div>
            <div class="content">
                <el-steps direction="vertical" :active="3">
                  <el-step title="阿里巴巴"></el-step>
                  <el-step title="广州"></el-step>
                  <el-step title="广州海关" description="通关审核中"></el-step>
                  <el-step title="武汉" description="终点"></el-step>
                </el-steps>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="my-wuliu" shadow="never">
            <div class="card-header" slot="header" >我的物流</div>
          </el-card>
          <el-card class="other-wuliu" shadow="never">
            <div class="card-header" slot="header" >第三方物流</div>
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
        margin-left 100px
        height 560px
  .my-wuliu,
    .el-card__body
      height 260px
  .other-wuliu
     margin-top 20px
    .el-card__body
      height 300px

</style>
