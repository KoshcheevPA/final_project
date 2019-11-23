import React from 'react';
import ServiceItem from "./ServiceItem";

function ServicesList({services}) {
    const servicesElements = services.map(service =>
        <li className='service__item' key={service.id}>
            <ServiceItem service={service}/>
        </li>
    );

    return (
        <ul className='service__list'>
            {servicesElements}
        </ul>
    );
}

export default ServicesList;