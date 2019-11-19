import React from 'react';
import Button from "../Utils/Button";
import ServiceData from "../../ServiceData";
import ServiceSelect from "./ServicesSelect";

function ServiceForm(props) {
    return (
        <form className='form'>
            <ul className='form__list'>
                <li className='form__item'>
                    <label className='form__text' htmlFor='nameInput'>Услуга:</label>
                    <ServiceSelect services={ServiceData} selectedItem={props.selectedItem}/>
                </li>
                <li className='form__item'>
                    <label className='form__text' htmlFor='nameInput'>Ваше имя:</label>
                    <input className='form__input' type='text' placeholder='Ваше имя' id='nameInput' required/>
                </li>
                <li className='form__item'>
                    <label className='form__text' htmlFor='emailInput'>Ваш email:</label>
                    <input className='form__input' type='email' placeholder='Ваш email' id='emailInput' required/>
                </li>
                <li className='form__item'>
                    <label className='form__text' htmlFor='dateInput'>Дата:</label>
                    <input className='form__input' type='date' placeholder='Желаемая дата' id='dateInput' required/>
                </li>
                <li className='form__item'>
                    <label className='form__text' htmlFor='timeInput'>Время:</label>
                    <input className='form__input' type='time' placeholder='Желаемая дата' id='timeInput' required/>
                </li>
            </ul>
            <Button type={'submit'} buttonText={'Отправить'}/>
        </form>
    );
}

export default ServiceForm;