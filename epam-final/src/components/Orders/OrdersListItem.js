import React from 'react';
import Button from '../Utils/Button';

const OrderListItem = ({ order, isLoggedIn, onDelete}) => {
    const { service, time, id, date, name } = order;

    const onDeleteHandle = () => {
        onDelete(id);
    };

    return (
        <div className='service__item-container'>
            <div className='service__container'>
                <p className='service__description'>{name}</p>
                <p className='service__info'>{service}</p>
                <span className='service__info'>Дата: {date.split('-')[2]}.{date.split('-')[1]}</span>
                <span className='service__info'>Время: {time}</span>
                {isLoggedIn ? <Button type={'button'} onClick={onDeleteHandle} buttonText={'Отменить запись'} /> : ''}
            </div>
        </div>
    );
};

export default OrderListItem;
