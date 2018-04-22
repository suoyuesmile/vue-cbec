<template>
  <div class="index">
    <suo-header></suo-header>
    <div class="content">
      <div class="nav">
        <el-menu :default-active="activeIndex2" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="rgba(255,255,255,1)" active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="iconfont icon-caidan">&nbsp;全部导航</i>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="iconfont icon-remind">&nbsp;最新消息</i>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="iconfont icon-all">&nbsp;业务办理</i>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="iconfont icon-search">&nbsp;信息查询</i>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="iconfont icon-baobiaofenxi">&nbsp;海关统计</i>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="iconfont icon-jianyi1">&nbsp;反馈建议</i>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="info">
        <el-carousel height="480px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="server">
        <div class="icon">
          <i class="iconfont icon-gongyinglian"></i>
        </div>
        <div class="title">云智能连接所有海关系统</div>
        <div class="desc">四个步骤让跨境电商轻松接入海关系统，提前办理出入关手续，在线轻松缴纳税费，实时追踪物流信息，让跨境更简单</div>
        <div class="step">
          <el-steps :active="1">
            <el-step title="企业认证" icon="el-icon-edit" description="快速接入智能海关系统，4步轻松认证企业，记录企业信用记录"></el-step>
            <el-step title="商品报关" icon="el-icon-upload"></el-step>
            <el-step title="自助缴税" icon="el-icon-picture"></el-step>
            <el-step title="物流追踪" icon="el-icon-picture"></el-step>
          </el-steps>
        </div>
        <div class="detail"></div>
      </div>
      <div class="search"></div>
      <div class="statistic"></div>
      <div class="map"></div>
    </div>
    <suo-footer></suo-footer>
  </div>
</template>

<script>
import suoHeader from '@/components/layout/header'
import suoFooter from '@/components/layout/footer'

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      info: [
        { img: '', link: '1' },
        { img: '', link: '2' },
        { img: '', link: '3' },
        { img: '', link: '4' },
        { img: '', link: '5' }
      ]
    }
  },
  methods: {
    handleSelect() {}
  },
  components: {
    suoHeader,
    suoFooter
  }
}
</script>

<style lang="stylus">
.index
  .content
    .nav
      height 60px
      width 100%
      color rgba(255, 255, 255, 0.8)
      font-size 12px
      font-weight 200
      background #545c64
    .info
      height 480px
      .el-carousel
        .el-carousel__container
          .el-carousel__item h3
            text-align center
            color #475669
            font-size 18px
            opacity 0.75
            line-height 480px
            margin 0
          .el-carousel__item:nth-child(2n)
            background-color #99a9bf
          .el-carousel__item:nth-child(2n+1)
            background-color #d3dce6
    .server
      color #475669
      height 480px
      margin 0 auto
      width 72%
      .icon
        margin 24px auto
        text-align center
        .icon-gongyinglian
          font-size 48px
      .title
        text-align center
        margin-top 24px
        margin-bottom 24px
        font-size 24px
        line-height 24px
      .desc
        text-align center
        margin-bottom 80px
        font-size 14px
        line-height 18px
    .search
      height 480px
      background rgba(235, 235, 235, 0.6)
    .statistic
      height 480px
    .map
      height 480px
      background rgba(235, 235, 235, 0.6)

</style>
