import { Dispatch } from 'react';
import { getDataByCategory } from '../../api/product';
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
        const { data } = await getDataByCategory(params);
        dispatch({
            type: SET_PRODUCTS,
            payload: data,
        });
    };
};
