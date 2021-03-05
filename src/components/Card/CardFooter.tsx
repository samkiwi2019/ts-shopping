import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
// core components
import styles from '../../assets/jss/cardFooterStyle';

const useStyles = makeStyles(styles);

export default function CardFooter(props: CardFooterProps) {
    const classes = useStyles();
    const {
        className,
        children,
        plain,
        profile,
        stats,
        chart,
        ...rest
    } = props;
    const cardFooterClasses = classNames({
        [classes.cardFooter]: true,
        [classes.cardFooterPlain]: plain,
        [classes.cardFooterProfile]: profile,
        [classes.cardFooterStats]: stats,
        [classes.cardFooterChart]: chart,
        [className]: className !== undefined,
    });
    return (
        <div className={cardFooterClasses} {...rest}>
            {children}
        </div>
    );
}

interface CardFooterProps {
    children?: React.ReactNode;
    className?: string | any;
    profile?: boolean;
    stats?: boolean;
    plain?: boolean;
    chart?: boolean;
    [rest: string]: any;
}
