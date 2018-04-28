<template>
  <div>
    <div class="jiaoshui">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card class="huowuqingdan" shadow="never">
            <div slot="header" class="card-header">企业信用</div>
            <div class="content">
              <el-form>
                <el-form-item label="货物清单">
                  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
                    <el-button size="small" type="primary" plain @click="uploadTip">点击上传</el-button>
                  </el-upload>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="wupingqingdan" shadow="never">
            <div slot="header" class="card-header">缴税记录</div>
            <div class="content">
              <el-form>
                <el-form-item label="物品清单">
                  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
                    <el-button size="small" type="primary" plain @click="uploadTip">点击上传</el-button>
                  </el-upload>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="jingchukou" shadow="never">
            <div slot="header" class="card-header">银行卡包</div>
            <div class="content">
              <el-form>
                <el-form-item label="进出口报关单">
                  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
                    <el-button size="small" type="primary" plain @click="uploadTip">点击上传</el-button>
                  </el-upload>
                </el-form-item>
              </el-form>
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
              <div class="zhifu-info">
                <h3 class="title">支付信息</h3>
                <ul class="list">
                  <li class="item"><label class="label">支付方式:</label><span class="text">支付宝</span></li>
                  <li class="item"><label class="label">支付账号:</label><span class="text">21321432423</span></li>
                  <li class="item"><label class="label">支付状态:</label><span class="text">自动缴费</span></li>
                </ul>
              </div>
              <div class="wuliu-info">
                <h3 class="title">物流信息</h3>
                <ul class="list">
                  <li class="item"><label class="label">物流方式:</label><span class="text">陆运</span></li>
                  <li class="item"><label class="label">物流公司:</label><span class="text">顺丰快递</span></li>
                  <li class="item"><label class="label">物流编号:</label><span class="text">DFS3234234</span></li>
                  <li class="item"><label class="label">当前位置:</label><span class="text">广州海关</span></li>
                </ul>
              </div>
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

