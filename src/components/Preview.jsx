import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';
import PropTypes from 'prop-types';
import '../scss/layout/Preview.scss';

function Preview({ formData }) {
  return (
    <section className='preview'>
      <img className='preview__image' src={formData.photo || cover} alt='' />

      <section className='preview__author'>
        <section className='projectCard'>
          <p className='projectCard__subtitle'>Personal Project Card</p>
          <hr className='projectCard__line' />

          <h2 className='projectCard__title'> {formData.name || 'Elegant Workspace'} </h2>
          <p className='projectCard__slogan'> {formData.slogan || 'Diseños Exclusivos'} </p>
          <p className='projectCard__desc'>
            {formData.desc ||
              'Lorem, ipcorrupti ipsum!'}
          </p>
          <section className='projectCard__technologies'>
            <p className='projectCard__text'> {formData.technologies || 'React JS - HTML -  CSS'}</p>
          </section>
          <section className='projectCard__icons'>
            <a href={formData.repo} target='_blank'  rel="noreferrer">
              <i className='fa-brands fa-github'></i>
            </a>
            <a href={formData.demo} target='_blank'  rel="noreferrer"> 
              <i className='fa-solid fa-globe'></i>
            </a>
          </section>
        </section>

        <section className='author'>
          <img className='author__image' src={formData.image || user} alt='' />
          <p className='author__job'> {formData.job || 'Full Stack Developer'} </p>
          <p className='author__name'> {formData.autor || 'Emmelie Björklund'} </p>
        </section>
      </section>
    </section>
  );
}
Preview.propTypes = {
  formData: PropTypes.object.isRequired, 
};
export default Preview;
