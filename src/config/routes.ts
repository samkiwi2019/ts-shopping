import { Dashboard } from '@material-ui/icons';
import { lazy } from 'react';
import IRoute from '../interfaces/route';

const HomePage = lazy(() => import('../views/Home'));
const AboutPage = lazy(() => import('../views/about'));

const routes: IRoute[] = [
    {
        path: '/parknsave',
        name: 'Parknsave',
        component: HomePage,
        exact: true,
        icon: Dashboard,
    },
    {
        path: '/countdown',
        name: 'Countdown',
        component: AboutPage,
        exact: true,
        icon: Dashboard,
    },
    {
        path: '/newword',
        name: 'New Word',
        component: AboutPage,
        exact: true,
        icon: Dashboard,
    },
];

export default routes;
