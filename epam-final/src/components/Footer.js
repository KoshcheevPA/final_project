import React from 'react';
import '../App.css';

function Footer() {
    return (
        <footer className='page-footer'>
            <ul className='page-footer__list'>
                <li className='page-footer__list-item'>
                    <p className='page-footer__text'>Санкт-Петербург ул. Медитативная 21</p>
                    <p className='page-footer__text'>+7 (800) 555-35-35</p>
                </li>
                <li className='page-footer__list-item'>
                    <p className='page-footer__text'>Открыты для вас ежедневно</p>
                    <p className='page-footer__text'>с 10:00 до 23:00</p>
                </li>
                <li className='page-footer__list-item'>
                    <ul className='page-footer__social-list'>
                        <li className='page-footer__social-item'>
                            <a href='#' className='page-footer__social-link page-footer__social-link--facebook'></a>
                        </li>
                        <li className='page-footer__social-item'>
                            <a href='#' className='page-footer__social-link page-footer__social-link--instagram'></a>
                        </li>
                        <li className='page-footer__social-item'>
                            <a href='#' className='page-footer__social-link page-footer__social-link--twitter'></a>
                        </li>
                        <li className='page-footer__social-item'>
                            <a href='#' className='page-footer__social-link page-footer__social-link--vk'></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;