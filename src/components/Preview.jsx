import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';
import PropTypes from 'prop-types';

function Preview({ formData, avatar, userPhoto }) {
  // si avatar == '' me devuelves cover si no me devuelves avatar
  console.log('Avatar in Preview:', avatar);
  return (
    <section className='preview'>
      <img className='preview__image' src={avatar} alt='' />

      <section className='preview__author'>
        <section className='info-project'>
          <p className='subtitle'>Personal Project Card</p>
          <hr className='line' />

          <h2 className='title'> {formData.project || 'Elegant Workspace'} </h2>
          <p className='slogan'> {formData.slogan || 'Diseños Exclusivos'} </p>
          <p className='desc'>
            {formData.desc ||
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!'}
          </p>
          <section className='technologies'>
            <p className='text'> {formData.tech || 'React JS, MongoDB'}</p>
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
          <img className='author__image' src={userPhoto} alt='' />
          <p className='author__job'> {formData.job || 'Full Stack Developer'} </p>
          <p className='author__name'> {formData.author || 'Emmelie Björklund'} </p>
        </section>
      </section>
    </section>
  );
}
Preview.propTypes = {
  formData: PropTypes.object.isRequired, // Ajusta el tipo según tus necesidades
  avatar: PropTypes.string.isRequired, // Asegúrate de ajustar el tipo según tus necesidades
  userPhoto: PropTypes.string.isRequired,
};
export default Preview;
