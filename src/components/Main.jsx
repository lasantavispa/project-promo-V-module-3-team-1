import '../scss/core/Variables.scss';
import '../scss/layout/Main.scss';

import Preview from './Preview.jsx';
import Form from './Form.jsx';

function Main({
  handleInput,
  avatar,
  updateAvatar,
  project,
  slogan,
  repo,
  demo,
  tech,
  desc,
  author,
  job,
}) {
  return (
    <main className='main'>
      <Preview
        project={project}
        slogan={slogan}
        repo={repo}
        demo={demo}
        tech={tech}
        desc={desc}
        author={author}
        job={job}
      />
      <Form
        handleInput={handleInput}
        avatar={avatar}
        updateAvatar={updateAvatar}
      />
    </main>
  );
}
export default Main;
