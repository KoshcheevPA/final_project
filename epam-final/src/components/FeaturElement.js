import React from 'react';
import '../App.css';
import {NavLink} from "react-router-dom";

function FeaturElement(props) {
    return (
        <li className={'about__features-item about__features-item--'+props.name}>
            <div className='about__features-container'>
                <p className='about__features-title'>{props.text}</p>
                <NavLink to={props.path} className='about__button'>{props.buttonText}</NavLink>
            </div>
        </li>
    );
}

export default FeaturElement;