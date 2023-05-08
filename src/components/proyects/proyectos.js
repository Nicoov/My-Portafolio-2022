import React from 'react';
import './proyectos.css';
import tenisup from '../../photos/TenisUp.jpeg';
import discord from '../../photos/Discord.png'
import quiz from '../../photos/Quiz.jpg'
import mercado from '../../photos/Super.png'
import anime from '../../photos/animelist.jpg'
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
                        <p> JavaScript - React - Css - Firebase</p>
                        <div className='link'>
                            <a href='https://www.tenis-up.cl' rel="noreferrer" target='_blank'>
                                <button>{t('view')}</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='face front'>
                        <img className="front-img" alt='proyecto1' src={anime}></img>
                    </div>
                    <div className='face back'>
                        <p>2023</p>
                        <p> {t('about-pro-5')}</p>
                        <p> JavaScript - React - Jikan Api</p>
                        <div className='link'>
                            <a href='https://github.com/Nicoov/animelist' rel="noreferrer" target='_blank'>
                                <button>{t("view-3")}</button>
                            </a>
                            <a href='https://animelistweb.vercel.app' rel="noreferrer" target='_blank'>
                                <button>{t("view")}</button>
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
                        <p> JavaScript - Themoviedb API</p>
                        <div className='link'>
                            <a href='https://github.com/Nicoov/Anya-bot' rel="noreferrer" target='_blank'>
                                <button>{t("view-2")}</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='face front'>
                        <img className="front-img" alt='proyecto1' src={mercado}></img>
                    </div>
                    <div className='face back'>
                        <p>2022</p>
                        <p> {t('about-pro-3')}</p>
                        <p> JavaScript - MySQL</p>
                        <div className='link'>
                            <a href='https://github.com/Nicoov/Tienda-Bsale' rel="noreferrer" target='_blank'>
                                <button>{t("view-3")}</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='face front'>
                        <img className="front-img" alt='proyecto1' src={quiz}></img>
                    </div>
                    <div className='face back'>
                        <p>2022</p>
                        <p> {t('about-pro-4')}</p>
                        <p> JavaScript - React</p>
                        <div className='link'>
                            <a href='https://github.com/Nicoov/quiz-aplication' rel="noreferrer" target='_blank'>
                                <button>{t("view-3")}</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Proyectos