import React from 'react';
import '../App.css';
import FeaturElement from "./FeaturElement";

function MainFeatures() {
    return (
        <ul className='about__features'>
            <FeaturElement name={'barber'} text={'Стрижка'} buttonText={'Записаться'} path={'recorder'}/>
            <FeaturElement name={'hair'} text={'Укладка'} buttonText={'Записаться'} path={'recorder'}/>
            <FeaturElement name={'space'} text={'Едниство с космосом'} buttonText={'Объединиться'} path={'recorder'}/>
            <FeaturElement name={'soul'} text={'Духовное просвещение'} buttonText={'Просветиться'} path={'recorder'}/>
        </ul>
    );
}

export default MainFeatures;