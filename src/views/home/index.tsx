import React, { useEffect, useState } from 'react';
import logging from '../../config/logging';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAppState } from '../../store';
import { IAppActions } from '../../store/models/actions';
import { setCategory, setProducts } from '../../store/product/actions';
import { IProductItem } from '../../store/product/types';
import IProps, { IDispatchProps, IStateProps } from './home.typs';

const HomePage: React.FC<IProps> = (props) => {
    const [query, setQuery] = useState<string>('');
    const [currPage, setCurrPage] = useState<number>(1);

    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, [props.name]);

    useEffect(() => {
        props.setProducts(query, currPage);

        // eslint-disable-next-line
    }, [query, currPage]);

    return (
        <div>
            {props.items.map((item: IProductItem) => (
                <div key={item.name}>{item.name}</div>
            ))}

            <div>{query}</div>
            <button onClick={() => setQuery(query + '1')}>2</button>
        </div>
    );
};

const mapStateToProps = (state: IAppState): IStateProps => ({
    category: state.product.category,
    items: state.product.items,
    pagination: state.product.pagination,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<IAppState, {}, IAppActions>
): IDispatchProps => {
    return {
        setCategory: bindActionCreators(setCategory, dispatch),
        setProducts: bindActionCreators(setProducts, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
