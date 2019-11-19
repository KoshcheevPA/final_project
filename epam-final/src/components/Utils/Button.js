import React from 'react';

function Button(props) {
    return (
        <button type={props.type} onClick={props.onClick} className='button'>{props.buttonText}</button>
    );
}

export default Button;