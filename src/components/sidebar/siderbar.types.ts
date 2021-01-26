import { IBgColor } from '../../interfaces/page';
import IRoute from '../../interfaces/route';

type ISidebarProps = {
    handleDrawerToggle: () => void;
    color: IBgColor;
    logo?: string;
    image?: string;
    logoText?: string;
    routes: IRoute[];
    open?: boolean;
};

export default ISidebarProps;
