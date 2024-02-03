import '../scss/core/Variables.scss';
import '../scss/layout/Main.scss';

import Preview from './Preview.jsx';
import Form from './Form.jsx';
// import { useState } from 'react';

function Main({  handleInput,  avatar,  updateAvatar,  formData, userPhoto, updatePhoto}) {
  console.log('Avatar in Main:', avatar);
  return (
    <main className='main'>
      <Preview
        formData={formData}
        avatar={avatar}
        userPhoto={userPhoto}
      />
      <Form
        handleInput={handleInput}
        updateAvatar={updateAvatar}
        formData={formData}
        updatePhoto={updatePhoto}
      />
    </main>
  );
}
export default Main;
