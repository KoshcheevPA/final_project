import React from 'react';

function ServiceSelect(props) {
    const optionItem = props.services.map(service =>
        <option value={service.serviceName} selected={props.selectedItem === service.serviceName} >{service.serviceName}</option>
    );

    return (
        <select className='form__input'>
            {optionItem}
        </select>
    );
}

export default ServiceSelect;