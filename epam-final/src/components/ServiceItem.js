import React from 'react';
import '../App.css';
import Recorder from "./Recorder";
import LinkButton from "./LinkButton";
import LinkTitle from "./LinkTitle";

function ServiceItem(props) {
    return (
        <li className='service__item'>
            <LinkTitle path={''} titleText={props.serviceName}/>
            <div className='service__container'>
                <p className='service__description'>{props.description}</p>
                <span className='service__price'>от {props.price}₽</span>
                <LinkButton path={props.path} buttonText={'Подробнее'} />
            </div>
        </li>
    );
}

export default ServiceItem;