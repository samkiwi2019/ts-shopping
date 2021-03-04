import { Dispatch } from 'react';
import { getProductsByCategory } from '../../api/product';
import {
    IProductActionTypes,
    SET_SEARCH,
    SET_PRODUCTS,
    ISearch,
} from './types';

// sync function
export function setSearch(newSearch: ISearch): IProductActionTypes {
    return {
        type: SET_SEARCH,
        payload: newSearch,
    };
}

// async function
export const setProducts = (params: ISearch) => {
    return async (dispatch: Dispatch<IProductActionTypes>) => {
        const { data } = await getProductsByCategory(params);
        dispatch({
            type: SET_PRODUCTS,
            payload: data,
        });
    };
};
