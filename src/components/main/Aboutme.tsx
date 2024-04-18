import './style/Aboutme.css'

const Aboutme = () => {
  return (
    <section className="aboutme">
      <h2 className="aboutme__tittle subtittle">Sobre mí</h2>
      <article className="aboutme__info">
        <div className='aboutme__icon'>
          <img  src="" alt="" />
        </div>
        <p className='aboutme__text'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime amet
          ipsa itaque sapiente, doloribus accusantium omnis maiores consectetur.
          Nihil placeat vel illum culpa eveniet deserunt animi excepturi ipsum?
          Quae, aliquid?
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
