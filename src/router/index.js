import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/index/index.vue'
import login from '@/views/login/index.vue'
import register from '@/views/login/register.vue'
import layout from '@/views/layout/index.vue'
import center from '@/views/center/center.vue'
import auth from '@/views/service/auth.vue'
import declare from '@/views/service/declare.vue'
import logistic from '@/views/service/logistic.vue'
import scottare from '@/views/service/scottare.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: '首页',
      component: index
    },
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '/register',
      name: '注册',
      component: register
    },
    {
      path: '/layout',
      name: '系统',
      component: layout,
      children: [{
          path: '/center',
          name: 'center',
          component: center
        },
        {
          path: '/auth',
          name: 'auth',
          component: auth
        },
        {
          path: '/declare',
          name: 'declare',
          component: declare
        },
        {
          path: '/logistic',
          name: 'logistic',
          component: logistic
        },
        {
          path: '/scottare',
          name: 'scottare',
          component: scottare
        },
        {
          path: '/info',
          name: '信息查询',
        },
        {
          path: '/statistic',
          name: '海关统计',
        },
        {
          path: '/callback',
          name: '反馈建议',
        },
      ]
    }
  ]
})
