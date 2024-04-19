import { useTranslation } from 'react-i18next'
import './style/Skills.css'

const Skills = () => {

  const {t} = useTranslation()

  return (
    <section id='skills' className="skills">
      <h2 className="skills__tittle subtittle">{t("skills.tittle")}</h2>
      <div className="skills__container">
        <article className='skills__item'> <img className='skills__img' src="../../../../html.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../css.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../js.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../React.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../tailwind.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../TypeScript.png" alt="" /></article>
      </div>
    </section>
  )
}

export default Skills