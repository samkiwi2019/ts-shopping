import React, { useEffect } from 'react';
import logging from '../../config/logging';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAppState } from '../../store';
import { IAppActions } from '../../store/models/actions';
import { setSearch, setProducts } from '../../store/product/actions';
import { IProductItem } from '../../store/product/types';
import IProps, { IDispatchProps, IStateProps } from './home.typs';

const HomePage: React.FC<IProps> = (props) => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, [props.name]);

    useEffect(() => {
        props.setProducts(props.search);

        // eslint-disable-next-line
    }, [props.search]);

    return (
        <div>
            {props.items.map((item: IProductItem) => (
                <div key={item.name}>{item.name}</div>
            ))}

            <button onClick={() => props.setSearch({ page: 1 })}>1</button>
            <button onClick={() => props.setSearch({ page: 2 })}>2</button>
            <button onClick={() => props.setSearch({ page: 3 })}>3</button>
            <button onClick={() => props.setSearch({ page: 4 })}>4</button>
        </div>
    );
};

const mapStateToProps = (state: IAppState): IStateProps => ({
    search: state.product.search,
    items: state.product.items,
    pagination: state.product.pagination,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<IAppState, {}, IAppActions>
): IDispatchProps => {
    return {
        setSearch: bindActionCreators(setSearch, dispatch),
        setProducts: bindActionCreators(setProducts, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
