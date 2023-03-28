import React from 'react';
import "./about.css";
import photo from '../../photos/Nicoov.jpg';
import { useTranslation } from 'react-i18next';

const About = () => {

    const { t } = useTranslation();
    return (
        <>
            <section className='about'>
                <div className='container'>
                    <img src={photo}></img>
                    <div className='about-text'>
                        <h2>{t('title')}</h2>
                        <p>{t('text')}</p>
                    </div>
                </div>
            </section>
        </>

    )
}


export default About