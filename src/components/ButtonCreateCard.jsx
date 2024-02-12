import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/core/Variables.scss';
import '../scss/layout/Header.scss';

function ButtonCreateCard() {
  return (
    <Link to="/cardProject" className="hero__btn">
      <button >Crea tu tarjeta</button>
    </Link>
  );
}

export default ButtonCreateCard;
