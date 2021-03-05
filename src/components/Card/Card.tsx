import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

// core components
import styles from '../../assets/jss/cardStyle';

const useStyles = makeStyles(styles);

export default function Card(props: CardProps) {
    const classes = useStyles();
    const { className, children, plain, profile, chart, ...rest } = props;
    const cardClasses = classNames({
        [classes.card]: true,
        [classes.cardPlain]: plain,
        [classes.cardProfile]: profile,
        [classes.cardChart]: chart,
        [className]: className !== undefined,
    });
    return (
        <div className={cardClasses} {...rest}>
            {children}
        </div>
    );
}

interface CardProps {
    className?: string | any;
    plain?: boolean;
    profile?: boolean;
    chart?: boolean;
    children?: React.ReactNode;
    [rest: string]: any;
}
