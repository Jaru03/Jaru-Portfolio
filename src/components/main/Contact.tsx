import './style/Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__tittle subtittle">Contacto</h2>
      <form className="contact__form">
        <h3 className="contact__form--tittle">Formulario de Contacto</h3>
        <label className="contact__label">
          <span className="contact__span">Nombre y Apellido</span>
          <input className="contact__input" type="text" />
        </label>
        <label className="contact__label">
          <span className="contact__span">E-mail</span>
          <input className="contact__input" type="email" />
        </label>
        <label className="contact__label">
          <span className="contact__span">Mensaje</span> 
          <textarea className="contact__input--textarea"></textarea>
        </label>
        <button className="contact__button">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
