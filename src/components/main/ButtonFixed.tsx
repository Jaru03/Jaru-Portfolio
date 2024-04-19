import './style/ButtonFixed.css'

const ButtonFixed = () => {
  return (
    <aside className="buttonsFixed">
      <article className="buttonFix button__email"><a href="mailto:josearudeveloper@gmail.com?Subject=Hola!%20Acabo%20de%20ver%20tu%20portafolio..." className="buttonFix__link"><img className='button__img' src="../.../../email.png" alt="" /></a></article>
      <article className="buttonFix button__whatsapp"><a href="https://wa.me/+584246299955?text=Hola!%20Acabo%20de%20ver%20tu%20portafolio..." className="buttonFix__link"><img className='button__img' src="../.../../whatsapp.png" alt="" /></a></article>
    </aside>
  )
}

export default ButtonFixed