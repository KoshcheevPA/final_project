import React from 'react';
import '../App.css';

function FooterSocialItem(props) {
    return (
        <li className='page-footer__social-item'>
            <a href={props.path} className={'page-footer__social-link page-footer__social-link--' + props.name}></a>
        </li>
    );
}

export default FooterSocialItem;