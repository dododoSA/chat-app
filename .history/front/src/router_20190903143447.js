import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/Top';

Vue.use(VueRouter);

const routes = [
    { 
        path: '/',
        conponent:Top
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
})