import React from 'react';
import '../App.css';
import {NavLink} from "react-router-dom";

function Main() {
    return (
        <main class='page-main'>
            <section className='about'>
                <h1 className='about__main-title'>Салон красоты «Медитация»</h1>
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
                <h2 className='about__title'>О салоне</h2>
                <div className='about__description'>
                    <div className='about__description-container'>
                        <span className='about__description-name'>«Медитация»</span>
                        <p className='about__description-text'>Это уютный современный салон красоты в центре Санкт-Петербурга</p>
                        <p className='about__description-text'>Приятная и комфортная атмосфера</p>
                        <p className='about__description-text'>Достигайте союза вашей души и вашего тела</p>
                        <p className='about__description-text'>Для гостей салона предусмотрены парковка, Wi-fi и вкусный индийский чай</p>
                    </div>
                </div>
                <div className='about__feedback'>
                    <h2 className='about__title'>Отзывы наших клиентов</h2>
                    <ul className='about__feedback-list'>
                        <li className='about__feedback-item'>
                            <p className='about__feedback-name'>Валерия</p>
                            <p className='about__feedback-text'>Салон супер</p>
                        </li>
                        <li className='about__feedback-item'>
                            <p className='about__feedback-name'>не Валерия</p>
                            <p className='about__feedback-text'>Салон не супер</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Main;