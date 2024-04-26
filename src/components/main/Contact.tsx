import { useTranslation } from 'react-i18next';
import './style/Contact.css';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const {t} = useTranslation()

  const {handleSubmit, reset, register} = useForm()

  const submit = (data: Record<string, unknown>) => {
    emailjs.send('service_2dy27lk', 'template_94bqdxh', data , 'sdf4NNK1DuO0DmNrg')
    .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        });

        reset()
  }

  return (
    <section id='contact' className="contact">
      <h2 className="contact__tittle subtittle">{t("contact.tittle")}</h2>
      <form onSubmit={handleSubmit(submit)} className="contact__form">
        <h3 className="contact__form--tittle">{t("contact.form.tittle")}</h3>
        <label className="contact__label">
          <span className="contact__span">{t("contact.form.name")}</span>
          <input {...register('user_name')} className="contact__input" type="text" />
        </label>
        <label className="contact__label">
          <span className="contact__span">E-mail</span>
          <input {...register('user_email')} className="contact__input" type="email" />
        </label>
        <label className="contact__label">
          <span className="contact__span">{t("contact.form.message")}</span> 
          <textarea {...register('message')} className="contact__input--textarea"></textarea>
        </label>
        <button className="contact__button">{t("contact.form.button")}</button>
      </form>
    </section>
  );
};

export default Contact;
