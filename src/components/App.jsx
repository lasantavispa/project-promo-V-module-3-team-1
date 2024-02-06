import '../scss/App.scss';
import cover2 from '../images/cover_2.jpeg';
import favicon from '../images/favicon.png';
import logoAlab from '../images/logo-adalab.png';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import callToApi from '../services/Api.js';
import Card from './Card.jsx';
import { useEffect, useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    name: '',
    slogan: '',
    technologies: '',
    demo: '',
    repo: '',
    desc: '',
    author: '',
    job: '',
    image: '',
    photo: '',
  });

const [cardLink, setCardLink] = useState([]);

  
    callToApi(formData).then((response) => {
      setCardLink(response);
      console.log(response);
    });



const handleInput = (ev) => {
  const inputValue = ev.target.value;
  const inputName = ev.target.name;
  setFormData({
    ...formData,
    [inputName] : inputValue
  });
  console.log(formData);
}

  return (
    <div className="container">
      <Header />
      <Main
        handleInput={handleInput}
        setFormData={setFormData}        
        formData={formData}     
      />
      <Card cardLink={ cardLink }/>
      <Footer />
    </div>
  );
}

export default App;
