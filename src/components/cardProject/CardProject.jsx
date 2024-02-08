import React from 'react';
import PropTypes from 'prop-types';
import Main from '../Main.jsx';
import Footer from '../Footer.jsx';
import Card from '../Card.jsx';
import Hero from '../Hero.jsx';
import ButtonSeeProjects from '../ButtonSeeProjects.jsx';
import '../../scss/core/Variables.scss';
import '../../scss/layout/Header.scss';

function CardProject({hidden, handleClickCreateCard, setFormData, formData, cardLink, handleInput}) {
  return (
    <div>
    <Hero buttonComponent={<ButtonSeeProjects/>}/>
      <Main
        hidden={hidden}
        handleClickCreateCard={handleClickCreateCard}
        handleInput={handleInput}
        setFormData={setFormData}
        formData={formData}
      />
      <Card cardLink={cardLink} />
      <Footer />
    </div>
  );
}

CardProject.propTypes = {
    setFormData: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired, 
    handleInput: PropTypes.func.isRequired,
    handleClickCreateCard: PropTypes.func.isRequired,
    hidden: PropTypes.string.isRequired,
    cardLink : PropTypes.array,
    buttonComponent: PropTypes.element.isRequired,
  };
export default CardProject;
