import logoAlab from "../../images/logo-adalab.png";
import "../../scss/core/Variables.scss";
import "../../scss/layout/Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <span className="nav__title">
          <i className="fa-solid fa-laptop-code nav__icon"></i>Proyectos Molones
        </span>
        <img className="nav__logo" src={logoAlab} alt="logo Adalab" />
      </nav>
      <div className="hero">
        <h1 className="hero__title">Proyectos Molones</h1>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología.
        </p>

        <button className="hero__btn">ver proyectos</button>
      </div>
    </header>
  );
}
export default Header;
