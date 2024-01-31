function Form (props) {
    return (
        <section className="form">
  <h2 className="form__h2">Información</h2>

  <section className="askInfo">
    <p className="askInfo__subtitle">Cuéntanos sobre el proyecto</p>
    <hr className="askInfo__line" />
  </section>

  <fieldset className="project">
    <input
      onChange={props.function}
      className="project__input"
      type="text"
      placeholder="Nombre del proyecto"
      name="name"
      id="nameId"
    />
    <input
      onChange={props.function}
      className="project__input"
      type="text"
      name="slogan"
      id="sloganId"
      placeholder="Slogan"
    />
    <input
      onChange={props.function}
      className="project__input"
      type="text"
      name="repo"
      id="repoId"
      placeholder="Repo"
    />
    <input
      onChange={props.function}
      className="project__input"
      type="text"
      placeholder="Demo"
      name="demo"
      id="demoId"
    />
    <input
      onChange={props.function}
      className="project__input"
      type="text"
      placeholder="Tecnologías"
      name="technologies"
      id="techId"
    />
    <textarea
      onChange={props.function}
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
      onChange={props.function}
      className="project__input"
      type="text"
      placeholder="Nombre"
      name="author"
      id="authorId"
    />
    <input
      onChange={props.function}
      className="project__input"
      type="text"
      placeholder="Trabajo"
      name="job"
      id="jobId"
    />
  </fieldset>

  <section className="buttonImg">
    <GetAvatar avatar={props.avatar} updateAvatar={props.updateAvatar} text='Subir foto de proyecto' />
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

    )
}
export default Form;