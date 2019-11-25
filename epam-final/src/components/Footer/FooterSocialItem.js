import React from 'react';

function FooterSocialItem(props) {
    return (
        <li className='page-footer__social-item'>
            <span className={'page-footer__social-link page-footer__social-link--' + props.name}>
            </span>
        </li>
    );
}

export default FooterSocialItem;