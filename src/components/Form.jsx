import GetAvatar from './GetAvatar.jsx';
import '../scss/layout/Form.scss';

function Form({
  handleInput,
  avatar,
  updateAvatar,
  formData,
  userPhoto,
  updatePhoto,
}) {
  return (
    <section className="form">
      <h2 className="form__h2">Información</h2>

      <fieldset className="project">
        <section className="askInfo">
          <p className="askInfo__subtitle">Cuéntanos sobre el proyecto</p>
          <hr className="askInfo__line" />
        </section>
        <input
          value={formData.project}
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="Nombre del proyecto"
          name="name"
          id="nameId"
        />
        <input
          value={formData.slogan}
          onChange={handleInput}
          className="project__input"
          type="text"
          name="slogan"
          id="sloganId"
          placeholder="Slogan"
        />
        <input
          value={formData.repo}
          onChange={handleInput}
          className="project__input"
          type="text"
          name="repo"
          id="repoId"
          placeholder="Repo"
        />
        <input
          value={formData.demo}
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="Demo"
          name="demo"
          id="demoId"
        />
        <input
          value={formData.tech}
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="Tecnologías"
          name="technologies"
          id="techId"
        />
        <textarea
          value={formData.desc}
          onChange={handleInput}
          className=" project__textarea"
          type="text"
          placeholder="Descripción"
          name="desc"
          id="descId"
        ></textarea>
      </fieldset>

      <fieldset className="project">
        <section className="askInfo">
          <p className="askInfo__subtitle">Cuéntanos sobre la autora</p>
          <hr className="askInfo__line" />
        </section>

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
        <GetAvatar
          //  avatar={avatar}
          updateAvatar={updateAvatar}
          text="Subir foto de proyecto"
        />
        <GetAvatar
          // userPhoto={avatar}
          updateAvatar={updatePhoto}
          text="Subir foto de autora"
        />
        {/* <button className="buttonImg__btn">Subir foto de autora</button> */}
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
  );
}
export default Form;
