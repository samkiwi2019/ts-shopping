import React from 'react';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
// @material-ui/icons
import Menu from '@material-ui/icons/Menu';
// core components
import NavbarLinks from './navbarLinks';
import Button from '../MyButton';
import styles from './navbarStyle';
import INavbarProps from './types';

const useStyles = makeStyles(styles);

const Navbar: React.FC<INavbarProps> = (props): JSX.Element => {
    const classes = useStyles();

    const { color } = props;
    const appBarClasses = classNames({
        [' ' + classes[color || '']]: color,
    });
    const makeBrand = (): string => {
        let name: string = '';
        props.routes.map((prop) => {
            if (window.location.href.indexOf(prop.path) !== -1) {
                name = prop.name;
            }
            return null;
        });
        return name;
    };
    return (
        <AppBar className={classes.appBar + appBarClasses}>
            <Toolbar className={classes.container}>
                <div className={classes.flex}>
                    {/* Here we create navbar brand, based on route name */}
                    <Button color='transparent' className={classes.title}>
                        {makeBrand()}
                    </Button>
                </div>
                <Hidden smDown implementation='css'>
                    <NavbarLinks />
                </Hidden>
                <Hidden mdUp implementation='css'>
                    <IconButton color='inherit'>
                        <Menu />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
