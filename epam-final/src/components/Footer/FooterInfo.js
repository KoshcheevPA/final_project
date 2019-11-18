import React from 'react';

function FooterInfo(props) {
    return (
        <li className='page-footer__list-item'>
            <p className='page-footer__text'>{props.firstMessage}</p>
            <p className='page-footer__text'>{props.secondMessage}</p>
        </li>
    );
}

export default FooterInfo;