import React from 'react';
import LinkButton from "./LinkButton";

function FeaturElement(props) {
    return (
        <li className={'about__features-item about__features-item--'+props.name}>
            <div className='about__features-container'>
                <p className='about__features-title'>{props.text}</p>
                <LinkButton path={props.path} buttonText={props.buttonText} />
            </div>
        </li>
    );
}

export default FeaturElement;