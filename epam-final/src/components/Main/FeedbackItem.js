import React from 'react';

function FeedbackItem(props) {
    return (
        <li className='about__feedback-item'>
            <div className='about__person-container'>
                <img src={props.avatarUrl} className='about__avatar' alt='user avatar'/>
                <p className='about__feedback-name'>{props.personName}</p>
            </div>
            <p className='about__feedback-text'>
                {props.commentText}
            </p>
        </li>
    );
}

export default FeedbackItem;