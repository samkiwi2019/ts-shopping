import { lazy } from 'react';
import IRoute from '../interfaces/route';

const HomePage = lazy(() => import('../views/home'));
const AboutPage = lazy(() => import('../views/about'));

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home page',
        component: HomePage,
        exact: true,
    },
    {
        path: '/about/',
        name: 'About page',
        component: AboutPage,
        exact: true,
    },
    {
        path: '/about/:number',
        name: 'About page',
        component: AboutPage,
        exact: true,
    },
];

export default routes;
