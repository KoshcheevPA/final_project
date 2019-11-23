import React from 'react';
import Button from "../Utils/Button";
import LinkButton from "../Utils/LinkButton";

function Registration() {
    return (
        <form className='form'>
            <ul className='form__list'>
                <li className='form__item'>
                    <label className='form__text' htmlFor='userRegName'>Ваше имя:</label>
                    <input className='form__input' type='text' id='userRegName'/>
                </li>
                <li className='form__item'>
                    <label className='form__text' htmlFor='regEmail'>Email:</label>
                    <input className='form__input' type='email' id='regEmail' />
                </li>
                <li className='form__item'>
                    <label className='form__text' htmlFor='pass'>Пароль:</label>
                    <input className='form__input' type='password' id='pass' />
                </li>
            </ul>
            <div className='form__button-container'>
                <Button type={'submit'} buttonText={'Зарегистрироваться'}/>
                <LinkButton path='/login' buttonText={'Назад'}/>
            </div>
        </form>
    );
}

export default Registration;