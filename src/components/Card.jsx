// import React from 'react'
import '../scss/layout/Card.scss'
import PropTypes from 'prop-types';

function Card( { cardLink }) {
  return (
    <section className="card hidden">
        <span className=""> La tarjeta ha sido creada: </span>
        <a href={cardLink} className="" target="_blank" rel="noreferrer">
        { cardLink }
        </a>
      </section>
  )
}

Card.propTypes = {
  cardLink : PropTypes.string.isRequired,
}
export default Card