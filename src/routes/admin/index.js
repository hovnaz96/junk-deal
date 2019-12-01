// Admin Routes
import AuthRoutes from './auth';
import Dashboard from './dashboard';


const routes = [
    ...AuthRoutes,
    ...Dashboard
];

export default routes;