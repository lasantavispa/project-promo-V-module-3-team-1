import React from 'react';
import PropTypes from 'prop-types';
import '../scss/core/Variables.scss';
import '../scss/layout/Header.scss';

function Hero({buttonComponent}) {
  return (
    <div className="hero">
    <h1 className="hero__title">Proyectos Molones</h1>
    <p className="hero__text">
      Escaparate en línea para recoger ideas a través de la tecnología.
    </p>
    {buttonComponent}
  </div>
  )
}
Hero.propTypes = {
    buttonComponent: PropTypes.element.isRequired,
  };

export default Hero;