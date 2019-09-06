import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from './components/Top'
import Login from './components/Login'
import Signup from './components/Signup'
import NewChannelForm from './components/NewChannelForm'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/',
            name: 'Top',
            component:Top
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/channel/new',
            component: NewChannelForm
        }
    ]
})