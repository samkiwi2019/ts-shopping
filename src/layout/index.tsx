import React from 'react';
import IPage from '../interfaces/page';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const Layout: React.FC<IPage & RouteComponentProps<any>> = (props) => {
    return (
        <div>
            <h2>Layout</h2>
            {props.children}
        </div>
    );
};

export default withRouter(Layout);
