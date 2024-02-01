import '../scss/core/Variables.scss';
import '../scss/layout/Main.scss';

import Preview from './Preview.jsx';
import Form from './Form.jsx';

function Main({
  handleInput,
  avatar,
  updateAvatar,
  formData,
}) {
  return (
    <main className='main'>
      <Preview
        formData={formData}
      />
      <Form
        handleInput={handleInput}
        avatar={avatar}
        updateAvatar={updateAvatar}
        formData={formData}
      />
    </main>
  );
}
export default Main;
