import React from 'react'
import { Link} from 'react-router-dom';
import '../scss/core/Variables.scss';
import '../scss/layout/Header.scss';

function ButtonCreateCard() {
  return (
    <button className="hero__btn"><Link to="/cardProject">Crea tu tarjeta</Link></button>   
  )
}

export default ButtonCreateCard;