import axios from './api.request';
import { AxiosPromise } from 'axios';
import { IProductItem, IPagination, ISearch } from '../store/product/types';

export const getProductsByCategory = (
    params: ISearch
): AxiosPromise<{ items: IProductItem[]; pagination: IPagination }> => {
    return axios.request({
        url: '/api/v1/products',
        method: 'get',
        params,
    });
};

export const getProductsById = (
    productId: string
): AxiosPromise<{ items: IProductItem[] }> => {
    return axios.request({
        url: `/api/v1/products/${productId}/items`,
        method: 'get',
    });
};

// Not used temporarily
export const getProductsByRelated = (params: any): AxiosPromise<any> => {
    return axios.request({
        url: '/api/v1/products/related',
        method: 'get',
        params: params,
    });
};

export const SetSpiderSchedule = (): AxiosPromise<any> => {
    return axios.request({
        url: '/api/v1/products/setSpiderSchedule',
        method: 'post',
    });
};
