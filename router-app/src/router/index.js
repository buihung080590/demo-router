import About from '@/components/About';
import HelloWorld from '@/components/HelloWorld';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
