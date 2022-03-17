import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const Home = ()=>import(`@/views/HomeView.vue`);
const Posts = ()=>import(`@/views/Posts.vue`);
const ShowPost = ()=>import(`@/views/ShowPost.vue`);

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/posts/:id',
    name: 'ShowPost',
    component: ShowPost,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
