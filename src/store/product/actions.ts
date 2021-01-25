import { Dispatch } from 'react';
import {
    ICategory,
    IProductActionTypes,
    SET_CATEGORY,
    SET_PRODUCTS,
} from './types';

// sync function
export function setCategory(newCategory: ICategory): IProductActionTypes {
    return {
        type: SET_CATEGORY,
        payload: newCategory,
    };
}

// async function
export const setProducts = (query: string, page: number = 1) => {
    return async (dispatch: Dispatch<IProductActionTypes>) => {
        const res = await fetch('https://spider.keenneed.com/api/products');
        const json = await res.json();
        dispatch({
            type: SET_PRODUCTS,
            payload: json,
        });
    };
};
