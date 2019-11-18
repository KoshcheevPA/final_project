import React from 'react';
import FooterInfo from "./FooterInfo";
import FooterSocialItem from "./FooterSocialItem";

function Footer() {
    return (
        <footer className='page-footer'>
            <ul className='page-footer__list'>
                <FooterInfo firstMessage={'Санкт-Петербург ул. Медитативная 21'} secondMessage={'+7 (800) 555-35-35'}/>
                <FooterInfo firstMessage={'Открыты для вас ежедневно'} secondMessage={'с 10:00 до 23:00'} />
                <li className='page-footer__list-item'>
                    <ul className='page-footer__social-list'>
                        <FooterSocialItem name={'facebook'} path={'#'} />
                        <FooterSocialItem name={'instagram'} path={'#'} />
                        <FooterSocialItem name={'vk'} path={'#'} />
                        <FooterSocialItem name={'twitter'} path={'#'} />
                    </ul>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;