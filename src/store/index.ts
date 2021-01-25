import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { IAppActions } from './models/actions';
import { productReducer } from './product/reducer';

const logger = createLogger();

const rootReducer = combineReducers({
    product: productReducer,
});

const bindMiddleware = (middleware: any) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const store = createStore(
    rootReducer,
    bindMiddleware([thunk as ThunkMiddleware<IAppState, IAppActions>, logger])
);

export type IAppState = ReturnType<typeof rootReducer>;

export default store;
