import React from 'react';
import LinkButton from "./LinkButton";

function SubmitSuccess(props) {
    return (
        <div className='message'>
            <p>Ваша заявка принята</p>
            <LinkButton path='/orders' buttonText='Ok'/>
        </div>
    );
}

export default SubmitSuccess;