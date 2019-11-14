import React from 'react';
import '../App.css';

function MainFeedback() {
    return (
        <div className='about__feedback'>
            <h2 className='about__title'><a name='feedback'>Отзывы наших клиентов</a></h2>
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
    );
}

export default MainFeedback;