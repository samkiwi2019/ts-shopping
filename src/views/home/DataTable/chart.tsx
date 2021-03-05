import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import CardBody from '../../../components/Card/CardBody';
import CardFooter from '../../../components/Card/CardFooter';
import CardHeader from '../../../components/Card/CardHeader';
import AccessTime from '@material-ui/icons/AccessTime';
import ChartistGraph from 'react-chartist';
import styles from '../../../assets/jss/dashboardStyle';
import { makeStyles } from '@material-ui/core';
import dataFormat from './data';
import { IProductItem } from '../../../store/product/types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { getProductsById } from '../../../api/product';

dayjs.extend(relativeTime);

const useStyles = makeStyles(styles);

const MyChart: React.FC<ChartProps> = (props: ChartProps): JSX.Element => {
    const classes = useStyles();
    const [data, setData] = useState(dataFormat([], []));
    const { item } = props;
    const formatTrend = (trend: number): string => {
        return Math.abs(trend * 100).toFixed(2) + '%';
    };
    const getColor = (compare: number) =>
        compare <= 0 ? classes.successText : classes.dangerText;

    const getData = async () => {
        const { data } = await getProductsById(item.productId);
        const items = data.items.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        const series = items.map((item) => +item.price);
        const labels = items.map((item) => dayjs(item.date).format('DD/MM'));
        setData(dataFormat(labels, series));
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, [item.productId]);

    return (
        <div>
            <CardHeader>
                <CardHeader color={item.compare > 0 ? 'danger' : 'success'}>
                    <ChartistGraph
                        className='ct-chart'
                        data={data.data}
                        type='Line'
                        options={data.options}
                        listener={data.animation}
                    />
                </CardHeader>
                <CardBody>
                    <h6 className={classes.cardTitle}>History(30 days)</h6>
                    <p className={classes.cardCategory}>
                        <span className={getColor(item.compare)}>
                            {item.compare > 0 ? (
                                <ArrowUpward
                                    className={classes.upArrowCardCategory}
                                />
                            ) : item.compare < 0 ? (
                                <ArrowDownward
                                    className={classes.upArrowCardCategory}
                                />
                            ) : (
                                <TrendingFlatIcon
                                    className={classes.upArrowCardCategory}
                                />
                            )}
                            {formatTrend(item.compare)}
                        </span>{' '}
                        in past 90 days.
                    </p>
                </CardBody>
                <CardFooter chart>
                    <div className={classes.stats}>
                        <AccessTime /> updated {dayjs(item.date).fromNow()}
                    </div>
                </CardFooter>
            </CardHeader>
        </div>
    );
};

interface ChartProps {
    item: IProductItem;
}

export default MyChart;
