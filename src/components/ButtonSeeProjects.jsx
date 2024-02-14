import React from 'react';
import { Link} from 'react-router-dom';
import '../scss/core/Variables.scss';
import '../scss/layout/Header.scss';

function ButtonSeeProjects() {
  return (
    <Link to="/listProject"className="hero__btn" >
    <button >Mira tus tarjetas</button>
    </Link>
    
  )
}

export default ButtonSeeProjects;