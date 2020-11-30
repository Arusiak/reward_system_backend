import Vue from  'vue'
import Router from 'vue-router'
import Signin from '@/components/Auth/Signin'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Signin
        },
        {
            path: '/signup',
            component: () => import('./components/Auth/Signup.vue')
        },
        {
            path: '/admin/usergifts',
            component: () => import('./components/Admin/UsersGift.vue')
        },
        {
            path: '/admin/userAllPoint',
            component: () => import('./components/Admin/AllPointsUsers.vue')
        },
        {
            path: '/user/rules',
            component: () => import('./components/User/Rules.vue')
        },
        {
            path: '/user/otherusers',
            component: () => import('./components/User/OtherUsers.vue')
        },
        {
            path: '/user/notification',
            component: () => import('./components/User/AllPoints.vue')
        }
    ]
})