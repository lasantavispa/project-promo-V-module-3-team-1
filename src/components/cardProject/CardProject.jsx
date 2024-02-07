import React from 'react';
import Header from '../Header.jsx';
import Main from '../Main.jsx';
import Footer from '../Footer.jsx';
import Card from '../Card.jsx';
import PropTypes from 'prop-types';


function CardProject({hidden, handleClickCreateCard, setFormData, formData, cardLink, handleInput}) {
  return (
    <div className="container">
      <Header />
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
  };
export default CardProject;
