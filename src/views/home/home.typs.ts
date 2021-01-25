import IPage from '../../interfaces/page';
import {
    ICategory,
    IPagination,
    IProductActionTypes,
    IProductItem,
} from '../../store/product/types';

interface Props {}

export interface IStateProps {
    category: string;
    items: IProductItem[];
    pagination: IPagination;
}
export interface IDispatchProps {
    setCategory: (newCategory: ICategory) => IProductActionTypes;
    setProducts: (query: string, page: number) => void;
}

type IProps = IPage & Props & IStateProps & IDispatchProps;

export default IProps;
