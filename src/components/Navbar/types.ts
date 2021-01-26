import IRoute from '../../interfaces/route';

interface INavbarProps {
    color?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
    routes: IRoute[];
    handleDrawerToggle: () => void;
}

export default INavbarProps;
