<template>
  <div>
    center
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    _drawCreditGraph() {
      let creditChart = this.$echarts.init(this.$refs.credit)
      let option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          height: 200,
          width: 200,
          feature: {}
        },
        series: [
          {
            name: '信任值',
            type: 'gauge',
            detail: { formatter: '{value}' },
            data: [{ value: 90, name: '信任指数' }]
          }
        ]
      }
      creditChart.setOption(option)
    }
  }
}
</script>
