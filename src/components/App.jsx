import '../scss/App.scss';
import cover2 from '../images/cover_2.jpeg';
import favicon from '../images/favicon.png';
import logoAlab from '../images/logo-adalab.png';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import { useState } from 'react';

function App() {
  const [project, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [repo, setRepo] = useState('');
  const [demo, setDemo] = useState('');
  const [tech, setTech] = useState('');
  const [desc, setDesc] = useState('');
  const [author, setAuthor] = useState('');
  const [job, setJob] = useState('');

  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

  const handleInput = (event) => {
    let inputValue = event.target.value;
    console.log(inputValue);
    if (event.target.id === 'nameId') {
      setName(inputValue);
    } else if (event.target.id === 'sloganId') {
      setSlogan(inputValue);
    } else if (event.target.id === 'repoId') {
      setRepo(inputValue);
    } else if (event.target.id === 'demoId') {
      setDemo(inputValue);
    } else if (event.target.id === 'techId') {
      setTech(inputValue);
    } else if (event.target.id === 'descId') {
      setDesc(inputValue);
    } else if (event.target.id === 'authorId') {
      setAuthor(inputValue);
    } else if (event.target.id === 'jobId') {
      setJob(inputValue);
    }
  };

  return (
    <div className='container'>
      <Header />
      <Main
        handleInput={handleInput}
        avatar={avatar}
        updateAvatar={updateAvatar}
        project={project}
        slogan={slogan}
        repo={repo}
        demo={demo}
        tech={tech}
        desc={desc}
        author={author}
        job={job}
      />
      <Footer />
    </div>
  );
}

export default App;
