import { Dashboard } from '@material-ui/icons';
import { lazy } from 'react';
import IRoute from '../interfaces/route';

const HomePage = lazy(() => import('../views/Home'));
const AboutPage = lazy(() => import('../views/about'));

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home page',
        component: HomePage,
        exact: true,
        icon: Dashboard,
    },
    {
        path: '/about/',
        name: 'About page',
        component: AboutPage,
        exact: true,
        icon: Dashboard,
    },
    {
        path: '/about/:number',
        name: 'About page',
        component: AboutPage,
        exact: true,
        icon: Dashboard,
    },
];

export default routes;
