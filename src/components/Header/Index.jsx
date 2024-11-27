import { useEffect, useState } from "react";
import "./index.scss"
import ContactInformaton from "./Contact-information";


const Header = () => {
    const [menuBolean, setMenuBolean] = useState(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const swipeStateMenu = () => {
        if (menuBolean === null) {
            setMenuBolean("openMenu")
        } else if (menuBolean === "openMenu") {
            setMenuBolean("closeMenu")
        } else {
            setMenuBolean("openMenu")
        }
    }

    useEffect(() => {
        const handleResize = () => {setWindowWidth(window.innerWidth)}
        window.addEventListener('resize', handleResize)

        if (window.innerWidth >= 1175) {
            setMenuBolean(null)
        }

    }, [windowWidth])
    
    return(
    <>
        <header >
            <div className="container">
                <div className="header__row">
                    <div className="header__title">
                        Горин Иван, Frontend Developer React
                    </div> 
                    <ul className={menuBolean}>
                        <li className="link"><a href="#AboutMe">Обо мне</a></li>
                        <li className="link"><a href="#Skils">Навыки</a></li>
                        <li className="link"><a href="!#">портфолио</a></li>
                        <li className="link"><a href="!#">Образование</a></li>
                    </ul>
                    <button className="menu__Btn" onClick={swipeStateMenu}></button>
                </div>
            </div>
        </header>
        <ContactInformaton />
     </>
    )
}
 
export default Header;