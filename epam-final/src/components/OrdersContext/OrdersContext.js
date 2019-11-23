import React from 'react';

const {
    Provider: OrdersProvider,
    Consumer: OrdersConsumer
} = React.createContext();

export { OrdersProvider, OrdersConsumer }