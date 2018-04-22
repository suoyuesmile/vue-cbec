<template>
  <div>
    <div class="register">
      <suo-header :showLogin="false"> </suo-header>
      <div class="wrapper">
        <div class="register-step">
          <el-steps :active="active" finish-status="success">
            <el-step title="创建账户"></el-step>
            <el-step title="填写企业信息"></el-step>
            <el-step title="完成注册"></el-step>
          </el-steps>
        </div>
        <div class="register-content">
          <el-form>
            <el-form-item>
              <el-input tpye="text" placeholder="请输入手机号码"></el-input>
              <el-input type="password" placeholder="请输入密码"></el-input>
              <el-input type="password" placeholder="再次确认密码"></el-input>
            </el-form-item>
          </el-form>
          <el-button @click="next">下一步</el-button>
        </div>
      </div>

    </div>
    <img src="../../assets/images/login.jpg" alt="">
  </div>
</template>
<script>
import suoHeader from '@/components/layout/header'
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    next() {
      if (this.active++ > 2) {
        this.active = 0
      }
    }
  },
  components: {
    suoHeader
  }
}
</script>

<style lang="stylus">
.register
  position absolute
  width 100%
  height 100%
  background rgba(22,22,22,0.9)
  .wrapper
    margin 0 auto
    padding 48px 24px
    width 50%
    height 500px
    // background rgba(233,233,233,1)
img
  position absolute
  z-index -1
  top 0px
  left 0px
  width 100%
  height 100%
</style>
