import "./style/Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo"></div>

        <ul className="navbar__list">
          <li className="navbar__item">Inicio</li>
          <li className="navbar__item">Sobre mí</li>
          <li className="navbar__item">Proyectos</li>
          <li className="navbar__item">Habilidades</li>
          <li className="navbar__item">Contáctame</li>
        </ul>

        <section className="navbar__toggles">
          <div className="navbar__toggle navbar__toggle--lenguaje"></div>
          <div className="navbar__toggle navbar__toggle--darkmode"></div>
        </section>
      </nav>
    </header>
  );
};

export default Header;
