import { useTranslation } from 'react-i18next'
import './style/Hero.css'

const Hero = () => {

  const {t} = useTranslation()

  return (
    <section id='home' className="hero">
      <div className='hero__container'>
          <div className='hero__info'>
            <p className='hero__text'>{t('hero.hero__info.p-welcome')}</p>
            <h1 className='hero__tittle'>{t('hero.hero__info.principalTittle')} <span className='hero__highlight'>{t('hero.hero__info.principalTittle-span')}</span></h1>
            <p className='hero__text hero__welcome'>{t('hero.hero__info.p-stadia')}<span className='hero__highlight'>{t('hero.hero__info.p-stadia-span')}</span></p>
          </div>
        <ul className='hero__list'>
          <li className='hero__item'><a target='_blank' className='hero__link' href="../../../CV Jose Rico.pdf"> <img className='hero__link--img'  src="../CV.png" alt="" />{t("hero.hero__icons.icon__cv")}</a></li>
          <li className='hero__item'><a target='_blank' className='hero__link' href="mailto:josearudeveloper@gmail.com?Subject=Hola!%20Acabo%20de%20ver%20tu%20portafolio..."><img className='hero__link--img' src="../email.png" alt="" /> E-mail</a></li>
          <li className='hero__item'><a target='_blank' className='hero__link' href="https://wa.me/+34614239959?text=Hola!%20Acabo%20de%20ver%20tu%20portafolio..."> <img className='hero__link--img' src="../whatsapp.png" alt="" />WhatsApp</a></li>
          <li className='hero__item'><a target='_blank' className='hero__link' href="https://www.linkedin.com/in/jos%C3%A9-alberto-rico-urquia-190b282b3/"><img className='hero__link--img' src="../linkedIn.png" alt="" />LinkedIn</a></li>
          <li className='hero__item'><a target='_blank' className='hero__link' href="https://github.com/Jaru03"><img className='hero__link--img' src="../github.png" alt="" />GitHub</a></li>
        </ul>
      <div className="hero__line"></div>
      <img className='hero__logo' src="../jaruLogo.png" alt="" />
      </div>
      <div id='aboutme' className="hero__bottom"></div>
    </section>
  )
}

export default Hero