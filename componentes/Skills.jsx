import style from '../styles/Skills.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faJava,
  faReact
  // faAngular,
  // faConnectdevelop,
  // faCodepen
} from "@fortawesome/free-brands-svg-icons";


const Skills = () => {
  return (
    <div
      className={
        `figure_background 
        ${style.skills_content}`
      }>
      <div className={style.skill_list}>
        <h2 className={`text_shadow`}>
          Conocimientos técnicos
        </h2>
        <div className={style.skill_icon}>
          <div className={style.icon_fondo}>
            <FontAwesomeIcon
              icon={faHtml5}
              className={`${style.icon_html} ${style.icon}`}
            />
          </div>
          <p>HTML</p>
        </div>

        <div className={style.skill_icon}>
          <div className={style.icon_fondo}>
            <FontAwesomeIcon
              icon={faCss3Alt}
              className={`${style.icon_css} ${style.icon}`}
            />
          </div>
          <p>CSS</p>
        </div>

        <div className={style.skill_icon}>
          <div className={style.icon_fondo}>
            <FontAwesomeIcon
              icon={faJs}
              className={`${style.icon_js} ${style.icon}`}
            />
          </div>
          <p>JS</p>
        </div>

        <div className={style.skill_icon}>
          <div className={style.icon_fondo}>
            <FontAwesomeIcon
              icon={faReact}
              className={`${style.icon_react} ${style.icon}`}
            />
          </div>
          <p>React</p>
        </div>

        <div className={style.skill_icon}>
          <div className={style.icon_fondo}>
            <FontAwesomeIcon
              icon={faJava}
              className={`${style.icon_java} ${style.icon}`}
            />
          </div>
          <p>Java</p>
        </div>

      </div> {/*fin skill list*/}

      <div className={style.skill_habilidades}>
        <h2 className={`text_shadow`}>Habilidades blandas</h2>
        <ul className={`text_shadow ${style.skill_ul}`}>
          <li>Trabajo en equipo</li>
          <li>Comunicación asertiva</li>
          <li>Resolución de conflictos</li>
          <li>Adaptación al cambio</li>
        </ul>
        <div className={`btn_style a ${style.skill_cv}`}>
          <a href="https://drive.google.com/file/d/14f2B76DqsxwqgrVuOiKaIvXi8jAeg5zg/view?usp=sharing" target="_blanck">Descargar CV</a>
        </div>
      </div>

    </div>
  )
}

export default Skills