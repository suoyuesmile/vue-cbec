<template>
  <div>
    <div class="login">
      <suo-header :showLogin="false"></suo-header>
      <div class="wrapper">
        <div class="login-container">
          <div class="login-title">密码登录</div>
            <el-form>
              <el-form-item>
                <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
                <div class="forget">
                  忘记登录密码？
                  </div>
                <el-button @click="login">登陆</el-button>
              </el-form-item>
            </el-form>
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
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$http.get('/api/login').then((response) => {
        if (this.loginForm.username === 'suoyue') {
          if (this.loginForm.password === '123456') {
            this.$router.push('/index')
          }
        }
      })
    }
  },
  components: {
    suoHeader
  }
}
</script>

<style lang="stylus">
.login
  position absolute
  height 100%
  width 100%
  // backdrop-filter blur(10px)
  // background rgba(222,222,222,0.1)
  .wrapper
    position relative
    .login-container
      position absolute
      top 240px
      right 240px
      height 300px
      width 300px
      color #fff
      background rgba(22,22,22,0.6)
      .login-title
        padding 24px 48px
      .el-form
        padding 0px 48px
        .el-form-item
          .el-form-item__content
            position relative
            .el-input
              padding 6px 0
              .el-input__inner
                background #eee
                border-radius 0px
            .forget
              position absolute
              right 0px
              font-size 12px
            .el-button
              margin-top 48px
              width 100%
              border-color rgba(64,158,255,0.8)
              color #fff
              background rgba(64,158,255,0.8)
              &:hover
                background rgba(64,158,255,1)

img
  position absolute
  z-index -1
  top 0px
  left 0px
  width 100%
  height 100%
</style>
