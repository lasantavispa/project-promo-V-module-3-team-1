import logoAlab from "../images/logo-adalab.png";
import "../scss/core/Variables.scss";
import "../scss/layout/Footer.scss";

function FooterListProject() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logoAlab} alt="logo Adalab" />
    </footer>
  );
}
export default FooterListProject;
