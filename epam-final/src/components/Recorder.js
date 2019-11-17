import React from 'react';
import '../App.css';
import ServiceItem from "./ServiceItem";

function Recorder() {
    return (
        <div className='service'>
            <ul className='service__list'>
                <ServiceItem serviceName={'Модельная стрижка'} description={'Модельная стрижка от нашего лучшего мастера'} price={'500'} path={''}/>
                <ServiceItem serviceName={'Укладка'} description={'Мастерская укладка от нашего визажиста'} price={'400'} path={''}/>
                <ServiceItem serviceName={'Покраска волос'} description={'Во все цвета радуги'} price={'1000'} path={''}/>
                <ServiceItem serviceName={'Ногтевой сервис'} description={'Покрытие гелем, лаком'} price={'700'} path={''}/>
                <ServiceItem serviceName={'Ногтевой сервис'} description={'Покрытие гелем, лаком'} price={'700'} path={''}/>
                <ServiceItem serviceName={'Косметические услуги'} description={'................................'} price={'700'} path={''}/>
            </ul>
        </div>
    );
}

export default Recorder;