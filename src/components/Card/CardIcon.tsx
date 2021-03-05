import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/cardIconStyle.js';

const useStyles = makeStyles(styles);

export default function CardIcon(props: CardIconProps) {
    const classes = useStyles();
    const { className, children, color, ...rest } = props;
    const cardIconClasses = classNames({
        [classes.cardIcon]: true,
        [classes[color + 'CardHeader']]: color,
        [className]: className !== undefined,
    });
    return (
        <div className={cardIconClasses} {...rest}>
            {children}
        </div>
    );
}

interface CardIconProps {
    className?: string | any;
    color?: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose';
    children?: React.ReactNode;
    [rest: string]: any;
}
