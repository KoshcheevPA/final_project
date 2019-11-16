import React from 'react';
import '../App.css';
import {NavLink} from "react-router-dom";

function NavigationItem(props) {
    return (
        <li className='page-header__list-item'>
            <NavLink to={props.path} className='page-header__link'>{props.text}</NavLink>
        </li>
    );
}

export default NavigationItem;