import Login from '../../views/Admin/Auth/Login';

const routes = [
    {path: '/admin', name: 'login', component: Login, meta : { requiresAuth : false, title : 'Admin Login'}}
]

export default routes;