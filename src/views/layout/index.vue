<template>
  <div>
    <suo-header :showLogin="false"></suo-header>
    <el-container>
      <el-aside style="width:200px">
        <suo-aside></suo-aside>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
    <min-footer></min-footer>
  </div>
</template>

<script>
import suoHeader from '../../components/layout/header'
import suoAside from '../../components/layout/aside'
import minFooter from '../../components/layout/minFooter'
export default {
  data() {
    return {}
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
  width 100%
  .el-aside
    // background-color #545c64
    color #333
    text-align center
    line-height 700px
  .el-main
    background-color #E9EEF3
    color #333
    text-align center
    line-height 700px
</style>
