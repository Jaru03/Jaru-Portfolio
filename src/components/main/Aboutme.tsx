import { useTranslation } from 'react-i18next';
import './style/Aboutme.css'

const Aboutme = () => {

  const {t} = useTranslation()
  
  return (
    <section className="aboutme">
      <h2 className="aboutme__tittle subtittle">{t("aboutme.tittle")}</h2>
      <article className="aboutme__info">
        <div className='aboutme__icon'>
          <img className='aboutme__character'src="../../../../CharacterMe.png" alt="" />
        </div>
        <p className='aboutme__text'>
          {t("aboutme.description")}
        </p>
        <div className="aboutme__divFloat"></div>
      </article>

      <div className='aboutme__float aboutme__float--1'></div>
      <div className='aboutme__float aboutme__float--2'></div>
      <div className='aboutme__float aboutme__float--3'></div>
    </section>
  );
};

export default Aboutme;
