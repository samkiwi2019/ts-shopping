export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export interface IProductState {
    category: string;
    items: IProductItem[];
    pagination: IPagination;
}

export interface ICategory {
    name: string;
}

export interface ISearch {
    category: string;
    page: number;
    query: string;
    isPromotion: boolean;
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

interface ISetCategoryAction {
    type: typeof SET_CATEGORY;
    payload: ICategory;
}

interface ISetProductsAction {
    type: typeof SET_PRODUCTS;
    payload: IProducts;
}

export type IProductActionTypes = ISetCategoryAction | ISetProductsAction;
