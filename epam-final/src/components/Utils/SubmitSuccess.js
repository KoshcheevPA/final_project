import React from 'react';
import LinkButton from './LinkButton';
import { Redirect } from 'react-router-dom'

function SubmitSuccess(props) {
    const onRedirect = () => {
        return <Redirect to='/orders'/>;
    };

    return (
        <div className='message'>
            <p>Ваша заявка принята</p>
            <LinkButton path='/orders' buttonText='Ok'/>
            {onRedirect()}
        </div>
    );
}

export default SubmitSuccess;