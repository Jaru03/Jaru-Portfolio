import { useTranslation } from "react-i18next";
import "./style/Header.css";
import { useState } from "react";

type Props = {
  showNavBar:boolean
  setShowNavBar: any
}

const Header = ({showNavBar, setShowNavBar}:Props) => {

  const {i18n} = useTranslation()

  const handleHiddenNavBar = () => {
    setShowNavBar(false)
    }
  
  const [lenguaje, setLenguaje] = useState(true)
  
  const handleLenguaje = () => {
    if (lenguaje){
      setLenguaje(false)
      i18n.changeLanguage('en')
    }else{
      setLenguaje(true)
      i18n.changeLanguage("es")
    }
  }

  const {t} = useTranslation()

  return (
    <header className={`header showNavBar-${showNavBar}`}>
      <nav className="navbar">
        <i onClick={handleHiddenNavBar} className='iconFloat__nav iconFloat__nav--x bx bx-x'></i>
        <div className="navbar__logo"></div>

        <ul className="navbar__list">
          <li className="navbar__item"><a href="#home"> {t("header.home")}</a></li>
          <li className="navbar__item"><a href="#aboutme"> {t("header.aboutme")}</a></li>
          <li className="navbar__item"><a href="#proyects"> {t("header.proyects")}</a></li>
          <li className="navbar__item"><a href="#skills"> {t("header.skills")}</a></li>
          <li className="navbar__item"><a href="#contact"> {t("header.contact")}</a></li>
        </ul>

        <section className="navbar__toggles">
          <div className="navbar__toggle navbar__toggle--lenguaje" onClick={handleLenguaje}>
            {
              lenguaje? <img src="../inglaterra.png" alt="" />: <img src="../spain.png" alt="" />
              
            }
          </div>
          
        </section>
      </nav>
    </header>
  );
};

export default Header;
