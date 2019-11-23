import React from 'react';
import Button from "../Utils/Button";
import LinkButton from "../Utils/LinkButton";

function LoginForm() {
    return (
        <form className='form'>
            <ul className='form__list'>
                <li className='form__item'>
                    <label className='form__text' htmlFor='userEmail'>Email:</label>
                    <input className='form__input' type='email' id='userEmail'/>
                </li>
                <li className='form__item'>
                    <label className='form__text' htmlFor='pass'>Пароль:</label>
                    <input className='form__input' type='password' id='pass' />
                </li>
            </ul>
            <div className='form__button-container'>
                <Button type={'submit'} buttonText={'Войти'}/>
                <LinkButton path='/registration' buttonText={'Регистрация'}/>
            </div>
        </form>
    );
}

export default LoginForm;