import React from 'react';
import ServicesList from './ServicesList';
import ServiceData from '../../ServiceData';

function Recorder() {
    return (
        <div className='service'>
            <ServicesList services={ServiceData}/>
        </div>
    );
}

export default Recorder;