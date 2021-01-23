import IRoute from '../interfaces/route';
import AboutPage from '../views/about';
import HomePage from '../views/home';

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
