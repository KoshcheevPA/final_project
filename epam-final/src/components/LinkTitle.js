import React from 'react';
import {NavLink} from "react-router-dom";
import '../App.css';

function LinkTitle(props) {
    return (
        <NavLink to={props.path} className='service__title'>{props.titleText}</NavLink>
    );
}

export default LinkTitle;