import React from "react";
import './contact.css'
import Linkedind from "../icons/linkedin"
import GitHub from "../icons/github"
import Gmail from '../icons/gmail'
import { useTranslation } from 'react-i18next';

const Contact = () => {

    const { t } = useTranslation();
    return (
        <>
            <div className='contacto-title'>
                <h2>{t('Contacto')}</h2>
            </div>
            <section className='contacto-container'>
                <div className='card-contacto-linkedin'>
                    <a href='https://www.linkedin.com/in/nicolas-ignacio-diaz/' id='linkedin' rel="noreferrer" target="_blank">
                        <Linkedind fill="#fff" />
                    </a>
                </div>
                <div className='card-contacto-git'>
                    <a href='https://github.com/Nicoov' id='github' rel="noreferrer" target="_blank">
                        <GitHub fill="#fff" />
                    </a>
                </div>

                <div className='card-contacto-gmail'>
                    <a href='mailto:nicolasignaciodiaz96@gmail.com' id='gmail' rel="noreferrer" target="_blank">
                        <Gmail fill="#fff" />
                    </a>
                </div>
            </section>
        </>
    )
}


export default Contact;