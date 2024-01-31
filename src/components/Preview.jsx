import cover from "../images/cover.jpeg";
import user from "../images/user.jpeg";

function Preview ({project, slogan, repo, demo, tech, desc, author, job}) {
    return (
<section className="preview">
  <img className="image" src={cover} alt="" />

  <section className="autor">
    <section className="info-project">
      <p className="subtitle">Personal Project Card</p>
      <hr className="line" />

      <h2 className="title"> {project || 'Elegant Workspace'} </h2>
      <p className="slogan"> {slogan || 'Diseños Exclusivos'} </p>
      <p className="desc">
        {desc ||
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!'}
      </p>
      <section className="technologies">
        <p className="text"> {tech || 'React JS, MongoDB'}</p>
      </section>
      <section>
        <a href={repo} target='_blank'> <i className="fa-brands fa-github"></i></a>
        <a href={demo} target='_blank'><i className="fa-solid fa-globe"></i></a>
        
      </section>
    </section>

    <section className="info-autor">
      <img className="image" src={user} alt="" />
      <p className="job"> {job || 'Full Stack Developer'} </p>
      <p className="name"> {author || 'Emmelie Björklund'} </p>
    </section>
  </section>
</section>


    )
}
export default Preview;