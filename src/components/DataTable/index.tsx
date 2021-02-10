import React from 'react';
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
import Icon from '@material-ui/core/Icon';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
const useRowStyles = makeStyles<any>({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function createData(
    img: string,
    name: string,
    prefix: string,
    price: string,
    unit: string,
    date: string,
    compare: number
) {
    return {
        img,
        name,
        prefix,
        price,
        unit,
        date,
        compare,
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    const formatTrend = (trend: number): string => {
        return (trend * 100).toFixed(2) + '%';
    };
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
                    <Image src={row.img} style={{ width: '120px' }} />
                </TableCell>
                <TableCell align='right'>{row.name}</TableCell>
                <TableCell align='right'>{row.prefix}</TableCell>
                <TableCell align='right'>{row.price}</TableCell>
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
                            variant='caption'
                            style={{ color: green[500] }}
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
                <TableCell align='right'>Actions</TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <Box margin={1}>
                            <Typography
                                variant='h6'
                                gutterBottom
                                component='div'
                            >
                                History
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    {
        id: 580370,
        productId: '5001551-EA-000PNS',
        supplier: 'ParknSave',
        category: 'drinks',
        name: 'L&P Soft Drink',
        img:
            'https://a.fsimg.co.nz/product/retail/fan/image/200x200/5001551.png',
        prefix: '',
        price: '1.00',
        unit: 'ea',
        compare: -0.6212599419265246,
        latest: true,
        date: '2021-02-10T00:00:38.455811',
    },
    {
        id: 581485,
        productId: '5002395-EA-000PNS',
        supplier: 'ParknSave',
        category: 'drinks',
        name: 'L&P Sugar Free Soft Drink',
        img:
            'https://a.fsimg.co.nz/product/retail/fan/image/200x200/5002395.png',
        prefix: '',
        price: '1.00',
        unit: 'ea',
        compare: -0.6212599419265246,
        latest: true,
        date: '2021-02-10T00:13:33.846233',
    },
    {
        id: 584335,
        productId: '5237502-EA-000PNS',
        supplier: 'ParknSave',
        category: 'drinks',
        name: 'L&P Dry Ginger Beer Soft Drink',
        img:
            'https://a.fsimg.co.nz/product/retail/fan/image/200x200/5237502.png',
        prefix: '',
        price: '1.00',
        unit: 'ea',
        compare: -0.6212599419265246,
        latest: true,
        date: '2021-02-10T00:47:37.003814',
    },
    {
        id: 581276,
        productId: '5040099-KGM-000PNS',
        supplier: 'ParknSave',
        category: 'fresh-foods-and-bakery',
        name: 'Produce Red Truss Tomatoes',
        img:
            'https://a.fsimg.co.nz/product/retail/fan/image/200x200/5040099.png',
        prefix: '',
        price: '0.99',
        unit: 'kg',
        compare: -0.5278219395866456,
        latest: true,
        date: '2021-02-10T00:11:05.234503',
    },
    {
        id: 581294,
        productId: '5040003-EA-000PNS',
        supplier: 'ParknSave',
        category: 'fresh-foods-and-bakery',
        name: 'Produce Rockmelon',
        img:
            'https://a.fsimg.co.nz/product/retail/fan/image/200x200/5040003.png',
        prefix: '',
        price: '3.99',
        unit: 'ea',
        compare: -0.4921510394569368,
        latest: true,
        date: '2021-02-10T00:11:18.947888',
    },
    {
        id: 582770,
        productId: '5254007-EA-000PNS',
        supplier: 'ParknSave',
        category: 'personal-care',
        name: 'U By Kotex Nude In Black Liners',
        img:
            'https://a.fsimg.co.nz/product/retail/fan/image/200x200/5254007.png',
        prefix: '',
        price: '1.49',
        unit: 'ea',
        compare: -0.4247104247104247,
        latest: true,
        date: '2021-02-10T00:28:31.273262',
    },
    {
        id: 586115,
        productId: '5040788-EA-000PNS',
        supplier: 'ParknSave',
        category: 'fresh-foods-and-bakery',
        name: 'Produce Romano Tomatoes',
        img:
            'https://a.fsimg.co.nz/product/retail/fan/image/200x200/5040788.png',
        prefix: '',
        price: '2.69',
        unit: 'ea',
        compare: -0.3710054559625877,
        latest: true,
        date: '2021-02-10T01:10:45.576139',
    },
    {
        id: 584921,
        productId: '5045845-EA-000PNS',
        supplier: 'ParknSave',
        category: 'fresh-foods-and-bakery',
        name: 'Produce Onions',
        img:
            'https://a.fsimg.co.nz/product/retail/fan/image/200x200/5045845.png',
        prefix: '',
        price: '8.99',
        unit: 'ea',
        compare: -0.3664552501761804,
        latest: true,
        date: '2021-02-10T00:55:07.28808',
    },
    {
        id: 585431,
        productId: '5046565-KGM-000PNS',
        supplier: 'ParknSave',
        category: 'fresh-foods-and-bakery',
        name: 'Produce Garlic',
        img:
            'https://a.fsimg.co.nz/product/retail/fan/image/200x200/5046565.png',
        prefix: '',
        price: '6.99',
        unit: 'kg',
        compare: -0.36589053522830356,
        latest: true,
        date: '2021-02-10T01:01:49.954372',
    },
    {
        id: 584126,
        productId: '5215962-EA-000PNS',
        supplier: 'ParknSave',
        category: 'fresh-foods-and-bakery',
        name: 'Regal Manuka Smoked Salmon',
        img:
            'https://a.fsimg.co.nz/product/retail/fan/image/200x200/5215962.png',
        prefix: '',
        price: '9.99',
        unit: 'ea',
        compare: -0.35863717872086076,
        latest: true,
        date: '2021-02-10T00:45:08.661296',
    },
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label='collapsible table'>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Image</TableCell>
                        <TableCell align='right'>Name</TableCell>
                        <TableCell align='right'>Promotion</TableCell>
                        <TableCell align='right'>Price</TableCell>
                        <TableCell align='right'>Unit</TableCell>
                        <TableCell align='right'>Time</TableCell>
                        <TableCell align='right'>Trend</TableCell>
                        <TableCell align='right'>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
