import AdminDashboard from '../../views/Admin/Dashboard';

const routes = [
    {path: '/admin', name: 'dashboard',     component: AdminDashboard,   meta : { requiresAuth : true, title : 'Admin'}},
]

export default routes;