import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index.vue'
import Login from '@/views/login/index.vue'
import Register from '@/views/login/register.vue'
import Layout from '@/views/layout/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/register',
      name: '注册',
      component: Register
    },
    {
      path: '/index',
      name: '系统',
      component: Layout
      // children: [{
      //     path: '/server',
      //     name: '业务办理',

      //   },
      //   {
      //     path: '/info',
      //     name: '信息查询',
      //   },
      //   {
      //     path: '/statistic',
      //     name: '海关统计',
      //   },
      //   {
      //     path: '/callback',
      //     name: '反馈建议',
      //   },
      // ]
    }
  ]
})
