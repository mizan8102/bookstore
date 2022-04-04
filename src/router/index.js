import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import UserCreate from '../components/UserCreate.vue'
import UserList from '../views/UserList.vue'
import clientHome from '../views/Client/LayoutApp.vue'
import BookFeatures from '../views/Client/FeatureBook.vue'
import HomeClient from '../views/Client/HomeView.vue'
/**
 * auth login
 */
import Login from '../views/auth/LoginForm.vue'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'clientHome',
    component: clientHome,
    children:[
      {
        path: '/',
        name: 'homeclient',
        component: HomeClient,
      },
      {
        path: '/bookfeatures',
        name: 'bookfeatures',
        component: BookFeatures,
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/usercreate',
    name: 'usercreate',
    component: UserCreate,
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserList
  }
]

const router = createRouter({
  
  history: createWebHistory(),
  routes
})
export default router
