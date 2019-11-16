import React from 'react';
import '../App.css';
import Recorder from "./Recorder";
import LinkButton from "./LinkButton";

function ServiceItem(props) {
    return (
        <li className='service__item'>
            <h2 className='service__title'>{props.serviceName}</h2>
            <div className='service__container'>
                <p className='service__description'>{props.description}</p>
                <span className='service__price'>от {props.price}₽</span>
                <LinkButton path={''} buttonText={'Подробнее'} />
            </div>
        </li>
    );
}

export default ServiceItem;