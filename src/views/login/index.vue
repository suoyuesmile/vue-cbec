<template>
  <div>
    <div class="login">
      <suo-header :showLogin="false"></suo-header>
      <div class="wrapper">
        <div class="login-container">
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
  backdrop-filter blur(10px)
  background rgba(22,22,22,0.6)
  .wrapper
    position relative
    .login-container
      position absolute
      top 240px
      right 240px
      height 300px
      width 400px
      background rgba(222,222,222,0.8)


img
  position absolute
  z-index -1
  top 0px
  left 0px
  width 100%
  height 100%
</style>
