import { useTranslation } from 'react-i18next';
import './style/Contact.css'

const Contact = () => {

  const {t} = useTranslation()
  return (
    <section id='contact' className="contact">
      <h2 className="contact__tittle subtittle">{t("contact.tittle")}</h2>
      <form className="contact__form">
        <h3 className="contact__form--tittle">{t("contact.form.tittle")}</h3>
        <label className="contact__label">
          <span className="contact__span">{t("contact.form.name")}</span>
          <input className="contact__input" type="text" />
        </label>
        <label className="contact__label">
          <span className="contact__span">E-mail</span>
          <input className="contact__input" type="email" />
        </label>
        <label className="contact__label">
          <span className="contact__span">{t("contact.form.message")}</span> 
          <textarea className="contact__input--textarea"></textarea>
        </label>
        <button className="contact__button">{t("contact.form.button")}</button>
      </form>
    </section>
  );
};

export default Contact;
