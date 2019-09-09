import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index'

import Top from './components/Top'
import Login from './components/Login'
import Signup from './components/Signup'
import NewChannelForm from './components/NewChannelForm'
import Channel from './components/Channel'
import EditChannelForm from './components/EditChannelForm'

Vue.use(VueRouter);

const router = new VueRouter({
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
        },
        {
            path: '/channel/:name/edit',
            name: 'EditChannelForm',
            component: EditChannelForm
        },
        {
            path: '/channel/:name',
            name: 'Channel',
            component: Channel
        }
    ]
})

export default router