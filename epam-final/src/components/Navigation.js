import React from 'react';
import {NavLink} from "react-router-dom";


function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/main'>Главная</NavLink>
                </li>
                <li>
                    <NavLink to='/recorder'>Список услуг</NavLink>
                </li>
                <li>Личный кабинет</li>
            </ul>
        </nav>
    );
}

export default Navigation;