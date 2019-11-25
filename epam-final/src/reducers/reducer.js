const initialState = {
    orders: [],
    isLoggedIn: false,
    infoEdit: false,
    userName: 'Александр Керенский',
    userEmail: 'kerenskyi@gov.ru'
};

const reducer = (state = initialState, action) => {
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
        case 'USER_INFO_EDIT':
            return {
                ...state,
                infoEdit: true
            };
        case 'SAVE_USER_INFO':
            return {
                ...state,
                infoEdit: false,
                userName: action.info.userName,
                userEmail: action.info.userEmail
            };
        default:
            return state;
    }
};

export default reducer;