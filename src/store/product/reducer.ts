import {
    IProductActionTypes,
    IProductState,
    SET_SEARCH,
    SET_PRODUCTS,
} from './types';

const initialState: IProductState = {
    search: {
        category: '',
        currPage: 1,
        query: '',
        isPromotion: false,
        pageSize: 10,
        sortBy: 'compare',
    },
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
        case SET_SEARCH:
            return {
                ...state,
                search: Object.assign({}, state.search, action.payload),
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
