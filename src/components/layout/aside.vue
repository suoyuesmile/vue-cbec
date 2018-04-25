<template>
  <div>
    <el-menu default-active="1" class="el-menu-vertical-demo" :unique-opened="true" :router="true" :collapse="isFold" @open="handleOpen" @close="handleClose" active-text-color="#ffd04b">
      <el-menu-item index="/center" >
        <i class="iconfont icon-caidan" @click.stop.prevent="toggleFold"></i>
        <span slot="title">控制中心</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-all"></i>
          <span>业务办理</span>
        </template>
        <el-menu-item index="/auth">企业认证</el-menu-item>
        <el-menu-item index="/declare">在线报关</el-menu-item>
        <el-menu-item index="/logistic">自助缴税</el-menu-item>
        <el-menu-item index="/scottare">物流追踪</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont icon-search"></i>
          <span>信息查询</span>
        </template>
        <el-menu-item index="2-1">企业查询</el-menu-item>
        <el-menu-item index="2-2">订单查询</el-menu-item>
        <el-menu-item index="2-3">海关查询</el-menu-item>
        <el-menu-item index="2-4">操作手册</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="iconfont icon-baobiaofenxi"></i>
          <span>海关统计</span>
        </template>
        <el-menu-item index="3-1">订单统计</el-menu-item>
        <el-menu-item index="3-2">出关统计</el-menu-item>
        <el-menu-item index="3-3">入关统计</el-menu-item>
        <el-menu-item index="3-4">仓库统计</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="iconfont icon-jianyi1"></i>
          <span>反馈建议</span>
        </template>
        <el-menu-item index="4-1">服务反馈</el-menu-item>
        <el-menu-item index="4-2">执法举报</el-menu-item>
        <el-menu-item index="4-3">系统改善</el-menu-item>
        <el-menu-item index="4-4">人工帮助</el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFold: false
    }
  },
  methods: {
    toggleFold() {
      this.isFold = !this.isFold
    },
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    }
  }
}
</script>

<style lang="stylus">
.iconfont
  padding-right 4px
.el-menu
  border-width 0px
  font-weight 400
  padding 0px
.el-menu
  .el-meun-item
    background #f00
</style>


