import React, { useEffect } from 'react';
import IProps, { IDispatchProps, IStateProps } from './home.types';
import DataTable from './DataTable';
import logging from '../../config/logging';
import MySelect from '../../components/MySelect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAppState } from '../../store';
import { IAppActions } from '../../store/models/actions';
import { setProducts, setSearch } from '../../store/product/actions';

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

const HomePage: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { name, search, setSearch } = props;

    useEffect(() => {
        logging.info(`Loading ${name}`);
    }, [name]);

    const handleEmit = (val: string) => {
        setSearch({
            ...search,
            category: val,
        });
    };

    return (
        <div>
            <MySelect
                items={categories}
                handleEmit={handleEmit}
                title='Category'
            />
            <DataTable name='paknsave_table'></DataTable>
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
