import React from 'react';
import FeatureElement from './FeaturElement';

function MainFeatures() {
    return (
        <ul className='about__features'>
            <FeatureElement name={'barber'} text={'Стрижки'} buttonText={'Записаться'} path={'recorder'}/>
            <FeatureElement name={'hair'} text={'Укладки'} buttonText={'Записаться'} path={'recorder'}/>
            <FeatureElement name={'space'} text={'Едниство с космосом'} buttonText={'Объединиться'} path={'recorder'}/>
            <FeatureElement name={'soul'} text={'Духовное просвещение'} buttonText={'Просветиться'} path={'recorder'}/>
        </ul>
    );
}

export default MainFeatures;