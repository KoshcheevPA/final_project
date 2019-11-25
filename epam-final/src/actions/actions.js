const logIn = () => {
    return {
        type: 'USER_LOG_IN'
    }
};

const logOff = () => {
    return {
        type: 'USER_LOG_OFF'
    }
};

const userLogOff = (dispatch) => () => {
    dispatch(logOff());
};

const userLogIn = (dispatch) => () => {
    dispatch(logIn());
};

export const addOrder = (newOrder) => ({
    type: 'ADD_ORDER',
    newOrder
});

export const deleteOrder = (orderId) => ({
    type: 'DELETE_ORDER',
    orderId
});

export  {
    userLogIn,
    userLogOff
};