import '../scss/App.scss';
import cover2 from '../images/cover_2.jpeg';
import favicon from '../images/favicon.png';
import logoAlab from '../images/logo-adalab.png';
import callToApi from '../services/Api.js';
import localStorage from '../services/LocalStorage.js';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import CardProject from './cardProject/CardProject.jsx';
import ListProject from './listProject/ListProject.jsx';
import ButtonCreateCard from './ButtonCreateCard.jsx';
import Header from './Header.jsx';
// import Hero from './Hero.jsx';
import ButtonSeeProjects from './ButtonSeeProjects.jsx';

function App() {
  const location = useLocation();
  const [formData, setFormData] = useState({});
  const [cardLink, setCardLink] = useState([]);
  const [hidden, setHidden] = useState('');
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
  console.log(userData);

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
  };
  // Verificar si la ruta actual es '/cardProject' o '/listProject'
  useEffect(() => {
    setHidden(location.pathname === '/cardProject' || location.pathname === '/listProject');
  }, [location.pathname]);

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
    // setHidden(ev.target.value);
    callToApi(formData).then((response) => {
      setCardLink(Object.values(response));
      console.log(response.cardURL);
    });
  };

  return (
    <>
    <div>
      <Header/>
      {!hidden && (
          <div className='twoButtons'>
            <ButtonCreateCard/>
            <ButtonSeeProjects/>
          </div>
        )}
    </div>
      <Routes>
        <Route
          path="/cardProject"
          element={
            <CardProject
              hidden={hidden}
              handleClickCreateCard={handleClickCreateCard}
              handleInput={handleInput}
              setFormData={setFormData}
              formData={formData}
              cardLink={cardLink}
            />
          }
        />
        <Route 
         path="/listProject"
         element={
          <ListProject formData={formData}/>
         }
        />
      </Routes>
      
    </>
  );
}

export default App;
