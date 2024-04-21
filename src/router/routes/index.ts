import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import('@/layouts/default.vue'),
    redirect: '/movies',
    children: [
      { path: 'movies', component: () => import('@/pages/movies/index.vue') },
      { path: '/movies/add', component: () => import('@/pages/movies/formAction/index.vue') },
      { path: '/movies/edit/:id', component: () => import('@/pages/movies/formAction/index.vue') },
      { path: '/movies/view/:id', component: () => import('@/pages/movies/view/index.vue') },
    ]
  }
]
