<template>
  <div>
    <suo-header :showLogin="false"></suo-header>
    <el-container>
      <suo-aside></suo-aside>
      <el-main>
        <!-- <transition name="fade"> -->
          <router-view></router-view>
        <!-- </transition> -->
      </el-main>
      <min-footer></min-footer>
    </el-container>
  </div>
</template>

<script>
import suoHeader from '../../components/layout/header'
import suoAside from '../../components/layout/aside'
import minFooter from '../../components/layout/minFooter'
export default {
  mounted() {
    this.$router.push('/center')
  },
  data() {
    return {}
  },
  methods: {
  },
  components: {
    suoHeader,
    suoAside,
    minFooter
  }
}
</script>

<style lang="stylus">
.el-container
  // width 100%
  .el-aside
    // background-color #545c64
    // color #333
    // text-align center
    // line-height 600px
  .el-main
    background-color #E9EEF3
    color #333
    // text-align center
    // line-height 700px
    // .fade-enter-active
    //   transition .5s all leaner
    // .fade-enter
    //   opacity 0
    // .fade-enter-to
    //   opacity 1
</style>
