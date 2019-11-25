const logIn = (email) => {
    return {
        type: 'USER_LOG_IN'
    }
};

const logOff = () => {
    return {
        type: 'USER_LOG_OFF'
    }
};

export const userLogOff = (dispatch) => () => {
    dispatch(logOff());
};

export const userLogIn = (dispatch) => () => {
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

export const userInfoEdit = () => ({
    type: 'USER_INFO_EDIT'
});

export const saveUserInfo = (info) => ({
    type: 'SAVE_USER_INFO',
    info
});

export const cancelEdit = () => ({
    type: 'CANCEL_EDIT'
});