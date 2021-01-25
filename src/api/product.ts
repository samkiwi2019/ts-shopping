import axios from './api.request';
import { AxiosPromise } from 'axios';

export const getDataByCategory = (params: any): AxiosPromise<any> => {
    return axios.request({
        url: '/api/products',
        method: 'get',
        params: params,
    });
};

export const getDataById = (params: {
    productId: string;
    q: string | undefined;
}): AxiosPromise<any> => {
    return axios.request({
        url: `/api/products/${params.productId}`,
        method: 'get',
        params: params,
    });
};

export const getProductsById = (params: {
    productId: string;
    q: string | undefined;
}): AxiosPromise<any> => {
    return axios.request({
        url: `/api/products/${params.productId}/all`,
        method: 'get',
        params: params,
    });
};

export const getProductsByRelated = (params: any): AxiosPromise<any> => {
    return axios.request({
        url: '/api/products/related',
        method: 'get',
        params: params,
    });
};

export const SetSpiderSchedule = (): AxiosPromise<any> => {
    return axios.request({
        url: '/api/products/setSpiderSchedule',
        method: 'post',
    });
};
