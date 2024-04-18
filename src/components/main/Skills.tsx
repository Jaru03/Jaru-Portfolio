import './style/Skills.css'

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills__tittle subtittle">Habilidades</h2>
      <div className="skills__container">
        <article className='skills__item'> <img className='skills__img' src="../../../../html.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../CSS.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../js.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../React.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../tailwind.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../TypeScript.png" alt="" /></article>
      </div>
    </section>
  )
}

export default Skills