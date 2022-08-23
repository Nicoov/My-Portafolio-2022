import React from 'react'
import './estilo.css'
import HTML from '../../photos/html-5.png'
import CSS from '../../photos/css-3.png'
import JAVA from '../../photos/js.png'
import REACT from '../../photos/react.png'
import GIT from '../../photos/Git.png'
import { useTranslation } from 'react-i18next';



const Knowledge = () => {

    const { t } = useTranslation();
    return (
        <>

            <section className='tec'>
                <div className='container'>
                    <div className='tec-text'>
                        <h2>{t('tecnologias')}</h2>
                        <p>{t('text-tecn')}</p>
                    </div>
                    <div className='tec-img'>
                        <img src={HTML} alt="Html"></img>
                        <img src={CSS} alt="Css"></img>
                        <img src={JAVA} alt="JavaScript"></img>
                        <img src={REACT} alt="React"></img>
                        <img src={GIT} alt="Git"></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Knowledge