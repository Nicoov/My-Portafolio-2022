import React from 'react';
import './proyectos.css';
import tenisup from '../../photos/TenisUp.jpeg';
import discord from '../../photos/Discord.png'
import { useTranslation } from 'react-i18next';


const Proyectos = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='proyectos-title'>
                <h2>{t('proyectos')}</h2>
            </div>
            <section className='proyectos-container'>
                <div className='card'>
                    <div className='face front'>
                        <img className="front-img" alt='proyecto1' src={tenisup}></img>
                    </div>
                    <div className='face back'>
                        <p>2021</p>
                        <p> {t('about-pro')}</p>
                        <p> JavaScript-React</p>
                        <div className='link'>
                            <a href='https://www.tenis-up.cl' rel="noreferrer" target='_blank'>
                                <button>{t('view')}</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='face front'>
                        <img className="front-img" alt='proyecto1' src={discord}></img>
                    </div>
                    <div className='face back'>
                        <p>2022</p>
                        <p> {t('about-pro-2')}</p>
                        <p> JavaScript-React</p>
                        <div className='link'>
                            <a href='https://github.com/Nicoov/Anya-bot' rel="noreferrer" target='_blank'>
                                <button>{t("view-2")}</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Proyectos