import React from 'react';
import {NavLink} from "react-router-dom";

function LinkButton(props) {
    return (
        <NavLink to={props.path} className='about__button button'>{props.buttonText}</NavLink>
    );
}

export default LinkButton;