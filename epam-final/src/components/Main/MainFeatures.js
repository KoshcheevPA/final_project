import React from 'react';
import FeaturElement from "./FeaturElement";

function MainFeatures() {
    return (
        <ul className='about__features'>
            <FeaturElement name={'barber'} text={'Стрижки'} buttonText={'Записаться'} path={'recorder'}/>
            <FeaturElement name={'hair'} text={'Укладки'} buttonText={'Записаться'} path={'recorder'}/>
            <FeaturElement name={'space'} text={'Едниство с космосом'} buttonText={'Объединиться'} path={'recorder'}/>
            <FeaturElement name={'soul'} text={'Духовное просвещение'} buttonText={'Просветиться'} path={'recorder'}/>
        </ul>
    );
}

export default MainFeatures;