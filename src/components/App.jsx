import '../scss/App.scss';
import cover2 from '../images/cover_2.jpeg';
import cover from '../images/cover.jpeg';
import favicon from '../images/favicon.png';
import logoAlab from '../images/logo-adalab.png';
import user from '../images/user.jpeg';
import { useState } from 'react';

function App() {
  const [project, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [repo, setRepo] = useState('');
  const [demo, setDemo] = useState('');
  const [tech, setTech] = useState('');
  const [desc, setDesc] = useState('');
  const [author, setAuthor] = useState('');
  const [job, setJob] = useState('');

  const handleInput = (event) => {
    let inputValue = event.target.value;
    console.log(inputValue);
    if (event.target.id === 'nameId') {
      setName(inputValue);
    } else if (event.target.id === 'sloganId') {
      setSlogan(inputValue);
    } else if (event.target.id === 'repoId') {
      setRepo(inputValue);
    } else if (event.target.id === 'demoId') {
      setDemo(inputValue);
    } else if (event.target.id === 'techId') {
      setTech(inputValue);
    } else if (event.target.id === 'descId') {
      setDesc(inputValue);
    } else if (event.target.id === 'authorId') {
      setAuthor(inputValue);
    } else if (event.target.id === 'jobId') {
      setJob(inputValue);
    }
  };
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <span className="nav__title">
            <i className="fa-solid fa-laptop-code nav__icon"></i>Proyectos
            Molones
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
      <main className="main">
        <section className="preview">
          <img className="preview__image" src={cover} alt="" />

          <section className="preview__author">
            <section className="project">
              <p className="project__subtitle">Personal Project Card</p>
              <hr className="project__line" />

              <h2 className="project__title"> {project || 'Elegant Workspace'} </h2>
              <p className="project__slogan"> {slogan || 'Diseños Exclusivos'} </p>
              <p className="project__desc">
                {desc ||
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!'}
              </p>
              <section className="project__technologies">
                <p className="text"> {tech || 'React JS, MongoDB'}</p>
              </section>
              <section>
                <a href="{repo}" target='_blank'> <i className="fa-brands fa-github"></i></a>
                <a href="{demo}" target='_blank'><i className="fa-solid fa-globe"></i></a>
                
              </section>
            </section>

            <section className="author">
              <img className="author__image" src={user} alt="" />
              <p className="author__job"> {job || 'Full Stack Developer'} </p>
              <p className="author__name"> {author || 'Emmelie Björklund'} </p>
            </section>
          </section>
        </section>

        <section className="form">
          <h2 className="form__h2">Información</h2>

          <section className="askInfo">
            <p className="askInfo__subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="askInfo__line" />
          </section>

          <fieldset className="project">
            <input
              onChange={handleInput}
              className="project__input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="nameId"
            />
            <input
              onChange={handleInput}
              className="project__input"
              type="text"
              name="slogan"
              id="sloganId"
              placeholder="Slogan"
            />
            <input
              onChange={handleInput}
              className="project__input"
              type="text"
              name="repo"
              id="repoId"
              placeholder="Repo"
            />
            <input
              onChange={handleInput}
              className="project__input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demoId"
            />
            <input
              onChange={handleInput}
              className="project__input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="techId"
            />
            <textarea
              onChange={handleInput}
              className=" project__textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="descId"
            ></textarea>
          </fieldset>

          <section className="askInfo">
            <p className="askInfo__subtitle">Cuéntanos sobre la autora</p>
            <hr className="askInfo__line" />
          </section>

          <fieldset className="project">
            <input
              onChange={handleInput}
              className="project__input"
              type="text"
              placeholder="Nombre"
              name="author"
              id="authorId"
            />
            <input
              onChange={handleInput}
              className="project__input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="jobId"
            />
          </fieldset>

          <section className="buttonImg">
            <button className="buttonImg__btn">Subir foto de proyecto</button>
            <button className="buttonImg__btn">Subir foto de autora</button>
          </section>

          <section className="buttonImgCrear">
            <button
              className="buttonImgCrear__large"
              onClick="{handleClickCreateCard}"
            >
              Crear Tarjeta
            </button>
          </section>

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href="" className="" target="_blank" rel="noreferrer">
              {' '}
            </a>
          </section>
        </section>
      </main>
      <footer className="footer">
        <img className="footer__logo" src={logoAlab} alt="logo Adalab" />
      </footer>
    </div>
  );
}

export default App;
