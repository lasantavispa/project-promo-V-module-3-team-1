import '../scss/App.scss';
import cover2 from '../images/cover_2.jpeg';
import favicon from '../images/favicon.png';
import logoAlab from '../images/logo-adalab.png';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
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

const handleClickCreateCard = () => {
  //condicional de si los campos están vacíos: NO HAGA NADA.
  //y si no: 
  //llama a la api: 
  if (data.name === "" 
  && data.slogan === "" 
  && data.repo === "" 
  && data.demo === "" 
  && data.technologies === "" 
  && data.desc === "" 
  && data.autor === "" 
  && data.job === "" 
  && data.image === "" 
  && data.photo === "" ) {
  console.log("Revisa los campos")

} else {
  
  fetch('https://dev.adalab.es/api/projectCard', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: { 'Content-type': 'application/json' },
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    setCardLink(result);
  .catch((error) => console.log(error));
    console.log("La tarjeta ha sido creada")}
)
  }



function handleInput(ev) {
  const inputValue = ev.target.value;
  const inputName = ev.target.name;
  setFormData({
    ...formData,
    [inputName]: inputValue
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
