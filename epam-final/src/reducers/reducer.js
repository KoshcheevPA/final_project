const initialState = {
    orders: [],
    isLoggedIn: false,
    infoEdit: false
};

const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'USER_LOG_IN':
            return {
                ...state,
                isLoggedIn: true
            };
        case 'USER_LOG_OFF':
            return {
                ...state,
                isLoggedIn: false
            };
        case 'ADD_ORDER':
            return {
                ...state,
                orders: [...state.orders,
                action.newOrder]
            };
        case 'DELETE_ORDER':
            const orderIndex = state.orders.findIndex(({ id }) => id === action.orderId);
            return {
                ...state,
                orders: state.orders.slice(0, orderIndex).concat(state.orders.slice(orderIndex + 1))
            };
        default:
            return state;
    }
};

export default reducer;