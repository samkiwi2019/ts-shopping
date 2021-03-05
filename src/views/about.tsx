import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

const AboutPage: React.FC<IPage & RouteComponentProps<any>> = (props) => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        logging.info(`Loading ${props.name}`);

        let number = props.match.params.number;

        if (number) {
            setMessage(`The Number is ${number}`);
        } else {
            setMessage(`No number provided！`);
        }
    }, [props.name, props.match.params.number]);

    return (
        <div>
            <h4> Coming soon ...</h4>
            <Link to='/paknsave'> Go to Paknsave!</Link>
        </div>
    );
};

export default withRouter(AboutPage);
