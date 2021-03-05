import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
    grid: {
        padding: '0 15px !important',
    },
};

const useStyles = makeStyles(styles);

export default function GridItem(props: GridItemProps) {
    const classes = useStyles();
    const { children, ...rest } = props;
    return (
        <Grid item {...rest} className={classes.grid}>
            {children}
        </Grid>
    );
}

interface GridItemProps {
    children: React.ReactNode;
    [rest: string]: any;
}
