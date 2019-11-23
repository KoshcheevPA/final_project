const ordersLoaded = (newOrders) => {
    return {
        type: 'FETCH_ORDERS_LOAD',
        payload: newOrders
    }
};

const ordersRequested = () => {
    return {
        type: 'FETCH_ORDERS_REQUEST'
    }
};

const fetchOrders = (ordersData, dispatch) => () => {
    dispatch(ordersRequested());
    ordersData.getOrders().then((data) =>
        dispatch(ordersLoaded(data)));
};

export  {
    fetchOrders
};