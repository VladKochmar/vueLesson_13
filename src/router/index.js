import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: false },
  },
  {
    path: '/lessons',
    name: 'lessons',
    component: () => import('../views/LessonsView.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/lessons/select',
        name: 'lessons-select',
        component: () => import('../views/LessonsSelectView.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: ':subjectIDs(\\d+)+',
        name: 'teachers-select',
        component: () => import('../views/TeachersSelectView.vue'),
        meta: { requiresAuth: true },
        beforeEnter(to) {
          if (!to.params.subjectIDs?.length) {
            return { name: 'lessons-select' }
          }
        },
      },
      {
        path: ':lessonsIDsPairs(\\d+-\\d+)+',
        name: 'study-select',
        component: () => import('../views/LessonsPlan.vue'),
        props: true,
        meta: { requiresAuth: true },
        beforeEnter(to, from) {
          if (from.name !== 'teachers-select')
            return {
              name: 'notFound',
            }

          if (!to.params.lessonsIDsPairs?.length)
            return {
              name: 'notFound',
            }
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPageView.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/NotFoundView.vue'),
    meta: { requiresAuth: false },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  const authParams = localStorage.getItem('authParams')

  if (to.meta.requiresAuth && !authParams) {
    return {
      name: 'login',
    }
  }
})

export default router
