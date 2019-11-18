import React from 'react';
import '../App.css';
import LinkButton from "./Utils/LinkButton";
import LinkTitle from "./Utils/LinkTitle";

function ServiceItem(props) {
    const {service} = props;
    return (
        <div className='service__item-container'>
            <LinkTitle path={service.path} titleText={service.serviceName}/>
            <div className='service__container'>
                <p className='service__description'>{service.description}</p>
                <span className='service__price'>от {service.price}₽</span>
                <LinkButton path={service.path} buttonText={'Подробнее'} />
            </div>
        </div>

    );
}

export default ServiceItem;