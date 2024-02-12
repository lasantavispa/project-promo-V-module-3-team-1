import '../scss/core/Variables.scss';
import '../scss/layout/Main.scss';
import Preview from './Preview.jsx';
import Form from './Form.jsx';
import ButtonSeeProjects from './ButtonSeeProjects.jsx';
import PropTypes from 'prop-types';

function Main({ handleInput, setFormData, formData, handleClickCreateCard, hidden, cardLink, handleClearForm, setImageSize, imageSize }) {
  return (
    <main className="main">
      <div className='main__preview'>
        <ButtonSeeProjects/>
        <Preview formData={formData} />
      </div>
      <Form 
      handleInput={handleInput} 
      formData={formData} 
      setFormData={setFormData} 
      handleClickCreateCard={handleClickCreateCard} 
      hidden={hidden}
      cardLink={cardLink}
      handleClearForm={handleClearForm}
      setImageSize={setImageSize}
      imageSize={imageSize}/>
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
    setImageSize: PropTypes.func.isRequired,
    imageSize: PropTypes.string.isRequired,
}

export default Main;
