import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';
import '../scss/layout/Preview.scss';

function Preview({ formData }) {
  return (
    <section className='preview'>
      <img className='preview__image' src={cover} alt='' />      
      <section className='preview__author'>
        <section className='project'>
          <p className='project__subtitle'>Personal Project Card</p>
          <hr className='project__line' />

          <h2 className='project__title'> {formData.project || 'Elegant Workspace'} </h2>
          <p className='project__slogan'> {formData.slogan || 'Diseños Exclusivos'} </p>
          <p className='project__desc'>
            {formData.desc ||
              'Lorem, ipcorrupti ipsum!'}
          </p>
          <section className='project__technologies'>
            <p className='project__text'> {formData.tech || 'React JS, MongoDB'}</p>
          </section>
          <section>
            <a href={formData.repo} target='_blank'>
              {' '}
              <i className='fa-brands fa-github'></i>
            </a>
            <a href={formData.demo} target='_blank'>
              <i className='fa-solid fa-globe'></i>
            </a>
          </section>
        </section>

        <section className='author'>
          <img className='author__image' src={user} alt='' />
          <p className='author__job'> {formData.job || 'Full Stack Developer'} </p>
          <p className='author__name'> {formData.author || 'Emmelie Björklund'} </p>
        </section>
      </section>
    </section>
  );
}
export default Preview;
