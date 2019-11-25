import React from 'react';
import Button from "../Utils/Button";
import LinkButton from "../Utils/LinkButton";
import { Redirect } from 'react-router-dom';

function LoginForm({isLoggedIn, onLogin}) {
    if(isLoggedIn) {
        return <Redirect to='/private' />
    }
    return (
        <form className='form'>
            <ul className='form__list'>
                <li className='form__item'>
                    <label className='form__text' htmlFor='userEmail'>Email:</label>
                    <input className='form__input' type='email' id='userEmail' placeholder='Ваш email'/>
                </li>
                <li className='form__item'>
                    <label className='form__text' htmlFor='pass'>Пароль:</label>
                    <input className='form__input' type='password' id='pass' placeholder='Ваш пароль'/>
                </li>
            </ul>
            <div className='form__button-container'>
                <Button type={'button'} buttonText={'Войти'} onClick={onLogin}/>
                <LinkButton path='/registration' buttonText={'Регистрация'}/>
            </div>
        </form>
    );
}

export default LoginForm;