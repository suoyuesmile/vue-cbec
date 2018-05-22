<template>
  <div>
    <div class="baoguan">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card class="huowuqingdan" shadow="never">
            <div slot="header" class="card-header">货物清单上传</div>
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
            <div slot="header" class="card-header">物品清单上传</div>
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
            <div slot="header" class="card-header">进出口报关单上传</div>
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
            <div slot="header" class="card-header">开始报单</div>
            <div class="content">
              <el-steps :active="1">
                <el-step title="报关认证" icon="el-icon-edit"></el-step>
                <el-step title="货单上传" icon="el-icon-upload"></el-step>
                <el-step title="物单上传" icon="el-icon-upload"></el-step>
                <el-step title="报单上传" icon="el-icon-upload"></el-step>
                <el-step title="支付物流确认" icon="el-icon-edit"></el-step>
              </el-steps>
              <el-table :data="tableData5" style="width: 100%" header="480">
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                      <el-form-item label="商品名称">
                        <span>{{ props.row.name }}</span>
                      </el-form-item>
                      <el-form-item label="所属店铺">
                        <span>{{ props.row.shop }}</span>
                      </el-form-item>
                      <el-form-item label="商品 ID">
                        <span>{{ props.row.id }}</span>
                      </el-form-item>
                      <el-form-item label="店铺 ID">
                        <span>{{ props.row.shopId }}</span>
                      </el-form-item>
                      <el-form-item label="商品分类">
                        <span>{{ props.row.category }}</span>
                      </el-form-item>
                      <el-form-item label="店铺地址">
                        <span>{{ props.row.address }}</span>
                      </el-form-item>
                      <el-form-item label="商品描述">
                        <span>{{ props.row.desc }}</span>
                      </el-form-item>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column label="商品 ID" prop="id">
                </el-table-column>
                <el-table-column label="商品名称" prop="name">
                </el-table-column>
                <el-table-column label="描述" prop="desc">
                </el-table-column>
              </el-table>
              <el-button class="baoguan-submit" type="primary" @click="baoguanSubmit">提交报关</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="wuliu" shadow="never">
            <div slot="header" class="card-header">支付与物流信息</div>
            <div class="content">
              <div class="zhifu-info">
                <h3 class="title">支付信息</h3>
                <ul class="list">
                  <li class="item">
                    <label class="label">支付方式:</label>
                    <span class="text">支付宝</span>
                  </li>
                  <li class="item">
                    <label class="label">支付账号:</label>
                    <span class="text">21321432423</span>
                  </li>
                  <li class="item">
                    <label class="label">支付状态:</label>
                    <span class="text">自动缴费</span>
                  </li>
                </ul>
              </div>
              <div class="wuliu-info">
                <h3 class="title">物流信息</h3>
                <ul class="list">
                  <li class="item">
                    <label class="label">物流方式:</label>
                    <span class="text">陆运</span>
                  </li>
                  <li class="item">
                    <label class="label">物流公司:</label>
                    <span class="text">顺丰快递</span>
                  </li>
                  <li class="item">
                    <label class="label">物流编号:</label>
                    <span class="text">DFS3234234</span>
                  </li>
                  <li class="item">
                    <label class="label">当前位置:</label>
                    <span class="text">广州海关</span>
                  </li>
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
      fileList2: [],
      tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
    }
  },
  methods: {
    handlePreview() {},
    handleRemove() {},
    baoguanSubmit() {
      this.$message({
          message: '恭喜你，报关成功',
          type: 'success'
        });
    }
  }
}
</script>

<style lang="stylus">
.baoguan
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
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .baoguan-submit
    margin 10px 40%
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

