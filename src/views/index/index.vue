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
          <el-carousel-item >
            <a :href="1"><img src="../../assets/images/1.jpg" alt=""></a>
          </el-carousel-item>
          <el-carousel-item >
            <a :href="1"><img src="../../assets/images/2.jpg" alt=""></a>
          </el-carousel-item>
          <el-carousel-item >
            <a :href="1"><img src="../../assets/images/3.jpg" alt=""></a>
          </el-carousel-item>
          <el-carousel-item >
            <a :href="1"><img src="../../assets/images/4.jpg" alt=""></a>
          </el-carousel-item>
          <el-carousel-item >
            <a :href="1"><img src="../../assets/images/5.jpg" alt=""></a>
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
      <!-- <div class="search">

      </div>
      <div class="statistic"></div> -->
      <div class="map" id="map"></div>
    </div>
    <suo-footer></suo-footer>
  </div>
</template>

<script>
import suoHeader from '@/components/layout/header'
import suoFooter from '@/components/layout/footer'

export default {
  mounted() {
    // let myCharts = this.$echarts.init(document.getElementById('map'))
    let geoCoorddata = {
        武汉: [114.30539299999998, 30.593099],
        深圳: [114.05786499999999, 22.543096],
        北京: [116.40739499999995, 39.904211],
        阿克苏: [80.26338699999997, 41.167548]
      },
      option = {
        bmap: {
          center: [113.65, 34.76],
          zoom: 5,
          roam: true,
          mapStyle: {
            styleJson: [
              {
                featureType: 'land', //调整土地颜色
                elementType: 'geometry',
                stylers: {
                  color: '#081734'
                }
              },
              {
                featureType: 'building', //调整建筑物颜色
                elementType: 'geometry',
                stylers: {
                  color: '#04406F'
                }
              },
              {
                featureType: 'building', //调整建筑物标签是否可视
                elementType: 'labels',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'highway', //调整高速道路颜色
                elementType: 'geometry',
                stylers: {
                  color: '#015B99'
                }
              },
              {
                featureType: 'highway', //调整高速名字是否可视
                elementType: 'labels',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'arterial', //调整一些干道颜色
                elementType: 'geometry',
                stylers: {
                  color: '#003051'
                }
              },
              {
                featureType: 'arterial',
                elementType: 'labels',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'green',
                elementType: 'geometry',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: {
                  color: '#044161'
                }
              },
              {
                featureType: 'subway', //调整地铁颜色
                elementType: 'geometry.stroke',
                stylers: {
                  color: '#003051'
                }
              },
              {
                featureType: 'subway',
                elementType: 'labels',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'railway',
                elementType: 'geometry',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'railway',
                elementType: 'labels',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'all', //调整所有的标签的边缘颜色
                elementType: 'labels.text.stroke',
                stylers: {
                  color: '#313131'
                }
              },
              {
                featureType: 'all', //调整所有标签的填充颜色
                elementType: 'labels.text.fill',
                stylers: {
                  color: '#FFFFFF'
                }
              },
              {
                featureType: 'manmade',
                elementType: 'geometry',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'manmade',
                elementType: 'labels',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'local',
                elementType: 'geometry',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'local',
                elementType: 'labels',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'subway',
                elementType: 'geometry',
                stylers: {
                  lightness: -65
                }
              },
              {
                featureType: 'railway',
                elementType: 'all',
                stylers: {
                  lightness: -40
                }
              },
              {
                featureType: 'boundary',
                elementType: 'geometry',
                stylers: {
                  color: '#8b8787',
                  weight: '1',
                  lightness: -29
                }
              }
            ]
          }
        },
        series: [
          {
            type: 'lines',
            mapType: 'china',
            coordinateSystem: 'bmap',
            zlevel: 1,
            data: [
              {
                name: '武汉',
                toname: '北京',
                coords: [geoCoorddata['武汉'], geoCoorddata['北京']]
              },
              {
                name: '深圳',
                toname: '北京',
                coords: [geoCoorddata['深圳'], geoCoorddata['北京']]
              },
              {
                name: '阿克苏',
                toname: '北京',
                coords: [geoCoorddata['阿克苏'], geoCoorddata['北京']]
              }
            ],
            //线上面的动态特效
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: '#fff',
              symbolSize: 4
            },
            lineStyle: {
              normal: {
                width: '',
                color: '#a6c84c',
                curveness: 0.2
              }
            }
          },
          {
            type: 'effectScatter',
            mapType: 'china',
            coordinateSystem: 'bmap',
            zlevel: 3,
            data: [
              {
                name: '北京',
                value: geoCoorddata['北京'].concat(200)
              }
            ],
            rippleEffect: {
              period: 10,
              scale: 5,
              brushType: 'fill'
            }
          }
        ]
      }
    // myCharts.setOption(option)
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      loginStatus: false,
      info: [
        { img: '../../assets/images/1.jpg', link: '1' },
        { img: '../../assets/images/2.jpg', link: '2' },
        { img: '../../assets/images/3.jpg', link: '3' },
        { img: '../../assets/images/4.jpg', link: '4' },
        { img: '../../assets/images/5.jpg', link: '5' }
      ]
    }
  },
  methods: {
    handleSelect() {
      if (this.loginStatus) {
      } else {
        this.$notify.info({
          title: '系统提示',
          message: '请先登录后再操作!',
          offset: 100
        })
      }
    }
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
          .el-carousel__item
            // width 100%
            // height 480px
            a
              img
                width 100%
                height 480px
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
      background url('../../assets/images/map.png')
      background-size 100% 480px
</style>
