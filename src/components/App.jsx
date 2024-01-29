import "../scss/App.scss";
import cover2 from "../images/cover_2.jpeg";
import cover from "../images/cover.jpeg";
import favicon from "../images/favicon.png";
import logoAlab from "../images/logo-adalab.png";
import user from "../images/user.jpeg";


function App() {  

  return  (
    <div className="container">
    <header className="header">
      <nav className="nav">
        <span className="nav__title">
          <i className="fa-solid fa-laptop-code nav__icon"></i>Proyectos Molones
          </span>
        <img className="nav__logo" src={logoAlab} alt="logo Adalab" />
      </nav>
      <div className="hero">
        <h1 className="hero__title">Proyectos Molones</h1>
        <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología.</p>
        <button className="hero__btn">ver proyectos</button>
      </div>
    </header>
    <main className="main">
      <section className="preview">
        <img className="preview__image" src={cover} alt="" />

        <section className="preview__autor">
          <section className="info-project">
            <p className="info-project__subtitle">Personal Project Card</p>
            <hr className="info-project__line" />

            <h2 className="info-project__title">Elegant Workspace</h2>
            <p className="info-project__slogan">Diseños Exclusivos</p>
            <p className="info-project__desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Libero, delectus? Voluptates at hic aliquam porro ad suscipit
              harum laboriosam saepe earum doloribus aperiam, ullam culpa
              accusantium placeat odit corrupti ipsum!
            </p>
            <section className="info-project__technologies">
              <p className="info-project__technologies--text">React JS, MongoDB</p>
            </section>
          </section>

          <section className="info-autor">
            <img className="info-autor__image" src={user} alt="" />
            <p className="info-autor__job">Full Stack Developer</p>
            <p className="info-autor__name">Emmelie Björklund</p>
          </section>
        </section>
      </section>

      <section className="form">
        <h2 className="form__title">Información</h2>

        <section className="ask-info">
          <p className="subtitle">Cuéntanos sobre el proyecto</p>
          <hr className="line" />
        </section>

        <fieldset className="project">
          <input
            className="input"
            type="text"
            placeholder="Nombre del proyecto"
            name="name"
            id="name"
          />
          <input
            className="input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan"
          />
          <input
            className="input"
            type="text"
            name="repo"
            id="repo"
            placeholder="Repo"
          />
          <input
            className="input"
            type="text"
            placeholder="Demo"
            name="demo"
            id="demo"
          />
          <input
            className="input"
            type="text"
            placeholder="Tecnologías"
            name="technologies"
            id="technologies"
          />
          <textarea
            className="textarea"
            type="text"
            placeholder="Descripción"
            name="desc"
            id="desc"
          ></textarea>
        </fieldset>

        <section className="ask-info">
          <p className="subtitle">Cuéntanos sobre la autora</p>
          <hr className="line" />
        </section>

        <fieldset className="autor">
          <input
            className="input"
            type="text"
            placeholder="Nombre"
            name="autor"
            id="autor"
          />
          <input
            className="input"
            type="text"
            placeholder="Trabajo"
            name="job"
            id="job"
          />
        </fieldset>

        <section className="buttons-img">
          <button className="btn">Subir foto de proyecto</button>
          <button className="btn">Subir foto de autora</button>
        </section>
        <section className="buttons-img">
          <button className="btn-large" onClick="{handleClickCreateCard}">
            Crear Tarjeta
          </button>
        </section>

        <section className="card">
          <span className=""> La tarjeta ha sido creada: </span>
          <a href="" className="" target="_blank" rel="noreferrer"> </a>
        </section>
      </section>
    </main>
    <footer className="footer">
      <img className="footer__logo" src={logoAlab} alt="logo Adalab" />
    </footer>
  </div>
  )

  
}

export default App
