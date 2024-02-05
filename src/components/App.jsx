import '../scss/App.scss';
import cover2 from '../images/cover_2.jpeg';
import favicon from '../images/favicon.png';
import logoAlab from '../images/logo-adalab.png';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import { useState } from 'react';

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
    photo: ''
  });

  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

  const [userPhoto, setUserPhoto] = useState('');
  const updatePhoto = (userPhoto) => {
    setUserPhoto(userPhoto);
  }

  const handleInput = (event) => {
    if (event.target.id === 'nameId') {
      formData.name = event.target.value;
      setFormData({ ...formData });
    } else if (event.target.id === 'sloganId') {
      formData.slogan = event.target.value;
      setFormData({ ...formData });
    } else if (event.target.id === 'repoId') {
      formData.repo = event.target.value;
      setFormData({ ...formData });
    } else if (event.target.id === 'demoId') {
      formData.demo = event.target.value;
      setFormData({ ...formData });
    } else if (event.target.id === 'techId') {
      formData.technologies = event.target.value;
      setFormData({ ...formData });
    } else if (event.target.id === 'descId') {
      formData.desc = event.target.value;
      setFormData({ ...formData });
    } else if (event.target.id === 'authorId') {
      formData.author = event.target.value;
      setFormData({ ...formData });
    } else if (event.target.id === 'jobId') {
      formData.job = event.target.value;
      setFormData({ ...formData });
    }
  };

  return (
    <div className="container">
      <Header />
      <Main
        handleInput={handleInput}
        avatar={avatar}
        updateAvatar={updateAvatar}
        formData={formData}
        userPhoto={userPhoto}
        updatePhoto={updatePhoto}
        // project={project}
        // slogan={slogan}
        // repo={repo}
        // demo={demo}
        // tech={tech}
        // desc={desc}
        // author={author}
        // job={job}
      />
      <Footer />
    </div>
  );
}

export default App;
