const initialState = {
    orders: [],
    loading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ORDERS_REQUEST':
            return {
                orders: [],
                loading: true
            }
        case 'FETCH_ORDERS_LOAD':
            return {
                orders: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;