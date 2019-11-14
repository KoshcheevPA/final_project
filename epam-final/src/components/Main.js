import React from 'react';
import '../App.css';
import MainAbout from "./MainAbout";
import MainFeatures from "./MainFeatures";
import MainFeedback from "./MainFeedback";

function Main() {
    return (
        <main class='page-main'>
            <section className='about'>
                <h1 className='about__main-title'>Салон красоты «Медитация»</h1>
                <MainFeatures/>
                <h2 className='about__title'>
                    <a name='about'>О салоне</a>
                </h2>
                <MainAbout/>
                <MainFeedback/>
            </section>
        </main>
    );
}

export default Main;