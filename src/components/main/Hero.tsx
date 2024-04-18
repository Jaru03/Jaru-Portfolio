import './style/Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className='hero__container'>
        <div className='hero__info'>
          <p className='hero__text'>Hola, soy José Rico.</p>
          <h1 className='hero__tittle'>Desarrollador <span className='hero__highlight'>Web.</span></h1>
          <p className='hero__text'>Te doy la bienvenida, espero que disfrutes de tu <span className='hero__highlight'>estadía.</span></p>
        </div>
        <ul className='hero__list'>
          <li className='hero__item'><a className='hero__link' href=""> <img className='hero__link--img'  src="../CV.png" alt="" /> Descargar CV</a></li>
          <li className='hero__item'><a className='hero__link' href=""><img className='hero__link--img' src="../email.png" alt="" /> E-mail</a></li>
          <li className='hero__item'><a className='hero__link' href=""> <img className='hero__link--img' src="../whatsapp.png" alt="" />WhatsApp</a></li>
          <li className='hero__item'><a className='hero__link' href=""><img className='hero__link--img' src="../linkedIn.png" alt="" />LinkedIn</a></li>
          <li className='hero__item'><a className='hero__link' href=""><img className='hero__link--img' src="../github.png" alt="" />GitHub</a></li>
        </ul>
      </div>
      <div className="hero__bottom"></div>
      <img className='hero__logo' src="../jaruLogo.png" alt="" />
      <div className="hero__line"></div>
    </section>
  )
}

export default Hero