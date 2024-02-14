import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/core/Variables.scss';
import '../scss/layout/Header.scss';
import '../scss/core/Mixins.scss';
import '../scss/layout/Form.scss';

function ButtonCreateCard() {
  return (
    <Link to="/cardProject">
      <button className="buttonImgCrear__large">Crea tu tarjeta</button>
    </Link>
  );
}

export default ButtonCreateCard;
