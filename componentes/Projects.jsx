import style from '../styles/Projects.module.css'
import Pokeapp from './Apppoke'
import Clinica from './Clinica';
import Criptos from './Criptos';
import DemoUno from './DemoUno';

const Proyectos = () => {
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
          <Pokeapp />
          <Criptos />
          <Clinica />
          <DemoUno />
      </div>

      <hr className='hr'/>

    </main>
  )
}

export default Proyectos; 
