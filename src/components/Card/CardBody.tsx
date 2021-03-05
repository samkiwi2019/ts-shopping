import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

// core components
import styles from '../../assets/jss/cardBodyStyle';

const useStyles = makeStyles(styles);

export default function CardBody(props: CardBodyProps) {
    const classes = useStyles();
    const { className, children, plain, profile, ...rest } = props;
    const cardBodyClasses = classNames({
        [classes.cardBody]: true,
        [classes.cardBodyPlain]: plain,
        [classes.cardBodyProfile]: profile,
        [className]: className !== undefined,
    });
    return (
        <div className={cardBodyClasses} {...rest}>
            {children}
        </div>
    );
}

interface CardBodyProps {
    children?: React.ReactNode;
    className?: string | any;
    profile?: boolean;
    plain?: boolean;
    [rest: string]: any;
}
