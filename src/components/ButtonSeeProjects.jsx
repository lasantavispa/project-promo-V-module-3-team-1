import React from 'react';
import { Link} from 'react-router-dom';
import '../scss/core/Variables.scss';
import '../scss/core/Mixins.scss';
import '../scss/layout/Form.scss';
import '../scss/layout/Header.scss';

function ButtonSeeProjects() {
  return (
    <Link to="/listProject">
      <button className='buttonImgCrear__large'>Mira tus tarjetas</button>
    </Link>
    
  )
}

export default ButtonSeeProjects;