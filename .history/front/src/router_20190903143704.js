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

export default new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/',
            conponent:Top
        }
    ]
})