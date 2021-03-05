import React from 'react';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Hidden from '@material-ui/core/Hidden';
import Poppers from '@material-ui/core/Popper';
import Divider from '@material-ui/core/Divider';
// @material-ui/icons
import Person from '@material-ui/icons/Person';
import Notifications from '@material-ui/icons/Notifications';
import Dashboard from '@material-ui/icons/Dashboard';
import Search from '@material-ui/icons/Search';
// core components
import MyInput from '../MyInput';
import Button from '../MyButton';

import styles from './navbarLinksStyle';

import { IAppState } from '../../store';
import { ThunkDispatch } from 'redux-thunk';
import { IAppActions } from '../../store/models/actions';
import { bindActionCreators } from 'redux';
import { setProducts, setSearch } from '../../store/product/actions';
import { connect } from 'react-redux';
import IProps, {
    IDispatchProps,
    IStateProps,
} from '../../views/Home/home.types';

const useStyles = makeStyles(styles);

const NavbarLinks: React.FC<IProps> = (props: IProps) => {
    const { search, setSearch } = props;

    const classes = useStyles();

    const [openProfile, setOpenProfile] = React.useState<any>(null);

    // notification starting
    const [openNotification, setOpenNotification] = React.useState<any>(null);
    const handleClickNotification = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (openNotification && openNotification.contains(event.target)) {
            setOpenNotification(null);
        } else {
            setOpenNotification(event.currentTarget);
        }
    };
    const handleCloseNotification = () => {
        setOpenNotification(null);
    };
    // notification ending

    // Profile starting
    const handleClickProfile = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (openProfile && openProfile.contains(event.target)) {
            setOpenProfile(null);
        } else {
            setOpenProfile(event.currentTarget);
        }
    };
    const handleCloseProfile = () => {
        setOpenProfile(null);
    };
    // Profile ending

    // searching starting
    let timer: any = null;
    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            setSearch({
                ...search,
                query: event.target.value.trim(),
            });
        }, 250);
    };
    // searching ending

    return (
        <div>
            <div className={classes.searchWrapper}>
                <MyInput
                    formControlProps={{
                        className: classes.margin + ' ' + classes.search,
                    }}
                    inputProps={{
                        placeholder: 'Search',
                        inputProps: {
                            'aria-label': 'Search',
                        },
                        onChange: handleSearchInput,
                        defaultValue: search.query,
                    }}
                />
                <Button color='white' aria-label='edit' justIcon round>
                    <Search />
                </Button>
            </div>
            {/* // TODO: optimize the way of checking device width */}
            <Button
                color={window.innerWidth > 959 ? 'transparent' : 'white'}
                justIcon={window.innerWidth > 959}
                simple={!(window.innerWidth > 959)}
                aria-label='Dashboard'
                className={classes.buttonLink}
            >
                <Dashboard className={classes.icons} />
                <Hidden mdUp implementation='css'>
                    <p className={classes.linkText}>Dashboard</p>
                </Hidden>
            </Button>
            <div className={classes.manager}>
                <Button
                    color={window.innerWidth > 959 ? 'transparent' : 'white'}
                    justIcon={window.innerWidth > 959}
                    simple={!(window.innerWidth > 959)}
                    aria-haspopup='true'
                    onClick={handleClickNotification}
                    className={classes.buttonLink}
                >
                    <Notifications className={classes.icons} />
                    <span className={classes.notifications}>5</span>
                    <Hidden mdUp implementation='css'>
                        <p
                            onClick={handleCloseNotification}
                            className={classes.linkText}
                        >
                            Notification
                        </p>
                    </Hidden>
                </Button>
                <Poppers
                    open={Boolean(openNotification)}
                    anchorEl={openNotification}
                    transition
                    disablePortal
                    className={
                        classNames({
                            [classes.popperClose]: !openNotification,
                        }) + classes.popperNav
                    }
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom'
                                        ? 'center top'
                                        : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener
                                    onClickAway={handleCloseNotification}
                                >
                                    <MenuList role='menu'>
                                        <MenuItem
                                            onClick={handleCloseNotification}
                                            className={classes.dropdownItem}
                                        >
                                            Mike John responded to your email
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleCloseNotification}
                                            className={classes.dropdownItem}
                                        >
                                            You have 5 new tasks
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleCloseNotification}
                                            className={classes.dropdownItem}
                                        >
                                            You{"'"}re now friend with Andrew
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleCloseNotification}
                                            className={classes.dropdownItem}
                                        >
                                            Another Notification
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleCloseNotification}
                                            className={classes.dropdownItem}
                                        >
                                            Another One
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Poppers>
            </div>
            <div className={classes.manager}>
                <Button
                    color={window.innerWidth > 959 ? 'transparent' : 'white'}
                    justIcon={window.innerWidth > 959}
                    simple={!(window.innerWidth > 959)}
                    aria-haspopup='true'
                    onClick={handleClickProfile}
                    className={classes.buttonLink}
                >
                    <Person className={classes.icons} />
                    <Hidden mdUp implementation='css'>
                        <p className={classes.linkText}>Profile</p>
                    </Hidden>
                </Button>
                <Poppers
                    open={Boolean(openProfile)}
                    anchorEl={openProfile}
                    transition
                    disablePortal
                    className={
                        classNames({ [classes.popperClose]: !openProfile }) +
                        classes.popperNav
                    }
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom'
                                        ? 'center top'
                                        : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener
                                    onClickAway={handleCloseProfile}
                                >
                                    <MenuList role='menu'>
                                        <MenuItem
                                            onClick={handleCloseProfile}
                                            className={classes.dropdownItem}
                                        >
                                            Profile
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleCloseProfile}
                                            className={classes.dropdownItem}
                                        >
                                            Settings
                                        </MenuItem>
                                        <Divider light />
                                        <MenuItem
                                            onClick={handleCloseProfile}
                                            className={classes.dropdownItem}
                                        >
                                            Logout
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Poppers>
            </div>
        </div>
    );
};

const mapStateToProps = (state: IAppState): IStateProps => ({
    search: state.product.search,
    items: state.product.items,
    pagination: state.product.pagination,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<IAppState, {}, IAppActions>
): IDispatchProps => {
    return {
        setSearch: bindActionCreators(setSearch, dispatch),
        setProducts: bindActionCreators(setProducts, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarLinks);
