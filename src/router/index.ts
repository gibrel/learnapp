import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/multiple-ans',
      name: 'multiple-ans',
      component: () => import('../views/MultipleAns.vue')
    },
    {
      path: '/sequence',
      name: 'sequence',
      component: () => import('../views/Sequence.vue')
    },
    {
      path: '/multiple-choice',
      name: 'multiple-choice',
      component: () => import('../views/MultipleChoice.vue')
    },
    {
      path: '/matching',
      name: 'matching',
      component: () => import('../views/Matching.vue')
    },
    {
      path: '/drag-n-drop',
      name: 'drag-n-drop',
      component: () => import('../views/DragAndDrop.vue')
    },
    {
      path: '/fill-in-the-blanks',
      name: 'fill-in-the-blanks',
      component: () => import('../views/FillInTheBlanks.vue')
    },
    {
      path: '/simple-ans',
      name: 'simple-ans',
      component: () => import('../views/SimpleAns.vue')
    },
    {
      path: '/select-from-list',
      name: 'select-from-list',
      component: () => import('../views/SelectFromList.vue')
    },
    {
      path: '/ans-scale',
      name: 'ans-scale',
      component: () => import('../views/AnsScale.vue')
    },
    {
      path: '/point-to-picture',
      name: 'point-to-picture',
      component: () => import('../views/PointToPicture.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
