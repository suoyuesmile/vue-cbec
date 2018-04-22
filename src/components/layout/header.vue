<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="logo-content">
        <router-link to="/">
          <div class="logo-img">
            <i class="iconfont icon-haiguan1"></i>
          </div>
          <span class="logo-text">跨境电商海关综合服务平台</span>
        </router-link>
      </div>
      <div class="login-content" v-show="showLogin">
        <div class="login-link">
          <router-link to="/login">登陆</router-link>
        </div>
        <div class="register-link">
          <router-link to="/register">注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showLogin: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus">
.header
  position relative
  height 48px
  width 100%
  background #545c64
  border-bottom 1px solid rgb(85, 90, 93)
  color rgba(255, 255, 255, 0.8)
  font-size 0
  .logo-content
    float left
    height 48px
    width 300px
    .logo-img
      display inline-block
      text-align center
      height 48px
      width 48px
      .iconfont
        &.icon-haiguan1
          line-height 48px
          font-size 20px
          color rgba(255, 255, 255, 0.8)
    .logo-text
      display inline-block
      vertical-align top
      line-height 48px
      font-size 14px
      color rgba(255, 255, 255, 0.8)
  .login-content
    display block
    float right
    height 48px
    .login-link, .register-link
      display inline-block
      font-size 14px
      font-weight 200
      line-height 24px
      padding 12px
      color rgba(255, 255, 255, 0.8)
    .login-link, .register-link
      a
        text-decoration none
        color rgba(255, 255, 255, 0.8)
        &:hover
          color #ffd04b
    .register-link
      margin-right 24px
</style>

