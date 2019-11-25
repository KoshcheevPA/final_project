/*import React from 'react';
import {OrdersConsumer} from "../OrdersContext";

const withOrders = () => (Wrapped) => {
    return (props) => {
        return (
            <OrdersConsumer>
                {
                    (ordersData) => {
                        return (
                            <Wrapped {...props} ordersData={ordersData} />);
                    }
                }
            </OrdersConsumer>
        );
    }
}

export default withOrders;*/