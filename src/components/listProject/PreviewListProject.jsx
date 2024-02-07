//import cover from '../images/cover.jpeg';
import user from "../images/user.jpeg";
import PropTypes from "prop-types";
import "../scss/layout/Preview.scss";

function PreviewListProject({ formData, avatar, userPhoto }) {
  // si avatar == '' me devuelves cover si no me devuelves avatar
  console.log("Avatar in Preview:", avatar);
  return (
    <section className="preview">
      <section className="preview__author">
        <section className="projectCard">
          <p className="projectCard__subtitle">Personal Project Card</p>
          <hr className="projectCard__line" />

          <h2 className="projectCard__title">
            {" "}
            {formData.project || "Elegant Workspace"}{" "}
          </h2>
          <p className="projectCard__slogan">
            {" "}
            {formData.slogan || "Diseños Exclusivos"}{" "}
          </p>
          <p className="projectCard__desc">
            {formData.desc || "Lorem, ipcorrupti ipsum!"}
          </p>
          <section className="projectCard__technologies">
            <p className="projectCard__text">
              {" "}
              {formData.tech || "React JS - HTML -  CSS"}
            </p>
          </section>
          <section className="projectCard__icons">
            <a href={formData.repo} target="_blank">
              {" "}
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={formData.demo} target="_blank">
              <i className="fa-solid fa-globe"></i>
            </a>
          </section>
        </section>

        <section className="author">
          <img className="author__image" src={userPhoto || user} alt="" />
          <p className="author__job">
            {" "}
            {formData.job || "Full Stack Developer"}{" "}
          </p>
          <p className="author__name">
            {" "}
            {formData.author || "Emmelie Björklund"}{" "}
          </p>
        </section>
      </section>
    </section>
  );
}
PreviewListProject.propTypes = {
  formData: PropTypes.object.isRequired, // Ajusta el tipo según tus necesidades
  avatar: PropTypes.string.isRequired, // Asegúrate de ajustar el tipo según tus necesidades
  userPhoto: PropTypes.string.isRequired,
};
export default PreviewListProject;
