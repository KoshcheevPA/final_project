import React from 'react';
import Navigation from "./Navigation";
import {NavLink} from "react-router-dom";
import Theme from "./Theme";

function Header() {
    return (
        <header className='page-header'>
            <NavLink to='/' className='page-header__logo-link'>
                <svg className='page-header__logo' width="65px" height="75px"
                      viewBox="0 0 8438.26 7777.75"
                      fill="#09d3ac">
                    <g id="Layer_x0020_1">
                        <g id="_2687018709184">
                            <polygon className="fil0"
                                     points="-0,5199.99 -0,4161.36 1835.49,4504.07 2493.59,1231.5 2569.35,1231.5 4233.12,4102.37 4245.57,5945.71 4175.01,5945.71 2904.6,3740.15 2517.47,5783.8 "/>
                            <g>
                                <polygon className="fil0"
                                         points="8434.24,5199.99 8430.17,4129.15 6598.75,4504.07 5940.65,1231.5 5864.89,1231.5 4201.13,4102.37 4188.67,5945.71 4259.23,5945.71 5529.64,3740.15 5916.77,5783.8 "/>
                                <circle className="fil1" cx="4201.13" cy="1054.78" r="1054.78"/>
                                <polygon className="fil1"
                                         points="-0,5691.16 4201.13,6993.19 8438.26,5691.16 8404.98,6909.57 4201.13,8003.53 -0,6909.57 "/>
                            </g>
                        </g>
                    </g>
                </svg>
            </NavLink>
            <Navigation />
            <Theme/>
        </header>
    );
}

export default Header;