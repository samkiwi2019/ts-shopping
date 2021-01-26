import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IPage from '../interfaces/page';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styles from './layoutStyles';
import bgImage from '../assets/img/sidebar-2.jpg';
import logo from '../assets/img/reactlogo.png';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import routes from '../config/routes';
import { IBgColor } from '../interfaces/page';

const useStyles = makeStyles(styles);
let ps: any;
const Layout: React.FC<IPage & RouteComponentProps<any>> = (props) => {
    const { ...rest } = props;
    // styles
    const classes = useStyles();
    // ref to help us initialize PerfectScrollbar on windows devices
    const mainPanel: any = React.createRef<HTMLDivElement>();
    // states and functions
    const [image, setImage] = React.useState(bgImage);
    const [color, setColor] = React.useState<IBgColor>('purple');
    const [fixedClasses, setFixedClasses] = React.useState('dropdown show');
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleImageClick = (image: string) => {
        setImage(image);
    };
    const handleColorClick = (color: IBgColor) => {
        setColor(color);
    };
    const handleFixedClick = () => {
        if (fixedClasses === 'dropdown') {
            setFixedClasses('dropdown show');
        } else {
            setFixedClasses('dropdown');
        }
    };
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const resizeFunction = () => {
        if (window.innerWidth >= 960) {
            setMobileOpen(false);
        }
    };
    // initialize and destroy the PerfectScrollbar plugin
    React.useEffect(() => {
        if (navigator.platform.indexOf('Win') > -1) {
            ps = new PerfectScrollbar(mainPanel.current, {
                suppressScrollX: true,
                suppressScrollY: false,
            });
            document.body.style.overflow = 'hidden';
        }
        window.addEventListener('resize', resizeFunction);
        // Specify how to clean up after this effect:
        return function cleanup() {
            if (navigator.platform.indexOf('Win') > -1) {
                ps.destroy();
            }
            window.removeEventListener('resize', resizeFunction);
        };
    }, [mainPanel]);
    return (
        <div className={classes.wrapper}>
            <Sidebar
                routes={routes}
                logoText={'Creative Tim'}
                logo={logo}
                image={image}
                handleDrawerToggle={handleDrawerToggle}
                open={mobileOpen}
                color={color}
                {...rest}
            />
            <div className={classes.mainPanel} ref={mainPanel}>
                <Navbar
                    routes={routes}
                    handleDrawerToggle={handleDrawerToggle}
                    {...rest}
                />
                {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}

                <div className={classes.content}>
                    <div className={classes.container}>{props.children}</div>
                </div>
                {/* <FixedPlugin
                    handleImageClick={handleImageClick}
                    handleColorClick={handleColorClick}
                    bgColor={color}
                    bgImage={image}
                    handleFixedClick={handleFixedClick}
                    fixedClasses={fixedClasses}
                /> */}
            </div>
        </div>
    );
};

export default withRouter(Layout);
