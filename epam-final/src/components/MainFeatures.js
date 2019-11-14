import React from 'react';
import '../App.css';
import {NavLink} from "react-router-dom";

function MainFeatures() {
    return (
        <ul className='about__features'>
            <li className='about__features-item about__features-item--barber'>
                <div className='about__features-container'>
                    <p className='about__features-title'>Стрижки</p>
                    <NavLink to='/recorder' className='about__button'>Записаться</NavLink>
                </div>
            </li>
            <li className='about__features-item about__features-item--hair'>
                <div className='about__features-container'>
                    <p className='about__features-title'>Укладки</p>
                    <NavLink to='/recorder' className='about__button'>Записаться</NavLink>
                </div>
            </li>
            <li className='about__features-item about__features-item--space'>
                <div className='about__features-container'>
                    <p className='about__features-title'>Едниство с космосом</p>
                    <NavLink to='/recorder' className='about__button'>Объединиться</NavLink>
                </div>
            </li>
            <li className='about__features-item about__features-item--soul'>
                <div className='about__features-container'>
                    <p className='about__features-title'>Духовное просвещение</p>
                    <NavLink to='/recorder' className='about__button'>Просветиться</NavLink>
                </div>
            </li>
        </ul>
    );
}

export default MainFeatures;