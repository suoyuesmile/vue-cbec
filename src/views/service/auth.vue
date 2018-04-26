<template>
  <div>
    <div class="auth-wrapper">
      <div class="qiye-auth">
        <div class="title">企业认证
          <span class="status">{{auth_data.qiye_auth.status}}</span>
        </div>
        <div class="content">
          <div class="account">
            <label class="label" for="">账号：</label>
            <span class="text">
              {{auth_data.qiye_auth.account}}
            </span>
          </div>
          <div class="qiye">
            <label class="label" for="">企业：</label>
            <span class="text">
              {{auth_data.qiye_auth.name}}
            </span>
          </div>
        </div>
      </div>
      <div class="baoguan-auth">
        <div class="title">报关认证
          <span class="status">{{auth_data.baoguan_auth.status}}</span>
        </div>
        <div class="content">
          <el-form label-width="120px" :model="formData">
            <el-row>
              <el-col :span="8" :offset="1">
                <el-form-item label="机构代码：" prop="">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="税务登记号：" prop="">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="银行账号：" prop="">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="工商营业执照：" prop="">
                  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
                    <el-button size="small" type="primary" plain @click="uploadTip">点击上传</el-button>
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                  </el-upload>
                </el-form-item>
                <el-form-item label="ICP截图：" prop="">
                  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
                    <el-button size="small" type="primary" plain @click="uploadTip">点击上传</el-button>
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                  </el-upload>
                </el-form-item>
              </el-col>
              <el-col :span="8" :offset="2">
                <el-form-item label="法人姓名：" prop="">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="法人身份证：" prop="">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="身份证拍照：" prop="">
                  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
                    <el-button size="small" type="primary" plain @click="uploadTip">点击上传</el-button>
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                  </el-upload>
                </el-form-item>
                <el-form-item label="海关备案表：" prop="">
                  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
                    <el-button size="small" type="primary" plain @click="uploadTip">点击上传</el-button>
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                  </el-upload>
                </el-form-item>
                <el-form-item label="质检承诺书：" prop="">
                  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
                    <el-button size="small" type="primary" plain @click="uploadTip">点击上传</el-button>
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                  </el-upload>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="40">
              <el-col :span="8" :offset="3">
                <el-button class="auth-submit" @click="authSubmit">提交认证</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this._getAuthData()
  },
  data() {
    return {
      auth_data: {
        qiye_auth: {
          account: '',
          name: '',
          status: ''
        },
        baoguan_auth: {
          status: ''
        }
      },
      formData: {},
      fileList2: []
    }
  },
  methods: {
    _getAuthData() {
      this.$http.get('/api/service_auth').then(response => {
        this.auth_data = response.body
      })
    },
    uploadTip() {
      this.$notify.info({
        title: '系统提示',
        message: '只能上传jpg/png文件，且不超过500kb',
        offset: 100
      })
    },
    authSubmit() {
      this.$message({
        message: '提交成功',
        type: 'success'
      })
    },
    handlePreview() {

    },
    handleRemove() {

    },
  }
}
</script>

<style lang="stylus">
.auth-wrapper
  position relative
  height 100%
  width 100%
  margin-bottom 120px
  .qiye-auth, .baoguan-auth
    .title
      height 36px
      line-height 16px
      font-size 16px
      font-weight 400
      .status
        font-size 12px
        font-weight 400
        color #E6A23C
  .qiye-auth
    .content
      height 128px
      margin-left 3%
      font-size 14px
      color #606266
      .account, .qiye
        line-height 40px
        .label
          display inline-block
          text-align right
          width 120px
        .text
          color #000
          font-weight 400
</style>
