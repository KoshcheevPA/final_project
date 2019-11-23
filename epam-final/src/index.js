import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from 'react-redux';
import OrdersData from "./OrdersData";
import {OrdersProvider} from "./components/OrdersContext";

const ordersData = new OrdersData()

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <OrdersProvider value={ordersData}>
                <App />
            </OrdersProvider>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
