import React from 'react';

function ServiceSelect(props) {
    let id = 1200;
    const optionItem = props.services.map(service =>
        <option defaultValue={service.serviceName} key={id++}>{service.serviceName} {service.price}₽</option>
    );

    return (
        <select className='form__input' name={props.name} ref={props.refName} defaultValue={props.selectedItem}>
            {optionItem}
        </select>
    );
}

export default ServiceSelect;