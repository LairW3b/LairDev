import style from '../styles/Projects.module.css'
import Project from './Project'

const Proyectos = ({ projects }) => {
  return (
    <main
      className={`figure_background 
      ${style.portafolio_content}`}
    >

      <div>
        <h2
          id='proyectos'
          className='text_shadow'
        >Proyectos
        </h2>
        <hr className='hr'/>
      </div>

      <div className={style.portafolio_projects}>
        {projects.data.map(project => (
          <Project
            key={project.id}
            project={project}
          />
        ))}
      </div>

      <hr className='hr'/>

    </main>
  )
}

export default Proyectos; 