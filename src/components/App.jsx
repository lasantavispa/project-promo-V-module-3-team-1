import '../scss/App.scss';
import cover2 from '../images/cover_2.jpeg';
import favicon from '../images/favicon.png';
import logoAlab from '../images/logo-adalab.png';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import callToApi from '../services/Api.js';
import localStorage from '../services/LocalStorage.js';
import { useEffect, useState } from 'react';

function App() {
  const [formData, setFormData] = useState({});
  const [cardLink, setCardLink] = useState('');
  const [hidden, setHidden] = useState('hidden');
  const [userData, setUserData] = useState(
    localStorage.get('user') || {
      name: '',
      slogan: '',
      technologies: '',
      demo: '',
      repo: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: '',
    }
  );

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
  };

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, []);

  useEffect(() => {
    localStorage.set('user', {
      name: formData.name,
      slogan: formData.slogan,
      technologies: formData.technologies,
      demo: formData.demo,
      repo: formData.repo,
      desc: formData.desc,
      autor: formData.autor,
      job: formData.job,
      image: formData.image,
      photo: formData.photo,
    });
    console.log('han cambiado los datos introducidos');
    setUserData(localStorage.get('user'));
  }, [formData]);

  const handleClickCreateCard = (ev) => {
    ev.preventDefault;
    setHidden('');
    callToApi(formData).then((response) => {
      setCardLink(response.cardURL);
      console.log(response.cardURL);
    });
  };

  const handleClearForm = (ev)=>{
    ev.preventDefault;
    localStorage.remove('user');
    setFormData({
      name: '',
      slogan: '',
      technologies: '',
      demo: '',
      repo: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: '',
    })
    setHidden('hidden');
    setCardLink('');
  }

  return (
    <div className='container'>
      <Header />
      <Main
        hidden={hidden}
        handleClickCreateCard={handleClickCreateCard}
        handleInput={handleInput}
        setFormData={setFormData}
        formData={formData}
        cardLink={cardLink}
        handleClearForm={handleClearForm}
      />
      <Footer />
    </div>
  );
}

export default App;
