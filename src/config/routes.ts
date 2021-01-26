import { Language, ShoppingCart, ShoppingBasket } from '@material-ui/icons';
import { lazy } from 'react';
import IRoute from '../interfaces/route';

const HomePage = lazy(() => import('../views/Home'));
const AboutPage = lazy(() => import('../views/about'));

const routes: IRoute[] = [
    {
        path: '/paknsave',
        name: "Pak'nsave",
        component: HomePage,
        exact: true,
        icon: ShoppingBasket,
    },
    {
        path: '/countdown',
        name: 'Countdown',
        component: AboutPage,
        exact: true,
        icon: ShoppingCart,
    },
    {
        path: '/newworld',
        name: 'New World',
        component: AboutPage,
        exact: true,
        icon: Language,
    },
];

export default routes;
