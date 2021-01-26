import IPage from '../../interfaces/page';
import {
    ISearch,
    IPagination,
    IProductActionTypes,
    IProductItem,
} from '../../store/product/types';

export interface IStateProps {
    search: ISearch;
    items: IProductItem[];
    pagination: IPagination;
}
export interface IDispatchProps {
    setSearch: (newSearch: ISearch) => IProductActionTypes;
    setProducts: (search: ISearch) => void;
}

type IProps = IPage & IStateProps & IDispatchProps;

export default IProps;
