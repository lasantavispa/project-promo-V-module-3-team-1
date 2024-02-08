import React from 'react';
import { Link} from 'react-router-dom';
import '../scss/core/Variables.scss';
import '../scss/layout/Header.scss';

function ButtonSeeProjects() {
  return (
    <button className="hero__btn"><Link to="/listProject" >Mira tus tarjetas</Link></button>
    
  )
}

export default ButtonSeeProjects;