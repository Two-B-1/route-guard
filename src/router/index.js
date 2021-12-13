import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//error1:
// These relative modules were not found:

// * ./components/Config.vue in ./src/router/index.js
// * ./components/Fav.vue in ./src/router/index.js
// * ./components/Home.vue in ./src/router/index.js
import Home from '../components/Home.vue'

import Fav from '../components/Fav.vue'

import Config from '../components/Config.vue'

let router =  new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    
    {
      path: '/fav',
      component: Fav
    },
    {
      path: '/config',
      component: Config
    },
  ]
})


router.beforeEach((to, from, next) => {
  console.log("from:",from);
  console.log("to:",to);
  if(to.path == "/"){
    //截断
    next({path:"/config"})
  }else{
    //正常走
    next()
  }
})
export default router;

