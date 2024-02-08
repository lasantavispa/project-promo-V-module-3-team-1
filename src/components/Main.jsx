import '../scss/core/Variables.scss';
import '../scss/layout/Main.scss';
import Preview from './Preview.jsx';
import Form from './Form.jsx';
import PropTypes from 'prop-types';

function Main({ handleInput, setFormData, formData, handleClickCreateCard, hidden, cardLink  }) {
  return (
    <main className="main">
      <Preview formData={formData} />
      <Form handleInput={handleInput} formData={formData} setFormData={setFormData} handleClickCreateCard={handleClickCreateCard} hidden={hidden} cardLink={cardLink} />
    </main>

  );
  }
  Main.propTypes = {
    handleInput: PropTypes.func.isRequired,
    setFormData: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    handleClickCreateCard: PropTypes.func.isRequired,
    hidden: PropTypes.string.isRequired,
    cardLink : PropTypes.string.isRequired,
}

export default Main;
