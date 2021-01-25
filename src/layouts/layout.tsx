import React from 'react';
import IPage from '../interfaces/page';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const Layout: React.FC<IPage & RouteComponentProps<any>> = (props) => {
    return <div>{props.children}</div>;
};

export default withRouter(Layout);
