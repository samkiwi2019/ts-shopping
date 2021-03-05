import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/cardHeaderStyle';

const useStyles = makeStyles(styles);

export default function CardHeader(props: CardHeaderProps) {
    const classes = useStyles();
    const { className, children, color, plain, stats, icon, ...rest } = props;
    const cardHeaderClasses = classNames({
        [classes.cardHeader]: true,
        [classes[color + 'CardHeader']]: color,
        [classes.cardHeaderPlain]: plain,
        [classes.cardHeaderStats]: stats,
        [classes.cardHeaderIcon]: icon,
        [className]: className !== undefined,
    });
    return (
        <div className={cardHeaderClasses} {...rest}>
            {children}
        </div>
    );
}

interface CardHeaderProps {
    children?: React.ReactNode;
    className?: string | any;
    icon?: boolean;
    stats?: boolean;
    plain?: boolean;
    color?: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose';
    [rest: string]: any;
}
