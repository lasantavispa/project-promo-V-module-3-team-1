import React from 'react';
import PropTypes from 'prop-types';
import Main from '../Main.jsx';
import Hero from '../Hero.jsx';
import '../../scss/core/Variables.scss';
import '../../scss/layout/Header.scss';

function CardProject({
  hidden,
  handleClickCreateCard,
  setFormData,
  formData,
  cardLink,
  handleInput,
  handleClearForm,
  setImageSize,
  imageSize
}) {
  return (
    <div>
      <Hero />
      <Main
        hidden={hidden}
        handleClickCreateCard={handleClickCreateCard}
        handleInput={handleInput}
        setFormData={setFormData}
        formData={formData}
        cardLink={cardLink}
        handleClearForm={handleClearForm}
        setImageSize={setImageSize}
        imageSize={imageSize}
      />
    </div>
  );
}

CardProject.propTypes = {
  setFormData: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleClickCreateCard: PropTypes.func.isRequired,
  hidden: PropTypes.string.isRequired,
  cardLink: PropTypes.string,
  handleClearForm: PropTypes.func.isRequired,
  setImageSize: PropTypes.func.isRequired,
  imageSize: PropTypes.string.isRequired,
};
export default CardProject;
