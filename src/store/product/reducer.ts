import {
    IProductActionTypes,
    IProductState,
    SET_CATEGORY,
    SET_PRODUCTS,
} from './types';

const initialState: IProductState = {
    category: 'all product',
    items: [],
    pagination: {
        page: 1,
        pageSize: 10,
        total: 0,
    },
};

export function productReducer(
    state = initialState,
    action: IProductActionTypes
): IProductState {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload.name,
            };
        case SET_PRODUCTS:
            return {
                ...state,
                items: action.payload.items,
                pagination: Object.assign(
                    {},
                    state.pagination,
                    action.payload.pagination
                ),
            };
        default:
            return state;
    }
}
