import React from 'react';
import '../App.css';
import Recorder from "./Recorder";

function ServiceItem(props) {
    return (
        <li className='service__item'>
            <h2 className='service__title'>{props.serviceName}</h2>
            <div className='service__container'>
                <p className='service__description'>{props.description}</p>
                <span className='service__price'>{props.price}₽</span>
                <button className='service__button button' type='button'>Записаться</button>
            </div>
        </li>
    );
}

export default ServiceItem;