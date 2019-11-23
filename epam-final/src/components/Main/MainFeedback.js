import React from 'react';
import FeedbackItem from "./FeedbackItem";

function MainFeedback() {
    return (
        <div className='about__feedback'>
            <h2 className='about__title'>Отзывы наших клиентов</h2>
            <ul className='about__feedback-list'>
                <FeedbackItem  personName={'Сергей Кунжутович'}  avatarUrl={''}
                               commentText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
                               ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                               'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                               'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
                               'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
                <FeedbackItem  personName={'отец Сергея Кунжутовича'}  avatarUrl={require('../../img/union.jpg')}
                               commentText={'Ваш салон просто ОТВАЛ БАШКИ'}/>
                <FeedbackItem  personName={'дед Сергея Кунжутовича'}  avatarUrl={require('../../img/barber.jpg')}
                               commentText={'Раньше лучше было'}/>
            </ul>
        </div>
    );
}

export default MainFeedback;