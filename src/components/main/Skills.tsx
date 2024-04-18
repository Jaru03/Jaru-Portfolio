import './style/Skills.css'

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills__tittle subtittle">Habilidades</h2>
      <div className="skills__container">
        <article className='skills__item'> <img className='skills__img' src="../../../../public/html.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../public/CSS.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../public/js.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../public/React.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../public/tailwind.png" alt="" /></article>
        <article className='skills__item'><img className='skills__img' src="../../../../public/TypeScript.png" alt="" /></article>
      </div>
    </section>
  )
}

export default Skills