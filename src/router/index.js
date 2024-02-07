import { createRouter, createWebHashHistory } from 'vue-router'
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/register',
    name: 'resister',
    component: RegisterForm
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
