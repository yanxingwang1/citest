import { createRouter, createWebHashHistory } from 'vue-router'
const modules = import.meta.glob('../views/*')

const routes = [
  { path: '/', name: 'Home', component: modules['../views/Home.vue'] },
  { path: '/about', name: 'About', component: modules['../views/About.vue'] },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((from, to, next) => {
  next()
})

export default router
