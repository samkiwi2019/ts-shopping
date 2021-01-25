import React, { Suspense, useEffect } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    RouteComponentProps,
} from 'react-router-dom';
import logging from './config/logging';
import routes from './config/routes';
import { Provider } from 'react-redux';
import store from './store';

const Application: React.FC<{}> = (props) => {
    useEffect(() => {
        logging.info(`Loading application`);
    }, []);
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {routes.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    render={(
                                        props: RouteComponentProps<any>
                                    ) => (
                                        <route.component
                                            name={route.name}
                                            {...props}
                                            {...route.props}
                                        />
                                    )}
                                />
                            );
                        })}
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </Provider>
    );
};

export default Application;
