// src/routes/index.ts
import express from 'express';
import authRoute from './auth.routes';

const router = express.Router();

const routes = [{
    path: '/auth',
    route: authRoute
}]

routes.forEach(route => {
    router.use(route.path, route.route);
});

export default router;