import React from 'react';
import Button from "../Utils/Button";

const OrderListItem = ({ order }) => {
    const {service, time, id} = order;
    return (
        <div className='service__item-container'>
            <div className='service__container'>
                <p className='service__description'>{service}</p>
                <span className='service__price'>{time}</span>
                <Button type={'button'} onClick={() => {console.log('Удаление' + id)}} buttonText={'Отменить запись'}/>
            </div>
        </div>
    );
};

export default OrderListItem;