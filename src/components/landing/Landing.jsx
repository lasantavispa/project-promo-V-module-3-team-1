import { Link } from "react-router-dom";
import "../scss/core/Variables.scss";
import "../scss/layout/Header.scss";

function Landing() {
  return (
    <div>
      <h1 className="header">Proyectos Molones</h1>
      <button>
        <Link to="/listproyect">Comenzar</Link>
      </button>
    </div>
  );
}

export default Landing;
