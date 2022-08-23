import React from 'react'
import './estilo.css'
import dev from "../../photos/img-dev.png"
import { useTranslation } from 'react-i18next';

const Cover = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className='container-2'>
        <div className='cover-contenedor'>
          <div className='cover-text'>
            <h1>Nicolás Díaz G</h1>
            <span>{t("about")}</span>
          </div>
          <img src={dev} alt="DEV"></img>
        </div>
      </div>

    </>

  )
}

export default Cover