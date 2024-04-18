import './style/Proyects.css'

const Proyects = () => {
  return (
    <section className="proyects">
        <h2 className="proyects__tittle subtittle">Proyectos</h2>
        <div className="container__card">
          <article className="proyectCard"></article>
          <article className="proyectCard"></article>
          <article className="proyectCard"></article>
          <article className="proyectCard"></article>
          <article className="proyectCard"></article>
          <article className="proyectCard"></article>
        </div>

      <article className='proyects__icon proyects__icon--1'></article>
      <article className='proyects__icon proyects__icon--2'></article>
      <article className='proyects__icon proyects__icon--3'></article>
      <article className='proyects__icon proyects__icon--4'></article>
      <article className='proyects__icon proyects__icon--5'></article>
      <article className='proyects__icon proyects__icon--6'></article>
      <article className='proyects__icon proyects__icon--7'></article>
    </section>
  )
}

export default Proyects