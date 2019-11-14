import React from 'react';
import '../App.css';
import Navigation from "./Navigation";

function Header() {
    return (
        <header className='page-header'>
            <a className='page-header__logo' href='#'>Логотип</a>
            <Navigation />
        </header>
    );
}

export default Header;