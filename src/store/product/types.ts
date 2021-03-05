export const SET_SEARCH = 'SET_SEARCH';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export interface IProductState {
    search: ISearch;
    items: IProductItem[];
    pagination: IPagination;
}

export interface ICategory {
    name: string;
}

export interface ISearch {
    category?: string;
    query?: string;
    isPromotion?: boolean;
    currPage: number;
    pageSize: number;
    sortBy?: Dictionary<number>;
}

interface Dictionary<T> {
    [Key: string]: T;
}

export interface IProductItem {
    id: number;
    productId: string;
    supplier: string;
    category: string;
    name: string;
    img: string;
    prefix: string;
    price: string;
    unit: string;
    compare: number;
    latest: boolean;
    date: string;
}

export interface IPagination {
    page: number;
    pageSize: number;
    total: number;
}

export interface IProducts {
    items: IProductItem[];
    pagination: IPagination;
}

interface ISetSearchAction {
    type: typeof SET_SEARCH;
    payload: ISearch;
}

interface ISetProductsAction {
    type: typeof SET_PRODUCTS;
    payload: IProducts;
}

export type IProductActionTypes = ISetSearchAction | ISetProductsAction;
