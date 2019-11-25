import React, {Component} from 'react';
import { connect } from 'react-redux';
import OrderListItem from './OrdersListItem';
import { deleteOrder } from '../../actions/actions.js'

class OrdersList extends Component {
  
    render() {
        const {orders, isLoggedIn} = this.props;
        
        if(orders.length === 0) {
            return  (
                <div className='order'>
                    <p className='order__text'>На данный момент вы не записались ни на одну услугу</p>
                </div>
            );
        }
        return (
            <ul className='service__list'>
                {orders.map(order =>
                    <li className='service__item' key={order.id}>
                        <OrderListItem order={order} onDelete={this.props.deleteOrder} isLoggedIn={isLoggedIn}/>
                    </li>
                )}
            </ul>
        );
    }
}

const mapStateToProps = ({orders, loading, isLoggedIn}) => {
    return {
        orders,
        loading,
        isLoggedIn
    };
};

export default connect(mapStateToProps, { deleteOrder })(OrdersList);