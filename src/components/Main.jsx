import '../scss/core/Variables.scss';
import '../scss/layout/Main.scss';
import Preview from './Preview.jsx';
import Form from './Form.jsx';

// import { useState } from 'react';

function Main({ handleInput, setFormData, formData }) {
  return (
    <main className="main">
      <Preview formData={formData} />
      <Form handleInput={handleInput} formData={formData} setFormData={setFormData}/>
    </main>
  );
}
export default Main;
