import Vue from 'vue'
import Router from 'vue-router'
import pageEditor from '@/views/page-editor'

Vue.use(Router)
 // component: () => import(/* webpackChunkName: "about" */ './views/About.vue') lazy load
export default new Router({
  routes: [
    {
      path: '/',
      component: pageEditor
    }
  ]
})
