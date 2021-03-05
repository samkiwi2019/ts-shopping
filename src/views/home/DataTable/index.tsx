import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Image from 'material-ui-image';
import { green, red } from '@material-ui/core/colors';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { IAppState } from '../../../store';
import { ThunkDispatch } from 'redux-thunk';
import { IAppActions } from '../../../store/models/actions';
import { bindActionCreators } from 'redux';
import { setProducts, setSearch } from '../../../store/product/actions';
import { connect } from 'react-redux';
import IProps, { IDispatchProps, IStateProps } from '../home.types';
import { LinearProgress } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import MyChart from './chart';
import { IProductItem } from '../../../store/product/types';

const useRowStyles = makeStyles<any>({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function Row(props: { row: IProductItem }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    const formatTrend = (trend: number): string => {
        return (trend * 100).toFixed(2) + '%';
    };

    useEffect(() => {
        setOpen(false);
    }, [row]);

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton
                        aria-label='expand row'
                        size='small'
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component='th' scope='row'>
                    <Image src={row.img} />
                </TableCell>
                <TableCell align='left'>{row.name}</TableCell>
                <TableCell align='right'>{row.prefix}</TableCell>
                <TableCell align='right'>NZ${row.price}</TableCell>
                <TableCell align='right'>{row.unit}</TableCell>
                <TableCell align='right'>
                    {new Date(row.date).toLocaleDateString()}
                </TableCell>
                <TableCell align='right'>
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Typography
                            variant='body1'
                            style={{
                                color: row.compare > 0 ? red[500] : green[500],
                            }}
                        >
                            {formatTrend(row.compare)}
                        </Typography>
                        {row.compare > 0 ? (
                            <TrendingUpIcon style={{ color: red[500] }} />
                        ) : row.compare < 0 ? (
                            <TrendingDownIcon style={{ color: green[500] }} />
                        ) : (
                            <TrendingFlatIcon style={{ color: green[500] }} />
                        )}
                    </Box>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={9}
                >
                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <MyChart item={row} />
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

function CustomLoadingOverlay() {
    return (
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
            <LinearProgress />
        </div>
    );
}

const CollapsibleTable: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { search, setProducts, items, setSearch, pagination } = props;
    const [loading, setLoading] = useState(false);

    const handleSetItems = async () => {
        setLoading(true);
        console.log(search);
        await setProducts(search);
        setLoading(false);
    };

    let timer: any = null;
    const handleChange = (event: React.ChangeEvent<unknown>, currPage: any) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            setSearch({
                ...search,
                currPage,
            });
        }, 250);
    };

    useEffect(() => {
        handleSetItems();
        // eslint-disable-next-line
    }, [search]);

    return (
        <>
            <TableContainer component={Paper} style={{ position: 'relative' }}>
                {!loading ? null : <CustomLoadingOverlay />}
                <Table aria-label='collapsible table'>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Image</TableCell>
                            <TableCell align='left'>Name</TableCell>
                            <TableCell align='right'>Promotion</TableCell>
                            <TableCell align='right'>Price</TableCell>
                            <TableCell align='right'>Unit</TableCell>
                            <TableCell align='right'>Time</TableCell>
                            <TableCell align='right'>Trend</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!items
                            ? null
                            : items.map((row, index) => (
                                  <Row key={index} row={row} />
                              ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box display='flex' justifyContent='flex-end' mt={2}>
                <Pagination
                    count={Math.ceil(pagination.total / search.pageSize)}
                    variant='outlined'
                    color='primary'
                    onChange={handleChange}
                />
            </Box>
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(CollapsibleTable);
