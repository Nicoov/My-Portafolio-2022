import "./Navbar.css"
import Linkedind from "../icons/linkedin"
import GitHub from "../icons/github"
import Spain from "../icons/spain"
import English from "../icons/english"
import { useTranslation } from 'react-i18next'

const Navbar = ({ isScrolling }) => {

    const { i18n } = useTranslation();
    const changeToEnglish = () => {
        i18n.changeLanguage("es")
    }
    const changeToSpanish = () => {
        i18n.changeLanguage("en")
    }

    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className='navbar-barra'>
                <div className='navbar-country'>
                    <Spain fill="#fff" onClick={changeToEnglish} />
                    <English fill="#fff" onClick={changeToSpanish} />
                    {/* <button onClick={changeToSpanish}>Ingles</button>
                    <button onClick={changeToEnglish}>Español</button> */}
                </div>
                <div className='navbar-icon'>
                    <a href='https://www.linkedin.com/in/nicolas-ignacio-diaz/' id='linkedin' rel="noreferrer" target="_blank">
                        <Linkedind fill="#fff" />
                    </a>
                    <a href='https://github.com/Nicoov' id='github' rel="noreferrer" target="_blank">
                        <GitHub fill="#fff" />
                    </a>
                </div>

            </div>
        </nav >
    )
}

export default Navbar