import Vue from 'vue'
import Router from 'vue-router'
import DashboardRoutes from './dashboard';
import AdminRoutes from './admin';

Vue.use(Router);


const MAIN_ROUTES = [
    {path: '/', name: 'home',       component: () => import('../views/Home'),               meta: { title : 'Home' }},
    {path: '*', name: 'error404',   component: () => import('../views/Errors/Error404'),    meta: { title : '404' }},
];

const ROUTES = [
    ...DashboardRoutes,
    ...AdminRoutes,
    ...MAIN_ROUTES
];

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: ROUTES
});


router.beforeEach((to, from, next) => {
    document.title = process.env.VUE_APP_NAME + ` ${to.meta.title ? ' - ' + to.meta.title : ''}`;

    let requiresAuth  = to.meta.requiresAuth;
    let adminToken    = localStorage.getItem('authorization');

    if(requiresAuth && adminToken === null) next({name : 'login'});
    else if(!requiresAuth && adminToken !== null) next({name : 'dashboard'});
    else next();
});

export default router;