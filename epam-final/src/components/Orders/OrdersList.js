import React, {Component} from 'react';
import { connect } from 'react-redux';
import OrderListItem from './OrdersListItem';
import {withOrders} from '../hoc';
import {fetchOrders} from '../../actions/actions';
import LoadingMessage from "../Utils/LoadingMessage";

class OrdersList extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        const {orders, loading} = this.props;
        if(loading) {
            return <LoadingMessage/>;
        }
        return (
            <ul className='service__list'>
                {orders.map(order =>
                    <li className='service__item' key={order.id}>
                        <OrderListItem order={order}/>
                    </li>
                )}
            </ul>
        );
    }
}

const mapStateToProps = ({orders, loading}) => {
    return {
        orders,
        loading
    };
};

const mapDispatchToProps =  (dispatch, {ordersData}) => {
    return {
        fetchOrders: fetchOrders(ordersData, dispatch)
    }
};

export default withOrders()(connect(mapStateToProps, mapDispatchToProps)(OrdersList));