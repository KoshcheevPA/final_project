import React from 'react';
import '../App.css';
import {NavLink} from "react-router-dom";


function Navigation() {
    return (
        <nav className='page-header__navigation'>
            <ul className='page-header__list'>
                <li className='page-header__list-item'>
                    <NavLink to='/main' className='page-header__link'>Главная</NavLink>
                </li>
                <li className='page-header__list-item'>
                    <NavLink to='/recorder' className='page-header__link'>Список услуг</NavLink>
                </li>
                <li className='page-header__list-item'>Личный кабинет</li>
            </ul>
        </nav>
    );
}

export default Navigation;