import '../scss/core/Variables.scss';
import '../scss/layout/Main.scss';
import Preview from './Preview.jsx';
import Form from './Form.jsx';
import ButtonSeeProjects from './ButtonSeeProjects.jsx';
import PropTypes from 'prop-types';

function Main({ handleInput, setFormData, formData, handleClickCreateCard, hidden, cardLink, handleClearForm }) {
  return (
    <main className="main">
      <ButtonSeeProjects />
      <Preview formData={formData} />
      <Form 
      handleInput={handleInput} 
      formData={formData} 
      setFormData={setFormData} 
      handleClickCreateCard={handleClickCreateCard} 
      hidden={hidden}
      cardLink={cardLink}
      handleClearForm={handleClearForm}/>
    </main>

  );
  }
  Main.propTypes = {
    handleInput: PropTypes.func.isRequired,
    setFormData: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    handleClickCreateCard: PropTypes.func.isRequired,
    hidden: PropTypes.string.isRequired,
    cardLink : PropTypes.string,
    handleClearForm: PropTypes.func.isRequired,
}

export default Main;
