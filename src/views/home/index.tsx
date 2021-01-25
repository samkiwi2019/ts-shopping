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
import MyButton from '../../components/MyButton';

const categories = [
    { key: 'All Categories', val: '' },
    { key: 'Fresh foods', val: 'fresh-foods-and-bakery' },
    { key: 'Pantry', val: 'pantry' },
    { key: 'Drinks', val: 'drinks' },
    { key: 'Beer cider and wine', val: 'beer-cider-and-wine' },
    { key: 'Personal care', val: 'personal-care' },
    { key: 'Baby toddler', val: 'baby-toddler-and-kids' },
    { key: 'Pets', val: 'pets' },
    {
        key: 'Kitchen',
        val: 'kitchen-dining-and-household',
    },
];

const HomePage: React.FC<IProps> = (props): JSX.Element => {
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

            <MyButton color='primary' size='sm' onClick={() => console.log(1)}>
                1
            </MyButton>
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
